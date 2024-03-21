import React, { useState } from "react";
import "./Nav.css";
import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import {
  setCategory,
  setColor,
  setCompany,
  setPrice,
  setTitle,
} from "../../store/Action";
const Nav = () => {
  let dispatch = useDispatch();
  const itemId = useSelector((item) => item.cartItem);
  let [searchQuery, setSearchQuery] = useState("");
  let hInputChange = (value) => {
    setSearchQuery(value);
    dispatch(setCompany(""));
    dispatch(setCategory(""));
    dispatch(setPrice(""));
    dispatch(setColor(""));
    dispatch(setTitle(value));
  };
  let data = [];
  if (itemId.length > 0) {
    data = itemId.map((e) => e);
  }
  let shopping = itemId.length > 0 ? true : false;
  return (
    <>
      <div className="nav-contener   border-bottom py-2.5">
        <div className="w-10/12 mx-auto  d-flex justify-content-between align-items-center  m-0 text-2xl ">
          <div className="text-info fs-3">
            <a href="/" className="logo-link ">
              Souq
            </a>
          </div>
          <div className="w-50">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="ابحث هنا"
              className="w-100 rounded-2 border-0 p-2 m-2    "
              onChange={(e) => hInputChange(e.target.value)}
              value={searchQuery}
            />
          </div>
          <div className="d-flex justify-content-center align-items-end ">
            <div className="dropdown d-flex justify-content-center">
              <button
                className="btn fs-3 shopping ps-3 py-0 "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                {shopping ? (
                  <TfiShoppingCartFull className="text-info" />
                ) : (
                  <TfiShoppingCart />
                )}
              </button>
              <ul className="dropdown-menu p-1  ul-shop">
                {shopping ? (
                  data.map((e) => (
                    <div className="" key={e.id}>
                      <ShoppingCart
                        img={e.img}
                        title={e.title}
                        price={e.price}
                        id={e.id}
                        key={e.id}
                      />
                    </div>
                  ))
                ) : (
                  <div>no catgerous</div>
                )}
              </ul>
            </div>

            <div className="dropdown d-flex justify-content-center">
              <button
                className="btn fs-3 ps-3 py-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <FaRegUserCircle className=" text-info" />
              </button>
              <form className="dropdown-menu p-4 mt-1 login">
                <div className="mb-3">
                  <label
                    htmlFor="exampleDropdownFormEmail2"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleDropdownFormEmail2"
                    placeholder="email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleDropdownFormPassword2"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleDropdownFormPassword2"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="dropdownCheck2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="dropdownCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
                <div type="submit" className="btn btn-dark  mx-2">
                  Sign up!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
