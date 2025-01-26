const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: [true,"Please enter your name"],
        unique: true,
    },
    email:{
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    password:{
        type: String,
        required: [true,"Please enter a valid password"],
    },
    role:{
        type: [String],
        enum: ['user' , 'admin'],
    },
    profile:{
        firstName:{
            type: String,
        },
        lastName:{
            type: String,
        },
        age:{
            type: Number,
            min: [0, "Age must be a positive number"],  // Age cannot be negative
        },
    },
    lastLogin:{
        type: Date,
    },
},
    {   
        timestamps: true,  // Automatically adds 'createdAt' and 'updatedAt' fields
    }
);

const Account = mongoose.model('UserDetails' , userSchema);

module.exports = Account;