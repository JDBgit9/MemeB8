import Background from "../../images/tribunepodium.jpg";
import { useAuth0 } from "@auth0/auth0-react";

// MUI Stuff
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import LaptopIcon from "@material-ui/icons/Laptop";
import ForumIcon from "@material-ui/icons/Forum";
import LanguageIcon from "@material-ui/icons/Language";
import FavoriteIcon from "@material-ui/icons/Favorite";

import useWindowPosition from "../../hook/useWindowPosition";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "8rem 0",
  },
  container: {
    width: "80%",
    height: "50rem",
    textAlign: "center",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "500",
  },
  cardRoot: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    background: "rgba(255,255,255,.5)",
    borderRadius: "5",
    margin: "20px",
    padding: "10px",
    minHeight: "300px",
  },
  icon: {
    color: "#3a84f4",
    fontSize: "2.5rem",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#000",
  },
  desc: {
    fontSize: "1rem",
    color: "#6c757d",
  },
  button: {
    fontWeight: "700",
  },
}));

const GetStarted = () => {
  const classes = useStyles();
  const checked = useWindowPosition("aboutUs");
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={classes.root} id="getStarted">
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.container}>
          <Typography variant="h4" className="title">
            How do I start?
          </Typography>
          <Grid container className={classes.cardRoot} spacing={6}>
            <Grid item lg={3} md={6} xs={12}>
              <Card className={classes.card} elevation={0}>
                <LaptopIcon className={classes.icon} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    className={classes.cardTitle}
                  >
                    MemeBater
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                  >
                    As a MemeBater you get to engage in the debates by posting memes,
                    likes, dislikes, gifs, and emojis in the comment
                    section. Memebaters are most important because you are the
                    judges of each of the debates on this platform. So be nice
                    you never know you'll meet. You must sign up to become a
                    MemeBater.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <Card className={classes.card} elevation={0}>
                <ForumIcon className={classes.icon} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h1"
                    className={classes.cardTitle}
                  >
                    Debaters
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                  >
                    Debaters simply create an account and then record an audio
                    or video media link (anonymous, or non-anonymous) to their
                    profile page of their favorite topic and then watch the fun
                    memebating begin to unfold.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <Card className={classes.card} elevation={0}>
                <FavoriteIcon className={classes.icon} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h1"
                    className={classes.cardTitle}
                  >
                    Want to respond?
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                  >
                    We hope that this will be a step in a direction of bringing
                    humanity together through harmony, understanding, and honest
                    communication.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item lg={3} md={6} xs={12}>
              <Card className={classes.card} elevation={0}>
                <LanguageIcon className={classes.icon} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h1"
                    className={classes.cardTitle}
                  >
                    Thank you
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                  >
                    If you want to join an open discussion simply add a media
                    video or audio (anonymous or non-anonymous) link with oral
                    response to the conversation or just send memes. That's
                    always fun.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.button}
            onClick={() => loginWithRedirect()}
          >
            Sign up
          </Button>
        </div>
      </Collapse>
    </div>
  );
};

export default GetStarted;
