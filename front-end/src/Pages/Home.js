import Products from "../Components/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      Home
      <Products featured={true} />
    </div>
  );
};

export default Home;
