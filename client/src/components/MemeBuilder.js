import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Memebuilder.css";


function MemeBuilder({mediaId}) {
  const [meme, setMeme] = useState([]);
  const [defaultMemes, setDefaultMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);
  const api = "384be08c76d654f4105db56ec7dd11";
  const [defaultImage, setDefaultImage] = useState("");
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const [memeTopText, setMemeTopText] = useState("");
  const [memeBottomText, setMemeBottomText] = useState("");

  const updateCaption = (e, index) => {
    const text = e.target.value || "";
    setCaptions(
      captions.map((c, i) => {
        if (index === i) {
          return text;
        } else {
          return c;
        }
      })
    );
  };

  const generateMeme = () => {
    const currentMeme = meme[memeIndex];
    const formData = new FormData();
    formData.append("template_id", currentMeme.id);
    captions.forEach((c, index) => formData.append(`boxes[${index}][text]`, c));
  };
  const shuffleMeme = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  const serialize = (obj) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let memeObject = {
      template_id: defaultImage,
      username: "jdbwebdev",
      password: "J.JfsG-?YLHx8C@",
      text0: memeTopText,
      text1: memeBottomText,
    };
    let queryString = serialize(memeObject);
    console.log(queryString);
    fetch(`https://api.imgflip.com/caption_image?${queryString}`, {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        console.log(resp);
        fetch("/memebater", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            likes: 0, 
            dislikes: 0,
            laughs: 0,
            meme: resp.data.url,
            media_id: mediaId,
          })
        }).then(response=>{
          console.log(response)
        })
      });
  };
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const _meme = res;
        console.log(res);
        setDefaultMemes(res.data.memes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (meme.length) {
      setCaptions(Array(meme[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, meme]);
  const handleMemeClick = (id) => {
    setDefaultImage(id);
    if (!showForm) {
      setShowForm(true);
    }
  };
  return defaultMemes.length > 0 ? (
    <div className="container">
      {/* <button onClick={generateMeme} className="generate">
        Generate
      </button>
      <button
        onClick={() => setMemeIndex(memeIndex + 1)}
        className="skip"
      >
        Skip
      </button>
      {captions.map((c, index) => (
        <input onChange={(e) => updateCaption(e, index)} key={index} />
      ))}
      <img alt="meme" src={meme[memeIndex].url} /> */}
      <div className="imageselector">
        {defaultMemes?.map((dmeme, index) => {
          return (
            <img
              src={dmeme.url}
              alt={dmeme.name}
              onClick={() => handleMemeClick(dmeme.id)}
            />
          );
        })}
      </div>
      {showForm && (
        <div className="meme-form">
          <h2>Step 2: Enter Text</h2>
          <input
            type="text"
            value={memeTopText}
            placeholder="enter top meme text"
            onChange={(e) => setMemeTopText(e.target.value)}
          />
          <input
            type="text"
            value={memeBottomText}
            placeholder="enter bottom meme text"
            onChange={(e) => setMemeBottomText(e.target.value)}
          />
          <button onClick={(e) => handleSubmit(e)}>Post Meme</button>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
}

export default MemeBuilder;
