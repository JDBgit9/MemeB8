const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const challengeSchema = new Schema({
likes: {type: Number, required: true},
dislikes: {type: Number, required: true},
source1: {type: String, required: true},
source2: {type: String, required: true},
source3: {type: String, required: true},
tags: {type: String, required: true},





});



    const Challenge = mongoose.model("challenge", challengeSchema);

module.exports = Challenge;