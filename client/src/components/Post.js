import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import User from "./User";
import "./Post.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // width: "50%",
    padding: "10px",
    


  },

  field: {
    margin: "5px",
    width: "100%",
  },
}));

const Post = () => {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [category, setCategory] = useState("");
  const [format, setFormat] = useState("");
  const [source1, setSource1] = useState("");
  const [source2, setSource2] = useState("");
  const [source3, setSource3] = useState("");
  const [debate, setDebate] = useState("");
  const user = useAuth0();

  console.log(title);

  const handleSubmit = async (event) => { 
    let userInfo=await axios.get(`/users/${user.user.email}`)
    let request = {
      debate,
      title,
      synopsis,
      category,
      format,
      source1,
      source2,
      source3,
      user: {
        id: userInfo.data[0]._id,
        userName: userInfo.data[0].username
      }
    };

    const res = axios
      .post("/media", request)
      .then((response) => {
        console.log(response);
        clearform();
        alert("media uploaded");
      })
      .catch(console.error);
  };

  const clearform = () => {
    setDebate("");
    setTitle("");
    setSynopsis("");
    setCategory("");
    setFormat("");
    setSource1("");
    setSource2("");
    setSource3("");
  };

  return (
    <div className="post">
    <div className={classes.root}>
      <h3>Start Debate</h3>
      <select
        value={category}
        className={classes.field}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled>
          Select Catergory
        </option>
        <option value="Anime">Anime</option>
        <option value="Climate Change">Climate Change</option>
        <option value="Coding">Coding</option>
        <option value="Cosmetics">Cosmetics</option>
        <option value="Culture">Culture</option>
        <option value="CryptoCurrency">CryptoCurrency</option>
        <option value="Education">Education</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Fashion">Fashion</option>
        <option value="Financial">Financial</option>
        <option value="Flat Earth">Flat Earth</option>
        <option value="Gaming">Gaming</option>
        <option value="Health">Health</option>
        <option value="History">History</option>
        <option value="Hollywood">Hollywood</option>
        <option value="Kamakazi">Kamakazi</option>
        <option value="LGBTQI">LGBTQI</option>
        <option value="Marijuana">Marijuana</option>
        <option value="Marriage">Marriage</option>
        <option value="Medicine">Medicine</option>
        <option value="Memes">Memes</option>
        <option value="Music">Music</option>
        <option value="News">News</option>
        <option value="Opinion">Opinion</option>  
        <option value="Parenting">Parenting</option>
        <option value="Physics">Physics</option>
        <option value="Police Reform">Police Reform</option>
        <option value="Politics">Politics</option>
        <option value="Polyamory">Polyamory</option>
        <option value="Psychedelics">Psychedelics</option>
        <option value="Racism">Racism</option>
        <option value="Random">Random</option>
        <option value="Religion">Religion</option>
        <option value="Science">Science</option>
        <option value="Speed Rounds">Speed Rounds</option>
        <option value="Sports">Sports</option>
        <option value="Technology">Technology</option>
        <option value="Trans">Trans</option>
        <option value="Travel">Travel</option>
        <option value="UFO's">UFO's</option>
        <opttion value="Vaccines">Vaccines</opttion>
        <option value="Questions">Questions</option>
      </select>
      <select
        value={format}
        className={classes.field}
        onChange={(e) => setFormat(e.target.value)}
      >
        <option value="" disabled>
          Select Format
        </option>
        <option value="Open">Open Debate</option>
        <option disabled value="Closed">Closed Debate</option>
        <option disabled value="Moderated">Moderated</option>
        <option disabled value="Formal">Formal</option>
        <option disabled value="Live">Live</option>
      </select>
      <input
        type="text"
        className={classes.field}
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className={classes.field}
        placeholder="Enter Debate Url"
        value={debate}
        onChange={(e) => setDebate(e.target.value)}
      />
      <textarea
        placeholder="Enter Synopsis"
        className={classes.field}
        onChange={(e) => setSynopsis(e.target.value)}
        value={synopsis}
      ></textarea>
      <input
        type="text"
        placeholder="Enter Supporting Url"
        className={classes.field}
        value={source1}
        onChange={(e) => setSource1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Supporting Url"
        className={classes.field}
        value={source2}
        onChange={(e) => setSource2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Supporting Url"
        className={classes.field}
        value={source3}
        onChange={(e) => setSource3(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </div>
  );
};

export default Post;
