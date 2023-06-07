import { useContext } from "react";
import { CartContext } from "..";
import { useState } from "react";
import { WishListContext } from "..";

export const Filter = ({ products }) => {
  const { handleCartUpdate } = useContext(CartContext);
  const { handleWishListUpdate } = useContext(WishListContext);
  const [state, setState] = useState("");
  const [low, setLow] = useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  //asc = products.map((e) => e.price);
  const asc1 = products.map((e) => e.price).sort((a, b) => a - b);
  //const asc2 = asc.sort((a, b) => b - a);
  //console.log(asc);
  const handleChange1 = () => {
    setLow((low) => asc1);
  };
  console.log(low);
  return (
    <div>
      <p>
        <input type="checkbox" onClick={handleChange1} />
        Low to High
      </p>
      <p>
        <input type="checkbox" onChange={handleChange1} />
        High to Low
      </p>
      <p>
        <input type="checkbox" onChange={handleChange} value="wired" />
        Wired
      </p>
      <p>
        <input type="checkbox" onClick={handleChange} value="wireless" />{" "}
        Wireless
      </p>
      <p>
        <input type="checkbox" onClick={handleChange} value="speaker" />{" "}
        Speakers
      </p>
      {products
        .filter(({ id, name, price, category }) => category === state)
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
};
