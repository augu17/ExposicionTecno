import Carousel from "better-react-carousel";

import classes from "./EmaForm.module.css";

import imgJarvis0 from "../../assets/jarvis_grafico_1.jpg";
import imgJarvis1 from "../../assets/jarvis_grafico_2.jpg";
import imgJarvis2 from "../../assets/jarvis_grafico_1.jpg";
import imgJarvis3 from "../../assets/jarvis_todos_proyectos.jpg";
import imgJarvisInicio from "../../assets/jarvis_grafico_1.jpg";

import "./EmaForm.module.css"

const EmaForm = () => {
  return (
    <section className={classes.starting}>
      <h1>Sección Ema</h1>
      <div className='box'>
        <div className='content'>
          <section className={classes.augu}>
            <h2>TSSA - Jarvis</h2>
            <Carousel cols={1} rows={1} gap={35} loop scrollSnap>
              <Carousel.Item>
                {window.innerWidth > 768 ? (
                  <img className={classes.img} src={imgJarvisInicio} alt="" />
                ) : (
                  <img className={classes.img} src={imgJarvisInicio} alt="" />
                )}
              </Carousel.Item>
              <Carousel.Item>
                {window.innerWidth > 768 ? (
                  <img className={classes.img} src={imgJarvis0} alt="" />
                ) : (
                  <img className={classes.img} src={imgJarvis0} alt="" />
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
                  <img className={classes.img} src={imgJarvis3} alt="3" />
                ) : (
                  <img className={classes.img} src={imgJarvis3} alt="3" />
                )}
              </Carousel.Item>
            </Carousel>
          </section>
        </div>
      </div>
    </section>
  );
};

export default EmaForm;
