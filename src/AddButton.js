import React from "react";

function AddButton(props) {
  return (
    <button
      className={props.theme}
      onClick={() => {
        props.onAdd();
      }}
    >
      {props.value}
    </button>
  );
}

export default AddButton;
