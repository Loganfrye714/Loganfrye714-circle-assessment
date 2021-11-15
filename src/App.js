import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "./Screens/homescreen";
import QuestionOne from "./Screens/questionOne";
import QuestonTwo from "./Screens/questonTwo";
import QuestionThree from "./Screens/questionThree";
import QuestionFour from "./Screens/questionThree";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
        </Routes>
        <Routes>
          <Route path="/questionOne" element={<QuestionOne />} />
        </Routes>
        <Routes>
          <Route path="/questionTwo" element={<QuestonTwo />} />
        </Routes>
        <Routes>
          <Route path="/questionThree" element={<QuestionThree />} />
        </Routes>
        <Routes>
          <Route path="/questionFour" element={<QuestionFour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
