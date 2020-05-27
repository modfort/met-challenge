import React from "react";
import "./app.css";
import { NavLink as Link, Switch, Route } from "react-router-dom";
import TogoList from "./pages/art/PaintingData";
import Instructions from "./pages/instructions";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/instructions">Instructions</Link>
        <Link to="/art/example">Example</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <div style={{ textAlign: "center" }}>
              <h1>
                <span role="img" aria-label="Museum">
                  🏛️
                </span>
                The MET challenge!
              </h1>
              <p>Click on "Instructions" to procede. </p>
              <p>Good luck :)</p>
            </div>
          </Route>
          <Route exact path="/instructions">
            <Instructions />
          </Route>
          <Route exact path="/art/example">
            <TogoList />
          </Route>
          <Route path="/art/:id"></Route>
          <Route path="/">404 : Nothing here...</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
