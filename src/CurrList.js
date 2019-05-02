import React from "react";
import "./index.css";
import rates from "./rates";

const keys = Object.keys(rates);

let map = keys.map((curr, index) => {
  return (
    <option key={index} value={curr}>
      {" "}
      {curr}{" "}
    </option>
  );
});

function CurrList(props) {
  return (
    <select
      value={props.value}
      onChange={event => {
        {
          props.onSelectCountry(event);
        }
      }}
    >
      {map}
    </select>
  );
}

export default CurrList;
