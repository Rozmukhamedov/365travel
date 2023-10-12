"use client";

import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import classes from "./style.module.css";
import { Container } from "@mantine/core";

function Travel() {
  return (
    <div className={`${classes.travel} py-10`}>
      <Container size="xl">
        <div className="xl:px-20">
          <h3 className="text-center mb-10">
            Biz bilan sayohat qilish siz uchun foydali, chunki
          </h3>
          <div className={`${classes.card} flex mb-4`}>
            <AiFillCheckCircle />
            <div className={classes.texts}>
              <h4>
                Siz kerakli hujjatlar to'plamini imkon qadar tezroq olasiz
              </h4>
              <p>
                Biz viza va sug'urta olish, aviachiptalarga buyurtma berish va
                mehmonxonalarni bron qilish mas'uliyatini o'z zimmamizga olamiz.
              </p>
            </div>
          </div>
          <div className={`${classes.card} flex mb-4`}>
            <AiFillCheckCircle />
            <div className={classes.texts}>
              <h4>Siz pulni tejaysiz</h4>
              <p>
                Biz sizga narx-sifat nisbati bo'yicha eng yaxshi taklifni
                beramiz. Arzonroq toping - yaxshi chegirmaga ega bo'ling
              </p>
            </div>
          </div>
          <div className={`${classes.card} flex mb-4`}>
            <AiFillCheckCircle />
            <div className={classes.texts}>
              <h4>Siz faol sayohat qilasiz va bonuslarga ega bo'lasiz</h4>
              <p>
                Ikkinchi turga 5%, uchinchi turga 10% va toʻrtinchi turga 20%
                chegirma beramiz.
              </p>
            </div>
          </div>
          <div className={`${classes.card} flex mb-4`}>
            <AiFillCheckCircle />
            <div className={classes.texts}>
              <h4>Bizning qo'llab-quvvatlashimizni his qilyapsizmi?</h4>
              <p>
                Siz mehmonxonaga transferni ta'minlaydigan va bo'sh vaqtingizni
                diversifikatsiya qiladigan shaxsiy yo'riqnoma olasiz.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Travel;
