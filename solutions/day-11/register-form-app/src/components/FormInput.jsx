import { useState } from "react";
import "../styles/formInput.css";

const FormInput = ({ id, label, onChange, errorMessage, ...props }) => {
  const [onLeave, setOnLeave] = useState(false);

  return (
    <div className="form-input">
      <label htmlFor={props.name}>{label}</label>
      <input
        id={props.name}
        {...props}
        onChange={onChange}
        onBlur={() => setOnLeave(true)}
        onFocus={() => props.name === "confirmPassword" && setOnLeave(true)}
        focused={onLeave.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default FormInput;
