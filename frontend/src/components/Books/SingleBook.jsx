import { highlightSearchTerm } from "../../utils/highlighSearchTerm";

const SingleBook = ({ selectedBook, setIsModalOpen, onEdit, searchTerm, isSearchSubmitted }) => {
    return (
        <div className="w-72 h-fit p-8 bg-pureWhite rounded-md mt-4 sm:mr-10 flex flex-col gap-2 self-center sm:self-start">
            <h3 className="font-medium text-2xl">{highlightSearchTerm(selectedBook.title, searchTerm, isSearchSubmitted)}</h3>
            <p>by {highlightSearchTerm(selectedBook.author, searchTerm, isSearchSubmitted)}</p>
            <img src={selectedBook.coverImageUrl} alt="book image" className="w-2/3 self-center rounded-sm" />
            <p>Published by {selectedBook.publisher}, {selectedBook.publishedYear}</p>
            <hr className="border-t border-green my-1" />
            <p>Page count: {selectedBook.pages}</p>
            {selectedBook.isbn && <p>ISBN: {highlightSearchTerm(selectedBook.isbn, searchTerm, isSearchSubmitted)}</p>}
            <p>Genre: {selectedBook.genre.join(' | ')}</p>
            <p>Age category: {selectedBook.ageCategory}</p>
            {selectedBook.language && <p>Language: {selectedBook.language}</p>}
            <p>Status: {selectedBook.status}</p>
            <hr className="border-t border-green my-1" />
            <p>{selectedBook.description}</p>
            <div className="flex gap-2 justify-center">
                <button className='bg-mustard w-24 h-8 border-2 border-mustard rounded-md text-pureWhite hover:bg-pureWhite hover:text-mustard' onClick={onEdit}>Edit</button>
                <button className='bg-red w-24 h-8 border-2 border-red rounded-md text-pureWhite hover:bg-pureWhite hover:text-red' onClick={() => setIsModalOpen(true)}>Delete</button>
            </div>
        </div>
    );
};

export default SingleBook;