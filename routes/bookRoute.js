import express from 'express'
const router = express.Router()
import {getAllBooks, createBook, getBook, updateBook, deleteBook} from '../controllers/bookController.js'

router.get('/books', getAllBooks)
      .get('/books/:id', getBook)
      .post('/books/', createBook)
      .put('/books/:id', updateBook)
      .delete('/books/:id', deleteBook)

export default router