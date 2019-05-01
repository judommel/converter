import React from "react";

function AmountInput(props) {
  return (
    <input
      value={props.value}
      onChange={event => {
        props.onNewValue(event);
      }}
    />
  );
}

export default AmountInput;
