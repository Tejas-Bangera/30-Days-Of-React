import { useState } from "react";
import "./App.css";
import FrontEndTech from "./components/FrontEndTech";
import Subscribe from "./components/Subscribe";
import UserCard from "./components/UserCard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className="App"
      style={{ backgroundColor: darkMode ? "rgb(26, 26, 26)" : "whitesmoke" }}
    >
      <FrontEndTech darkMode={darkMode} />
      <UserCard darkMode={darkMode} setDarkMode={setDarkMode} />
      <Subscribe darkMode={darkMode} />
    </div>
  );
}

export default App;
