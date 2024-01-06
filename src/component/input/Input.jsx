import React from "react";
import { useDispatch } from "react-redux";
import { setCategory, setColor } from "../../store/Action";

const Input = ({ category, name }) => {
  const dispatch = useDispatch();
  function hdispatch({ name, id }) {
    if (name === "category") {
      dispatch(setCategory(id));
    } else {
      dispatch(setColor(id));
    }
  }
  return (
    <>
      <div>
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={category}
          onChange={(event) => hdispatch(event.target)}
        />
        <label className="form-check-label" htmlFor={category}>
          {category}
        </label>
      </div>
    </>
  );
};

export default Input;
