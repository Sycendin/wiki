import Link from "next/link";
import { Fragment, useContext } from "react";
import ProfileIcon from "./ProfileContent/ProfileIcon/ProfileIcon";
import ProfileDropDown from "./ProfileContent/ProfileDropdown/ProfileDropdown";
import { ProfileContext } from "../contexts/ProfileContext";
import { UserContext } from "../contexts/UserContext";
import { ProfileImageModalContext } from "../contexts/ProfileImageContext";
import ProfileImages from "../components/ProfileContent/ProfileImages/ProfileImages";
// import { ProfileImageModalContext } from "../contexts/ProfileImageContext";
// import ProfileImages from "./ProfileContent/ProfileImages/ProfileImages";
import navStyles from "../styles/nav.module.css";
const Nav = () => {
  // <Link href="/article/[id]" as={`/article/${article.name}`}></Link>
  const { currentUser } = useContext(UserContext);
  // https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31173868#questions
  const { profileOpen } = useContext(ProfileContext);
  const { profileImageModalOpen } = useContext(ProfileImageModalContext);
  // const { profileImageModalOpen } = useContext(ProfileImageModalContext);
  return (
    <Fragment>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="http://localhost:3000/">
            <img
              src="https://cdn.discordapp.com/attachments/747928182891610213/1059362662141677638/vPwEGAP2QP6EbVOIFAAAAAElFTkSuQmCC.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="http://localhost:3000/">
              Home
            </a>
            <a className="navbar-item" href="/chars">
              Character Page
            </a>
            <a className="navbar-item">About</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
          {/* Render icon if user is logged into firebase */}
          {currentUser && <ProfileIcon />}
        </div>
        {/* Render dropdown if user Profile icon */}
        {profileOpen && <ProfileDropDown />}
      </nav>
      {/* Render profile images if  user click profile images button*/}
      {profileImageModalOpen ? <ProfileImages /> : null}
    </Fragment>
  );
};

export default Nav;
