import React from "react";
import { NavLink } from "react-router-dom";

function questonTwo() {
  return (
    <div className="App-header">
      <NavLink to="/">
        <button className="homepage__button">Home</button>
      </NavLink>
      <h4>
        Create a function that sets a cookie with an initial value of 0 on the
        page. Each time on the page loads, add 1 to the cookie’s value and log
        it to the console. For example, the value of the cookie would be 1 on
        the first page load, 2 on the second load, etc. Extra Credit: On the
        page, create a button that resets the cookie’s value to 0 when clicked.
      </h4>
      <h4>Answer - </h4>
    </div>
  );
}

export default questonTwo;
