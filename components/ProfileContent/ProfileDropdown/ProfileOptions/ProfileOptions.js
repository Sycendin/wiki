import { Fragment, useContext } from "react";
import { ProfileContext } from "../../../../contexts/ProfileContext";
export const ProfileOptions = () => {
  const { setProfileOptions, profileOptions } = useContext(ProfileContext);
  const { setProfileOpen } = useContext(ProfileContext);
  const ChangeToPictures = () => {
    setProfileOptions(!profileOptions);
  };
  const toggleProfileOpen = () => {
    setProfileOpen(false);
    setProfileOptions(false);
  };
  return (
    <Fragment>
      <div className="profileOptionsDiv">
        <buttton className="button" onClick={ChangeToPictures}>
          Profile Picture
        </buttton>
        <buttton className="button">Sign Out</buttton>
        <buttton className="button is-warning" onClick={toggleProfileOpen}>
          Exit
        </buttton>
      </div>
    </Fragment>
  );
};
