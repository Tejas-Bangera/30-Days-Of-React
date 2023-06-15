import { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const buttonWidth = 150;
  const buttonHeight = 150;

  const maxWidth = window.innerWidth - buttonWidth;
  const maxHeight = window.innerHeight - buttonHeight;

  return (
    <div className="App">
      <button
        id="runner"
        style={{ top: position.y + "px", left: position.x + "px" }}
        onMouseOver={() => {
          const x = Math.floor(Math.random() * maxWidth);
          const y = Math.floor(Math.random() * maxHeight);

          setPosition({ x, y });
        }}
        onClick={(event) => {
          alert("You caught me :(");
        }}
      >
        Catch me if you can!
      </button>
    </div>
  );
}

export default App;
