import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Memebate.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

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

class Memebate extends Component {
    handleLike(id, likes) {
        console.log(id)
        // try{
        //     axios.post("/media/likes/add", {id:id,like:likes+1}).then(response=>console.log(response))
        // } catch(error){console.log(error)}
    }
    render(){ 
        const { classes, 
            memebate: { 
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
            } 
        } = this.props;
        
        
        return(
            <Card className={classes.card}>
                <CardContent  className={classes.content}>
                    <Typography variant="body2"
                    component={Link}
                    to={'/users/userHandle'}
                    color="primary"> 
                    Username Placeholder
                    </Typography>
                    <div className="memebate_title">
                        <Typography variant="h6">{title}</Typography>
                    <div className="memebate_details">
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
                    <div className="memebate_reactions">
                    <ThumbUpIcon onClick={()=>this.handleLike(_id, likes)}/>{likes}
                    <ThumbDownAltIcon/>{dislikes} 
                    </div>

                    <Typography variant="body1" color="textSecondary">{synopsis}</Typography>
                    {
                        source1?.length>0&&(<Typography variant="body1" color="textSecondary"><a href={source1} target="_blank">{source1}</a></Typography>)
                    }

                       {
                        source2?.length>0&&(<Typography variant="body1" color="textSecondary"><a href={source2} target="_blank">{source2}</a></Typography>)
                    }
                        {
                            source3?.length>0&&(<Typography variant="body1" color="textSecondary"><a href={source3} target="_blank">{source3}</a></Typography>)
                        }
                
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Memebate)