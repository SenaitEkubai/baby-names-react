import React from "react";
const Favorites = ({ data, fav }) => {
  const favorite = fav.map((id, index) => {
    const name = data[id].name;
    const sex = data[id].sex === "f" ? "male" : "female";

    return (
      <button key={index} className={sex}>
        {name}
      </button>
    );
  });

  return (
    <div className="favorite">
      <h2>
        My Favorites...
        <ul className="list-container">{favorite}</ul>
      </h2>
    </div>
  );
};

export default Favorites;
