import { Fragment } from "react";

const ResetDropdown = ({ setDDObject }) => {
  const resetObj = {
    class: "Class",
    weapon: "Weapon",
    manufacturer: "Manufacturer",
    element: "Element",
    burst: "Burst",
  };
  const handleReset = () => {
    setDDObject(resetObj);
  };
  return (
    <Fragment>
      <button className="button is-danger is-focused" onClick={handleReset}>
        Reset
      </button>
    </Fragment>
  );
};
export default ResetDropdown;
