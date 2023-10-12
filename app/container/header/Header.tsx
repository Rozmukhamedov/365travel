"use client";

import React from "react";
import classes from "./style.module.css";
import { Container } from "@mantine/core";
import Image from "next/image";
import LogoImage from "@/app/assets/images/logo.png";
import Link from "next/link";

function Header() {
  return (
    <div className={`${classes.header} absolute w-full z-20	`}>
      <Container size={"xl"}>
        <div className="flex justify-between items-center py-4">
          <Image src={LogoImage} alt="TripWise" />
          <div className={classes.flex}>
            <h3>
              <Link href="/uz">Узб</Link>
            </h3>
            <h4>
              <a href="tel:+998990877788">+998 (99) 087 77 88</a>
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
