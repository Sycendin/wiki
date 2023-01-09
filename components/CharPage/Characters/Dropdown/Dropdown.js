import { Fragment } from "react";
import { useEffect } from "react";
const Dropdown = ({
  typeArray,
  ddObject,
  setDDObject,
  type,
  dropdownVis,
  filterNames,
}) => {
  // Add is-active class to dropdown on click
  let ddObjectKey = type;
  const handleClick = () => {
    // Close all other dropdowns

    // let dropdownClose = document.getElementById(element);
    const dropdownClose = document.getElementsByClassName("is-active");
    console.log(dropdownClose);
    if (dropdownClose.length > 0) {
      dropdownClose[0].classList.remove("is-active");
    }
    // Open clicked dropdown
    const dropdown = document.getElementById(type);
    dropdown.classList.toggle("is-active");
  };
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
              let next = typeArray[index + 1];

              return (
                <Fragment key={index}>
                  <div
                    href="#"
                    className="dropdown-item"
                    data-div_id={el}
                    onClick={changeDDObject}
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
