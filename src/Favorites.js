import React from "react";
const Favorites = ({ data, fav }) => {
  const namesList = fav.map((id) => {
    const name = data.filter((el) => el.id === id);

    return (
      <button key={id} className={name[0].sex === "f" ? "female" : "male"}>
        {name[0].name}
      </button>
    );
  });
  for (var i = 0; i < namesList.length; i++) {}

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
