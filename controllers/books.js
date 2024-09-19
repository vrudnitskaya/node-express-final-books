const getAllBooks = async(req,res) => {
    res.send('all books');
};

const getBook = async(req,res) => {
    res.send('one book');
};

const createBook = async(req,res) => {
    res.send('create a book');
};

const updateBook = async(req,res) => {
    res.send('update the book');
};

const deleteBook = async(req,res) => {
    res.send('delete the book');
};

module.exports = {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
};