import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import Details from "./Pages/Details";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import PageNotFound from "./Pages/PageNotFound";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import { useState, useEffect } from "react";
import axios from "axios";
import CartPage from "./Pages/CartPage";

function App() {
  console.log(document.cookie);
  const API = process.env.REACT_APP_API_URL;
  const [admin, setAdmin] = useState({});
  useEffect(() => {
    axios
      .post(`${API}/users/admin`, { username: document.cookie.split("=")[1] })
      .then((response) => {
        setAdmin(response.data.payload);
      });
  }, [API]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<Details admin={admin} />} />
            <Route path="/products/new" element={<New />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
