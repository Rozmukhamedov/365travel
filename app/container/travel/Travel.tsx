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
            Вам выгодно путешествовать с нами, потому что
          </h3>
          <div className={`${classes.card} flex mb-4`}>
            <AiFillCheckCircle />
            <div className={classes.texts}>
              <h4>
                Вы получаете необходимый пакет документов в кратчайший срок
              </h4>
              <p>
                Берем на себя обязанности по оформлению визы и страховки, заказу
                авиабилетов и бронированию отелей.
              </p>
            </div>
          </div>
          <div className={`${classes.card} flex mb-4`}>
            <AiFillCheckCircle />
            <div className={classes.texts}>
              <h4>Вы экономите средства</h4>
              <p>
                Сделаем Вам лучшее предложении в соотношении цена-качество.
                Найдете дешевле - получите приятную скидку
              </p>
            </div>
          </div>
          <div className={`${classes.card} flex mb-4`}>
            <AiFillCheckCircle />
            <div className={classes.texts}>
              <h4>Вы активно путешествуете и зарабатываете бонусы</h4>
              <p>
                Дарим Вам 5% скидку на второй, 10% на третий и 20% на четвертый
                тур
              </p>
            </div>
          </div>
          <div className={`${classes.card} flex mb-4`}>
            <AiFillCheckCircle />
            <div className={classes.texts}>
              <h4>Вы чувствуете нашу поддержку</h4>
              <p>
                Вы получите личного экскурсовода, который обеспечит трансфер к
                отелю и разнообразит досуг.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Travel;
