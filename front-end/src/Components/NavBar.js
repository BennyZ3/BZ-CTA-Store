import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import Cart from "./Cart";
import "./Nav.css";

function NavBar(props) {
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
        <div>
          <h1>Home</h1>
        </div>
      </Link>
      <div className="navProducts">
        <Link to="/products">
          <div>
            <h1>All Items</h1>
          </div>
        </Link>
        {props.admin.admin && (
          <Link to="/products/new">
            <div>
              <button>New Item</button>
            </div>
          </Link>
        )}
      </div>
      {/* Login /register*/}
      <div className="navUser">
        {user.username ? (
          <div className="loggedIn">
            <h4>User: {user.username}</h4>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
            <Cart nav={true} username={user.username} />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
