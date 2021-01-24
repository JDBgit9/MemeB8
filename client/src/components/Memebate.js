import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// MUI Stuff
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
    render(){ 
        const { classes, 
            memebate: { 
                debate, 
                title,   
                synopsis,  
                category,  
                format, 
                source1
                // source2,
                // source3
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
                    <Typography variant="h6">{title}</Typography>
                    <div>
                        <iframe
                            width="385"
                            height="315"
                            src={`${debate}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                    <Typography variant="body1" color="textSecondary">{synopsis}</Typography>
                    {/* <a href={source1} target="_blank">Source</a> */}
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(Memebate)
