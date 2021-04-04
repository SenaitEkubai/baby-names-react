import React from "react";
const GenderNameButtons = (props) => {
  return (
    <div>
      <button onClick={props.allGenderHandler}>All</button>
      <button onClick={props.boyFunction}>Boy</button>
      <button onClick={props.girlFunction}>Girl</button>
    </div>
  );
};
export default GenderNameButtons;
