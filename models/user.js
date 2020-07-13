const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    displayName: {
        type: String,
        trim: true,
        required: true
    },
    googleid: {
        type: String
    },
    facebookid: {
        type: String
    },
    email: {
        type: String
    },
    thumbnail: {
        type: String
    },
    activities: []
});

const User = mongoose.model('User', UserSchema);

module.exports = User;