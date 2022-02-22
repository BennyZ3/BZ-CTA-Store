const Login = () => {
  const handleSubmit = (event) => {
    // event.preventDefault();
    // validate with backend info later
    console.log(event.target.username.value);
    document.cookie = `username=${event.target.username.value}`;
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
        ></input>
        <label for="password">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
        ></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
