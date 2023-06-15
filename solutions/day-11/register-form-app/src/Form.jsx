import "./form.css";

const Form = () => {
  return (
    <>
      <div className="form-container">
        <h1 className="form-title">Register</h1>
        <form action="#">
          <label className="form-block-item form-label" htmlFor="username">
            Username
          </label>
          <input
            className="form-block-item form-input"
            type="text"
            id="username"
          />
          <label className="form-block-item form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-block-item form-input"
            type="email"
            id="email"
          />
          <label className="form-block-item form-label" htmlFor="birthday">
            Birthday
          </label>
          <input
            className="form-block-item form-input"
            type="date"
            id="birthday"
          />
          <label className="form-block-item form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-block-item form-input"
            type="password"
            id="password"
          />
          <label
            className="form-block-item form-label"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="form-block-item form-input"
            type="password"
            id="confirm-password"
          />
          <button className="form-block-item form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Form;
