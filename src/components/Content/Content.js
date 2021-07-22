import React from "react";
import "./content.scss";
import illustration from "../../images/illustration-devices.svg";

const Content = () => {
  return (
    <main className="main">
      <section className="section">
        <h1 className="section__main-heading">
          <span className="badge rounded-pill bg-dark section__main-heading--pill">
            new
          </span>
          monograph dashboard
        </h1>
        <h2 className="section__sub-heading">
          powerful insights into your team
        </h2>
        <p className="lead section__lead">
          Project planning and time tracking for agile teams
        </p>
        <p className="section__cta-container">
          {/* eslint-disable-next-line */}
          <a href="#" className="section__cta">
            schedule a demo
          </a>
          to see a preview
        </p>
      </section>
      <div className="illustration">
        <img className="illustration__img" src={illustration} alt="" />
      </div>
    </main>
  );
};

export default Content;
