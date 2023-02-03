import { Fragment, useContext } from "react";
import { ProfileContext } from "../../../../contexts/ProfileContext";
export const ProfileOptions = () => {
  const { setProfileOptions, profileOptions } = useContext(ProfileContext);
  const ChangeToPictures = () => {
    setProfileOptions(!profileOptions);
  };
  return (
    <Fragment>
      <div className="profileOptionsDiv">
        <buttton className="button" onClick={ChangeToPictures}>
          Profile Picture
        </buttton>
        <buttton className="button">Sign Out</buttton>
      </div>
    </Fragment>
  );
};
