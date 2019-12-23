import React from "react";

const SpecialButton = (props) => {
  return (
    <div className="specials">
      <button>{props.special}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default SpecialButton;