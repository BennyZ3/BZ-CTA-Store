import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Details.css";

const Details = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [product, setProduct] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const user = document.cookie.split("=")[1];
  // console.log(props.admin.admin);
  useEffect(() => {
    axios
      .get(`${API}/products/${params.id}`)
      .then((response) => setProduct(response.data.payload))
      .catch((error) => console.warn(error));
  }, [API, params.id]);

  const handleAddToCart = () => {
    axios
      .post(`${API}/transactions/add`, {
        username: user,
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
      <img className="displayImg" src={product.image} alt="img" />
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
      {user && <button onClick={handleAddToCart}>Add to Cart</button>}
      <Link to={`/products`}>
        <button>Back</button>
      </Link>
      {props.admin.admin && (
        <>
          <Link to={`/products/${params.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>DELETE</button>
        </>
      )}
    </div>
  );
};

export default Details;
