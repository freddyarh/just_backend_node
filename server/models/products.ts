import { Schema, model } from "mongoose";

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

const Products = model("Products", ProductsSchema);

export default Products;

// module.exports = model( 'Products', ProductsSchema );