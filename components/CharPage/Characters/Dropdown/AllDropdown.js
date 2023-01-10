import { Fragment } from "react";
import Dropdown from "./Dropdown";
const Alldropdown = ({ dropDownArray, ddObject, setDDObject }) => {
  let filterNames = ["class", "weapon", "manufacture", "element", "burst"];
  let indiv = [
    ddObject.class,
    ddObject.weapon,
    ddObject.manufacture,
    ddObject.element,
    ddObject.burst,
  ];
  return (
    <Fragment>
      {filterNames.map((el, index) => {
        return (
          <Dropdown
            key={index}
            ddObject={ddObject}
            setDDObject={setDDObject}
            dropDownArray={dropDownArray[index]}
            dropdownVis={indiv[index]}
            filterNames={filterNames}
            type={el}
          />
        );
      })}
    </Fragment>
  );
};
export default Alldropdown;
