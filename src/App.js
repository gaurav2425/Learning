import "./App.css";
import Sidebar from "./Sidebar";
import Appbody from "./Appbody";
import Player from "./Player";
import Nav from "./Nav";
import Grid from "./Grid";
import Browse from "./Browse";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="app_1">
        <Router>
          <div className="sidebar">
            <Sidebar></Sidebar>
          </div>

          <Switch>
            <Route path="/trending">
              <h1>This is Trending</h1>
            </Route>

            <Route path="/Search">
              <Browse></Browse>
            </Route>

            <Route path="/">
              <div className="appbody_main">
                <div className="appbody">
                  <div className="gridbox">
                    <Grid></Grid>
                  </div>

                  <div>
                    <Appbody></Appbody>
                  </div>
                </div>
                <div className="app_player">
                  <Player></Player>
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
