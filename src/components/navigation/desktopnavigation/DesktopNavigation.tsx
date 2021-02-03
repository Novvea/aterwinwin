import "./DesktopNavigation.css";
import LogoType from "../../../shared/images/LogoType.png";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";
import { NavigationTabs } from '../navigationtabs/NavigationTabs'

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
        LOGGA IN
      </button>
    ;
  };

  return (
    <div className="desktopNavigationWrapper">
      <img className="navigationLogotype" src={LogoType} alt={"Logotype"} />
      <div className="navigationTabs">
        < NavigationTabs />
      </div>
      {displaySignInOrUsername()}
    </div>
  );
};
