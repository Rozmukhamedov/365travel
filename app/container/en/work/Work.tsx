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
        <h3 className="relative text-center z-20">Ish sxemasi</h3>
        <div className={`${classes.flex} relative flex justify-center z-20`}>
          <div className={`${classes.card} mx-10`}>
            <div className={classes.box}>
              <BsFillTelephoneFill />
            </div>
            <p>
              So'rov qoldiring <br />
              yoki telefon orqali qo'ng'iroq qiling
            </p>
          </div>
          <div className={`${classes.card} lg:mt-12 mx-10`}>
            <div className={classes.box}>
              <BsAirplaneFill />
            </div>
            <p>
              Biz siz uchun tanlaymiz <br />
              individual sayohat
            </p>
          </div>
          <div className={`${classes.card} lg:mt-12 mx-10`}>
            <div className={classes.box}>
              <BsFiles />
            </div>
            <p>
              Biz kerakli narsalarni yig'amiz <br />
              hujjatlar to'plami
            </p>
          </div>
          <div className={`${classes.card} mx-10`}>
            <div className={classes.box}>
              <BsFillEmojiSmileFill />
            </div>
            <p>
              Siz keng qamrovli ma'lumotga ega bo'lasiz <br />
              zavq - qumloqdan <br />
              baland tog'larga plyajlar <br />
              qorli cho'qqilar <br />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Work;
