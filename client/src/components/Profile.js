import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import dayjs from "dayjs";

// Auth0 Hook
import { useAuth0 } from "@auth0/auth0-react";

// MUI Stuff
import Button from "@material-ui/core/Button";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

// Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 20,
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%",
      },
    },
    "& .profile-image": {
      // width: 200,
      // height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle",
      },
      "& a": {
        color: "#00bcd4",
      },
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0",
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px",
    },
  },
}));

const Profile = () => {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  // credentials: { handle, createdAt, imageUrl, bio, website, location },
  // loading

  let profileMarkup = !isLoading ? (
    isAuthenticated ? (
      <Paper className={classes.paper}>
        <div className={classes.profile}>
          <div className="image-wrapper">
            <div className="profile-image">
              <img src={user.picture} alt="profile" />
            </div>
          </div>

          <hr />
          <div className="profile-details">
            <MuiLink
              component={Link}
              to={`users/${user.nickname}`}
              color="primary"
              variant="h5"
            >
              @{user.nickname}
            </MuiLink>
            <hr />
            {bio && <Typography variant="body2">{bio}</Typography>}
            <hr />
            {/* {location            >
                  <LocationOn color="primary" /> <span>{location}</span>
                  <hr           >
              )} */}
            {/* {website            >
                  <LinkIcon color="primary" />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {" "}
                    {website}
                  </a>
                  <hr           >
              )} */}
            <CalendarToday color="primary" />{" "}
            <span>Joined {dayjs(user.updated_at).format("MMM YYYY")}</span>
          </div>
        </div>
      </Paper>
    ) : (
      <Paper className={classes.paper}>
        <Typography variant="body2" align="center">
          No profile found, please login again
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          </div>
        </Typography>
      </Paper>
    )
  ) : (
    <p>Loading...</p>
  );

  return profileMarkup;
};

// const mapStateToProps = (state) => ({
//   user: state.user,
// });

// Profile.propTypes = {
//   user: PropTypes.object.isRequired,
//   classes: PropTypes.object.isRequired,
// };

export default Profile;
