import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { CartContext, CartProvider } from "./Contexts/CartContext";
import { WishListContext, WishListProvider } from "./Contexts/WishListContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { CartContext };
export { WishListContext };

root.render(
  //<StrictMode>
  <Router>
    <CartProvider>
      <WishListProvider>
        <App />
      </WishListProvider>
    </CartProvider>
  </Router>
  //</StrictMode>
);
