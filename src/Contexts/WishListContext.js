import { createContext, useState } from "react";

export const WishListContext = createContext();

export function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const handleWishListUpdate = (item) => {
    setWishList((wishList) => [...wishList, item]);
  };

  return (
    <WishListContext.Provider value={{ wishList, handleWishListUpdate }}>
      {children}
    </WishListContext.Provider>
  );
}
