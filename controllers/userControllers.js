const asyncHandler = require("express-async-handler");
const Users = require('../models/userModels');
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(404).json({message: "All fields are mandatory"});
        }

        const userAvailable = await Users.findOne({ email });
        if (userAvailable) {
            res.status(404).json({message: "User already registered"});
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const users = await Users.create({
            username, email, password: hashPassword
        });
        res.status(200).json(users);
    } catch (error) {
        console.log('Error: ', error);
    }
});

const loginUser = asyncHandler(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(404).json({message: "All fields are mandatory"});
        }
        const users = await Users.create({
            username, email, password
        });
        res.status(200).json(users);
    } catch (error) {
        console.log('Error: ', error);
    }
});

const currentUser = asyncHandler(async (req, res) => {
    try {
    } catch (error) {
        console.log('Error: ', error);
    }
});


module.exports = { registerUser, loginUser, currentUser };