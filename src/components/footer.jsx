import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import style from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={style.container} id="footer">
      <a href="/" className={style.logo}>
        VEERANAGOUDA<br/>
        9901210621
      </a>

      <div className={style.paramLink}>
        <a href="#" className={style.span}>
          Home
        </a>
        <a href="#about" className={style.span}>
          About
        </a>
        <a href="#experience" className={style.span}>
          Experience
        </a>
        <a href="#services" className={style.span}>
          Service
        </a>
        <a href="#contact" className={style.span}>
          Contact
        </a>
      </div>

      <div className={style.socials}>
        <a
          href="https://www.linkedin.com/in/veerana-gouda-a31b60269"
          className={style.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/veeranagouda961"
          className={style.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.instagram.com/veerana92?igsh=MWZucGRxb3QxNGI3eA=="
          className={style.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
      <div className={style.copyright}>
        <small>
          &copy; {new Date().getFullYear()} VEERANAGOUDA. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
