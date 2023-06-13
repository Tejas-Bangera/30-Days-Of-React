import "./usercard.css";
import userImage from "../assets/images/user-profile-pic.png";
const UserCard = () => {
  return (
    <section className="user-card">
      <img className="user-profile-picture" src={userImage} alt="profile" />
      <div className="user-name-row">
        <h4 className="user-name">TEJAS BANGERA</h4>
        <i
          className="fa-sharp fa-solid fa-circle-check"
          style={{ color: "#3de1de" }}
        ></i>
      </div>
      <p>Senior Developer, India</p>
      <h4>SKILLS</h4>
      <ul className="skills-list">
        <li className="skills-list-item">HTML</li>
        <li className="skills-list-item">CSS</li>
        <li className="skills-list-item">JS</li>
        <li className="skills-list-item">React</li>
        <li className="skills-list-item">Node</li>
        <li className="skills-list-item">PostgreSQL</li>
        <li className="skills-list-item">Git</li>
      </ul>
      <div className="joined-on-row">
        <i className="fa-regular fa-clock" style={{ color: "#878787" }}></i>
        <p className="joined-on-info">Joined on Jun 13, 2023</p>
      </div>
    </section>
  );
};
export default UserCard;
