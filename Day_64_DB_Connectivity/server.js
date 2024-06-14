import express from 'express'
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://neetubinoriya:uJ7F3ktvWTDY6Nqo@cluster0.cv2bxwy.mongodb.net/",{
    dbName: 'MERN_VOLCANUS_BATCH_2',
}).then(()=>console.log("MongoDb Connected Successfully"))
.catch((err) => console.log(err));

// mongodb://localhost:27017

const app = express();

app.listen(1000, ()=>console.log('Server is Running on Port 1000'))