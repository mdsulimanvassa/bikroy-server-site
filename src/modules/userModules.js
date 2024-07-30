const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        minlength: 6,
        set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
}, { timestamps: true });

const Users = model('Alluser', userSchema);

module.exports = Users;