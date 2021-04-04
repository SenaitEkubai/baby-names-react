import React, { useState } from "react";
import BabyNamesData from "./BabyNamesData";
import BabyName from "./BabyName";
import GenderNameButtons from "./GenderNameButtons";
import Favorites from "./Favorites";

const BabyNameLists = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fav, setFav] = useState([]);
  const [isBoyClicked, setIsBoyClicked] = useState(false);
  const [isGirlClicked, setIsGirlClicked] = useState(false);

  // favorite  adding function

  function addFavorite(id) {
    setFav([...fav, id]);
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
          boyFunction={() => {
            setIsBoyClicked(true);
          }}
          girlFunction={() => {
            setIsGirlClicked(true);
          }}
          allGenderHandler={() => {
            setIsGirlClicked(false);
            setIsBoyClicked(false);
          }}
        />
      </div>
      <Favorites fav={fav} data={BabyNamesData} />
      <hr></hr>

      {isGirlClicked
        ? BabyNamesData.filter((el) => {
            if (searchTerm === "") {
              return el;
            } else {
              return el.name.toLowerCase().includes(searchTerm.toLowerCase());
            }
          })
            .filter((el) => {
              if (el.sex === "f") {
                return el;
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
                handler={() => addFavorite(el.id)}
                key={index}
                sex={el.sex === "f" ? "female" : "male"}
                name={el.name}
              />
            ))
        : isBoyClicked
        ? BabyNamesData.filter((el) => {
            if (searchTerm === "") {
              return el;
            } else {
              return el.name.toLowerCase().includes(searchTerm.toLowerCase());
            }
          })
            .filter((el) => {
              if (el.sex === "m") {
                return el;
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
                handler={() => addFavorite(el.id)}
                key={index}
                sex={el.sex === "f" ? "female" : "male"}
                name={el.name}
              />
            ))
        : BabyNamesData.filter((el) => {
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
                handler={() => addFavorite(el.id)}
                key={index}
                sex={el.sex === "f" ? "female" : "male"}
                name={el.name}
              />
            ))}
    </div>
  );
};
export default BabyNameLists;
