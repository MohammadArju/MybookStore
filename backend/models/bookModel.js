const mongoose = require("mongoose");


const bookShema = new mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String
});


module.exports = mongoose.model("Book", bookShema);