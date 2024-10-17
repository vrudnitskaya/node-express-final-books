import { deleteBook, getAllBooks } from "../../utils/DBRequests";
import { useEffect, useRef, useState } from "react";

import BooksList from "./BooksList";
import DeleteModal from '../Layouts/ModalWithTwoButtons';
import Filters from "../Filter/Filters";
import ScrollToTop from "../Layouts/ScrollToTop";
import Search from "../Search/Search";
import SingleBook from "./SingleBook";
import Sorting from "../Sorting/Sorting";
import Spinner from "../Layouts/Spinner";
import { useAuth } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";

const Library = () => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState();
    const [skip, setSkip] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState({term: '', isSubmitted: false});
    const [isResults, setIsResults] = useState(false);
    const [filters, setFilters] = useState({
        ageCategory: [],
        status: [],
        genre: [],
    });
    const [sortOption, setSortOption] = useState({value: 'title', label: 'Title (A-Z)', disabled: false})
    const { token } = useAuth();
    const navigate = useNavigate();

    const toEditPage = () => navigate(`/edit-book/${selectedBook._id}`);
    const toAddBook = () => navigate("/add-book");

    const isFirstRender = useRef(true);

    const loadMoreBooks = async (reset = false) => {
        const limit = 12;
        try {
            const response = await getAllBooks(limit, reset ? 0 : skip, token, search.term, filters, sortOption.value); 
            if (response.status === 200) {
                const newBooks = response.data.books;
                if (reset) {
                    setBooks(newBooks);  
                    setSkip(limit);      
                    setSelectedBook(newBooks[0] || null); 
                } else {
                    setBooks((prevBooks) => {
                        const uniqueBooks = newBooks.filter(
                            (newBook) => !prevBooks.some((prevBook) => prevBook._id === newBook._id)
                        );
                        return [...prevBooks, ...uniqueBooks];
                    });
                    setSkip((prevSkip) => prevSkip + limit); 
                }
                setHasMore(newBooks.length === limit);
                setIsResults(books.length === 0 && newBooks.length === 0);
                setIsLoading(false); 
            }
        } catch (error) {
            console.error('Error loading more books:', error);
            setIsLoading(false);
        } 
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            loadMoreBooks();
            setIsLoading(true)
        }
    }, []);

    useEffect(() => {
        if (books.length > 0 && !selectedBook) {
            setSelectedBook(books[0]);
        }
    }, [books, selectedBook]);

    useEffect(() => {
        loadMoreBooks(true)
    }, [filters, sortOption])

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            const response = await deleteBook(token, selectedBook._id);
            if (response.status === 200) {
                await loadMoreBooks(true);

                if (books.length > 0) {
                    setSelectedBook(books[0]);
                } else {
                    setSelectedBook(null);
                }
                setIsModalOpen(false);
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.log('Error deleting book:', error);
            setIsModalOpen(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSearch({ ...search, isSubmitted: true });
        try {
            await loadMoreBooks(true);
        } catch (error) {
            console.error("Error searching books:", error);
        }
    };

    return (
        <div className="w-full h-full flex flex-col bg-lightGreen items-center">

            <div className="flex w-full items-center justify-center sm:gap-8 flex-col sm:flex-row">
                <Search setSearch={setSearch} search={search} onSearch={handleSearch} />

                <button onClick={toAddBook} className='bg-pureWhite w-40 h-10 border-2 border-green rounded-md text-green hover:bg-green hover:text-pureWhite font-spartan text-xl font-semibold'>
                    Add new book
                </button>
            </div>
            
            <div className="flex w-full h-full flex-col sm:flex-row">
                <div className="sm:w-72 h-72 sm:h-fit p-8 bg-pureWhite rounded-md mt-4 mx-10 mb-10 flex flex-col overflow-x-auto whitespace-nowrap">
                    {(!isLoading && books.length > 0) || isResults ? (
                        <>
                        <Sorting sortOption={sortOption} setSortOption={setSortOption} />
                        <Filters setFilters={setFilters} />
                        </>
                    ) : null}
                </div>
            
            
            {isLoading ? (
                <Spinner />
            ) : isResults ? (
                <div className="w-3/4 h-1/4 mt-4 bg-pureWhite flex justify-center items-center text-lg rounded-md">
                    <p>No books found matching your request.</p>
                </div>
            ) : (
                books.length === 0 ? (
                    <div className="w-3/4 h-1/4 mt-4 bg-pureWhite flex justify-center items-center text-lg rounded-md">
                        <p>You haven't added any books yet.</p>
                    </div>
                ) : (
                    <div className="flex flex-1 gap-8 flex-col-reverse sm:flex-row">
                        <BooksList books={books} hasMore={hasMore} onLoad={() => loadMoreBooks(false)} setSelectedBook={setSelectedBook} searchTerm={search.term} isSearchSubmitted={search.isSubmitted}/>

                        {selectedBook && <SingleBook selectedBook={selectedBook} setIsModalOpen={setIsModalOpen} onEdit={toEditPage} searchTerm={search.term} isSearchSubmitted={search.isSubmitted}/>}
                    </div>
                )
            )}
            </div>
            

            <DeleteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
                title="Confirm Deletion"
                confirmText="Delete"
                cancelText="Cancel"
            >
                Are you sure you want to delete this book?
            </DeleteModal>
            <ScrollToTop/>
        </div>
    );
};

export default Library;
