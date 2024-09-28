const { NotFoundError, BadRequestError } = require('../errors');
const Book = require('../models/Book');
const { StatusCodes } = require('http-status-codes');

const getAllBooks = async(req,res) => {
    const { limit = 9, skip = 0 } = req.query;
    const books = await Book.find({ createdBy: req.user.userId })
                            .sort('createdAt')
                            .limit(Number(limit)) 
                            .skip(Number(skip)); 

    res.status(StatusCodes.OK).json({ books, count: books.length });
};

const getBook = async(req,res) => {
    const { user: { userId }, params: { id: bookId } } = req;
    const book = await Book.findOne({ _id: bookId, createdBy: userId });
    if(!book) {
        throw new NotFoundError(`No book with id ${bookId}`);
    }
    res.status(StatusCodes.OK).json({ book });
};

const createBook = async(req,res) => {
    req.body.createdBy = req.user.userId;
    const book = await Book.create(req.body)
    res.status(StatusCodes.CREATED).json({ book });
};

const updateBook = async (req,res) => {
    const { body, user: { userId }, params: { id: bookId } } = req;

    const requiredFields = [
        { field: 'title', value: body.title },
        { field: 'author', value: body.author },
        { field: 'publisher', value: body.publisher },
        { field: 'publishedYear', value: body.publishedYear },
        { field: 'pages', value: body.pages },
        { field: 'description', value: body.description },
        { field: 'genre', value: body.genre }
    ];
    
    // checking that all required fields are filled in.
    const errors = [];
    for (const { field, value } of requiredFields) {
        if (value === undefined || value === null || value === '') {
            errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} cannot be empty`);
        }
    };
    if (errors.length > 0) {
        throw new BadRequestError(errors.join(', '));
    };
    
    const book = await Book.findOneAndUpdate(
        { _id: bookId, createdBy: userId },
        body,
        { new: true, runValidators: true }
    );
    if (!book) {
        throw new NotFoundError(`No book with id ${bookId}`);
    }
    res.status(StatusCodes.OK).json({ book });
};

const deleteBook = async(req,res) => {
    const { user: { userId }, params: { id: bookId }} = req;
    const book = await Book.findOneAndDelete({ _id: bookId, createdBy: userId });
    if(!book){
        throw new NotFoundError(`No book with id ${bookId}`);
    }
    res.status(StatusCodes.OK).json({ msg: "The entry was deleted." });
};

module.exports = {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
};