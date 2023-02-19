import { Fragment } from "react";
import CombatInfo from "./CombatInfo/CombatInfo";

const IndivChar = ({ data }) => {
  return (
    <Fragment>
      <div>
        <CombatInfo data={data} />
      </div>
    </Fragment>
  );
};

export default IndivChar;
