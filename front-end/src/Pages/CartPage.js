import { Link } from "react-router-dom";
import Product from "../Components/Product";

const { default: axios } = require("axios");
const { useEffect, useState } = require("react");

const CartPage = () => {
  const API = process.env.REACT_APP_API_URL;
  const [cart, setCart] = useState([]);
  useEffect(async () => {
    await axios
      .post(`${API}/users/cart`, {
        username: document.cookie.split("=")[1],
      })
      .then((response) => {
        setCart(response.data.payload);
      });
  }, [document.cookie]);
  const handleDelete = (event) => {
    console.log(event.target.value);
    // axios.delete(`${API}/transactions/`)
  };

  let cartTotal = 0;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => {
            if (product.inventory > 0) {
              cartTotal += Number(product.price);
            }
            return (
              <tr>
                <td>
                  <img className="thumbs" src={`${product.image}`} />
                </td>
                <td>
                  <Link to={`/products/${product.id}`}>
                    <h4>{product.name}</h4>
                  </Link>
                </td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.inventory > 0 ? "yes" : "no"}</td>
                <td>
                  <button onClick={handleDelete} value={product.transact_id}>
                    Remove from Cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Total: {cartTotal}</p>
    </div>
  );
};

export default CartPage;
