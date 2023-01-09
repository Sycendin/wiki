import { Fragment } from "react";
import { useEffect, useState } from "react";
const dropdown = ({ type, ddObject }) => {
  // Add is-active class to dropdown on click

  const handleClick = () => {
    let dropdown = document.getElementById("drop");
    dropdown.classList.toggle("is-active");
  };
  const changeWeapon = (ev) => {
    console.log(ev.currentTarget.dataset.div_id);
    const changeState = { ...ddObject, class: ev.currentTarget.dataset.div_id };
    setDDObject(changeState);
  };
  useEffect(() => {
    // Add event listener to dropdown
    document.getElementById("drop").addEventListener("click", handleClick);
    return () => {
      // Remove event listener to prevent memory leak
      if (document.getElementById("drop") !== null) {
        document
          .getElementById("drop")
          .removeEventListener("click", handleClick);
      }
    };
  }, []);
  return (
    <Fragment>
      <div className="dropdown" id="drop">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
          >
            <span>{ddObject.class}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">
            {type.map((el, index) => {
              // For hr break, check next element
              let next = type[index + 1];
              return (
                <Fragment key={index}>
                  <div
                    href="#"
                    className="dropdown-item"
                    data-div_id={el}
                    onClick={changeWeapon}
                  >
                    {el}
                  </div>
                  {/* If there is no element then don't render divider hr */}
                  {next !== undefined ? (
                    <hr className="dropdown-divider" />
                  ) : null}
                </Fragment>
              );
            })}
            {/* <a href="#" className="dropdown-item">
              
            </a>
            <a href="#" className="dropdown-item">
              Modifiers
            </a>
            <a href="#" className="dropdown-item">
              Grid
            </a>
            <a href="#" className="dropdown-item">
              Form
            </a>
            <a href="#" className="dropdown-item">
              Elements
            </a>
            <a href="#" className="dropdown-item">
              Components
            </a>
            <a href="#" className="dropdown-item">
              Layout
            </a> */}
            {/* <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              More
            </a> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default dropdown;
