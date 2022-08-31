import React, { useState, useEffect } from "react";
import Carousel from "better-react-carousel";

import classes from "./AuguForm.module.css";
// import Card from "../UI/Card";
// import img from "../../assets/images.png";
import imgJarvis0 from "../../assets/Jarvis-Role-0.png";
import imgJarvis1 from "../../assets/Jarvis-Role-1.png";
import imgJarvis2 from "../../assets/Jarvis-Role-2.png";
import imgJarvis3 from "../../assets/Jarvis-Role-3.png";

const AuguForm = () => {
  return (
    <section className={classes.starting}>
      <h1>Sección Augu</h1>
      <section className={classes.augu}>
        <h2>TSSA - Jarvis</h2>
        <Carousel cols={1} rows={1} gap={25} loop scrollSnap>
          <Carousel.Item>
            <img className={classes.img2} src={imgJarvis0} />
          </Carousel.Item>
          <Carousel.Item>
            <img className={classes.img} src={imgJarvis1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className={classes.img} src={imgJarvis2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className={classes.img2} src={imgJarvis3} />
          </Carousel.Item>
        </Carousel>
      </section>
    </section>
  );
};

export default AuguForm;
