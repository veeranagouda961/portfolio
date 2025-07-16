import React from "react";
import style from "../styles/portfolio.module.css";
function portfolio() {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={style.container}>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img alt="E-commerece" src={"/assets/eWing.png"} />
          </div>
          <h3 className={style.h3}>e-Wing</h3>
          <div className={style.btn}>
            <a
              href="https://github.com/veeranagouda961/ewing"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://ewing.free.nf/"
              title="e-Commerce live"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img alt="Todo App" src={"/assets/Todo.png"} />
          </div>
          <h3 className={style.h3}>Todo App</h3>
          <div className={style.btn}>
            <a
              href="https://github.com/veeranagouda961/TodoApp"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://todo-app-sooty-phi.vercel.app"
              title="todo live"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className={style.item}>
          <div className={style.itemImage}>
            <img alt="Tic toc toe" src={"/assets/tictoctoe.png"} />
          </div>
          <h3 className={style.h3}>Tic Toc Toe</h3>
          <div className={style.btn}>
            <a
              href="https://github.com/veeranagouda961/Tic-Tac-Tic"
              className="btn btn-primary"
            >
              Github
            </a>
            <a
              href="https://tic-tac-toe-two-gold-72.vercel.app/"
              title="todo live"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default portfolio;
