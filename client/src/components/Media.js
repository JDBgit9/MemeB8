import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Media.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Modal from "./Modal"
// MUI Stuff
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

const styles =  {
    card: {
        display:'flex',
        marginBottom: 20,
    },
    content:{
        padding:  25
    }
}

class Media extends Component {
    constructor(props){
        super(props);
        this.state={
            modalState: false
        }
        this.handleModalState=this.handleModalState.bind(this)
    }
    handleModalState(state){
        this.setState({modalState: state})
    }
    handleLike(id, likes, email) {
        console.log(id)
        try{
            axios.post("/media/likes/add", {id:id,like:likes+1, email:email}).then(response=>{
                let object=this.props.media;
                object.likes++
                this.props.updateReaction(object, this.props.index)    
            })
        } catch(error){console.log(error)}
    }
        handleDislike(id, dislikes, email) {
            console.log(id)
            try{
                axios.post("/media/dislikes/add", {id:id,like:dislikes+1, email:email}).then(response=>{
                    let object=this.props.media;
                    object.dislikes++
                    this.props.updateReaction(object, this.props.index)    
                })
            } catch(error){console.log(error)}
        }

    render(){ 
        console.log(this.props.user)
        const { classes, 
            media: { 
                _id,
                debate, 
                title,   
                synopsis,  
                category,  
                format, 
                source1,
                source2,
                source3,
                likes,
                dislikes,
                points,
                wins,
                losses 
            },
            index, updateReaction
        } = this.props;
         
        return(
            <div className="media">
            <Card className={classes.card}>
                <CardContent  className={classes.content}>
                    <Typography variant="body2"
                    component={Link}
                    to={'/users/userHandle'}
                    color="primary"> 
                    Username Placeholder
                    </Typography>
                    <div className="media_title">
                        <Typography variant="h6">{title}</Typography>
                    <div className="media_details">
                            <div className="detail">
                                {category}
                            </div>
                            <div className="detail">
                                {format}
                            </div>
                        </div> 
                        </div>
                    <div>
                       
                        <iframe
                            width="385"
                            height="315"
                            src={`https://www.youtube.com/embed/${debate.indexOf("=")>-1?debate.split("=")[1]:debate }`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <div className="reactions">
                    <div className="reaction">
                    <ThumbUpIcon onClick={()=>this.handleLike(_id, likes, this.props.user.email)}/><span className="reaction_count">{likes}</span></div>
                    <div className="reaction">
                    <ThumbDownAltIcon onClick={()=>this.handleDislike(_id, dislikes, this.props.user.email)}/><span className="reaction_count">{dislikes}</span> 
                    </div>
                    </div>
                    <div className="media_synopsis">
                    <Typography variant="body1" color="textSecondary">
                        {synopsis.length>150?`${synopsis.substring(0,150)}...`:synopsis}
                        {synopsis.length>150?(<span className="readMore" onClick={()=>this.handleModalState(true)}>Read More</span>):""}
                    </Typography>
                    </div>
                    <div className="media_sources">
                    {
                        source1?.length>0&&(<Typography variant="body1" color="textSecondary"><a href={source1} target="_blank">Supporting Link</a></Typography>)
                    }

                       {
                        source2?.length>0&&(<Typography variant="body1" color="textSecondary"><a href={source2} target="_blank">Supporting Link</a></Typography>)
                    }
                        {
                            source3?.length>0&&(<Typography variant="body1" color="textSecondary"><a href={source3} target="_blank">Supporting Link</a></Typography>)
                        }
                </div>
                </CardContent>
            </Card>
            <div className="replyBtn">
               <Link to={`/memebate/${_id}`} className="btn">Reply</Link> 
            </div>
            {
                (this.state.modalState && synopsis.length>150)&&
                (
                    <Modal body={synopsis} modalState={this.handleModalState}/>
                )
            }
            </div>
        );
    }
}

export default withStyles(styles)(Media)
