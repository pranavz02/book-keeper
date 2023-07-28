import asyncHandler from 'express-async-handler'
import Book from "../model/bookModel.js"

//@route GET /books
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find()
  res.status(200).json(books);
})

//@desc Create New book
//@route POST /books
const createBook = asyncHandler(async (req, res) => {
  const { id, name, startDate, author, endDate, summary } = req.body
  if (!name || !startDate || !id ) {
    res.status(400);
    throw new Error("Fill the mandatory fields!")
  }
  const book = await Book.create({
    name, startDate, author, endDate, summary
  });
  res.status(201).json(book);
});

//@route GET /books/:id
const getBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }
  res.status(200).json(book);
});

//@desc Update book
//@route PUT /books/:id
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  const { endDate, summary } = req.body
  const updatedBook = await Book.findByIdAndUpdate(
    req.params.id,
    {endDate, summary},
    { new: true }
  );

  res.status(200).json(updatedBook);
});

//@desc Delete book
//@route DELETE /books/:id
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  await Book.deleteOne(req.params.id);
  res.status(200).json(book);
})

export {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
}