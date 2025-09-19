const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please add user name']
    },
    email: {
        type: String,
        require: [true, 'Please add user email'],
        unique: [true, 'Email address already taken']
    },
    password: {
        type: String,
        require: [true, 'Please add user password']
    },
},
{
    timestamps: true
}
)

module.exports = mongoose.model('User', userSchema);