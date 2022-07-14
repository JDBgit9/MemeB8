import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import AppIcon from "../images/icon.png";

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from  '@material-ui/core/styles'

// Components
import LoginButton from './buttons/LoginButton'
import LogoutButton from './buttons/LogoutButton'

const useStyles = makeStyles((theme) =>({
    root:{
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
    },
    appbar:{
        backgroundColor: 'rgba(255,255,255,.9)',
        color: '#000',

    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle:{
        // flexGrow: '1',
    },
    toolbarButons: {
        marginLeft: 'auto'
    },
    button: {
        fontWeight: '700'
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={2}>    
                <Toolbar className={classes.appbarWrapper}>
                    <a href="/">
                        <img src={AppIcon} alt="MemeBate" className={classes.appbarTitle}/>
                    </a>
                    <div className={classes.toolbarButons}>
                        <Button color="inherit" component={Link} to="/" className={classes.button}>Home</Button>
                        {isAuthenticated ? (
                        <>
                            <LogoutButton />
                            <Button color="inherit" component={Link} to="/profile" className={classes.button}>Profile</Button>
                        </>
                        ) : (    
                        <LoginButton /> 
                        )}
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
        
    )
    
}

export default Navbar
