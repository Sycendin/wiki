import { useContext } from "react";
import { CharContext } from "../../../contexts/CharContext";
import { ProfileContext } from "../../../contexts/ProfileContext";
import { ProfileImageModalContext } from "../../../contexts/ProfileImageContext";
const ProfileImages = () => {
  const { charsInfo } = useContext(CharContext);
  const { profileImageModalOpen, setProfileImageModalOpen } = useContext(
    ProfileImageModalContext
  );
  const { addToPick } = useContext(ProfileContext);
  // Toggle profile picture modal off and add selected picture to to ProfileContext
  const toggleProfileImagesOpen = (element) => {
    setProfileImageModalOpen(!profileImageModalOpen);
    addToPick(element);
  };
  return (
    <div className="images-background">
      <div className="images-div">
        {/* Top cancel button to close modal that is sticky  */}
        <button className="sticky" onClick={toggleProfileImagesOpen}>
          Cancel
        </button>
        {/* Render Selected Image */}
        <div className="images">
          {charsInfo.map((element) => {
            return (
              <img
                key={element.art}
                src={element.art}
                className="single-image"
                onClick={() => toggleProfileImagesOpen(element)}
              ></img>
            );
          })}
        </div>
        {/* Bottom cancel button to close modal */}
        <button className="button is-error" onClick={toggleProfileImagesOpen}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default ProfileImages;
