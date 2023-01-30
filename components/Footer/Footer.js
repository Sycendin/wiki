import React, { Fragment } from "react";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <div id="footer" className={`${styles.footerDiv}`}>
        <div className={`${styles.footerContents}`}>
          <img
            alt="top-arrow"
            className={`${styles.topArrowImg}`}
            width={1062}
            height={820}
            src={
              "https://cdn.discordapp.com/attachments/788247984517283880/990538566415319040/whiteuparrow.webp"
            }
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          ></img>
          <div className={`${styles.faviconDiv}`}>
            <div className={`${styles.faviconImgDiv}`}>
              <img
                alt="indeed"
                className={`${styles.footerImg}`}
                width={100}
                height={100}
                src="https://cdn.discordapp.com/attachments/788247984517283880/990540032576196628/indeed.webp"
                onClick={() =>
                  window.open(
                    "https://my.indeed.com/p/brandons-8tjg866",
                    "_blank"
                  )
                }
              ></img>
              <img
                alt="github"
                className={`${styles.footerImg}`}
                width={100}
                height={100}
                src="https://cdn.discordapp.com/attachments/788247984517283880/990540032311971880/github.webp"
                onClick={() =>
                  window.open("https://github.com/Sycendin", "_blank")
                }
              ></img>
              <img
                alt="linkedin"
                className={`${styles.footerImg}`}
                width={100}
                height={100}
                src="https://cdn.discordapp.com/attachments/788247984517283880/1004958551908827249/linkedin.webp"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/brandon-shewnarain-47167922a/",
                    "_blank"
                  )
                }
              ></img>
            </div>
          </div>
          <p className={`${styles.footerText}`}>
            Website Developed By Brandon Shewnarain
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
