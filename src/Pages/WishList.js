import { useContext } from "react";
import { WishListContext } from "../Contexts/WishListContext";
import { CartContext } from "..";

export const WishList = () => {
  const { handleCartUpdate } = useContext(CartContext);
  const { wishList } = useContext(WishListContext);

  return (
    <div>
      <h3> Here is Your WishList </h3>
      {wishList.map((item) => {
        const { id, name, price, image } = item;

        return (
          <div key={id} style={{ border: "solid", margin: "1rem" }}>
            <img alt="product img" src={image} />
            <ul>{name}</ul>
            <ul>INR:{price}</ul>
            <button
              style={{
                fontSize: "1rem",
                padding: "0.5rem 2rem ",
                borderRadius: "1.5rem",
                backgroundColor: "#ECD619",
                margin: "1rem"
              }}
              onClick={() => handleCartUpdate(item)}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
