import html_logo from "../assets/images/html_logo.png";
import css_logo from "../assets/images/css_logo.png";
import js_logo from "../assets/images/JS_Badge.png";
import react_logo from "../assets/images/react_logo.png";
import "./frontendtech.css";

const FrontEndTech = () => {
  return (
    <section>
      <h3>Front End Technologies</h3>
      <div className="tech-container">
        <img className="frontend-logo" src={html_logo} alt="HTML" />
        <img className="frontend-logo" src={css_logo} alt="CSS" />
        <img className="frontend-logo" src={js_logo} alt="JS" />
        <img className="frontend-logo" src={react_logo} alt="REACT" />
      </div>
    </section>
  );
};
export default FrontEndTech;
