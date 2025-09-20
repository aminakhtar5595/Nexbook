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

---

### Install dependencies:
```bash
npm install

---

### Set up environment variables:
- Create a `.env` file in the root directory and add the following:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

