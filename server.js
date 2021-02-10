const express = require("express");
const connectDB = require('./config/db')
const cors = require("cors");
const config = require('config');

const Media = require("./models/media");
const Memebater = require("./models/memebater");
const { response, request } = require("express");
const ObjectId =require("mongodb").ObjectId;
const fetch = require("node-fetch");

const app = express();

connectDB()

app.use(cors({ origin: true }));
app.use(express.json());

// // Define routes
// router.use("/media", './routes/api/media');
// router.use("/user", './routes/api/user');
// router.use("/memebaters", './routes/api/memebater');

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
app.get("/media/:id", async (request, response)=>{
  try{
    let result=await Media.findOne({"_id":ObjectId(request.params.id)}).exec();
    response.send(result)
  } catch(error)
  {console.error("MEDIA FINISHED ERROR: ", error);
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
app.post("/media/likes/add", async(request, response)=> {
  Media.update({_id:ObjectId(request.body.id)}, {$set:{likes: request.body.like}}).then(resp=>response.status(200).send(request.body))
})
app.post("/media/dislikes/add", async(request, response)=> {
  Media.update({_id:ObjectId(request.body.id)}, {$set:{dislikes: request.body.like}}).then(resp=>response.status(200).send(request.body))
})
app.post("login")

// app.get("/", async function (req, res) {
//   // try {
//   //   await client.connect();
//   //   await listDatabases(client);
//   // } catch (e) {
//   //   console.error(e);
//   // }
// });

// async function listDatabases(client) {
//   databasesList = await client.db().admin().listDatabases();

//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// }

app.get("/memebater", async (request, response) => {
  console.log("MEMEBATER IS BEING REQUESTED");
  try {
    let result = await Memebater.find().exec();
    console.log("MEMEBATER FINISHED SUCCESS\n");
    console.log(result);
    response.send(result);
  } catch (error) {
    console.error("MEMEBATER FINISHED ERROR: ", error);
    response.status(500).send(error);
  }
});

app.post("/memebater", async (request, response) => {
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
app.get("/default-memes", async(request, response)=>{
  const api="384be08c76d654f4105db56ec7dd11"
  try {
  fetch("http://memebuild.com/api/1.0/getDefaultMemes?limit=100", {headers:{"API-KEY":api, "Access-Control-Allow-Origin":"*",cors:"no-cors"}})
  .then(response=>{return response.json()})
  .then((res) => {
    const _meme = res;
    console.log(res)
    response.status(200).send(JSON.stringify(res))
  }).catch(error=>{
    console.log(error)})
  } catch(error){console.log(error)}
})
app.post("/default-memes", async(request, response)=>{
  const api="384be08c76d654f4105db56ec7dd11"
  try {
  fetch("http://memebuild.com/api/1.0/generateMeme", {
    headers:{"API-KEY":api, 
    "Access-Control-Allow-Origin":"*",
    cors:"no-cors"
    },
    body: JSON.stringify(request.body)
  }).then(resp=>{response.send(resp.json())})
}catch(error){console.log(error)}
})

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, function (error) {
  if (error) console.log("listen error", error);
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});