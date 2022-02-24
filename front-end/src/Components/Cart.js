import { Link } from "react-router-dom";

const { default: axios } = require("axios");
const { useEffect, useState } = require("react");

const Cart = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .post(`${API}/users/cart`, {
        username: props.username,
      })
      .then((response) => {
        setCart(response.data.payload);
      });
  }, [props, API]);
  return (
    <div>
      <Link to="/cart">
        <h4 className="cart">Cart: {cart.length} </h4>
      </Link>
    </div>
  );
};

export default Cart;
