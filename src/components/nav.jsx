import React, { useState } from "react";
import style from "../styles/nav.module.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import DetailsIcon from "@mui/icons-material/Details";
import InfoIcon from "@mui/icons-material/Info";
function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className={style.container}>
      <a href="#" className={style.navIcon}>
        <span
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? style.active : ""}
        >
          <HomeIcon />
        </span>
      </a>
      <a href="#about" className={style.navIcon}>
        <span
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? style.active : ""}
        >
          <InfoIcon />
        </span>
      </a>
      <a href="#experience" className={style.navIcon}>
        <span
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? style.active : ""}
        >
          <DetailsIcon />
        </span>
      </a>
      <a href="#services" className={style.navIcon}>
        <span
          onClick={() => setActiveNav("#services")}
          className={activeNav === "#services" ? style.active : ""}
        >
          <Inventory2Icon />
        </span>
      </a>
      <a href="#contact" className={style.navIcon}>
        <span
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? style.active : ""}
        >
          <PersonIcon />
        </span>
      </a>
    </div>
  );
}

export default Nav;
