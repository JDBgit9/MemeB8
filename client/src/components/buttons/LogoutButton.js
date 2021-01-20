import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  button: {
    fontWeight: '700'
  }
}))

const LogoutButton = () => {
  const { logout } = useAuth0();
  const classes = useStyles();

  return (
    <Button color="inherit" className={classes.button} onClick={() => logout({ returnTo: window.location.origin  })}> 
        Logout
    </Button>
  );
};

export default LogoutButton;