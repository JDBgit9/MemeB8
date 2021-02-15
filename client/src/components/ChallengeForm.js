import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


function ChallengeForm({media_id}) {
  const [showForm, setShowForm] = useState(false);
  const [challenge, setChallenge] = useState("");
  const [sources, setSources] = useState("");
  const [tags, setTags] = useState("");
  const user = useAuth0();
  const handleSubmit = async(e)=>{
    let userInfo=await axios.get(`/users/${user.user.email}`)
    let object = {
      challenge: challenge,
      likes: 0,
      dislikes: 0,
      sources: sources.split(",").map(source=>source),
      tags: tags.split(",").map(tag=>tag),
      media_id: media_id,
      user: userInfo._id,
    }
    console.log(user)
    console.log(object)
  }


  return (
    <div className="challengeform">
      {!showForm ? (
        <button onClick={()=>setShowForm(true)}>Challenge This</button>
      ) : (
          <>
        <input
          type="text"
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
          placeholder="Enter Challenge Url"
        />
        <textarea value={sources}onChange={(e) => setSources(e.target.value)}
        placeholder="Enter Sources seperated by commas Url's"></textarea>
        <textarea value={tags}onChange={(e) => setTags(e.target.value)}
        placeholder="Enter Tags seperated by commas"></textarea>
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </>
      )}
    </div>
  );
}

export default ChallengeForm;
