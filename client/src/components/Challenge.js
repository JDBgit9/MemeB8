import React from 'react';
import ChallengeForm from "./ChallengeForm";

function Challenge({media_id}) {
    return (
        <div>
            <ChallengeForm media_id={media_id}/>
        </div>
    )
}

export default Challenge
