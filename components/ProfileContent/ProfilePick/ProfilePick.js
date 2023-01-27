import { Fragment } from "react";

const ProfilePick = ({ pickItem }) => {
  const { art, name } = pickItem;
  console.log(pickItem);

  return (
    <Fragment>
      <div className="center-div">
        <img className="profile-pick-img" src={art}></img>
        <h2 className="black profile-pick-text"> {name}</h2>
      </div>
    </Fragment>
  );
};
export default ProfilePick;
