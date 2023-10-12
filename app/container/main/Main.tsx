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
          ИНДИВИДУАЛЬНЫЕ ТУРЫ <br />В ДУБАЙ <br />
          <span style={{ border: "none" }}>ОТ 350$ ЗА 7 НОЧЕЙ</span> <br />
          <span style={{ fontSize: 40, fontWeight: 700 }}>
            В РАССРОЧКУ ВСЕГО ЛИШЬ 40$ В МЕСЯЦ
          </span>
        </h1>
        <h3>
          ПОЛУЧИТЕ КОМПЛЕКСНОЕ НАСЛАЖДЕНИЕ - ОТ ПЕСЧАНЫХ ПЛЯЖЕЙ <br />
          ДО ВЫСОКОГОРНЫХ ЗАСНЕЖЕННЫХ ПИКОВ!
        </h3>
        <button type="button" onClick={handleClickScroll}>
          Подобрать тур
        </button>
      </div>
    </div>
  );
}

export default Main;
