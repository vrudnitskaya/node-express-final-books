require('dotenv').config();
require('express-async-errors');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const cloudinary = require('cloudinary').v2;

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const connectDB = require('./db/connect');
const authenticateUser = require('./middleware/authentication');

const authRouter = require('./routes/auth');
const booksRouter  = require('./routes/books');

app.use(logger('dev'));

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/books', authenticateUser, booksRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();