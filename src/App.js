import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
<<<<<<< HEAD
import Login from "./pages/Login"

const App = () => {
 
=======
const App = () => {
>>>>>>> 4492678d782ebc26c12a56887defbe7e0957d015
  return (
    <div className="overflow-hidden">
      {/* react app */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/login" element={<Login/>} />
=======
>>>>>>> 4492678d782ebc26c12a56887defbe7e0957d015
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
