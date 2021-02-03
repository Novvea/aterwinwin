import "./DesktopNavigation.css";
import LogoType from "../../../shared/images/LogoType.png";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";

export const DesktopNavigation = () => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);

  const displaySignInOrUsername = () => {
    return authUser ? 
      <div className="profile">
        <Profile />
      </div>
     : 
      <button
        className="logInButton"
        onClick={() => history.push(RoutingPath.logInView)}
      >
        Logga in
      </button>
    ;
  };

  return (
    <div className="desktopNavigationWrapper">
      <button onClick={() => history.push(RoutingPath.homeView)}>
        <img className="navigationLogotype" src={LogoType} alt={"Logotype"} />
      </button>
      <button onClick={() => history.push(RoutingPath.categoriesView)}>
        Kategorier
      </button>
      <button onClick={() => history.push(RoutingPath.aboutView)}>
        Hur det fungerar
      </button>
      <button onClick={() => history.push(RoutingPath.signUpView)}>
        Skapa konto
      </button>
      {displaySignInOrUsername()}
    </div>
  );
};
