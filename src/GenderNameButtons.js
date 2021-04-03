import React from "react";
const GenderNameButtons = (props) => {
  return (
    <div>
      <button onClick={props.allGenderHandler}>All</button>
      <button onClick={props.boySorterFunction}>Boy</button>
      <button onClick={props.girlsorterFunction}>Girl</button>
    </div>
  );
};
export default GenderNameButtons;
