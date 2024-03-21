import React from "react";
import "./main.css";
import Card from "../card/Card";
import Data from "../../db/Data";
import Links from "../links/Links";
import { useSelector } from "react-redux";

const Main = () => {
  const color = useSelector((dataStore) => dataStore.color);
  const price = useSelector((dataStore) => dataStore.price);
  const title = useSelector((dataStore) => dataStore.title);
  const company = useSelector((dataStore) => dataStore.company);
  const category = useSelector((dataStore) => dataStore.category);

  const lwr = (value) => value.toLowerCase();
  //no select all true filter back all || filer loop get the same to get true value to show

  const filteredData = Data.filter((el) => {
    const iscompany = company.length === 0 || company.includes(lwr(el.company));
    const isCategory = !category || lwr(el.category) === lwr(category);
    const isColor = !color || lwr(el.color) === lwr(color);
    const isTitle = !title || lwr(el.title).includes(lwr(title));
    const isPrice = !price || isPriceInRange(price, el.newPrice);

    function isPriceInRange(range, newPrice) {
      if (!range) {
        return true;
      }
      const [min, max] = range.split("-").map(Number);
      return newPrice >= min && newPrice <= max;
    }

    return iscompany && isCategory && isColor && isPrice && isTitle;
  });

  return (
    <div className="w-10/12 mx-auto">
      <div >
        <Links />
      </div>
      <div className="columns-4 ">
        {filteredData.length === 0 ? (
          <h4 className="p-3"> لا نتائج</h4>
        ) : (
          <>
            <div className="d-flex flex-wrap">
              {filteredData.map((el) => (
                <Card
                  key={el.id}
                  img={el.img}
                  title={el.title}
                  rev={el.reviews}
                  oldprice={el.prevPrice}
                  price={el.newPrice}
                  company={el.company}
                  id={el.id}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
