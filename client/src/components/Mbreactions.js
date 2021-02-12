import React, {useState} from 'react'
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

function Mbreactions({data}) {
    const [memeData, setMemeData]=useState(data)
    return (
        <div className="Mbreactions">
            <img src={memeData.meme} alt="memeData"/>
            <div className="Mbreactions_btns">
                <div className="reactions">
                    <ThumbUpIcon/>
                    {memeData.likes}
                </div>
                <div className="reactions">
                    <ThumbDownAltIcon />
                    {memeData.dislikes}
                </div>
                <div className="reactions">
                    <SentimentVerySatisfiedIcon/>
                    {memeData.laughs}
                </div>
            </div>
        </div>
    )
}

export default Mbreactions
