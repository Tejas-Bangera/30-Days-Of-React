import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Redirect,
  Prompt,
} from "react-router-dom";

const Home = (props) => <h1>Welcome Home</h1>;
const About = (props) => <h1>About Us</h1>;
const Contact = (props) => <h1>Contact us</h1>;
const Challenges = (props) => <h1>30 Days of React Challenge</h1>;
const NotFound = (props) => {
  return (
    <>
      <h1>404</h1>
      <h2>Page not found!</h2>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/challenges">Challenges</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
