import React from "react";

const BabyName = (props) => {
  return (
    <div className="list-container">
      <div>
        <button onClick={props.handler} className={props.sex}>
          <p>{props.name}</p>
        </button>
      </div>
    </div>
  );
};
export default BabyName;
