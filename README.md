# 📇 Nexbook

A **Node.js** and **Express** based backend application for managing contacts.  
This app provides a simple API for users to manage their contacts securely using **JWT** authentication and **MongoDB** for data storage.

---

## ✨ Features

- 🔐 **User Authentication** using **JWT**  
- 📱 **Contact Management**: Add, view, update, and delete contacts  
- 🛡️ **Secure Routes**: Protect sensitive routes with JWT middleware  
- 📝 **Input Validation**: Ensure proper input data for contacts and users  
- 💾 **MongoDB Integration**: Store user and contact data in a NoSQL database

---

## 🛠️ Tech Stack

- **Node.js**  
- **Express** for building the API  
- **MongoDB** for storing contacts and user data  
- **Mongoose** for MongoDB object modeling  
- **JWT** for user authentication  
- **Bcrypt.js** for secure password hashing  
- **dotenv** for managing environment variables

---

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/aminakhtar5595/Nexbook.git
   cd contact-manager-backend

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
* Create a .env file in the root directory with the following content:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. Start the application:
```bash
npm start
```

---

## 🎨 API Endpoints
#Authentication
* POST /api/auth/register: Register a new user
* Body:
```bash
{
  "username": "JohnDoe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

* POST /api/auth/login: Login to get a JWT token
* Body:
```
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```  

###Contacts

* GET /api/contacts: Get all contacts (requires authentication)
   * Authorization: Bearer token in the header
* POST /api/contacts: Create a new contact (requires authentication)
   *Body:
```
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123456789",
  "address": "123 Main St"
}
```

* GET /api/contacts/:id: Get a specific contact by ID (requires authentication)
* PUT /api/contacts/:id: Update a contact by ID (requires authentication)
   * Body:
```
{
  "name": "John Doe Updated",
  "email": "johnnew@example.com",
  "phone": "987654321",
  "address": "456 Another St"
}
```

* DELETE /api/contacts/:id: Delete a contact by ID (requires authentication)

---

## 🛡️ Authentication Middleware

This app uses JWT (JSON Web Tokens) for user authentication.
After logging in, the user will receive a JWT token, which must be included in the Authorization header as a Bearer token for all protected routes.

Example header:
```
Authorization: Bearer <JWT_TOKEN>
```

---

## ⚙️ Error Handling

The app includes custom error handling middleware.
Errors are caught and returned with the appropriate status code and message.

Example error response:
```
{
  "message": "Error message describing the issue."
}
```

---

## 🧪 Testing

You can use Postman or Insomnia to test the API endpoints manually.
For unit testing, consider using Jest or Mocha.

Example tests:
* Verify user registration and login flow.
* Test CRUD operations for contacts.
* Test authentication with valid and invalid JWT tokens.

---

## 🤝 Contributions

1. Fork the repository.
2. Create a new feature branch 
```
git checkout -b feature/your-feature
```
3. Commit your changes 
```
git commit -am 'Add new feature'
```
4. Push to the branch 
```
git push origin feature/your-feature
```
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License.
