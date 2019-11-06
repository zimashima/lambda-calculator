import React from "react";

const SpecialButton = props => {
  return (
    <button className="special_button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </button>
  );
};
export default SpecialButton;