import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegistrationForm = () => {
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/users/new`, userInfo)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => alert("username not available"));
  };

  return (
    <div>
      <form className="registrationForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
