const cloudinary = require('cloudinary').v2;
const { NotFoundError, BadRequestError } = require('../errors');
const Book = require('../models/Book');
const { StatusCodes } = require('http-status-codes');

const getAllBooks = async(req,res) => {
    const { query, limit = 9, skip = 0, ageCategory, status, genre, sort } = req.query;
    const queryObj = { createdBy: req.user.userId };

    //search by title, author, isbn
    if(query) {
        queryObj.$or = [
            { title: { $regex: query, $options: 'i' } }, 
            { author: { $regex: query, $options: 'i' } },
            { isbn: { $regex: query, $options: 'i' } }
        ]
    }
    
    // Filter by multiple choice
    if (ageCategory) {
        queryObj.ageCategory = { $in: ageCategory.split(',') };
    }
    if (status) {
        queryObj.status = { $in: status.split(',') };
    }
    if (genre) {
        queryObj.genre = { $in: genre.split(',') };
    }
    
    const books = await Book.find(queryObj)
                            .sort(sort)
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
    const { coverImageUrl, ...bookData } = req.body;
    bookData.createdBy = req.user.userId;

    if (coverImageUrl) {
        const result = await cloudinary.uploader.upload(coverImageUrl, { folder: 'books' });
        bookData.coverImageUrl = result.secure_url;
        bookData.coverImagePublicId = result.public_id;
    }else {
        bookData.coverImageUrl = process.env.DEFAULT_COVER_IMAGE_URL;
    }
    
    const book = await Book.create(bookData)
    res.status(StatusCodes.CREATED).json({ book });
};

const updateBook = async (req,res) => {
    const { coverImageUrl, ...updateData } = req.body;
    const { id: bookId } = req.params;
    const { user: { userId } } = req;

    const book = await Book.findOne({ _id: bookId, createdBy: userId });
    if (!book) {
        throw new NotFoundError(`No book with id ${bookId}`);
    }

    if (coverImageUrl) {
        if (coverImageUrl !== book.coverImageUrl) {
            if (book.coverImagePublicId) {
                await cloudinary.uploader.destroy(book.coverImagePublicId);
            }
            const result = await cloudinary.uploader.upload(coverImageUrl, { folder: 'books' });
            updateData.coverImageUrl = result.secure_url;
            updateData.coverImagePublicId = result.public_id;
        }
    } else {
        updateData.coverImageUrl = process.env.DEFAULT_COVER_IMAGE_URL;
    }
    
// checking that all required fields are filled in.
    const requiredFields = [
        { field: 'title', value: updateData.title },
        { field: 'author', value: updateData.author },
        { field: 'publisher', value: updateData.publisher },
        { field: 'publishedYear', value: updateData.publishedYear },
        { field: 'ageCategory', value: updateData.ageCategory },
        { field: 'pages', value: updateData.pages },
        { field: 'description', value: updateData.description },
        { field: 'genre', value: updateData.genre }
    ];
    
    const errors = [];
    for (const { field, value } of requiredFields) {
        if (value === undefined || value === null || value === '') {
            errors.push(`${field.charAt(0).toUpperCase() + field.slice(1)} cannot be empty`);
        }
    };
    if (errors.length > 0) {
        throw new BadRequestError(errors.join(', '));
    };
    
    const updatedBook = await Book.findByIdAndUpdate(bookId, updateData, { new: true, runValidators: true });

    res.status(StatusCodes.OK).json({ updatedBook });
};

const deleteBook = async(req,res) => {
    const { user: { userId }, params: { id: bookId }} = req;
    
    const book = await Book.findOne({ _id: bookId, createdBy: userId });
    if (!book) {
        throw new NotFoundError(`No book with id ${bookId}`);
    }
    
    if (book.coverImagePublicId) {
        await cloudinary.uploader.destroy(book.coverImagePublicId);
    }
    
    await Book.findOneAndDelete({ _id: bookId, createdBy: userId });
    res.status(StatusCodes.OK).json({ msg: "The entry was deleted." });
};

module.exports = {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
};