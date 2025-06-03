import { pgTable , serial , text ,timestamp, numeric} from "drizzle-orm/pg-core";

export const bookTable =pgTable('bookTable', {
    bookId:serial('bookId').primaryKey(),
    bookTitle:text('bookTitle'),
    bookAuthor:text('bookAuthor'),
    bookYear:numeric('bookYear'),
    bookGenre:text('bookGenre'),
    createdAt:timestamp('createdAt'),
    updatedAt:timestamp('updatedAt'),

})


//infer types
export type TBookInsert = typeof bookTable.$inferInsert;
export type TBookSelect = typeof bookTable.$inferSelect
