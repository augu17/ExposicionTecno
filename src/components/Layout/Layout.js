import { Fragment } from "react";
// import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      {/* <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div> */}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
