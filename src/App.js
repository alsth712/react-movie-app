import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./routes/Detail";
import Genre from "./routes/Genre";
import HighRate from "./routes/HighRate";
import Home from "./routes/Home";

function App() {
  const [genres, setGenres] = useState(["action", "animation", "music"]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={`/movie/highRating`}>
          <HighRate rate={8.5} />
        </Route>
        {genres.map((genre, index) => {
          return (
            <Route path={`/movie/${genre}`}>
              <div>
                <Genre key={index} genre={genre} />
              </div>
            </Route>
          );
        })}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
