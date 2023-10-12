"use client";

import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import ImageIcon from "@/app/assets/images/information/user.png";
import { Container, Grid } from "@mantine/core";

function Information() {
  return (
    <div className={classes.information}>
      <Container size={"xl"}>
        <div className="text-center py-20 z-20 relative">
          <h3 className="mb-10">Какой отдых Вам доступен в Болгарии?</h3>
          <Grid>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <div className={classes.img__border}>
                  <Image src={ImageIcon} alt="Image" />
                </div>
                <h5>Пляжный</h5>
                <p>
                  В Вашем распоряжении - широкие песчаные <br />
                  пляжи Черноморского побережья, <br />
                  11 из которых удостоились международного <br />
                  экологического знака качества - "Голубой флаг".
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <div className={classes.img__border}>
                  <Image src={ImageIcon} alt="Image" />
                </div>
                <h5>Пляжный</h5>
                <p>
                  В Вашем распоряжении - широкие песчаные <br />
                  пляжи Черноморского побережья, <br />
                  11 из которых удостоились международного <br />
                  экологического знака качества - "Голубой флаг".
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <div className={classes.img__border}>
                  <Image src={ImageIcon} alt="Image" />
                </div>
                <h5>Пляжный</h5>
                <p>
                  В Вашем распоряжении - широкие песчаные <br />
                  пляжи Черноморского побережья, <br />
                  11 из которых удостоились международного <br />
                  экологического знака качества - "Голубой флаг".
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <div className={classes.img__border}>
                  <Image src={ImageIcon} alt="Image" />
                </div>
                <h5>Пляжный</h5>
                <p>
                  В Вашем распоряжении - широкие песчаные <br />
                  пляжи Черноморского побережья, <br />
                  11 из которых удостоились международного <br />
                  экологического знака качества - "Голубой флаг".
                </p>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Information;
