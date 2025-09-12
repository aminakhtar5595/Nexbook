const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.use('/api/contacts', require('../Nexbook/routes/contactRoutes'));

app.listen(port, () => {
    console.log('Server is running on port: ', port);
}) 