const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes/index'));

mongoose.connect('mongodb://localhost:27017/node_test', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos online');
});

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/node_test');
//   console.log('BD conectada');
// }

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

module.exports = app;