import React from "react";
import { NavLink } from "react-router-dom";
import functiondiagram from "./func.png";

function questionThree() {
  return (
    <div>
      <div className="App-header">
        <NavLink to="/">
          <button className="homepage__button">Home</button>
        </NavLink>
        <h4>
          Using Lucidchart or a similar diagramming tool, please draw out the
          logical flow of the function in Question 2.
        </h4>

        <img src={functiondiagram} className="sandbox__image" alt="sandbox" />
      </div>
    </div>
  );
}

export default questionThree;
