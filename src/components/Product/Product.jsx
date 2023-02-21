import React from "react";
import { CartContext } from "../../context/cartContext";
import "./Product.css";

const Product = ({ item }) => {
  let value = React.useContext(CartContext);
  return (
    <div className="each-item">
      <div className="img-wrapper">
        <img src={item.searchImage} alt="product-img" />
      </div>
      <div className="content-wrapper">
        <h3 className="brand-name">{item.brand}</h3>
        <h4 className="brand-desc"> {item.additionalInfo}</h4>
        <h5>
          <span className="b-d-price">Rs. {item.price}</span>
          {item.discountDisplayLabel ? (
            <span className="b-price">Rs. {item.mrp}</span>
          ) : null}
          <span className="b-discount">{item.discountDisplayLabel}</span>
        </h5>
        <button
          className={`add-to-cart-btn`}
          onClick={() => value.addToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
