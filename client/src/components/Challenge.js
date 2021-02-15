import React, { useEffect, useState } from "react";
import ChallengeForm from "./ChallengeForm";
import axios from "axios";

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
          return (
            <div className="challenge_item">
              <iframe
                width="385"
                height="315"
                src={`https://www.youtube.com/embed/${
                  item.challenge.indexOf("=") > -1
                    ? item.challenge.split("=")[1]
                    : item.challenge
                }`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="item_username">{item.user.userName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Challenge;
