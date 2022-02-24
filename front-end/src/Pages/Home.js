import Products from "../Components/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h2>Featured Items: </h2>
      <Products featured={true} />
    </div>
  );
};

export default Home;
