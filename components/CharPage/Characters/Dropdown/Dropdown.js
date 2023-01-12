import { Fragment } from "react";
import { useEffect, useRef } from "react";

const Dropdown = ({
  dropDownArray,
  ddObject,
  setDDObject,
  type,
  dropdownVis,
  filterNames,
}) => {
  // React ref for dropdown
  const refOne = useRef(null);
  // Add is-active class to dropdown on click
  let ddObjectKey = type;
  const handleClick = () => {
    // Close all other dropdowns
    const dropdownClose = document.getElementsByClassName("is-active");
    if (dropdownClose.length > 0) {
      dropdownClose[0].classList.remove("is-active");
    }
    // Open clicked dropdown
    const dropdown = document.getElementById(type);
    dropdown.classList.toggle("is-active");
  };
  // Update filter object for characters
  const changeDDObject = (ev) => {
    const changeState = {
      ...ddObject,
      [ddObjectKey]: ev.currentTarget.dataset.div_id,
    };
    // Close current dropdown
    const dropdown = document.getElementById(type);
    dropdown.classList.toggle("is-active");
    // Update filter object state
    setDDObject(changeState);
  };
  // Detect for click outside active dropdown and then close the dropdown menu
  const handleClickOutside = (e) => {
    // Execute if ref dropdown still exists
    if (refOne.current !== null) {
      // If click is outside, remove is-active class
      if (!refOne.current.contains(e.target)) {
        const dropdownClose = document.getElementsByClassName("is-active");
        if (dropdownClose.length > 0) {
          dropdownClose[0].classList.remove("is-active");
        }
      }
    }
  };
  useEffect(() => {
    // Add event listener to dropdown
    document.getElementById(type).addEventListener("click", handleClick);
    // Add event listener to detect for outside clicks
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      // Remove event listener to prevent memory leak
      if (document.getElementById(type) !== null) {
        document.getElementById(type).removeEventListener("click", handleClick);
      }
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <Fragment>
      <div className="dropdown mr-2 pointer" id={type} ref={refOne}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
          >
            <span>{dropdownVis}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">
            {dropDownArray.map((dropdownName, index) => {
              // For hr break, check next element
              let nextEl = dropDownArray[index + 1];
              return (
                <Fragment key={index}>
                  <div
                    className="dropdown-item"
                    data-div_id={dropdownName}
                    onClick={changeDDObject}
                  >
                    {dropdownName}
                  </div>
                  {/* If there is no element then don't render divider hr */}
                  {nextEl !== undefined ? (
                    <hr className="dropdown-divider" />
                  ) : null}
                </Fragment>
              );
            })}
          </div>
          {/* )} */}
        </div>
      </div>
    </Fragment>
  );
};
export default Dropdown;
