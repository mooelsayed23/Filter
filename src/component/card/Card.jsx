import React from "react";
import "./Card.css";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/Action";
import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";

const Card = ({ img, title, rev, oldprice, price, company, id }) => {
  const cartSelect = useSelector((z) => z.cartItem);
  let cartSelectId = cartSelect.map((e) => e.id);
  const dispatch = useDispatch();
  const hAddCart = (id, img, title, price) => {
    dispatch(addToCart({ id: id, img: img, title: title, price: price }));
  };

  const hRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="card-container grow w-full">
      <div className="card mx-0">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h5 className="card-title">{title}</h5>
          <p className="text-info">{company}</p>
          <section className="flex">
            <FaStar className="card-star" />
            <FaStar className="card-star" />
            <FaStar className="card-star" />
            <FaStar className="card-star" /> 
            <div className="reviews ms-2">{rev}</div>
          </section>
          <section className="card-price">
            <div>
              <del>
                <small>{oldprice}</small>
              </del>
              {price}
            </div>
            <div id={id} className="btn p-0 m-0">
              {cartSelectId.includes(id) ? (
                <div onClick={() => hRemoveCart(id)}>
                  <TfiShoppingCartFull className="bag-icons text-info" />
                </div>
              ) : (
                <div onClick={() => hAddCart(id, img, title, price)}>
                  <TfiShoppingCart
                    className="bag-icons "
                    style={{ transform: "rotateY(180deg)" }}
                  />
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;
