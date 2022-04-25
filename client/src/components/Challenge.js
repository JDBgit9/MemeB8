import React, { useEffect, useState } from "react";
import ChallengeForm from "./ChallengeForm";
import axios from "axios";
import "./Challenge.css";
import ChallengeReactions from "./ChallengeReactions";
import { getIframeUrl } from "../videoDictionary";

function Challenge({ media_id }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/challenge/${media_id}`)
      .then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <ChallengeForm media_id={media_id} />
      <div className="challenge_list">
        {data?.map((item, index) => {
          getIframeUrl(item.challenge)
          return (
            <div className="challenge_item">
              <iframe
                width="385"
                height="315"
                src={getIframeUrl(item.challenge)}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <ChallengeReactions data={item}/>
              <div className="item_username">{item.user.userName}</div>
              <div className="item_sources">{
                item.sources?.map((source, sourceIndex)=>{
                  return (
                  <a key={sourceIndex}href={source} target="_blank">Source {sourceIndex+1}</a>
                    )
                })
              }</div>
              <div className="item_tags">{
                item.tags?.map((tag, tagIndex)=>{
                  return (
                  <div key={tagIndex}className="tag">{tag}</div>
                    )
                })
              }</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Challenge;
