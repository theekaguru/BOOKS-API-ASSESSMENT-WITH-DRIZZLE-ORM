import { Router } from "express";
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "./book.controller";


export const bookRouter = Router();


//get all books
bookRouter.get('/books',getBooks)


//get book by Id
bookRouter.get('/books/:id',getBookById)


//posting book
bookRouter.post('/books',createBook)

//updating a book
bookRouter.put('/books/:id',updateBook)

//deleting a book
bookRouter.delete('/books/:id',deleteBook)
