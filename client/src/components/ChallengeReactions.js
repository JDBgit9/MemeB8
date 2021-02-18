import React, { useState } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import axios from "axios";
import Card from "@material-ui/core/Card";
import "./ChallengeReactions.css";

function ChallengeReactions({ data }) {
  const [challengeData, setChallengeData] = useState(data);
  const [loading, setLoading] = useState(false)
  const handleReaction = (category) => {
    let url = `/challenge/${category}/add`;
    console.log(challengeData);
    
    try {
      axios
        .post(url, { id: challengeData._id, count: challengeData[category] + 1 })
        .then((response) => {
          console.log(response);
          setLoading(true)
          let tempData=challengeData;
          tempData[category]=response.data.count
          setChallengeData(tempData)
          setLoading(false)
        });
    } catch (error) {
      console.log(error);
    }
  };
  return !loading && (
    <div className="Mbreactions">
      <Card className="meme_card">
        <div className="Mbreactions_btns">
          <div className="reactions">
            <ThumbUpIcon onClick={() => handleReaction("likes")} />
            {challengeData.likes}
          </div>
          <div className="reactions">
            <ThumbDownAltIcon onClick={() => handleReaction("dislikes")} />
            {challengeData.dislikes}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ChallengeReactions;
