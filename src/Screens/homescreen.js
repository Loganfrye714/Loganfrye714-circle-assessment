import React from "react";
import { NavLink } from "react-router-dom";

function homescreen() {
  return (
    <div className="App">
      <header className="App-header">
        <div> Logan Frye's - Technical Assessment Answers</div>
        <NavLink to="questionOne">
          <button className="homepage__button">Question 1</button>
        </NavLink>
        <NavLink to="questionTwo">
          <button className="homepage__button">Question 2</button>
        </NavLink>
        <NavLink to="questionThree">
          <button className="homepage__button">Question 3</button>
        </NavLink>
        <NavLink to="questionFour">
          <button className="homepage__button">Question 4</button>
        </NavLink>
      </header>
    </div>
  );
}

export default homescreen;
