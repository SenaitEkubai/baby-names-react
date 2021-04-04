import React from "react";
const Favorites = ({ data, fav, key }) => {
  const namesList = fav.map((id) => {
    let x = data.filter((el) => el.id === id);

    return (
      <button key={id} className={x[0].sex === "f" ? "female" : "male"}>
        {x[0].name}
      </button>
    );
  });

  return (
    <div className="favorite">
      <h3>
        Click on a name to add Favorites ...
        <ul className="list-container">{namesList}</ul>
      </h3>
    </div>
  );
};

export default Favorites;
