import { Link } from "react-router-dom";

const { default: axios } = require("axios");
const { useEffect, useState } = require("react");

const CartPage = () => {
  const API = process.env.REACT_APP_API_URL;
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .post(`${API}/users/cart`, {
        username: document.cookie.split("=")[1],
      })
      .then((response) => {
        setCart(response.data.payload);
      });
  }, [API]);
  const handleDelete = (event) => {
    axios.delete(`${API}/transactions/${event.target.value}`).then(
      () => {
        console.log(`deleted transaction ${event.target.value}`);
        window.location.reload(true);
      },
      (error) => console.warn(error)
    );
  };
  // accumulator for total
  let cartTotal = 0;
  return (
    <div className="cartPage">
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
              // pricing only the items in stock
              cartTotal += Number(product.price);
            }
            return (
              <tr>
                <td>
                  <img
                    className="thumbs"
                    src={`${product.image}`}
                    alt="thumbnail"
                  />
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
      <h2>Total: ${cartTotal.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;
