import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import Details from "./Pages/Details";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import PageNotFound from "./Pages/PageNotFound";

const API = process.env.REACT_APP_API_URL;

// console.log(API);
function App() {
  //   const [days, setDays] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get(`${API}/test`)
  //       .then(
  //         (response) => {
  //           setDays(response.data);
  //         },
  //         (error) => console.log("get", error)
  //       )
  //       .catch((c) => console.warn("catch", c));
  //   }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/products/new" element={<New />} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      {/* <ul>
        {days.map((day) => (
          <li key={day.name}>{day.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
