import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <tr className="Product">
      <td>
        <Link to={`/prodcuts/${product.id}`}>
          <h4>{product.name}</h4>
        </Link>
      </td>
      <td>{product.price}</td>
      <td>{product.rating}</td>
      <td>{product.inventory > 0 ? "yes" : "no"}</td>
    </tr>
  );
}

export default Product;
