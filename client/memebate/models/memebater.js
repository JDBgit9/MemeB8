const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const { ObjectId } = require("mongodb");
const Schema = mongoose.Schema;

const MemebaterSchema = new Schema({
likes: { type: Number, required: true },
dislikes: { type: Number, required: true },
meme: { type: String, required: true },
laughs: { type: Number},
media_id: {type: ObjectId, required: true},
user: {
    id: {type: ObjectId, required: true},
    userName: {type:String, required: true},
  }
});


const Memebater = mongoose.model("memebater", MemebaterSchema);

module.exports = Memebater;