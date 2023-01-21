import { Fragment, useContext } from "react";
import { ProfileContext } from "../../../contexts/ProfileContext";
import { ProfileImageModalContext } from "../../../contexts/ProfileImageContext";
import ProfilePick from "../ProfilePick/ProfilePick";
const ProfileDropDown = () => {
  const { profileImageModalOpen, setProfileImageModalOpen } = useContext(
    ProfileImageModalContext
  );
  const { pickPic } = useContext(ProfileContext);
  const toggleProfileImagesOpen = () =>
    setProfileImageModalOpen(!profileImageModalOpen);
  console.log(pickPic);
  return (
    <div className="dropdown-container">
      <div className="items">
        {pickPic.map((item) => {
          return (
            <Fragment key={item.art}>
              <ProfilePick pickItem={item} />
            </Fragment>
          );
        })}
      </div>
      <button className="" onClick={toggleProfileImagesOpen}>
        Images
      </button>
    </div>
  );
};
export default ProfileDropDown;
