import "./subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe-container">
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
          <button className="subscribe-form-button" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};
export default Subscribe;
