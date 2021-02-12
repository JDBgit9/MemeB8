const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const config = require("config");
const bodyParser = require("body-parser");
const Media = require("./models/media");
const Memebater = require("./models/memebater");
const { response, request } = require("express");
const ObjectId = require("mongodb").ObjectId;
const fetch = require("node-fetch");


const app = express();

connectDB();

app.use(cors({ origin: true }));
app.use(bodyParser.json());
let jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/media", async (request, response) => {
  console.log("MEDIA IS BEING REQUESTED");
  try {
    let result = await Media.find().exec();
    console.log("MEDIA FINISHED SUCCESS\n");
    console.log(result);
    response.send(result);
  } catch (error) {
    console.error("MEDIA FINISHED ERROR: ", error);
    response.status(500).send(error);
  }
});
app.get("/media/:id", async (request, response) => {
  try {
    let result = await Media.findOne({
      _id: ObjectId(request.params.id),
    }).exec();
    response.send(result);
  } catch (error) {
    console.error("MEDIA FINISHED ERROR: ", error);
    response.status(500).send(error);
  }
});
app.post("/media", async (request, response) => {
  const media = new Media(request.body);

  media.save((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Save to database");
      response.status(200).send(request.body);
    }
  });
});
app.post("/media/likes/add", async (request, response) => {
  Media.updateOne(
    { _id: ObjectId(request.body.id) },
    { $set: { likes: request.body.like } }
  ).then((resp) => response.status(200).send(request.body));
});
app.post("/media/dislikes/add", async (request, response) => {
  Media.updateOne(
    { _id: ObjectId(request.body.id) },
    { $set: { dislikes: request.body.like } }
  ).then((resp) => response.status(200).send(request.body));
});
app.post("/memebaters/dislikes/add", async (request, response) => {
  Memebater.updateOne(
    { _id: ObjectId(request.body.id) },
    { $set: { dislikes: request.body.count } }
  ).then((resp) => response.status(200).send(request.body));
});
app.post("/memebaters/likes/add", async (request, response) => {
  console.log(request.body.id)
  Memebater.updateOne(
    { _id: ObjectId(request.body.id) },
    { $set: { likes: request.body.count} }
  ).then((resp) => response.status(200).send(request.body));
});
app.post("/memebaters/laughs/add", async (request, response) => {
  Memebater.updateOne(
    { _id: ObjectId(request.body.id) },
    { $set: { laughs: request.body.count } }
  ).then((resp) => response.status(200).send(request.body));
});
app.post("login");

app.get("/memebaters/:id", async (request, response) => {
  console.log("MEMEBATER IS BEING REQUESTED");
  try {
    let result = await Memebater.find({
      media_id: ObjectId(request.params.id),
    }).exec();
    console.log("MEMEBATER FINISHED SUCCESS\n");
    console.log(result);
    response.send(result);
  } catch (error) {
    console.error("MEMEBATER FINISHED ERROR: ", error);
    response.status(500).send(error);
  }
});

app.post("/memebaters", async (request, response) => {
  const memebater = new Memebater(request.body);

  memebater.save((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Save to database");
      response.status(200).send(request.body);
    }
  });
});
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, function (error) {
  if (error) console.log("listen error", error);
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
