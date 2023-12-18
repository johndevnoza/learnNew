import React from "react";
import "../css/Carts.css"

export default function CartCard({ name, price, image }) {
  return (
    <>
      <div className="cardWrapper">
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <div className="priceAddWrapper">
          <span>{price}$</span>
          <span className="add">Add</span>
        </div>
      </div>
    </>
  );
}
