const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    imagePath: { type: String },
    isDeleted: false
}, { timestamps: true});

module.exports = mongoose.model("Product", productSchema);