import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Details.css";

const Details = () => {
  const API = process.env.REACT_APP_API_URL;
  const [product, setProduct] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/products/${params.id}`)
      .then((response) => setProduct(response.data.payload))
      .catch((error) => console.warn(error));
  }, [API, params.id]);

  const handleAddToCart = () => {
    axios
      .post(`${API}/transactions/add`, {
        username: document.cookie.split("=")[1],
        product_id: params.id,
      })
      .then(() => {
        navigate("/cart");
        //window reload to update navbar info
        window.location.reload(false);
      });
  };

  //admin only
  const handleDelete = () => {
    axios.delete(`${API}/products/${params.id}`).then(
      () => {
        navigate("/products");
      },
      (error) => console.warn(error)
    );
  };

  return (
    <div className="Details">
      Details
      <img className="displayImg" src={product.image} />
      <div>
        <strong>Name:</strong> {product.name}
      </div>
      <div>
        <strong>Description:</strong> {product.description}
      </div>
      <div>
        <strong>Price:</strong> {product.price}
      </div>
      <div>
        <strong>Inventory:</strong> {product.inventory}
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Link to={`/products`}>
        <button>Back</button>
      </Link>
      <Link to={`/products/${params.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default Details;
