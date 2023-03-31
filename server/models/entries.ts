import { Schema, model } from "mongoose";

const EntriesSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  description: String,
  date:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
});

const Entries = model("Entries", EntriesSchema);

export default Entries;