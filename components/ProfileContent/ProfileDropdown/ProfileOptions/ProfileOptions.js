import { Fragment, useContext } from "react";
import { ProfileContext } from "../../../../contexts/ProfileContext";
export const ProfileOptions = () => {
  const { setProfileOptions, profileOptions } = useContext(ProfileContext);
  const { setProfileOpen } = useContext(ProfileContext);
  //  Switch to profile pictures options when Profile Pictures button is pressed
  const ChangeToPictures = () => {
    setProfileOptions(!profileOptions);
  };
  // Set profile options state to false and close modal when exit button is closed
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
