import express, { urlencoded } from 'express'
import mongoose from 'mongoose';

const app = express();

app.use(express.urlencoded({ extended: true }));

const userSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    createdAt:{type:Date,default:Date.now}
});

const User = mongoose.model("User",userSchema)

// Register
app.get('/', (req, res) => {
    // res.json({ message: 'Welcome to Home page' });
    res.render('register.ejs');
});

app.post('/register', async (req,res)=>{
    // console.log(req.body);
    let user = await User.create(req.body)
    // console.log(user);
    res.redirect('/login')

})

// Login
app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', async (req,res)=>{
    const {email,password} = req.body
    // console.log("User Email = ", email, "User Password =", password);
    let user = await User.findOne({email})

    if(!user) return res.json({message:"User not Exist"})

    if(user.password != password) 
        return res.json({message:"Invalid Password"})

    res.render('welcome.ejs',{user})
})

// Welcome
app.get('/welcome', (req, res) => {
    res.render('welcome.ejs');
});

mongoose.connect(
    "mongodb+srv://neetubinoriya:uJ7F3ktvWTDY6Nqo@cluster0.cv2bxwy.mongodb.net/", {
    dbName: "MERN_VOLCANUS_BATCH_2"
})
    .then(() => console.log("MongoDB Successfully....!")).catch((err) => console.log(err))


app.listen(1000, () => console.log("server is Running on Port 1000"))