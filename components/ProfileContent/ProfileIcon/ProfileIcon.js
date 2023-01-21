// import logo from "../../assets/profile2.svg";
// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31173868#questions
import { useContext } from "react";
import { LeftArrow } from "../../../assets/left";
import { ProfileContext } from "../../../contexts/ProfileContext";
const ProfileIcon = () => {
  const { profileOpen, setProfileOpen } = useContext(ProfileContext);
  const toggleProfileOpen = () => setProfileOpen(!profileOpen);
  return (
    <div className="profile-container navbar-item" onClick={toggleProfileOpen}>
      <LeftArrow className="profile-icon" />
      <span className="notif-count">0</span>
    </div>
  );
};

export default ProfileIcon;
