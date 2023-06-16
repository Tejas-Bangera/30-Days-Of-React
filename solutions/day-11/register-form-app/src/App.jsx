import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters in length and should not contain any special characters.",
      required: true,
      pattern: "[a-zA-Z0-9]{3,16}",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      errorMessage: "Invalid email id!",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "Password",
      errorMessage:
        "Password should be at least 8 characters in length, and should include at least 1 upper case letter, 1 number and 1 special character.",
      required: true,
      pattern: "^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      errorMessage: "Passwords don't match!",
      required: true,
      pattern: formData.password,
    },
  ];

  return (
    <div className="App">
      <form action="#">
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
