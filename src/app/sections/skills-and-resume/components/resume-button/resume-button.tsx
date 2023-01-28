import React, { useState } from "react";
import "./resume.scss";

export const ResumeButton = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
    setTimeout(function () {
      setActive(false);
    }, 2000);
  };

  const particles = new Array(35).map((item, index) => (
    <span key={Math.random() * index} className="particle"></span>
  ));

  return (
    <div className={`${isActive ? "active" : ""} relative`}>
      <a
        onClick={handleClick}
        href="/assets/RESUME - JHÉSSINY MATTOS.pdf"
        download="RESUME - JHÉSSINY MATTOS"
        className="bg-primary-dark text-white px-10 py-5 uppercase rounded-sm hover:brightness-110 duration-300"
      >
        Download Resume
      </a>
      {particles}
    </div>
  );
};
