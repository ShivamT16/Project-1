import "./styles.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
//import { Link } from "react";

import { DataBase } from "./Data/productsDB";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { Home } from "./Pages/Home";
import { Wired } from "./Pages/Wired";
import { Wireless } from "./Pages/Wireless";
import { WishList } from "./Pages/WishList";
import { Speaker } from "./Pages/Speaker";
import { Filter } from "./Pages/Filter";

export default function App() {
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "burlywood",
          paddingBlock: "1.7rem",
          borderRadius: "1rem"
        }}
      >
        <NavLink to="/">Home</NavLink> ---
        <NavLink to="/product"> Product </NavLink> ---
        <NavLink to="/wishList"> WishList </NavLink> ---
        <NavLink to="/cart"> Cart </NavLink>
      </nav>
      <Link to="/Filter">
        <input style={{ margin: "0.5rem" }} type="text" />
      </Link>
      <button>Search</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product products={DataBase} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wired" element={<Wired products={DataBase} />} />
        <Route path="/wireless" element={<Wireless products={DataBase} />} />
        <Route path="/wishList" element={<WishList products={DataBase} />} />
        <Route path="/speaker" element={<Speaker products={DataBase} />} />
        <Route path="/filter" element={<Filter products={DataBase} />} />
      </Routes>
    </div>
  );
}
