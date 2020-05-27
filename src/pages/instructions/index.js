import React from "react";
import { Link } from "react-router-dom";
export default function Instructions() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>
          <span role="img" aria-label="robot">
            🤖
          </span>
          Instructions{" "}
          <span role="img" aria-label="robot">
            🤖
          </span>
        </h1>
        <p>
          For this exercise I'm going to make you create a simple single web
          application that is going to allow us to have informations on the art
          of the
          <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art">
            Met Museum
          </a>
          , using their REST Api documentation.
        </p>
        <p>Please follow the following instructions</p>
        <p>Try to make it look as nice (and clean) as possible</p>
      </div>
      <section>
        <h2>Part 1: content and styling of the example page</h2>
        <p>
          Objective: using the example data, create a page displaying the data
          nicely
        </p>
        <p>We want to display a single work of art nicely</p>
        <p>The following informations are required :</p>
        <ul>
          <li>The Dimensions (if existing/relevant)</li>
          <li>at least (1) Illustration image (if existing) -</li>
          <li>The Department in which we can see the art</li>
        </ul>
      </section>

      <section>
        <h2>Part 2: Get data from the MET API</h2>
        <p>
          The objective here is to display informations that are going to change
          according to the ID of the work of art.
        </p>
        <p>
          You'll need the informations of the{" "}
          <a href="https://metmuseum.github.io/">MET documentation page</a>{" "}
        </p>
        <p>
          Example : <Link to="/art/92121">art/92121 </Link> should display the
          informations of "Suit" () by Pierre Cardin.
        </p>{" "}
        <p>The following informations are required :</p>
        <ul>
          <li>The Dimensions (if existing/relevant)</li>
          <li>at least (1) Illustration image (if existing) -</li>
          <li>The Department in which we can see the art</li>
        </ul>
      </section>

      <section>
        <h2>Part 3: Create a random page</h2>
        <p>
          The objective here is to display the informations of a random work of
          art.
        </p>
        <p>
          You'll need the informations of the{" "}
          <a href="https://metmuseum.github.io/">MET documentation page</a>{" "}
        </p>
        <p>
          Requirements:
          <ul>
            <li>
              <Link to="/art/random">"/art/random"</Link> should bring us to
            </li>
            <li>The link should be present in the header</li>
          </ul>
        </p>
      </section>

      <section>
        <h2>Bonus</h2>

        <ul>
          <li>Add the feature of your choice to the web application</li>

          <li>
            Make it pretty{" "}
            <span role="img" aria-label="flower">
              🌻
            </span>
          </li>
          <li>Emojis</li>
        </ul>
      </section>
    </div>
  );
}
