import { Fragment } from "react";
import { useEffect } from "react";
const Dropdown = ({ typeArray, ddObject, setDDObject, type, dropdownVis }) => {
  // Add is-active class to dropdown on click
  let key = type;
  const handleClick = () => {
    let dropdown = document.getElementById(type);
    dropdown.classList.toggle("is-active");
  };
  const changeWeapon = (ev) => {
    console.log(ev.currentTarget.dataset.div_id);
    const changeState = { ...ddObject, [key]: ev.currentTarget.dataset.div_id };
    setDDObject(changeState);
  };
  useEffect(() => {
    // Add event listener to dropdown
    document.getElementById(type).addEventListener("click", handleClick);
    return () => {
      // Remove event listener to prevent memory leak
      if (document.getElementById(type) !== null) {
        document.getElementById(type).removeEventListener("click", handleClick);
      }
    };
  }, []);
  return (
    <Fragment>
      <div className="dropdown" id={type}>
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
            {typeArray.map((el, index) => {
              // For hr break, check next element
              let next = [index + 1];
              console.log(next);
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Dropdown;
