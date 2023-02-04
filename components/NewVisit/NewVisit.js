import { Fragment, useEffect, useContext } from "react";
import { VisitContext } from "../../contexts/VisitContext";
const NewVisit = () => {
  const { visit, changeVisit } = useContext(VisitContext);

  const setVisited = () => {
    localStorage.setItem("visit", "True");
    changeVisit("True");
  };
  useEffect(() => {
    const vistedFunc = () => {
      const visited = localStorage.getItem("visit");
      if (visited !== "True") {
        console.log("Yoooo");
        changeVisit("False");
      }
    };
    setTimeout(() => {
      vistedFunc();
    }, 1000);
  }, []);
  return (
    <Fragment>
      {visit !== "True" ? (
        <div className="messageBackgroundDiv">
          <div className="messageDiv">
            <button className="button is-primary" onClick={setVisited}>
              Ok.
            </button>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
export default NewVisit;
