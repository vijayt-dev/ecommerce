import { Routes,Route } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Product from "./components/Product";
import { createContext } from "react";
import StoreLogin from "./components/StoreLogin";
export const UserLoginContext = createContext()

function App() {
  return (
    <div className="App">
     <NavBar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
