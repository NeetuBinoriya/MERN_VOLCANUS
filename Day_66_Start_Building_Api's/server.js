import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'express'
import productRouter from './Routes/product.js'


const app = express();

app.use(bodyParser.json())

// product Router
app.use('/api/product',productRouter)


//get => browser
//post, put, delete => frontend or frontend client

mongoose.connect("mongodb+srv://neetubinoriya:uJ7F3ktvWTDY6Nqo@cluster0.cv2bxwy.mongodb.net/", {
    dbName:
        "Volcanus_MERN_E_Commerce"

}).then(() => console.log("MongoDB Connected Successfully...!")).catch((err) => console.log(err))

const port = 1000;
app.listen(1000, () => { console.log(`Server is Running on port ${port}`) })