import React from "react";
import style from "../styles/header.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header() {
  return (
    <header className={style.header}>
      <div className={`container ${style.container}`}>
        <h5>Hello I'm</h5>
        <h1>VEERANAGOUDA</h1>
        <h5 className="text-light">WEB DEVELOPER</h5>
        <div className={style.cta}>
          <a className="btn" href="assets/Veeranagouda.pdf" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <a href="#contact" className={style.scrollDown}>
          Scroll Down
        </a>
        <div className={style.socials}>
          <a
            href="https://www.linkedin.com/in/veerana-gouda-a31b60269"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/veeranagouda961"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.instagram.com/veerana92?igsh=MWZucGRxb3QxNGI3eA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
