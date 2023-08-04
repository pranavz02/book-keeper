import express from 'express'
const router = express.Router()
import {getAllBooks, createBook, updateBook, deleteBook} from '../controllers/bookController.js'

router.get('/books', getAllBooks)
      .post('/books', createBook)
      .put('/books/:id', updateBook)
      .delete('/books/:id', deleteBook)

export default router