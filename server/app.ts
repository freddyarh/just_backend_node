require('dotenv').config();
const Server = require('./server');

const server = new Server();

server.listen();

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// const app = express();
// app.use(cors());
// const port = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(require('./routes/index'));

// mongoose.connect('mongodb://localhost:27017/diary_note', (err: mongoose.CallbackError) => {
//     if (err) throw err;

//     console.log('Base de datos online');
// });


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });

// module.exports = app;