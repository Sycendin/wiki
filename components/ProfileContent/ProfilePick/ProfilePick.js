import { Fragment } from "react";

const ProfilePick = ({ pickItem }) => {
  console.log(pickItem);

  return (
    <Fragment>
      <div>
        <h2 className="black"> {pickItem.name}</h2>
      </div>
    </Fragment>
  );
};
export default ProfilePick;
