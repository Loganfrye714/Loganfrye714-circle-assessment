import React from "react";

function questionOne() {
  function printHelloWorld() {
    console.log("Hello World");
  }
  setInterval(printHelloWorld, 10000);

  return (
    <div className="App-header">
      <h2>
        Question - Create a function that logs “Hello World” to the console
        every 10 seconds.
      </h2>
      <h2>Answer - Please view console</h2>
    </div>
  );
}

export default questionOne;
