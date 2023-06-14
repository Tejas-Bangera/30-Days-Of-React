import "./usercard.css";
import userImage from "../assets/images/user-profile-pic.png";
const UserCard = ({ darkMode, setDarkMode }) => {
  const darkModeClass = darkMode ? "user-card-dark" : "user-card-light";
  const darkModeHighlight = darkMode
    ? "user-card-dark-highlight"
    : "user-card-light-highlight";

  return (
    <section className={`user-card ${darkModeClass}`}>
      <div className="user-profile-picture-row">
        <img className="user-profile-picture" src={userImage} alt="profile" />
        <button
          type="button"
          className="dark-mode-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          <i
            className={
              "fa-solid darkmode-button fa-toggle-" + (darkMode ? "on" : "off")
            }
            style={{ color: "#000000" }}
          ></i>
        </button>
      </div>
      <div className="user-name-row">
        <h4 className="user-name">TEJAS BANGERA</h4>
        <i
          className="fa-sharp fa-solid fa-circle-check"
          style={{ color: darkMode ? "#3de1de" : "#f16e6e" }}
        ></i>
      </div>
      <p>Senior Developer, India</p>
      <h4>SKILLS</h4>
      <ul className="skills-list">
        <li className={`skills-list-item ${darkModeHighlight}`}>HTML</li>
        <li className={`skills-list-item ${darkModeHighlight}`}>CSS</li>
        <li className={`skills-list-item ${darkModeHighlight}`}>JS</li>
        <li className={`skills-list-item ${darkModeHighlight}`}>React</li>
        <li className={`skills-list-item ${darkModeHighlight}`}>Node</li>
        <li className={`skills-list-item ${darkModeHighlight}`}>PostgreSQL</li>
        <li className={`skills-list-item ${darkModeHighlight}`}>Git</li>
      </ul>
      <div className="joined-on-row">
        <i className="fa-regular fa-clock" style={{ color: "#878787" }}></i>
        <p className="joined-on-info">Joined on Jun 13, 2023</p>
      </div>
    </section>
  );
};
export default UserCard;
