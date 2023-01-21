import { useContext } from "react";
import { CharContext } from "../../../contexts/CharContext";

import { ProfileImageModalContext } from "../../../contexts/ProfileImageContext";
const ProfileImages = () => {
  const { charsInfo } = useContext(CharContext);
  const { profileImageModalOpen, setProfileImageModalOpen } = useContext(
    ProfileImageModalContext
  );
  const toggleProfileImagesOpen = () =>
    setProfileImageModalOpen(!profileImageModalOpen);
  return (
    <div className="images-background">
      <div className="images-div">
        <button className="sticky" onClick={toggleProfileImagesOpen}>
          Cancel
        </button>
        <div className="images">
          {charsInfo.map((element) => {
            return (
              <img
                src={element.art}
                className="single-image"
                onClick={toggleProfileImagesOpen}
              ></img>
            );
          })}
        </div>
        <button className="" onClick={toggleProfileImagesOpen}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default ProfileImages;
