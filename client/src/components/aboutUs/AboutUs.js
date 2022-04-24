import { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";

import { makeStyles } from "@material-ui/core/styles";
import AppIcon from "../../images/BigIcon.png";
import Background from "../../images/wdbg.png";

// MUI Stuff
import { CssBaseline } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  landingPage: {
    minHeight: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  callToAction: {
    width: "100%",
    maxWidth: "720px",
    margin: "0 auto",
    paddingTop: "10rem",
    paddingBottom: "calc(10rem - 4.5rem)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    height: "100vh",
  },
  title: {
    alignSelf: "flex-end",
    position: "relative",
  },
  titleImage: {
    maxWidth: "400px",
    verticalAlign: "middle",
  },
  divider: {
    maxWidth: "3.25rem",
    borderWidth: "0.2rem",
    border: "0",
    borderTop: "1px solid #3a84f4",
    margin: "1.5rem auto",
  },
  secondHalf: {
    alignSelf: "baseline",
  },
  pitch: {
    color: "#fff",
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.75)",
    fontWeight: "300",
  },
  goDown: {
    color: "#3a84f4",
    fontSize: "2rem",
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.landingPage} id="aboutUs">
      <CssBaseline />
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.callToAction}>
          <div className={classes.title}>
            <img src={AppIcon} alt="MemeBate" className={classes.titleImage} />
            <hr className={classes.divider} />
          </div>

          <div className={classes.secondHalf}>
            <h1 className={classes.pitch}>
              A fun digital debate platform without all the fuss.
            </h1>
            <p>Hi my name is James and I created this application with truth and fun in mind. It's simple; the more you tell the truth the more you will win. I was around when MySpace was huge and I saw how social media changed the landscape of our society and myself, nt in a good way. My hope is to bring us back together with being who we are truly as opposed to what our supposed ideologies tell us we are. 
              I have a musical background and have been in a creative mindset and as I transitioned into the tech world I wanted to find a way to maintain my creativity in the technology realm and this application is hopefullly a way to do that.
            </p>

            <Scroll to="details" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default AboutUs;
