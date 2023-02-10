import { Fragment, useContext } from "react";
import { ProfileContext } from "../../../../contexts/ProfileContext";
import styles from "../../../../styles/profileoptions.module.css";
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
      <div className={`${styles.profileOptionsDiv}`}>
        <button className="button" onClick={ChangeToPictures}>
          Profile Picture
        </button>
        <button className="button">Sign Out</button>
        <button className="button is-warning" onClick={toggleProfileOpen}>
          Exit
        </button>
      </div>
    </Fragment>
  );
};
