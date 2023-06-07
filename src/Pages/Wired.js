import { useContext } from "react";
import { CartContext } from "..";
import { WishListContext } from "..";

export function Wired({ products }) {
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishListUpdate } = useContext(WishListContext);
  return (
    <div>
      {products
        .filter(({ id, name, price, category }) => category === "wired")
        .map((item) => {
          const { id, name, price, image } = item;
          return (
            <div key={id} style={{ border: "3px solid", margin: "1rem" }}>
              <img alt="product img" src={image} />
              <ul>{name} </ul>
              <ul> INR: {price}</ul>
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
              <button
                style={{
                  fontSize: "1rem",
                  padding: "0.5rem 2rem ",
                  borderRadius: "1.5rem",
                  backgroundColor: "#B6D908",
                  margin: "1rem"
                }}
                onClick={() => handleWishListUpdate(item)}
              >
                Add to Favourite
              </button>
            </div>
          );
        })}
    </div>
  );
}
