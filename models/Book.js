const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: [2, 'Title must be at least 2 characters long'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    author: {
      type: String,
      required: true,
      minlength: [2, 'Author must be at least 2 characters long'],
      maxlength: [100, 'Author cannot exceed 100 characters'],
    },
    publisher: {
      type: String,
      required: true,
      minlength: [2, 'Publisher must be at least 2 characters long'],
      maxlength: [100, 'Publisher cannot exceed 100 characters'],
    },
    publishedYear: {
      type: Number,
      required: true,
      min: [1440, 'Published year must be a valid year'],
    }, 
    pages: {
      type: Number,
      required: true,
      min: [2, 'Minimum number of pages must be at least 2'],
    },
    isbn: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      minlength: [2, 'Description must be at least 2 characters long'],
      maxlength: [300, 'Description cannot exceed 300 characters'],
      required: true,
    },
    genre: {
      type: String, 
      enum: ['Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Biography', 'History', 'Mystery', 'Romance', 'Horror'], 
      required: true
    },
    ageCategory: {
      type: String,
      enum: ['Children', 'Young Adult', 'Adult'],
      required: true
    },
    status: {
      type: String,
      enum: ['To Read', 'Reading', 'Read'],
      default: 'To Read'
    },
    language: {
      type: String,
      enum: ['English', 'Spanish', 'French', 'German', 'Russian', 'Other'],
    },
    coverImageUrl: {
      type: String,
      default: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149331952.jpg'
    },
    createdBy: {
        type:mongoose.Types.ObjectId,
        ref:'User',
        required: true
    }
}, {timestamps:true});

module.exports = mongoose.model('Book', BookSchema);