import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";

const Form = (props) => {
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  let params = useParams();
  let { edit } = props;
  const id = params.id ? params.id : null;
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    rating: 0,
    featured: false,
    image: "",
    inventory: 0,
  });
  useEffect(() => {
    if (edit) {
      axios.get(`${API}/products/${id}`).then((response) => {
        setProduct(response.data.payload);
      });
    } else {
      setProduct({ ...product });
    }
  }, [API, id, edit, product]);

  const handleChange = (event) => {
    if (event.target.id === "featured") {
      setProduct({ ...product, featured: !product.featured });
    } else {
      setProduct({ ...product, [event.target.id]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (edit) {
      //put request function
      axios
        .put(`${API}/products/${id}`, product)
        .then(() => {
          navigate(`/products`);
        })
        .catch((error) => console.warn(error));
    } else {
      //post request
      axios
        .post(`${API}/products`, product)
        .then(() => {
          navigate("/products");
        })
        .catch((error) => console.warn(error));
    }
  };

  return (
    <form className="productForm" onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input
        required
        id="name"
        name="name"
        type="text"
        value={product.name}
        onChange={handleChange}
        placeholder="name"
      />
      <label for="description">Description:</label>
      <input
        id="description"
        name="description"
        type="text"
        value={product.description}
        onChange={handleChange}
        placeholder="description"
      />
      <label for="price">Price:</label>
      <input
        id="price"
        name="price"
        type="number"
        value={product.price}
        onChange={handleChange}
        placeholder="price"
      />
      <label for="rating">Rating:</label>
      <input
        id="rating"
        name="rating"
        type="number"
        value={product.rating}
        onChange={handleChange}
        placeholder="rating"
      />
      <label for="featured">Featured:</label>
      <input
        id="featured"
        name="featured"
        type="checkbox"
        checked={product.featured}
        onChange={handleChange}
        placeholder="featured"
      />
      <label for="image">Image:</label>
      <input
        id="image"
        name="image"
        type="text"
        value={product.image}
        onChange={handleChange}
        placeholder="image"
      />
      <label for="inventory">Stock:</label>
      <input
        id="inventory"
        name="inventory"
        type="number"
        value={product.inventory}
        onChange={handleChange}
        placeholder="inventory"
      />
      <button handleSubmit={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
