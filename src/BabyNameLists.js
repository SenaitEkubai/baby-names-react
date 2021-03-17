import React from "react";
import BabyNamesData from "./BabyNamesData";
import BabyName from "./BabyName";

const BabyNameLists = () => {
  console.log(BabyNamesData);

  return (
    <div>
      {BabyNamesData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        return 1;
      }).map((el) => (
        <BabyName sex={el.sex === "f" ? "male" : "female"} name={el.name} />
      ))}
    </div>
  );
};
export default BabyNameLists;
