import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import MovieList from "./pages/movies/list/list";
import Vote from "./pages/vote/vote";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <ul className="nav-bar-list">
            <li className="nav-bar-element">
              <Link to="/vote">Vote</Link>
            </li>
            <li className="nav-bar-element">
              <Link to="/movies">Films</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/vote">
            <Vote />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
