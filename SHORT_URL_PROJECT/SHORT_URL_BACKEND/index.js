const express = require('express')
const app = express()
const port = 9000
const cors = require('cors')
const  route  = require('./src/routes/routes')
const morgan  = require('morgan');
const { default: mongoose } = require('mongoose')


// ^------------ middlewere----------


app.use(cors({
    origin: "https://maskur-shorturl.vercel.app",
    credentials: true
}));

app.use(express.json())
app.use(morgan('dev'))
app.use(route)

app.get('/',(req,res)=>{
res.send('server is running')
})

// *connecting database:
mongoose.connect('mongodb+srv://Maskur:Maskur@cluster0.zn2onai.mongodb.net/Maskur?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('db connected'))
.catch((err)=>console.log(err))



// &--------port listen----------
app.listen(port,(err)=>{
    if(err) return console.log(err)
    console.log(`this port is running at ${port}`)
})