import db from './db';
import { bookTable } from './schema';

 async function seed() {
    const[stories] = await db.insert(bookTable).values({
        bookTitle:"Kigogo",
        bookAuthor:"Ken Walibora",
        bookYear:"2004",
        bookGenre:"swahili"

    }).returning();
    console.log("⚡ seeding complete 👍");
    process.exit(0);
 }

 seed().catch((e) =>{
    console.error("oops😢😢 seeding failed ❎:", e);
    process.exit(1)
 })
