import React from "react";
import { NavLink } from "react-router-dom";

function questionOne() {
  setTimeout(() => {
    console.log("Hello World");
  }, 10000);

  return (
    <div className="App-header">
      <NavLink to="/">
        <button className="homepage__button">Home</button>
      </NavLink>
      <h2>
        Question - Create a function that logs “Hello World” to the console
        every 10 seconds.
      </h2>
      <h2>Answer - Please view console</h2>
    </div>
  );
}

export default questionOne;
