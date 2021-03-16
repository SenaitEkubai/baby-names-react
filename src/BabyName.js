import React from "react";

const BabyName = (props) => {
  return (
    <div className="list-container">
      <div>
        <ul>
          <li className="list" style={{ color: "green" }}>
            {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default BabyName;
