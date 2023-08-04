import express from 'express'
import dotenv from 'dotenv'
import bookRoutes from './routes/bookRoute.js'
import connectDb from"./config/dbconnect.js"
import cors from "cors"

dotenv.config()

connectDb()
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
app.use("", bookRoutes)
app.get("/", (req, res)=> {
  res.send('<h1>This is Book Keeper</h1>')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});