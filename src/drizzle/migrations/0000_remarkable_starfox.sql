CREATE TABLE "bookTable" (
	"bookId" serial PRIMARY KEY NOT NULL,
	"bookTitle" text,
	"bookAuthor" text,
	"bookYear" numeric,
	"bookGenre" text,
	"createdAt" timestamp,
	"updatedAt" timestamp
);
