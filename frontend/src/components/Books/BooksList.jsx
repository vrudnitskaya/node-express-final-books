import { highlightSearchTerm } from "../../utils/highlighSearchTerm";

const BooksList = ({ books, hasMore, onLoad, setSelectedBook, searchTerm, isSearchSubmitted }) => {
    return (
        <div className="flex-1 flex flex-col gap-4 p-4">
            {books.length > 0 &&
                <>
                    <div className="flex justify-around flex-wrap gap-4">
                        {books.map((book) => (
                            <div key={book._id}
                                className="w-36 h-52 bg-pureWhite rounded-md flex flex-col p-2 cursor-pointer"
                                onClick={() => setSelectedBook(book)} >
                                <div className="flex-grow flex items-end justify-center mb-2">
                                    <img src={book.coverImageUrl} alt="book image" className="w-20 rounded-sm" />
                                </div>
                                <div className="mt-auto h-1/3 flex flex-col">
                                    <h3 className="font-medium text-sm">
                                        {book.title.length > 30
                                            ? <>{highlightSearchTerm(book.title.slice(0, 30), searchTerm, isSearchSubmitted)}...</>
                                            : highlightSearchTerm(book.title, searchTerm, isSearchSubmitted)}
                                    </h3>
                                    <p className="text-sm mt-auto">
                                        by {book.author.length > 20
                                            ? <>{highlightSearchTerm(book.author.slice(0, 20), searchTerm, isSearchSubmitted)}...</>
                                            : highlightSearchTerm(book.author, searchTerm, isSearchSubmitted)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {hasMore && (
                        <button onClick={onLoad} className='bg-green w-24 h-8 border-2 border-green rounded-md text-pureWhite hover:bg-pureWhite hover:text-green self-center'>
                            Load More
                        </button>
                    )}
                </>
            }
        </div>
    );
};

export default BooksList;