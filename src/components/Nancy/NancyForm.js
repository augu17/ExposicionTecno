import classes from "./NancyForm.module.css";
import Carousel from "better-react-carousel";
// import imgDeveloper from "../../assets/developer-icon.png";
import imgProduct from "../../assets/product.png";
import imgQA from "../../assets/qa.jpg";
import imgDevops from "../../assets/devops.jpg";
import imgTecnoNec from "../../assets/TecnosoftwareNec.gif";
import imgNec from "../../assets/NEC_logo.png";
import imgCity from "../../assets/citySensAI-Inicio.gif";
import gif from "../../assets/loader.gif";
import gif2 from "../../assets/loader-2.gif";
import imgDeveloper from "../../assets/developer.png";
import ReactPlayer from "react-player";
import { ImageAnimation } from "../../pages/Custom/image-animation/ImageAnimation";

const NancyForm = () => {
  return (
    <section className={classes.starting}>
      {/* INICIO */}
      <div>
        <img className={classes.imgInicio} src={imgCity} alt="citysensAI" />
      </div>
      {/* CARRUSEL */}
      <section className={classes.nancy}>
        <Carousel cols={1} rows={1} gap={10} loop scrollSnap>
          <Carousel.Item>
            <div>
              <ul className={classes.ul}>
                <li>
                  {window.innerWidth < 768 ? (
                    <img
                      className={classes.imgTecno}
                      src={imgTecnoNec}
                      alt="tecnoSoftware"
                    />
                  ) : (
                    <img
                      className={classes.imgTecno2}
                      src={imgTecnoNec}
                      alt="tecnoSoftware"
                    />
                  )}
                </li>

              </ul>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            {window.innerWidth < 768 ? (
              <ul className={classes.ul}>
                <li className={classes.li2}>
                  <h2>Equipo</h2>
                </li>
                <li className="nav-item">
                  <ImageAnimation srcImg={imgDeveloper} />
                  {/* <img className={classes.img} src={imgDeveloper} alt="dev" /> */}
                  {/* <img className={classes.img} src={imgProduct} alt="prod" /> */}
                </li>
                {/* <li className="nav-item">
                  <img className={classes.img} src={imgQA} alt="qa" />
                  <img className={classes.img} src={imgDevops} alt="devops" />
                </li> */}
              </ul>
            ) : (
              <ul className={classes.ul2}>
                <li className={classes.li2}>
                  <h2>Equipo</h2>
                </li>
                <li className="nav-item">
                  <div className={classes.container}>
                    <ImageAnimation srcImgDev={imgDeveloper} srcImgProd={imgProduct} />
                  </div>
                  <ImageAnimation srcImgDev={imgDeveloper} srcImgProd={imgProduct} />
                </li>
                <li className="nav-item">
                  <ImageAnimation srcImgDev={imgQA} srcImgProd={imgDevops} />
                </li>
              </ul>
            )}
          </Carousel.Item>
          <Carousel.Item>
            <ul className={classes.ul2}>
              <li>
                <h2>Tecnología</h2>
              </li>
              <p>Metodología: Scrum</p>
              <p>FrontEnd: AngularJS - Angular 11 - webForm</p>
              <p>TFS: ?</p>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className={classes.ul2}>
              <li>
                <h2>Tecnología</h2>
              </li>
              <p>Backend: .NET</p>
              <p>BD: SQL</p>
              <p>ORM: Entity Framework</p>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            {window.innerWidth < 768 ? (
              <div className={classes.yt2}>
                <ReactPlayer
                  url={"https://www.youtube.com/watch?v=pSZrhP6Y38M"}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
            ) : window.innerWidth > 1200 ? (
              <div className={classes.yt3}>
                <ReactPlayer
                  url={"https://www.youtube.com/watch?v=pSZrhP6Y38M"}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
            ) : (
              <div className={classes.yt}>
                <ReactPlayer
                  url={"https://www.youtube.com/watch?v=pSZrhP6Y38M"}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
            )}
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <ul className={classes.ul}>
                <li className="nav-item">
                  <img className={classes.img} src={gif} alt="gif1" />
                </li>
                <li className="nav-item">
                  <img className={classes.img} src={gif2} alt="gif2" />
                </li>
              </ul>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </section>
  );
};

export default NancyForm;
