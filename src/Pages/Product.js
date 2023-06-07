import { useContext } from "react";
import { CartContext } from "..";
import { WishListContext } from "..";

export function Product({ products }) {
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishListUpdate } = useContext(WishListContext);
  return (
    <div>
      {products.map((item) => {
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
