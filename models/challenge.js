const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = require("mongodb");

const challengeSchema = new Schema({
  challenge: { type: String, required: true },
  likes: { type: Number, required: false },
  dislikes: { type: Number, required: false },
  sources: { type: Array, required: true },
  tags: { type: Array, required: false },
  media_id: { type: ObjectId, required: true },
  user: { type: ObjectId, required: true },
});

const Challenge = mongoose.model("challenge", challengeSchema);

module.exports = Challenge;
