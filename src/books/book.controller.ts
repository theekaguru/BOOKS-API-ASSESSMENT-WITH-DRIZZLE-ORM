import { Request, Response } from "express";
import { createBookServices, deleteBookServices, getBookByIdServices, getBooksServices, updateBookServices } from "./book.service";

//Business logic for user-related operations

export const getBooks = async (req: Request, res: Response) => {
    try {
        const allBooks = await getBooksServices();
        if (allBooks == null || allBooks.length == 0) {
          res.status(404).json({ message: "No Books found" });
        }else{
            res.status(200).json(allBooks);             
        }            
    } catch (error:any) {
        res.status(500).json({ error:error.message || "Failed to fetch Books" });
    }
}

export const getBookById = async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    if (isNaN(bookId)) {
        res.status(400).json({ error: "Invalid book ID" });
         return; // Prevent further execution
    }
    try {
        const book = await getBookByIdServices(bookId);
        if (book == null) {
            res.status(404).json({ message: "Book not found" });
        } else {
            res.status(200).json(book);
        }
    } catch (error:any) {
        res.status(500).json({ error:error.message || "Failed to fetch book" });
    }
}

export const createBook = async (req: Request, res: Response) => {
    const { bookTitle, bookAuthor, bookYear, bookGenre } = req.body;
    if (!bookTitle || !bookAuthor || !bookYear || !bookGenre) {
        res.status(400).json({ error: "All fields are required" });
        return; // Prevent further execution
    }
    try {
        const newBook = await createBookServices({ bookTitle, bookAuthor, bookYear, bookGenre});
        if (newBook == null) {
            res.status(500).json({ message: "Failed to create Book" });
            return;
        } else {
            res.status(201).json(newBook);
        }
    } catch (error:any) {
        res.status(500).json({ error:error.message || "Failed to create Book" });
    }
}

export const updateBook = async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    if (isNaN(bookId)) {
        res.status(400).json({ error: "Invalid book ID" });
        return; // Prevent further execution
    }
    const { bookTitle, bookAuthor, bookYear, bookGenre } = req.body;
    if (!bookTitle || !bookAuthor || !bookYear || !bookGenre) {
        res.status(400).json({ error: "All fields are required" });
        return; // Prevent further execution
    }
    try {
        const updatedBook = await updateBookServices(bookId, { bookTitle, bookAuthor, bookYear, bookGenre });
        if (updatedBook == null) {
            res.status(404).json({ message: "Book not found or failed to update" });
        } else {
            res.status(200).json(updatedBook);
        }
    } catch (error:any) {
        res.status(500).json({ error:error.message || "Failed to update book" });
    }
}


export const deleteBook = async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);  
    if (isNaN(bookId)) {
        res.status(400).json({ error: "Invalid book ID" });
        return; // Prevent further execution
    }
    try {
        const deletedUser = await deleteBookServices(bookId);
        if (deletedUser) {
            res.status(200).json({ message: "Book deleted successfully" });
            return;
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error:any) {    
        res.status(500).json({ error:error.message || "Failed to delete Book" });
    }    
}