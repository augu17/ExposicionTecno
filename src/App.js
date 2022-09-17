import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import Augu from "./pages/Augu";
import AuthPage from "./pages/AuthPage";
import Ema from "./pages/Ema";
import HomePage from "./pages/HomePage";
import Marga from "./pages/Marga";
import Nancy from "./pages/Nancy";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const email = localStorage.getItem("email");
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/Augu">
          {authCtx.isLoggedIn &&
            (email === "augu@test.com" || email === "test@test.com") ? (
            <Augu />
          ) : (
            <Redirect to="/" />
          )}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/Ema">
          {authCtx.isLoggedIn &&
            (email === "ema@test.com" || email === "test@test.com") ? (
            <Ema />
          ) : (
            <Redirect to="/" />
          )}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/Marga">
          {authCtx.isLoggedIn &&
            (email === "marga@test.com" || email === "test@test.com") ? (
            <Marga />
          ) : (
            <Redirect to="/" />
          )}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/Nancy">
          {authCtx.isLoggedIn &&
            (email === "nancy@test.com" || email === "test@test.com") ? (
            <Nancy />
          ) : (
            <Redirect to="/" />
          )}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
