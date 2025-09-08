const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // ✅ Await used
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message }); // ✅ Clear error response
  }
};