// import React, { useState, useEffect } from "react";
import Carousel from "better-react-carousel";

import classes from "./AuguForm.module.css";
// import Card from "../UI/Card";
// import img from "../../assets/images.png";
import imgJarvis0 from "../../assets/Jarvis-Role-0.png";
import imgJarvis1 from "../../assets/Jarvis-Role-1.png";
import imgJarvis2 from "../../assets/Jarvis-Role-2.png";
import imgJarvis3 from "../../assets/Jarvis-Role-3.png";
import imgJarvisInicio from "../../assets/Flujo-Jarvis-Expo.png";

import video from "../../assets/se-va-epicamente.mp4";

import ReactPlayer from "react-player";

const AuguForm = () => {
  return (
    <section className={classes.starting}>
      <h1>Sección Augu</h1>
      <section className={classes.augu}>
        <h2>TSSA - Jarvis</h2>
        <Carousel cols={1} rows={1} gap={35} loop scrollSnap>
          <Carousel.Item>
            {window.innerWidth > 768 ? (
              <img className={classes.img3} src={imgJarvisInicio} alt="" />
            ) : (
              <img className={classes.img3bis} src={imgJarvisInicio} alt="" />
            )}
          </Carousel.Item>
          <Carousel.Item>
            {window.innerWidth > 768 ? (
              <img className={classes.img2} src={imgJarvis0} alt="" />
            ) : (
              <img className={classes.img2bis} src={imgJarvis0} alt="" />
            )}
          </Carousel.Item>
          <Carousel.Item>
            <img className={classes.img} src={imgJarvis1} alt="1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className={classes.img} src={imgJarvis2} alt="2" />
          </Carousel.Item>
          <Carousel.Item>
            {window.innerWidth > 768 ? (
              <img className={classes.img2} src={imgJarvis3} alt="3" />
            ) : (
              <img className={classes.img2bis} src={imgJarvis3} alt="3" />
            )}
          </Carousel.Item>
          <Carousel.Item>
            <div className={classes.img}>
              <ReactPlayer
                url={"https://youtu.be/pSZrhP6Y38M"}
                width="100%"
                height="100%"
                controls
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </section>
  );
};

export default AuguForm;
