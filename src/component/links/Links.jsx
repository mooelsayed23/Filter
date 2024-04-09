import React from "react";
import data from "../../db/Data";
import { useDispatch, useSelector } from "react-redux";
import { setCompany } from "../../store/Action";

const Links = () => {
  const dispatch = useDispatch();
  let selected = useSelector((dataStore) => dataStore.company);
  let companyNames = [
    ...new Set(data.map(({ company }) => company.toLowerCase())),
  ];
  const listItems = companyNames.map((link) => (
    <li
      key={link}
      className={`px-2 mx-1 btn border ${
        selected.includes(link) ? "text-info" : ""
      }`}
      onClick={() => {
        const updatedSelection = selected.includes(link)
          ? selected.filter((item) => item !== link)
          : [...selected, link];
        dispatch(setCompany(updatedSelection));
      }}
    >
      {link}
    </li>
  ));
  return (
    <div className=" w-100 py-4  text-nowrap">
      <h3 className="py-2">Multiple choice</h3>
      <ul className="d-flex list-unstyled overflow-x-auto pb-3">
        {companyNames.length > 0 && (
          <>
            <li
              className={`px-2 mx-1 btn border ${
                selected.length === 0 ? "text-info" : ""
              }`}
              onClick={() => dispatch(setCompany(""))}
            >
              All product
            </li>
            {listItems}
          </>
        )}
      </ul>
    </div>
  );
};

export default Links;
