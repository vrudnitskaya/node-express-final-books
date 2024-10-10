const mongoose = require('mongoose');
const { validateImageURL } = require('../middleware/validateImageUrl');

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
      maxlength: [500, 'Description cannot exceed 300 characters'],
      required: true,
    },
    genre: {
      type: [String], 
      enum: [
        // Children genres
        'Adventure','Animal Stories','Fairy Tales, Myths & Fables', 'Learning Basic Concepts', 'Insects', 'Picture Books', 'Chapter Books', 'Sports & Adventure', 'Transportation',
        
        // Teens & Young Adult genres
        
        'Romance', 'Dystopian', 'Coming of Age', 'Horror',  'Fantasy', 'Mystery',

        // Adult genres
        'Thriller', 'Self-help',  'Science Fiction', 'Philosophy', 'Psychology', 'True Crime', 'Parenting & Family',
        
        //for all
        'Art & Architecture','Arts & Crafts', 'Biography','Classics','Cooking & Food', 'Comics And Graphic Novels', 'Entertainment & Performing Arts','Fiction & Literature','Games & Activities', 'Harry Potter', 'Health & Medicine', 'History', 'Holidays & Festivals', 'Nature','Poetry', 'Politics, Government & Law','Religion & Beliefs','Nonfiction', 'Science & Technology', 'Travel', 'Humor', 'Crafts & Hobbies', 'Computers'
      ], 
      required: true
    },
    ageCategory: {
      type: String,
      enum: ['Children', 'Teens & Young Adult', 'Adult'],
      required: true
    },
    status: {
      type: String,
      enum: ['To Read', 'Reading', 'Finished'],
      default: 'To Read'
    },
    language: {
      type: String,
      enum: ['English', 'Spanish', 'French', 'German', 'Russian', 'Other'],
      default: 'English'
    },
    coverImageUrl: {
      type: String,
      default: process.env.DEFAULT_COVER_IMAGE_URL,
      validate: {
        validator: validateImageURL,
        message: 'Invalid image URL. It must end with .jpg or .png.',
      },
    },
    createdBy: {
        type:mongoose.Types.ObjectId,
        ref:'User',
        required: true
    }
}, {timestamps:true});

module.exports = mongoose.model('Book', BookSchema);