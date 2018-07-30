const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const halaSchema = new Schema({
    name: String,
    image: String,
    description: String
})

module.exports = mongoose.model("Hala", halaSchema);