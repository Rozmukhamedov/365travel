"use client";

import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import Image1 from "@/app/assets/images/tours/vietnam.jpg";
import Image2 from "@/app/assets/images/tours/egypt.jpg";
import Image3 from "@/app/assets/images/tours/georgia.jpg";
import Image4 from "@/app/assets/images/tours/maldives.jpg";
import { Container, Grid } from "@mantine/core";

function Tours() {
  return (
    <div className={classes.tours}>
      <Container size={"xl"}>
        <div className="text-center py-20 z-20 relative">
          <h3 className="mb-10">Выберите свой курорт</h3>
          <Grid>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image1} alt="TripWise" />

                <h5>Вьетнам от $600 (80$/месяц)</h5>
                <p>
                  Вьетнам — богатая и уникальная культура, включающая в
                  себя ценности, традиции и разнообразие.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image2} alt="TripWise" />
                <h5>Египет от $499 (66$/месяц)</h5>
                <p>
                  Египт — богатое историческое наследие с древними
                  пирамидами, храмами и историческими памятниками.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image3} alt="TripWise" />
                <h5>Грузия от $440 (58$/месяц)</h5>
                <p>
                Грузии — её богатая и разнообразная природа, включая горные пейзажи, виноградники и чёрноморские пляжи.
                </p>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image4} alt="TripWise" />
                <h5>Мальдивы от $1200 (170$/месяц)</h5>
                <p>
                  Мальдивских островов — захватывающие тропические пляжи и
                  кристально чистые воды Индийского океана.
                </p>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Tours;

