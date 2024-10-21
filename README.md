# My Beloved Library: Fullstack Repository

[Visit Website](https://my-beloved-library.onrender.com)

[Deployed backend](https://my-beloved-library-back.onrender.com)

This application allows anyone to create an account and store information about books from their personal library.

## Author
[Valentina Rudnitskaya](https://github.com/vrudnitskaya)
  
## Technologies Used

Our front-end is powered by a suite of modern tools and libraries to ensure a responsive, efficient, and visually appealing user experience:

- **Core Frameworks:**

  - `React` - A JavaScript library for building user interfaces, ensuring a reactive and component-based architecture.
  - `React DOM` - Serves as the entry point to the DOM and server renderers for React.

- **Routing and Navigation:**

  - `React Router Dom` - Enables dynamic routing in a web app, which is critical for single-page applications.

- **HTTP Requests:**

  - `Axios` - Promise-based HTTP client for making requests to back-end services.

- **UI Components and Design:**

  - `React tailwindcss select` - A select input made with Tailwindcss and React.
  - `React modal` - Accessible modal dialog component for React.JS.

- **Styling and CSS Frameworks:**

  - `Tailwind CSS` - A utility-first CSS framework for rapid UI development.

- **Back-End Technologies:**

  - `Node.js` - A JavaScript runtime for server-side code.
  - `Express.js` - A web framework for handling HTTP requests and routing.

- **Database Management:**

  - `MongoDB` - A NoSQL database for storing data.
  - `Mongoose` - An Object Data Modeling (ODM) library for MongoDB, simplifying database interactions and schema validation.

- **Security and Authentication:**

  - `jsonwebtoken` - For generating JWT tokens.
  - `bcryptjs` - For hashing passwords.
  - `cors` - Middleware for handling Cross-Origin Resource Sharing (CORS) in Express.js applications.

- **File Handling and Uploads:**

  - `cloudinary` - For managing image uploads.

## Key Features

### Effortless Registration

- **Sign Up** / **Sign In**: Users can easily register, and after registration, they are redirected to the login form.

### Book Management

- **CRUD**: Users can add, edit, or delete books.
- **Adding the book cover**: During the addition or editing of a book, users can add or change the book cover image by simply providing a link to an image from the internet.

### Search, Sort and Filter Functionality

- **Search**: The user can search for books by author, title, or ISBN, and the search query is highlighted in the search results.
- **Sort**: All books can be sorted by title or date added in both ascending and descending order.
- **Filter**: User can filter books by age category, reading status, or genre.

## Quick Start

### Setup

1. **Clone the Repository**: Clone this repository to your local machine.
2. **Install Dependencies**: Run `npm install` to install all required dependencies for each folder separately.
3. **Start the Development Server**: Run `npm run dev` to start the development server on `localhost:5173` for the frontend or `localhost:3000` for the backend.
4. **Explore the Application**: Navigate through the application to explore its features.

### Environment Variables

To properly run this application, you need to set up environment variables. This is done by creating a `.env` file in the root directory of the project with the following variables:

- **`VITE_API_BASE_URL`**:  
  This is the base URL for the API. In development, it points to your local backend.

  ```bash
  VITE_API_BASE_URL=http://localhost:3000/api/v1

  ```

- **`DEFAULT_COVER_IMAGE_URL`**:  
  This is the default URL for the cover image used when no cover image is provided.

  ```bash
  DEFAULT_COVER_IMAGE_URL=https://example.com/default_cover_image.jpg

  ```

- **`MONGO_URI`**:  
  This is the connection string for your MongoDB database.
  ```bash
  MONGODB_URI=mongodb://username:password@localhost:27017/database_name
  ```

- **`JWT_SECRET`**:  
  This is the secret key used for signing JSON Web Tokens (JWT).
  ```bash
  JWT_SECRET=your_SECRET_key
  ```

- **`JWT_LIFETIME`**:  
  This defines the lifetime of the JSON Web Token (JWT).
  ```bash
  JWT_LIFETIME=30d
  ```

- **`CLOUDINARY_CLOUD_NAME`**:  
  This is the name of your cloud account used for image storage.
  ```bash
  CLOUDINARY_CLOUD_NAME=your_cloud_name
  ```
  
- **`CLOUDINARY_API_KEY`**:  
  This is your API key for accessing the cloud service.
  ```bash
  CLOUDINARY_API_KEY=your_API_key
  ```

- **`CLOUDINARY_API_KEY`**:  
  This is your secret API key for accessing the cloud service.
  ```bash
  CLOUDINARY_API_SECRET=your_secret_API
  ```

## API Documentation
This project includes comprehensive API documentation generated with [Swagger](https://swagger.io/). You can explore and test the API endpoints using the Swagger UI available at: `http://localhost:3000/api-docs`. Ensure that you have the server running before accessing the documentation.
