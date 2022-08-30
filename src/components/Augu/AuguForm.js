import classes from "./AuguForm.module.css";
import Card from "../UI/Card";
import img from "../../assets/images.png";

const AuguForm = () => {
  return (
    <section className={classes.starting}>
      <h1>Sección Augu</h1>
      <section className={classes.augu}>
        <h2>Jarvis - NuMA</h2>
        <p>
          <img src={img} alt="Un Augusto durmiendo" />
        </p>
      </section>
    </section>
  );
};

export default AuguForm;
