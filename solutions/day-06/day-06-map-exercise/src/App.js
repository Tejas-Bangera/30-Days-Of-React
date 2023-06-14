import "./App.css";
import HexaNumbers from "./components/HexaNumbers";
import Numbers from "./components/Numbers";
import WorldPopulation from "./components/WorldPopulation";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="app-title">30 Days of React</h2>
      </header>
      <Numbers />
      <HexaNumbers />
      <WorldPopulation />
    </div>
  );
}

export default App;
