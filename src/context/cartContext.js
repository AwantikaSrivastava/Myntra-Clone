import React from "react";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cartValue, setcartValue] = React.useState([]);

  const addToCart = (selectedProduct) => {
    setcartValue([...cartValue, selectedProduct]);
  };

  return (
    <CartContext.Provider value={{ cartValue, addToCart, name: "aviral" }}>
      {props.children}
    </CartContext.Provider>
  );
};
