import axios from "axios";
import { useState } from "react";

const Login = () => {
  const API = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState({ username: "", password: "" });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`${API}/users`, user).then((response) => {
      if (response.data.success) {
        console.log("success");
        document.cookie = `username=${user.username}`;
        window.location.reload(true);
      } else {
        console.log("fail");
        alert("Invalid username of password");
      }
    });
  };
  return (
    <div className="Login">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <div>
          <label for="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label for="password">Password: </label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
