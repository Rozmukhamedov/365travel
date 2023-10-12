"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import classes from "./style.module.css";
import { Container } from "@mantine/core";
import ImgMegafon from "@/app/assets/images/feedback/megafon.png";
import { CSSTransition } from "react-transition-group";

function Feedback() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const nodeRef = useRef(null);

  const onChange = (e: any) => {
    e.preventDefault();
    let templateParams = {
      name: name,
      phone: number,
    };

    emailjs
      .send(
        "service_4ewopve",
        "template_7pqos4u",
        templateParams,
        "4D-MQCb1g9eE3gkgb"
      )
      .then(
        (response) => {
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className={`${classes.feedback} md:p-20 relative`} id="feedback">
      <Container>
        <div className="flex justify-around items-center lg:items-stretch">
          <div className={`${classes.left} text-center`}>
            <div className={classes.image__border}>
              <Image src={ImgMegafon} alt="image" />
            </div>
            <h2>Акция!</h2>
            <h4>
              Оставьте заявку СЕЙЧАС <br />и получите оформление визы в ПОДАРОК!
            </h4>
          </div>
          <div
            className={`${classes.right} py-10 px-10 w-full text-center md:w-auto md:pb-6 md:pt-4 md:px-4 lg:py-12 lg:px-10`}
          >
            <h4>Заполните форму</h4>
            <p>
              и получите подбор <br />
              индивидуального тура
            </p>
            <CSSTransition
              in={showMessage}
              nodeRef={nodeRef}
              timeout={300}
              classNames="alert"
              unmountOnExit
              onEnter={() => setShowButton(false)}
              onExited={() => setShowButton(true)}
            >
              <div></div>
            </CSSTransition>
            <form className="flex flex-col" onSubmit={onChange}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Ваше телефон"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              {/* <input
                type="text"
                name="email"
                placeholder="Ваш e-mail"
                onChange={(e) => setEmail(e.target.value)}
              /> */}
              <button type="submit">Подобрать тур</button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feedback;
