import React from "react";
import style from "../styles/experience.module.css";
import VerifiedIcon from "@mui/icons-material/Verified";
function experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={style.container}>
        <div className={style.frontEnd}>
          <h3 className={style.h3}>Programming Languages</h3>
          <div className={style.content}>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Python</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>C</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>C++</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Java</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>PHP</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Javascript</h4>
            </div>
          </div>
        </div>
        <div className={style.backEnd}>
          <h3 className={style.h3}>Data Science</h3>
          <div className={style.content}>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>SQL</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Python</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>R</h4>
            </div>

            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Statistics</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Power BI</h4>
            </div>
          </div>
        </div>
        <div className={style.frontEnd}>
          <h3 className={style.h3}>Frontend Development</h3>
          <div className={style.content}>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Reactjs</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Nextjs</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Html</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Css</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Matrial Ui</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Javascript</h4>
            </div>
          </div>
        </div>
        <div className={style.backEnd}>
          <h3 className={style.h3}>BackEnd Development</h3>
          <div className={style.content}>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Nodejs</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>MongoDB</h4>
            </div>
            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Express</h4>
            </div>

            <div className={style.details}>
              <VerifiedIcon className={style.icon} />
              <h4>Javascript</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default experience;
