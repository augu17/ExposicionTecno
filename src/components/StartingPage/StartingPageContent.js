import classes from './StartingPageContent.module.css';
import imgDevops from "../../assets/devops-icon.png";
import { TextAnimation } from '../../pages/Custom/text-animation/TextAnimation';
import { BorderAnimation } from '../../pages/Custom/border-animation/BorderAnimation';

const StartingPageContent = () => {
  return (
    // <script>
    //   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.2/css/fontawesome.min.css" integrity="sha384-X8QTME3FCg1DLb58++lPvsjbQoCT9bp3MsUU3grbIny/3ZwUJkRNO8NPW6zqzuW9" crossorigin="anonymous"></link>
    // </script>

    <section className={classes.starting}>

      {/* <BorderAnimation /> */}
      <TextAnimation />
    </section>
  );
};

export default StartingPageContent;
