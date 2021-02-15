import React, { useState } from "react";


function ChallengeForm() {
  const [showForm, setShowForm] = useState(false);
  const [challenge, setChallenge] = useState("");
  const [sources, setSources] = useState("");
  const [tags, setTags] = useState("");

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
        <button>Submit</button>
        </>
      )}
    </div>
  );
}

export default ChallengeForm;
