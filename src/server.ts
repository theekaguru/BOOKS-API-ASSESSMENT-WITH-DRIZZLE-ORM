import express, { Application, Request, Response } from "express";
import dotenv from "dotenv"
import { logger } from "./middleware/logger";
import { dot } from "node:test/reporters";
import { bookRouter } from "./books/book.route";

dotenv.config()

const app:Application = express() 


//basic middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger)


//import port from env
const PORT = process.env.PORT ||5000   

//default route
app.get('/' , (req:Request, res:Response) => {
	res.send('Asap! Welcome 🙋‍♂️ to the Book 📚API with Drizzle ORM 🧠')
});

app.use('/api',bookRouter)

//start server
app.listen(PORT, () => {
	console.log(`🚀 server running on http://localhost:${PORT}`)
});