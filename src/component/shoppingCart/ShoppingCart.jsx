import React from "react";
import { removeFromCart } from "../../store/Action";
import { useDispatch } from "react-redux";
import "./ShoppingCart.css";
const ShoppingCart = ({ img, title, price, id }) => {
  const dispatch = useDispatch();
  const hRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <li className="d-flex justify-content-between text-nowrap border m-1 p-1">
      <section className="d-flex">
        <img
          className="px-2 "
          src={img}
          alt={title}
          style={{ width: "60px", height: "60px" }}
        />
        <p
          className="px-2  align-items-center text-center m-0   d-flex"
          style={{ height: "60px" }}
        >
          {title}
        </p>
      </section>

      <section className="d-flex align-items-center  ">
        <p className="d-flex align-items-center m-0  px-2 ">price: {price}$</p>
        <p
          className=" border border-3 rounded-5 btn m-0 p-0 text-white bg-danger xremove"
          onClick={() => hRemoveCart(id)}
        >
          X
        </p>
      </section>
    </li>
  );
};

export default ShoppingCart;
