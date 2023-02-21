import React, { useState, useEffect } from "react";
import Product from "../Product/Product";
import productsData from '../../constants/products.json'
import "./List.css";

const List = () => {
  const [data, setData] = useState(null);
  useEffect(() => { 
    const data = productsData
    setData(data)
   // fetch("https://demo9170788.mockable.io/products")
     // .then((res) => res.json())
     // .then((data) => {
      //  setData(data);
    //  });
  }, []);
  return (
    
      <div className="each-item-wrapper">
      {data &&
        data.products.map((eachItem, index) => {
          return  <Product item={eachItem} key={eachItem.productId} />;
        })}
    </div>
    
  );
};

export default List;
