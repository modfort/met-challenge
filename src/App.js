import React from "react";
import "./app.css";
import { NavLink as Link, Switch, Route } from "react-router-dom";
import TogoList from "./pages/art/PaintingData";
import Instructions from "./pages/instructions";
import Myexample from "./pages/example/exemple";
import Exercice3 from "./pages/exercice3/exemple3";
import Exercice4 from "./pages/exercice4/exemple4";
function App() {
  return (
    <div className="App">
      <header>

        <div className="navbar">
          <div><Link to="/">Home    </Link></div>
          <div><Link to="/instructions">Instructions  </Link></div>
          <div><Link to="/first">Example  </Link></div>
          <div><Link to="/example">Myexample  </Link></div>
          <div><Link to="/exercice3">Exercice3  </Link></div>

        </div>
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

          <Route exact path="/first/">
            <TogoList />
          </Route>

          <Route exact path="/example">
            <Myexample />
          </Route>

          <Route exact path="/exercice3">
            <Exercice3 />
          </Route>

          <Route path="/art/:id" children={<Exercice4/>}/>
            

          <Route path="/">404 : Nothing here...</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
