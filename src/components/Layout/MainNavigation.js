import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  const email = localStorage.getItem("email");

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/auth");
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {isLoggedIn &&
            (email === "augu@test.com" || email === "test@test.com") && (
              <li>
                <Link to="/Augu">Augusto</Link>
              </li>
            )}
          {isLoggedIn &&
            (email === "ema@test.com" || email === "test@test.com") && (
              <li>
                <Link to="/Ema">Emanuel</Link>
              </li>
            )}
          {isLoggedIn &&
            (email === "marga@test.com" || email === "test@test.com") && (
              <li>
                <Link to="/Marga">Margarita</Link>
              </li>
            )}
          {isLoggedIn &&
            (email === "nancy@test.com" || email === "test@test.com") && (
              <li>
                <Link to="/Nancy">Nancy</Link>
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
              <Link to="/profile">Profile</Link>
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
