import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";
import logoTecno from "../../assets/logo-tecno.png";

const MainNavigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const [btnIsHighlightedAugu, setBtnIsHighlightedAugu] = useState(false);
  const [btnIsHighlightedEma, setBtnIsHighlightedEma] = useState(false);
  const [btnIsHighlightedMarga, setBtnIsHighlightedMarga] = useState(false);
  const [btnIsHighlightedNancy, setBtnIsHighlightedNancy] = useState(false);

  const isLoggedIn = authCtx.isLoggedIn;
  const email = localStorage.getItem("email");

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/auth");
  };

  const btnClassesAugu = `${classes.buttonAugu} ${
    btnIsHighlightedAugu ? classes.bump : ""
  }`;

  const btnClassesEma = `${classes.buttonEma} ${
    btnIsHighlightedEma ? classes.bump : ""
  }`;

  const btnClassesMarga = `${classes.buttonMarga} ${
    btnIsHighlightedMarga ? classes.bump : ""
  }`;

  const btnClassesNancy = `${classes.buttonNancy} ${
    btnIsHighlightedNancy ? classes.bump : ""
  }`;

  const clickHandlerAugu = (event) => {
    setBtnIsHighlightedAugu(true);

    const timer = setTimeout(() => {
      setBtnIsHighlightedAugu(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  };

  const clickHandlerEma = (event) => {
    setBtnIsHighlightedEma(true);

    const timer = setTimeout(() => {
      setBtnIsHighlightedEma(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  };

  const clickHandlerMarga = (event) => {
    setBtnIsHighlightedMarga(true);

    const timer = setTimeout(() => {
      setBtnIsHighlightedMarga(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  };

  const clickHandlerNancy = (event) => {
    setBtnIsHighlightedNancy(true);

    const timer = setTimeout(() => {
      setBtnIsHighlightedNancy(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {/* {!isLoggedIn && (
            <li>
              <img className={classes.img} src={logoTecno}></img>
            </li>
          )} */}
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {isLoggedIn &&
            (email === "augu@test.com" || email === "test@test.com") && (
              <li>
                {window.innerWidth > 768 ? (
                  <Link
                    className={btnClassesAugu}
                    onClick={clickHandlerAugu}
                    to="/Augu"
                  >
                    Augusto
                  </Link>
                ) : (
                  <Link
                    className={classes.btnChico}
                    onClick={clickHandlerAugu}
                    to="/Augu"
                  >
                    A
                  </Link>
                )}
              </li>
            )}
          {isLoggedIn &&
            (email === "ema@test.com" || email === "test@test.com") && (
              <li>
                {window.innerWidth > 768 ? (
                  <Link
                    className={btnClassesEma}
                    onClick={clickHandlerEma}
                    to="/Ema"
                  >
                    Emanuel
                  </Link>
                ) : (
                  <Link
                    className={classes.btnChico}
                    onClick={clickHandlerEma}
                    to="/Ema"
                  >
                    E
                  </Link>
                )}
              </li>
            )}
          {isLoggedIn &&
            (email === "marga@test.com" || email === "test@test.com") && (
              <li>
                {window.innerWidth > 768 ? (
                  <Link
                    className={btnClassesMarga}
                    onClick={clickHandlerMarga}
                    to="/Marga"
                  >
                    Margarita
                  </Link>
                ) : (
                  <Link
                    className={classes.btnChico}
                    onClick={clickHandlerMarga}
                    to="/Marga"
                  >
                    M
                  </Link>
                )}
              </li>
            )}
          {isLoggedIn &&
            (email === "nancy@test.com" || email === "test@test.com") && (
              <li>
                {window.innerWidth > 768 ? (
                  <Link
                    className={btnClassesNancy}
                    onClick={clickHandlerNancy}
                    to="/Nancy"
                  >
                    Nancy
                  </Link>
                ) : (
                  <Link
                    className={classes.btnChico}
                    onClick={clickHandlerNancy}
                    to="/Nancy"
                  >
                    N
                  </Link>
                )}
              </li>
            )}
        </ul>
      </nav>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              {window.innerWidth > 768 && <Link to="/profile">Profile</Link>}
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
