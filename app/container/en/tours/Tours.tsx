"use client";

import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import Image1 from "@/app/assets/images/tours/vietnam.jpg";
import Image2 from "@/app/assets/images/tours/egypt.jpg";
import Image3 from "@/app/assets/images/tours/georgia.jpg";
import Image4 from "@/app/assets/images/tours/maldives.jpg";
import { Button, Container, Grid } from "@mantine/core";

function Tours() {
  return (
    <div className={classes.tours}>
      <Container size={"xl"}>
        <div className="text-center py-20 z-20 relative">
          <h3 className="mb-10">Dam olish maskanini tanlang</h3>
          <Grid>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image1} alt="TripWise" />

                <h5>Vetnam $600 dan (oyiga $80)</h5>
                <p>
                  Vetnam qadriyatlar, an'analar va xilma-xillikni o'z ichiga
                  olgan boy va noyob madaniyatdir.
                </p>
                <Button>
                  <a href="https://payme.uz/fallback/merchant/?id=64d216bff9d1730016a3ac74">
                    Bron qilish
                  </a>
                </Button>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image2} alt="TripWise" />
                <h5>Misr $499 dan (oyiga $66)</h5>
                <p>
                  Misr qadimiy piramidalar, ibodatxonalar va tarixiy obidalar
                  bilan boy tarixiy merosga ega.
                </p>
                <Button>
                  <a href="https://payme.uz/fallback/merchant/?id=64d216bff9d1730016a3ac74">
                    Bron qilish
                  </a>
                </Button>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image3} alt="TripWise" />
                <h5>Gruziya $440 dan (oyiga $58)</h5>
                <p>
                  Gruziya - uning boy va xilma-xil tabiati, jumladan, tog'
                  landshaftlari, uzumzorlar va Qora dengiz plyajlari.
                </p>
                <Button>
                  <a href="https://payme.uz/fallback/merchant/?id=64d216bff9d1730016a3ac74">
                    Bron qilish
                  </a>
                </Button>
              </div>
            </Grid.Col>
            <Grid.Col span={12} sm={6} lg={6}>
              <div className={"flex flex-col justify-center items-center mb-6"}>
                <Image src={Image4} alt="TripWise" />
                <h5>Maldiv orollari 1200 dollardan (oyiga 170 dollar)</h5>
                <p>
                  Maldiv orollarida ajoyib tropik plyajlar va Hind okeanining
                  tiniq suvlari bor.
                </p>
                <Button>
                  <a href="https://payme.uz/fallback/merchant/?id=64d216bff9d1730016a3ac74">
                    Bron qilish
                  </a>
                </Button>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Tours;
