import { Link as Scroll } from "react-scroll";

// MUI Stuff
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";

import useWindowPosition from "../../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#3a84f4",
  },
  container: {
    width: "80%",
    maxWidth: "720px",
    height: "100vh",
    padding: "5rem 0",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto auto",
  },
  title: {
    color: "#FFF",
    fontWeight: "500",
    fontSize: "2rem",
    width: "100%",
    margin: "0 auto",
  },
  divider: {
    maxWidth: "3.25rem",
    borderWidth: "0.2rem",
    border: "0",
    borderTop: "1px solid #fff",
    margin: "1.5rem auto",
  },
  message: {
    color: "rgba(255, 255, 255, 0.5)",
  },
  goDown: {
    color: "#fff",
    fontSize: "2rem",
  },
}));

const Details = () => {
  const classes = useStyles();
  const checked = useWindowPosition("aboutUs");

  return (
    <div className={classes.root} id="details">
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.container}>
          <div className={classes.topSection}>
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              className={classes.title}
            >
              Freedom of Speech
            </Typography>
            <hr className={classes.divider} />
          </div>

          <Typography variant="h5" component="h1" className={classes.message}>
            Memebate is an application designed to preserve the right to speak
            freely online without censorship or bias.
            <br></br>
            <br></br>
            As a debater you will create an account and then state your case
            through a myriad of topics while holding yourself and others
            accountable through source reporting, points, acquiring memebaters,
            and winning debates.
          </Typography>
          <Scroll to="getStarted" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Details;
