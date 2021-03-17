import React from "react";

const BabyName = (props) => {
  return (
    <div className="list-container">
      <div>
        <ul>
          <li className={props.sex}>{props.name}</li>
        </ul>
      </div>
    </div>
  );
};
export default BabyName;
