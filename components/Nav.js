import Link from "next/link";
import { Fragment } from "react";
import navStyles from "../styles/nav.module.css";
const Nav = () => {
  // <Link href="/article/[id]" as={`/article/${article.name}`}></Link>
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
            <Link href="/chars" as={`/chars}`}>
              <div className="navbar-item">Character Page</div>
            </Link>
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
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
