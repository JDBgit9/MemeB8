import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Memebuilder.css";


function MemeBuilder() {
  const [meme, setMeme] = useState([]);
  const [defaultMemes, setDefaultMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);
  const api = "384be08c76d654f4105db56ec7dd11";
  const [defaultImage, setDefaultImage]=useState("");
  const history = useHistory();
  const [showForm, setShowForm]=useState(false);
  const [memeTopText, setMemeTopText]=useState("");
  const [memeBottomText, setMemeBottomText]=useState("");

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
const handleSubmit=(e)=>{
  e.preventDefault()
  let memeObject={
    topText: memeTopText,
    bottomText: memeBottomText,
    imgUrl: `https://s3-us-west-2.amazonaws.com/memebuilder/default/${defaultImage}.jpg`

  }
  console.log(memeObject)
  fetch("http://memebuild.com/api/1.0/generateMeme", {
    method: "POST",
    body: JSON.stringify(memeObject)
  }).then(response=>{console.log(response.json())})
}
  useEffect(() => {
    fetch("/default-memes")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const _meme = res;
        console.log(res);
        setDefaultMemes(res);
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
  const handleMemeClick = (file)=>{
    setDefaultImage(file)
    if (!showForm){
    setShowForm(true)
    }
  }
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
              src={`https://s3-us-west-2.amazonaws.com/memebuilder/default/${dmeme.file}.jpg`}
              alt={dmeme.name}
              onClick={() => handleMemeClick(dmeme.file)}
            />
          );
        })}
      </div>
      {
        showForm && 
        (
          <div className="meme-form">
            <h2>step 2: enter meme text</h2>
            <input type="text" value={memeTopText} placeholder="enter text for top of meme" onChange={(e)=>setMemeTopText(e.target.value)}/>
            <input type="text" value={memeBottomText} placeholder="enter text for bottom of meme" onChange={(e)=>setMemeBottomText(e.target.value)}/>
          <button onClick={(e)=>handleSubmit(e)}>Post Meme</button>
          </div>
        )
      }
    </div>
  ) : (
    <></>
  );
}

export default MemeBuilder;
