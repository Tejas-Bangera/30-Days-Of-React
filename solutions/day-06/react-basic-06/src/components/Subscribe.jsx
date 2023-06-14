import "./subscribe.css";

const Subscribe = ({ darkMode }) => {
  const darkModeClass = darkMode ? "subscribe-dark" : "subscribe-light";
  const darkModeHighlight = darkMode
    ? "subscribe-dark-highlight"
    : "subscribe-light-highlight";

  return (
    <section className={`subscribe-container ${darkModeClass}`}>
      <form action="#">
        <p className="subscribe-title">SUBSCRIBE</p>
        <p className="subscribe-form-info">
          Sign up with your email address to receive news and updates.
        </p>
        <input
          className="subscribe-form-input"
          type="text"
          placeholder="First name"
        />
        <input
          className="subscribe-form-input"
          type="text"
          placeholder="Last name"
        />
        <input
          className="subscribe-form-input"
          type="text"
          placeholder="Email"
        />
        <div>
          <button
            className={`subscribe-form-button ${darkModeHighlight}`}
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};
export default Subscribe;
