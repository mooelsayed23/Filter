import React, { Fragment } from "react";
import "./Sidbar.css";
import data from "../../db/Data";
import Input from "../input/Input";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setColor, setPrice } from "../../store/Action.js";

const Sidbar = () => {
  const dispatch = useDispatch();
  const cate = useSelector((ds) => ds.category);
  const price = useSelector((ds) => ds.price);
  const color = useSelector((ds) => ds.color);
  const generateItems = (property) => {
    let uniqueValues = [
      ...new Set(data.map((item) => item[property].toLowerCase())),
    ];
    return uniqueValues.map((value) => (
      <Input category={value} name={property} key={value} />
    ));
  };

  const priceRangeMap = {
    "": "All",
    "0-50": "$0 - $50",
    "50-100": "$51 - $100",
    "100-150": "$101 - $150",
    "150-1000000": "Over $150",
  };

  return (
    <>
      <div className="border-r sidbar-contaner fixed h-screen overflow-y-auto pb-5 text-sm hidden lg:block">
        <div className="bg-white w-4/5 mx-auto my-4 rounded-tr-xl p-3.5">
          <h5>Category</h5>
          <div className="form-check my-2">
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="allCat"
                onChange={() => dispatch(setCategory(""))}
                checked={cate === ""}
              />

              <label className="form-check-label" htmlFor="allCat">
                All
              </label>
            </div>
            {generateItems("category")}
          </div>
        </div>
        <div className="bg-white w-4/5 mx-auto my-4 rounded-tr-xl p-3.5">
          <h5>Price</h5>
          <div className="form-check my-2 ">
            {Object.entries(priceRangeMap).map(([id, labelText]) => (
              <Fragment key={id}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="price"
                  id={id}
                  onChange={(event) => dispatch(setPrice(event.target.id))}
                  checked={price === id}
                />
                <label className="form-check-label" htmlFor={id}>
                  {labelText}
                </label>
                <br />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="bg-white w-4/5 mx-auto my-4 rounded-tr-xl p-3.5">
          <h5>Color</h5>
          <div className="form-check my-2">
            <div>
              <input
                className="form-check-input"
                type="radio"
                name="color"
                id="allColor"
                onChange={() => dispatch(setColor(""))}
                checked={color === ""}
              />
              <label className="form-check-label" htmlFor="allColor">
                All
              </label>
            </div>
            {generateItems("color")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidbar;
