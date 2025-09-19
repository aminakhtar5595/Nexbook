const asyncHandler = require("express-async-handler");
const Contacts = require('../models/contactModels');

const getContacts = asyncHandler(async (req, res) => {
    try {
        const contacts = await Contacts.find({ user_id: req.user.id });
        res.status(200).json(contacts);
    } catch (error) {
        console.log('Error: ', error);
    }
});

const getContact = asyncHandler(async (req, res) => {
    try {
        const contacts = await Contacts.findById(req?.params?.id);
        if (!contacts) {
            res.status(404).json({message: "No contact found"});
        }
        res.status(200).json(contacts); 
    } catch (error) {
        console.log('Error: ', error);
    }
});

const createContact = asyncHandler(async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            res.status(404).json({message: "All fields are mandatory"});
        }
        const contacts = await Contacts.create({
            name, email, phone, user_id: req.user.id
        });
        res.status(200).json(contacts);
    } catch (error) {
        console.log('Error: ', error);
    }
});

const updateContact = asyncHandler(async (req, res) => {
    try {
        const contacts = await Contacts.findById(req?.params?.id);
        if (!contacts) {
            res.status(404).json({message: "No contact found"});
        }

        if (contacts.user_id.toString() !== req.user.id) {
            res.status(403).json({message: "User don't have permission to update other user contact"});
        }

        const updatedContact = await Contacts.findByIdAndUpdate(
            req?.params?.id,
            req.body,
            { new: true }
        )
        res.status(200).json(updatedContact);
    } catch (error) {
        console.log('Error: ', error);
    }
});

const deleteContact = asyncHandler(async (req, res) => {
    try {
        const contacts = await Contacts.findById(req?.params?.id);
        if (!contacts) {
            res.status(404).json({message: "No contact found"});
        }
        if (contacts.user_id.toString() !== req.user.id) {
            res.status(403).json({message: "User don't have permission to update other user contact"});
        }
        await Contacts.deleteOne({ _id: req?.params?.id });
        res.status(200).json(contacts);        
    } catch (error) {
        console.log('Error: ', error);
    }
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };