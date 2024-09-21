const Book = require('../models/Book');
const { StatusCodes } = require('http-status-codes');

const getAllBooks = async(req,res) => {
    res.send('all books');
};

const getBook = async(req,res) => {
    res.send('one book');
};

const createBook = async(req,res) => {
    req.body.createdBy = req.user.userId;
    const book = await Book.create(req.body)
    res.status(StatusCodes.CREATED).json({ book });
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