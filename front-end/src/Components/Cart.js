import { Link } from "react-router-dom";
// import Product from "./Product";

const { default: axios } = require("axios");
const { useEffect, useState } = require("react");

const Cart = (props) => {
  //   console.log("cart");
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
      {/* {props.nav ? ( */}
      <Link to="/cart">
        <p>Cart: {cart.length} </p>
      </Link>
      {/* //   ) : (
        //       <table>
        //           <thead>
        //               <tr>
        //                   <th>Image</th>
        //                   <th>Name</th>
        //                   <th>Price</th>
        //                   <th>Rating</th>
        //                   <th>In Stock</th>
        //               </tr>
        //           </thead>
        //           <tbody>
        //               {cart.map((product) => {
        //                   return <Product key={product.id} product={product} />;
        //               })}
        //           </tbody>
        //       </table>
        //   )} */}
    </div>
  );
};

export default Cart;
