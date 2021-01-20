const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");
const { ObjectId } = require("mongodb");
const Schema = mongoose.Schema;

const MemebaterSchema = new Schema({
id:{type: ObjectId, required:true },
like: { type: String, required: true },
dislike: { type: String, required: true },
memes: { type: String, required: true },
gifs:  { type: String, required: true },
emoji: { type: String, required: true },
laughs: { type: String},
vote: { type: String },
respond: { type: String },
source: { type: String },
tags: { type: String }


});


const Memebater = mongoose.model("memebater", MemebaterSchema);

module.exports = Memebater;