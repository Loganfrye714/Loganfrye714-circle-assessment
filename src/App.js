import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homescreen from "./Screens/homescreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
