import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./Home";
import Math from "./Math";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/:operation/:num1/:num2" element={<Math />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
