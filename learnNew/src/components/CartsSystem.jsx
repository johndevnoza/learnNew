import React from "react";
import "../css/Carts.css";
import { useCart } from "../hooks/Store";
import { products } from "../utils/Constants";
import CartCard from "./CartCard";

export default function CartsSystem() {
  return (
    <div className="cartAppWrapper">
      <div className="productsWrapper">
        {products.map((product) => (
          <CartCard key={product.id} {...product} />
        ))}
      </div>
      <span className="showCarts">Show Carts</span>
      <div className="cartsWrapper"></div>
    </div>
  );
}
