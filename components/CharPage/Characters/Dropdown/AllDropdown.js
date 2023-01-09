import { Fragment } from "react";
import Dropdown from "./Dropdown";
const Alldropdown = ({ typeArray, ddObject, setDDObject }) => {
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
            typeArray={typeArray[index]}
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
