import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import Details from "./Pages/Details";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import PageNotFound from "./Pages/PageNotFound";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";

function App() {
  // document.cookie = document.cookie.split("=")[1]
  //   ? document.cookie
  //   : "username=";
  console.log(document.cookie);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/products/new" element={<New />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
