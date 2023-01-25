// import logo from "../../assets/profile2.svg";
// https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31173868#questions
import { useContext } from "react";
import { ProfileContext } from "../../../contexts/ProfileContext";
import { UserContext } from "../../../contexts/UserContext";
const ProfileIcon = () => {
  const { profileOpen, setProfileOpen } = useContext(ProfileContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const toggleProfileOpen = () => setProfileOpen(!profileOpen);
  console.log(currentUser.photoURL);
  return (
    <div className="profile-container " onClick={toggleProfileOpen}>
      <img className="profile-icon " src={currentUser.photoURL}></img>
      <span className="notif-count">0</span>
    </div>
  );
};

export default ProfileIcon;
