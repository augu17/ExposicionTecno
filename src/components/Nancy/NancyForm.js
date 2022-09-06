import classes from "./NancyForm.module.css";
import Carousel from "better-react-carousel";
import imgDeveloper from "../../assets/developer-icon.png";
import imgProduct from "../../assets/product-icon.png";
import imgQA from "../../assets/qa-icon.png";
import imgDevops from "../../assets/devops-icon.png";
import imgTecno from "../../assets/logo-blanco.png";
import imgNec from "../../assets/NEC_logo.png";
import imgCity from "../../assets/citySensAI-logo.png";

const NancyForm = () => {
  return (
    <section className={classes.starting}>
      <div>
        <img className={classes.img} src={imgCity} alt="citysensAI" />
      </div>
      <section className={classes.nancy}>
        <Carousel cols={1} rows={1} gap={10} loop scrollSnap>
          <Carousel.Item>
            <div>
              <ul className={classes.ul}>
                <li>
                  {window.innerWidth < 768 ? (
                    <img
                      className={classes.imgTecno}
                      src={imgTecno}
                      alt="tecnoSoftware"
                    />
                  ) : (
                    <img
                      className={classes.imgTecno2}
                      src={imgTecno}
                      alt="tecnoSoftware"
                    />
                  )}
                </li>
                <li>
                  {window.innerWidth < 768 ? (
                    <img className={classes.img3} src={imgNec} alt="NEC" />
                  ) : (
                    <img
                      className={classes.img3v2}
                      src={imgNec}
                      alt="NEC chiquito"
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
                  <img className={classes.img} src={imgDeveloper} alt="dev" />
                  <img className={classes.img} src={imgProduct} alt="prod" />
                </li>
                <li className="nav-item">
                  <img className={classes.img} src={imgQA} alt="qa" />
                  <img className={classes.img} src={imgDevops} alt="devops" />
                </li>
              </ul>
            ) : (
              <ul className={classes.ul2}>
                <li className={classes.li2}>
                  <h2>Equipo</h2>
                </li>
                <li className="nav-item">
                  <img className={classes.img} src={imgDeveloper} alt="dev" />
                  <img className={classes.img} src={imgProduct} alt="prod" />
                </li>
                <li className="nav-item">
                  <img className={classes.img} src={imgQA} alt="qa" />
                  <img className={classes.img} src={imgDevops} alt="devops" />
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
        </Carousel>
      </section>
    </section>
  );
};

export default NancyForm;
