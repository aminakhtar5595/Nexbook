const getContacts = (req, res) => {
    res.status(200).json({ message: 'Get contacts' })
}

const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for: ${req.params.id}` })
}

const createContact = (req, res) => {
    res.status(200).json({ message: 'Create contacts' })
}

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for: ${req.params.id}` })
}

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for: ${req.params.id}` })
}

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }