import React from "react";
const Favorites = ({ data, fav }) => {
  console.log(fav);
  console.log(data);

  const namesList = fav.map((id) => {
    console.log(id);
    const { name, sex } = data[id];
    console.log(name);
    return (
      <button key={id} className={sex === "f" ? "female" : "male"}>
        {name}
      </button>
    );
  });

  return (
    <div className="favorite">
      <h2>
        My Favorites...
        <ul className="list-container">{namesList}</ul>
      </h2>
    </div>
  );
};

export default Favorites;
