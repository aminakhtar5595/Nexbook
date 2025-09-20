Contact Manager Backend
Table of Contents

Overview

Features

Technologies Used

Installation

Environment Variables

API Endpoints

Authentication

Contacts

Authentication Middleware

Error Handling

Testing

Contributions

License

Overview

This is a backend application for a Contact Manager built with Node.js, Express, MongoDB, and JWT (JSON Web Tokens). The project demonstrates practical usage of these technologies by implementing a RESTful API for managing contacts with authentication and authorization.

Key features include:

User authentication via JWT

CRUD operations for managing contacts

MongoDB for data storage

Input validation and error handling

Features

User Authentication: Secure registration and login functionality using JWT.

Contact Management: Create, read, update, and delete contacts.

MongoDB Integration: Persistent storage of contacts and users.

JWT Middleware: Protects routes by requiring valid JWT tokens for access.

Input Validation: Ensures proper data entry for contacts and users.

Error Handling: Custom error middleware for consistent response structure.

Technologies Used

Node.js: JavaScript runtime for the server-side application.

Express: Web framework for building the API.

MongoDB: NoSQL database to store user and contact data.

Mongoose: ODM library for MongoDB, simplifies data handling.

JWT: Authentication using JSON Web Tokens for secure communication.

Bcrypt.js: Password hashing for user security.

Installation
Prerequisites

Node.js (v14.x or later)

MongoDB (locally or via MongoDB Atlas)

npm (Node package manager)

Steps

Clone the repository:

git clone https://github.com/yourusername/contact-manager-backend.git
cd contact-manager-backend


Install dependencies:

npm install


Set up environment variables:

Create a .env file in the root directory with the following content:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


Start the application:

npm start


The server will run at http://localhost:5000.

Environment Variables

Ensure the following environment variables are set in your .env file:

MONGO_URI: Your MongoDB connection string (e.g., MongoDB Atlas URI or local MongoDB connection).

JWT_SECRET: A secret key for signing JWT tokens.

PORT: The port on which the server will run (default is 5000).

API Endpoints
Authentication

POST /api/auth/register: Register a new user.

Body:

{
  "username": "JohnDoe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}


POST /api/auth/login: Login and receive JWT token.

Body:

{
  "email": "johndoe@example.com",
  "password": "securepassword"
}

Contacts

GET /api/contacts: Retrieve all contacts (requires authentication).

Authorization: Bearer token in the header.

POST /api/contacts: Create a new contact (requires authentication).

Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123456789",
  "address": "123 Main St"
}


GET /api/contacts/:id: Retrieve a specific contact by ID (requires authentication).

PUT /api/contacts/:id: Update a contact by ID (requires authentication).

Body:

{
  "name": "John Doe Updated",
  "email": "johnnew@example.com",
  "phone": "987654321",
  "address": "456 Another St"
}


DELETE /api/contacts/:id: Delete a contact by ID (requires authentication).

Authentication Middleware

JWT Authentication: The API uses JWT for user authentication. After logging in, the user receives a JWT token. This token must be included in the Authorization header as Bearer <token> for protected routes.

Example:

Authorization: Bearer <JWT_TOKEN>

Error Handling

The application includes a custom error handling middleware. All errors are caught and responded with the appropriate HTTP status code and error message in the following format:

{
  "message": "Error message describing the issue."
}

Testing

Unit Testing: Unit tests can be added with frameworks such as Jest or Mocha.

Postman or Insomnia can be used to test API endpoints manually.

Example tests include:

Verify user registration and login.

Test CRUD operations for contacts.

Test authentication middleware with valid and invalid JWT tokens.

Contributions

Feel free to fork the repository and contribute to the project! Here's how:

Fork the repository.

Create a feature branch (git checkout -b feature/your-feature).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature/your-feature).

Create a new Pull Request.

License

This project is licensed under the MIT License. See the LICENSE
 file for more information.
