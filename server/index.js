import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import 'dotenv/config'
import connectDB from "./db/db.js";
import contactroute from "./routes/contactroute.js";
import router from "./routes/contactroute.js";

const app = express();
const port =process.env.PORT || 3000;



console.log("hello")




connectDB()





app.use(cors({
  origin: 'https://ankijitportfolio.vercel.app',
  optionsSuccessStatus: 200,
  credentials: true
}));



app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (req, res) => {
  res.send("  hello")
})

app.use('/api', contactroute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  