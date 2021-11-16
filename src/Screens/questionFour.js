import React from "react";
import { NavLink } from "react-router-dom";
import sandbox from "./sandbox.png";

function questionFour() {
  return (
    <div className="App-header">
      <NavLink to="/">
        <button className="homepage__button">Home</button>
      </NavLink>
      <h4>
        Question - Follow the steps in this guide to get a Circle API key and
        install the sample payments application. Add a few of the pre-loaded
        cards to your sandbox account and generate a list of all of the cards
        that have been added to your account via the API. Take a screenshot of
        this list in the sample payments app and share it.
      </h4>
      <img src={sandbox} className="sandbox__image" alt="sandbox" />
    </div>
  );
}

export default questionFour;
