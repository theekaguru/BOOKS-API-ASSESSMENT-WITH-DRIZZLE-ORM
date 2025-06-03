
import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { bookTable, TBookInsert, TBookSelect } from "../drizzle/schema";


//CRUD Operations for User entity

//Get all books
export const getBooksServices = async():Promise<TBookSelect[] | null> => {
    return await db.query.bookTable.findMany({});
}

//Get book by ID
export const getBookByIdServices = async(bookId: number):Promise<TBookSelect | undefined> => {
     return await db.query.bookTable.findFirst({
        where: eq(bookTable.bookId, bookId)
    })  
}

// Create a new book
export const createBookServices = async(book: TBookInsert):Promise<string> => {
    await db.insert(bookTable).values(book).returning();
    return "book created successfully 🎉";
}

// Update an existing book
export const updateBookServices = async(bookId: number, book: Partial<TBookInsert>):Promise<string> => {
    await db.update(bookTable).set(book).where(eq(bookTable.bookId, bookId));
    return "book updated successfully 😎";
}


// Delete a book

export const deleteBookServices = async(bookId: number):Promise<string> => {
  await db.delete(bookTable).where(eq(bookTable.bookId, bookId));
  return "book deleted successfully 🎉"
}