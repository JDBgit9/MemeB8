import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";

import { makeStyles } from "@material-ui/core/styles";

// Auth0 Hook
import { useAuth0 } from "@auth0/auth0-react";

// Component
import Media from "../components/Media";
import Profile from "../components/User";
import Post from "../components/Post";
import AboutUs from "../components/aboutUs/AboutUs";
import Details from "../components/aboutUs/Details";
import GetStarted from "../components/aboutUs/GetStarted";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "64px",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      setLoading(true);
      setIsError(false);
      try {
        const resp = await axios.get("/media");
        if (!ignore) setData(resp.data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
      setLoading(false);
    }
console.log(data)
    fetchData();
    return () => {
      ignore = true;
    };
  }, [query]);
  const updateReaction = (object, index)=>{
    setLoading(true)
    let tempData=data;
    tempData[index]=object;
    console.log(tempData)
    setData(tempData)
    setLoading(false)
  }

  if (isLoading) {
    return <>Loading ...</>;
  }

  if (isAuthenticated) {
    return (
      <Grid container className={classes.container} spacing={6}>
        <Grid className="mediaContainer" item sm={8} xs={12}>
          {isError && <>Something went wrong ...</>}

          {isLoading ? (
            <>Loading ...</>
          ) : (
            <>
              {data?.length > 0 &&
                data?.map((media, index) => (
                  <Media key={index} media={media} index={index} updateReaction={updateReaction} user={user} />
                ))}
            </>
          )}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
          <Post />
          <AudioRecorder />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <>
        <AboutUs />
        <Details />
        <GetStarted />
      </>
    );
  }
};

export default Home;
