import React, { useState } from "react";
import BabyNamesData from "./BabyNamesData";
import BabyName from "./BabyName";
import GenderNameButtons from "./GenderNameButtons";
import Favorites from "./Favorites";

const BabyNameLists = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  let [fav, setFav] = useState([]);
  let [list, setList] = useState([]);

  // favorite  adding function

  function favHandler(id, list) {
    console.log(id + "id");
    list = id;
    console.log("list" + list);
    setFav((fav) => fav.concat([id]));
    console.log(fav + "fav");
  }

  return (
    <div className={props.class}>
      <div>
        <h3 className="mb-3 mt-5">BabyNames</h3>
        <input
          placeholder="Search..."
          onChange={(event) => setSearchTerm(event.target.value)}
        ></input>
        <GenderNameButtons
          boySorterFunction={(event) => console.log(event.target)}
        />
      </div>
      <Favorites fav={fav} data={BabyNamesData} />
      <hr></hr>
      {BabyNamesData.filter((el) => {
        if (searchTerm === "") {
          return el;
        } else {
          return el.name.toLowerCase().includes(searchTerm.toLowerCase());
        }
      })
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          return 1;
        })
        .map((el, index) => (
          <BabyName
            key={index}
            sex={el.sex === "f" ? "male" : "female"}
            name={el.name}
            handler={() => {
              console.log(el.name + el.id + "el.id");
              favHandler(el.id);
            }}
          />
        ))}
    </div>
  );
};
export default BabyNameLists;
