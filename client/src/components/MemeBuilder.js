import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Memebuilder.css";


  function MemeBuilder() {
  const [meme, setMeme] = useState([]);
  const [defaultMemes, setDefaultMemes]=useState([])
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);
  const api = "384be08c76d654f4105db56ec7dd11";

  const history = useHistory();

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
  }
  const shuffleMeme = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    fetch("/default-memes")
    .then(response=>{return response.json()})
      .then((res) => {
        const _meme = res;
        console.log(res);
        setDefaultMemes(res);
      }).catch(error=>{
        console.log(error)
      })
  }, []);

  useEffect(() => {
    if (meme.length) {
      setCaptions(Array(meme[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, meme]);
  return defaultMemes.length > 0? (
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
          {
              defaultMemes?.map((dmeme, index)=>{
                return(
                    <img src={`https://s3-us-west-2.amazonaws.com/memebuilder/default/${dmeme.file}.jpg`} alt={dmeme.name}/>
                )
              })
          }
      </div>
    </div>
  ) : (
    <></>
  );
}

export default MemeBuilder