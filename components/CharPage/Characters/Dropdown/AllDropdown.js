import { Fragment } from "react";
import { useEffect } from "react";
import Dropdown from "./Dropdown";
import { ddClass, ddElement } from "./DropDownData";
const Alldropdown = ({ type, ddObject, setDDObject }) => {
  // Add is-active class to dropdown on click

  // const handleClick = () => {
  //   let dropdown = document.getElementById("drop");
  //   dropdown.classList.toggle("is-active");
  // };
  // const changeWeapon = (ev) => {
  //   const changeState = { ...ddObject, class: ev.currentTarget.dataset.div_id };
  //   setDDObject(changeState);
  // };
  // useEffect(() => {
  //   // Add event listener to dropdown
  //   document.getElementById("drop").addEventListener("click", handleClick);
  //   return () => {
  //     // Remove event listener to prevent memory leak
  //     if (document.getElementById("drop") !== null) {
  //       document
  //         .getElementById("drop")
  //         .removeEventListener("click", handleClick);
  //     }
  //   };
  // }, []);
  return (
    <Fragment>
      <Dropdown
        ddObject={ddObject}
        setDDObject={setDDObject}
        // changeWeapon={changeWeapon}
        typeArray={ddClass}
        dropdownVis={ddObject.class}
        type={"class"}
      />
      <Dropdown
        ddObject={ddObject}
        setDDObject={setDDObject}
        // changeWeapon={changeWeapon}
        typeArray={ddElement}
        dropdownVis={ddObject.element}
        type={"element"}
      />
    </Fragment>
  );
};
export default Alldropdown;
