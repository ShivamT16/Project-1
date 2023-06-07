import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h3> Total Item In The Cart - {cart.length} </h3>
      {cart.map((item) => {
        const { id, name, price, image } = item;

        return (
          <div key={id} style={{ border: "solid", margin: "1rem" }}>
            <img alt="product img" src={image} />
            <ul>{name}</ul>
            <ul>INR:{price}</ul>
          </div>
        );
      })}
      <h3>
        Total price:- {cart.reduce((acc, curr) => (acc += curr.price), 0)}
      </h3>
      <button
        style={{
          fontSize: "1.5rem",
          padding: "0.5rem 2rem ",
          borderRadius: "1.5rem",
          backgroundColor: "#F8ED12"
        }}
      >
        CheckOut <strong> >>> </strong>
      </button>
    </div>
  );
};
