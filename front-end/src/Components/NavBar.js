import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import Cart from "./Cart";
import "./Nav.css";

function NavBar() {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ username: document.cookie.split("=")[1] });
  }, []);
  const handleLogout = () => {
    console.log("logout", document.cookie);
    document.cookie = "username=";
    console.log(document.cookie);
    window.location.reload(false);
  };
  return (
    <nav>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/products">
        <div>All Items</div>
      </Link>
      {/* Login /register*/}
      <div className="navUser">
        {user.username ? (
          <>
            User: {user.username}
            <div onClick={handleLogout}>Logout</div>
            {/* Cart if login */}
            <Cart nav={true} username={user.username} />
          </>
        ) : (
          <Login />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
