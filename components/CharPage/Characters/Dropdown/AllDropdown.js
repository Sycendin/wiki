import { Fragment } from "react";
import Dropdown from "./Dropdown";
import ResetDropdown from "./ResetDropdown";
const Alldropdown = ({ dropDownArray, ddObject, setDDObject }) => {
  let filterNames = ["class", "weapon", "manufacturer", "element", "burst"];
  let indiv = [
    ddObject.class,
    ddObject.weapon,
    ddObject.manufacturer,
    ddObject.element,
    ddObject.burst,
  ];
  return (
    <Fragment>
      {filterNames.map((el, index) => {
        return (
          <Fragment key={index}>
            <Dropdown
              key={index}
              ddObject={ddObject}
              setDDObject={setDDObject}
              dropDownArray={dropDownArray[index]}
              dropdownVis={indiv[index]}
              filterNames={filterNames}
              type={el}
            />
          </Fragment>
        );
      })}
      <ResetDropdown setDDObject={setDDObject} />
    </Fragment>
  );
};
export default Alldropdown;
