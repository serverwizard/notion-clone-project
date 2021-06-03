const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    createdAt: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('user', userSchema);