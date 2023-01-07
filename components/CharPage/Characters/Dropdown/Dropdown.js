import { Fragment } from "react";
import { useEffect } from "react";
const dropdown = () => {
  const handleClick = () => {
    let el = document.getElementById("drop");
    el.classList.toggle("is-active");
  };
  useEffect(() => {
    document.getElementById("drop").addEventListener("click", handleClick);
    return () => {
      if (document.getElementById("drop") !== null) {
        document
          .getElementById("drop")
          .removeEventListener("click", handleClick);
      }
    };
  });
  return (
    <Fragment>
      <div className="dropdown" id="drop">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
          >
            <span>Click me</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Overview
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
            </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              More
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default dropdown;
