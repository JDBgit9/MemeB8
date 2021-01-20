import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// MUI Objects
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Components
import Navbar from "./components/Navbar";
import themeObject from "./util/theme";

// Pages
import home from "./pages/home";
import login from "./pages/userlogin";
import signup from "./pages/signup";
import profile from "./pages/profile";
// import aboutUs from './pages/aboutUs'

// Theme of the app is managed here
const theme = createMuiTheme(themeObject);

function App() {
  // const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            {/* <Route exact path="/AboutUs" component={aboutUs}/> */}
            <Route exact path="/userlogin" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/profile" component={profile} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
