"use client";

import React from "react";
import classes from "./style.module.css";

function Main() {
  const handleClickScroll = () => {
    const element = document.getElementById("feedback");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${classes.main} w-full h-screen flex items-start justify-center relative`}
    >
      <div className={`${classes.texts} mt-64 text-center`}>
        <h1>
          INDIVIDUAL SAURLAR
          <br />В DUBAYGA <br />
          <span style={{ border: "none" }}>
            7 KECHA UCHUN 350 AQSH dollaridan
          </span>{" "}
          <br />
          <span style={{ fontSize: 40, fontWeight: 700 }}>
            OYiga FAQAT 40$ TO'LASH
          </span>
        </h1>
        <h3>
          QUMLI PAYLASHLARDAN MAMALKA LAVZAT OLING
          <br />
          Baland TOG‘LI QORLI cho‘qqilarga!
        </h3>
        <button type="button" onClick={handleClickScroll}>
          Ekskursiyani tanlang
        </button>
      </div>
    </div>
  );
}

export default Main;
