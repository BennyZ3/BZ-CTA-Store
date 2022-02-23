import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const API = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState({ username: "", password: "" });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // validate with backend info later
    const login = await axios.post(`${API}/users`, user).then((response) => {
      console.log(user, response);
      if (response.data.success) {
        console.log("success");
        document.cookie = `username=${user.username}`;
        console.log(document.cookie);
        window.location.reload(true);
      } else {
        console.log("fail");
        alert("Invalid username of password");
      }
    });
    // if (login.data.success) {
    //   document.cookie = `username=${event.target.username.value}`;
    //   console.log(document.cookie);
    //   //   window.location.reload(true);
    //   //   navigate("/");
    // } else {
    //   alert("Invalid username of password");
    // }
  };
  return (
    <div className="Login">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <label for="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
        ></input>
        <label for="password">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
