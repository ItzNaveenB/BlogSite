import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();
const app = express();


mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('MOngoDb is connected')
    }).catch((err) => {
        console.error(err);
    })


app.listen(3000, () => {
    console.log(`Server is running......`)
})