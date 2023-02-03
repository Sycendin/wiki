import { Fragment, useContext } from "react";
import { ProfileContext } from "../../../contexts/ProfileContext";
import { ProfileImageModalContext } from "../../../contexts/ProfileImageContext";
import { UpdateProfilePicture } from "../../Utils/firebase/firebase";
import { ProfileOptions } from "./ProfileOptions/ProfileOptions";
import ProfilePick from "../ProfilePick/ProfilePick";
const ProfileDropDown = () => {
  const { profileImageModalOpen, setProfileImageModalOpen } = useContext(
    ProfileImageModalContext
  );
  const { profileOpen, setProfileOpen } = useContext(ProfileContext);
  const {
    pickPic,
    addToPick,
    updateTempUpdate,
    profileOptions,
    setProfileOptions,
  } = useContext(ProfileContext);
  const toggleProfileImagesOpen = () =>
    setProfileImageModalOpen(!profileImageModalOpen);
  console.log(pickPic);
  const setIcon = async () => {
    let { art } = pickPic[0];
    await UpdateProfilePicture(art);
    setTimeout(updateTempUpdate(), 1000);
  };
  const toggleProfileOpen = () => {
    setProfileOpen(!profileOpen);
    addToPick({}, true);
  };
  return (
    <div className="dropdown-container">
      {!profileOptions ? (
        <Fragment>
          <div className="items">
            {pickPic.map((item) => {
              return (
                <Fragment key={item.art}>
                  <ProfilePick pickItem={item} />
                </Fragment>
              );
            })}
          </div>
          <div className="center-div">
            <button
              className="button is-light"
              onClick={toggleProfileImagesOpen}
            >
              Open Selection
            </button>
            {pickPic.length > 0 && (
              <button className="button is-primary" onClick={setIcon}>
                Set Selection
              </button>
            )}
            <button className="button is-warning" onClick={toggleProfileOpen}>
              Exit
            </button>
          </div>
        </Fragment>
      ) : (
        <ProfileOptions />
      )}
    </div>
  );
};
export default ProfileDropDown;
