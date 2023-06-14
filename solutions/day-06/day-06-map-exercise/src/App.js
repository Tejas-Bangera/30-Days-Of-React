import "./App.css";
import HexaNumbers from "./components/HexaNumbers";
import Numbers from "./components/Numbers";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="app-title">30 Days of React</h2>
      </header>
      <Numbers />
      <HexaNumbers />
    </div>
  );
}

export default App;
