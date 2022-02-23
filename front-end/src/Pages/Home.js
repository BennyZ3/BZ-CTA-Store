import Products from "../Components/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      Homepage
      <Products featured={true} />
    </div>
  );
};

export default Home;
