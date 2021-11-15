import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

function QuestonTwo() {
  const [cookies, setCookie, removeCookie] = useCookies(["counter"]);

  useEffect(() => {
    function handleCookie() {
      let cookieNum = Number(cookies.counter) + 1;
      setCookie("counter", cookieNum, { path: "/" });
    }
    handleCookie();
  }, []);

  console.log(cookies.counter);
  function handleRemoveCookie() {
    let num = 0;
    setCookie("counter", num, { path: "/" });
  }

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
      <h4>Answer -</h4>
      <button onClick={handleRemoveCookie}>Remove Cookie</button>
    </div>
  );
}

export default QuestonTwo;
