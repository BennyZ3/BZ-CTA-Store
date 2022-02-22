import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const [user, setUser] = useState({});
  useEffect(async () => {
    await setUser({ username: document.cookie.split("=")[1] });
  }, [document.cookie]);
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
        <div>
          {user.username}
          {user.username ? (
            <div onClick={handleLogout}>Logout</div>
          ) : (
            <Link to="/login">
              <div>Login</div>
            </Link>
          )}
        </div>
      </div>
      {/* Cart if login */}
    </nav>
  );
}

export default NavBar;
