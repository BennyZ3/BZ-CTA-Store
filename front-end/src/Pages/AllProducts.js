import Products from "../Components/Products";
import "./AllProducts.css";

const AllProducts = () => {
  return (
    <div className="AllProducts">
      AllProducts
      <Products featured={false} />
    </div>
  );
};

export default AllProducts;
