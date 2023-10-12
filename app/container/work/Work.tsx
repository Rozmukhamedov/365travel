"use client";

import React from "react";
import classes from "./style.module.css";
import { Container } from "@mantine/core";
import {
  BsFillTelephoneFill,
  BsAirplaneFill,
  BsFiles,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

function Work() {
  return (
    <div className={`${classes.work} py-20`}>
      <Container size="xl">
        <h3 className="relative text-center z-20">Схема работы</h3>
        <div className={`${classes.flex} relative flex justify-center z-20`}>
          <div className={`${classes.card} mx-10`}>
            <div className={classes.box}>
              <BsFillTelephoneFill />
            </div>
            <p>
              Оставляете заявку <br />
              или звоните по телефону
            </p>
          </div>
          <div className={`${classes.card} lg:mt-12 mx-10`}>
            <div className={classes.box}>
              <BsAirplaneFill />
            </div>
            <p>
              Подбираем Вам <br />
              индивидуальный тур
            </p>
          </div>
          <div className={`${classes.card} lg:mt-12 mx-10`}>
            <div className={classes.box}>
              <BsFiles />
            </div>
            <p>
              Собираем необходимый <br />
              пакет документов
            </p>
          </div>
          <div className={`${classes.card} mx-10`}>
            <div className={classes.box}>
              <BsFillEmojiSmileFill />
            </div>
            <p>
              Вы получаете комплексное <br /> наслаждение - от песчаных <br />{" "}
              пляжей до высокогорных <br /> заснеженных пиков
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Work;
