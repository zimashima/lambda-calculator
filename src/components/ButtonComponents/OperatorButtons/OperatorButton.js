import React from "react";

const OperatorButton = props => {
  return (
    <button className ="operator_button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.op.value}
    </button>
  );
};

export default OperatorButton;
