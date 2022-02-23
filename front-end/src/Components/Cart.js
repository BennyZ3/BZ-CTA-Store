const { default: axios } = require("axios");
const { useEffect, useState } = require("react");

const Cart = (props) => {
  //   console.log("cart");
  const API = process.env.REACT_APP_API_URL;
  const [cart, setCart] = useState([]);
  useEffect(async () => {
    await axios
      .post(`${API}/users/cart`, {
        username: props.username,
      })
      .then((response) => {
        setCart(response.data.payload);
      });
  });
  return (
    <div>{props.nav ? <p>{cart.length} </p> : <>{console.log(cart)}</>}</div>
  );
};

export default Cart;
