import asyncHandler from 'express-async-handler'
import Book from '../model/bookModel.js'
//@route GET /books
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({})
  res.status(200).json(books)
})

//@desc Create New book
//@route POST /books
const createBook = asyncHandler(async (req, res) => {
  const { name, startDate, author } = req.body
  
  const book = await Book.create({
    name, startDate, author
  })
  res.status(201).json(book)
})

//@desc Update book
//@route PUT /books/:id
const updateBook = asyncHandler(async (req, res) => {
  console.log(req.params.id)
  const book = await Book.findById(req.params.id)
  if (!book) 
    return res.status(404).json({msg: 'Book not found'})

  const { endDate, summary } = req.body
  book.endDate = endDate
  book.summary = summary
  const updatedBook = await book.save()

  res.status(200).json(updatedBook);
});

//@desc Delete book
//@route DELETE /books/:id
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)
  if (!book)
    return res.status(404).json({msg: 'Book not found'})

  await Book.findByIdAndDelete({_id: req.params.id})

  res.status(200).json({msg: 'Book deleted successfully'})
})

export {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
}