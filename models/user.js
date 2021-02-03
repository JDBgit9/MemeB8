const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  tenent: {type: String, required: false},
  client_id: {type: String, required: false},
  connection: {type: String, required: false},
  email: { type: String, required: true },
  password: {type: String, required: false},
  request_language: {type: String, required: false},
  name: { type: String, required: true },
  status: { type: String, required: true },
  likes: {type: Array, required: false},
  dislikes: {type: Array, required: false},
  memebaters: {type: Array, required: false},
  following: {type: Array, required: false}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
