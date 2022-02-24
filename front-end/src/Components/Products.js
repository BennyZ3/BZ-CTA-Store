import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

function Products(props) {
  const API = process.env.REACT_APP_API_URL;
  //ternary used to use the component for 2 pages
  const callAPI = props.featured
    ? API + "/products/featured"
    : API + "/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${callAPI}`)
      .then((response) => setProducts(response.data.payload))
      .catch((error) => console.warn(error));
  }, [callAPI]);
  return (
    <div className="Products">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
            <th>In Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
