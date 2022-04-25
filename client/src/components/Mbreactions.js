import React, { useState } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import axios from "axios";
import Card from "@material-ui/core/Card";
import "./Mbreactions.css";

function Mbreactions({ data }) {
  const [memeData, setMemeData] = useState(data);
  const [loading, setLoading] = useState(false)
  const handleReaction = (category) => {
    let url = `/memebaters/${category}/add`;
    console.log(memeData);
    
    try {
      axios
        .post(url, { id: memeData._id, count: memeData[category] + 1 })
        .then((response) => {
          console.log(response);
          setLoading(true)
          let tempData=memeData;
          tempData[category]=response.data.count
          setMemeData(tempData)
          setLoading(false)
        });
    } catch (error) {
      console.log(error);
    }
  };
  return !loading && (
    <div className="Mbreactions">
      <Card className="meme_card">
        <img src={memeData.meme} alt="memeData" />
        <div className="Mbreactions_btns">
          <div className="userName">
           {memeData?.user?.userName} 
          </div>
          <div className="reactions">
            <ThumbUpIcon onClick={() => handleReaction("likes")} />
            {memeData.likes}
          </div>
          <div className="reactions">
            <ThumbDownAltIcon onClick={() => handleReaction("dislikes")} />
            {memeData.dislikes}
          </div>
          <div className="reactions">
            <SentimentVerySatisfiedIcon
              onClick={() => handleReaction("laughs")}
            />
            {memeData.laughs}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Mbreactions;
