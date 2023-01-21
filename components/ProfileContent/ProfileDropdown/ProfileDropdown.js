import { useContext } from "react";
import { ProfileImageModalContext } from "../../../contexts/ProfileImageContext";
const ProfileDropDown = () => {
  const { profileImageModalOpen, setProfileImageModalOpen } = useContext(
    ProfileImageModalContext
  );
  const toggleProfileImagesOpen = () =>
    setProfileImageModalOpen(!profileImageModalOpen);

  return (
    <div className="dropdown-container">
      <div className="items"></div>
      <button className="" onClick={toggleProfileImagesOpen}>
        Images
      </button>
    </div>
  );
};
export default ProfileDropDown;
