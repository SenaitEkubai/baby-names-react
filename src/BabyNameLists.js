import React from "react";
import BabyNamesData from "./BabyNamesData";
import BabyName from "./BabyName";

const BabyNameLists = () => {
  return (
    <div>
      {BabyNamesData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        return 1;
      }).map((el) => (
        <BabyName name={el.name} />
      ))}
    </div>
  );
};
export default BabyNameLists;
