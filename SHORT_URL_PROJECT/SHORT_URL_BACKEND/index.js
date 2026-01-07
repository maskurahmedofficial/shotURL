const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const route = require('./src/routes/routes');
const morgan = require('morgan');
const mongoose = require('mongoose');

// ---------- middleware ----------
app.use(cors({
  origin: "https://maskur-shorturl.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.options("*", cors()); // ✅ REQUIRED

app.use(express.json());
app.use(morgan('dev'));
app.use(route);

app.get('/', (req, res) => {
  res.send('server is running');
});

// ---------- database ----------
mongoose.connect(
  'mongodb+srv://Maskur:Maskur@cluster0.zn2onai.mongodb.net/Maskur?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => console.log('db connected'))
.catch(err => console.log(err));

// ---------- port ----------
app.listen(port, () => {
  console.log(`this port is running at ${port}`);
});
