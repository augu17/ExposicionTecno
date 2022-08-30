import { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

import mealsImage from "../../assets/meals.jpg";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
      <main className={classes.MainNavigation}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
