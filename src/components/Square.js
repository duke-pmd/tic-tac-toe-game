import React from "react";

function Square({ i, value, handleClick }) {
  return (
    <button
      className={"square"}
      onClick={() => {
        handleClick(i);
      }}
    >
      {value}
    </button>
  );
}

export default Square;
