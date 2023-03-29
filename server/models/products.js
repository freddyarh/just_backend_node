const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ProductsSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

module.exports = model( 'Products', ProductsSchema );