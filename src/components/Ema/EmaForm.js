import Carousel from "better-react-carousel";

import classes from "./EmaForm.module.css";

import imgJarvis1 from "../../assets/jira_sprint_37.jpg";
import imgJarvis2 from "../../assets/jira_sprint_44.jpg";
import imgJarvis3 from "../../assets/jarvis_todos_proyectos.jpg";
import imgJarvis4 from "../../assets/jarvis_grafico_1.jpg";
import imgJarvis5 from "../../assets/jarvis_grafico_2.jpg";

import java_logo from "../../assets/java_logo.png";
import jira_logo from "../../assets/jira_logo.png";
import angular_logo from "../../assets/angular_logo.png";
import node_logo from "../../assets/node_logo.png";
import react_logo from "../../assets/react_logo.png";
import bccl_logo from "../../assets/bccl_logo.jpeg";
import banco_vpn from "../../assets/vpn_banco.png";
import tecno_vnp from "../../assets/vpn_tecno.jpg"
import maven_logo from "../../assets/maven_logo.jpg";

import "./EmaForm.module.css"

const EmaForm = () => {
  return (
    <section className={classes.starting}>
      <h1>Sección Ema</h1>
      <div className='box'>
        <div className='content'>
          <section className={classes.ema}>
            <h2>TSSA - Jarvis</h2>
            <Carousel cols={1} rows={1} gap={35} loop scrollSnap>
              <Carousel.Item>
                {window.innerWidth > 768 ? (
                  <div className={classes.gridContainer}>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={bccl_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={banco_vpn}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={angular_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={java_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={maven_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={react_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={tecno_vnp}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={node_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={jira_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={classes.gridContainer}>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={bccl_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={banco_vpn}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={angular_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={java_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={maven_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={react_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={tecno_vnp}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={node_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.gridItems}>
                      <div className={classes.tarjetaWrap}>
                        <div className={classes.tarjeta}>
                          <div className={classes.adelante}>
                            <span className={classes.spanInt}>?</span>
                          </div>
                          <div className={classes.atras}>
                            <img className={classes.imageLogo} src={jira_logo}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Carousel.Item>
              <Carousel.Item>
                {window.innerWidth > 768 ? (
                  <img className={classes.img} src={imgJarvis1} alt="" />
                ) : (
                  <img className={classes.img} src={imgJarvis1} alt="" />
                )}
              </Carousel.Item>
              <Carousel.Item>
                <img className={classes.img} src={imgJarvis2} alt="1" />
              </Carousel.Item>
              <Carousel.Item>
                {window.innerWidth > 768 ? (
                  <img className={classes.img} src={imgJarvis3} alt="3" />
                ) : (
                  <img className={classes.img} src={imgJarvis3} alt="3" />
                )}
              </Carousel.Item>
              <Carousel.Item>
                {window.innerWidth > 768 ? (
                  <img className={classes.img} src={imgJarvis4} alt="3" />
                ) : (
                  <img className={classes.img} src={imgJarvis4} alt="3" />
                )}
              </Carousel.Item>
              <Carousel.Item>
                {window.innerWidth > 768 ? (
                  <img className={classes.img} src={imgJarvis5} alt="3" />
                ) : (
                  <img className={classes.img} src={imgJarvis5} alt="3" />
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
