import "./DesktopNavigation.css";
import { useHistory } from "react-router-dom";
 import { useContext } from "react";
import RoutingPath from "../../../routes/RoutingPath";
import { UserContext } from "../../../shared/provider/UserProvider";
import { Profile } from "../../profile/Profile";


export const DesktopNavigation = () => {
  const history =useHistory()
  const [authUser, setAuthUser] = useContext(UserContext);

  const displayNavigationOrUsername = () => {
    return authUser ? 
      <div className="profile" >
        <Profile />
      </div>
     : 
     <div className="desktopNavigationTabWrapper"> 
      <button onClick={() => history.push(RoutingPath.signUpView)}>
        Gå med
      </button>
        <span> eller </span>     
      <button
        onClick={() => history.push(RoutingPath.logInView)}>
        logga in
      </button>
        <span> eller </span>
      <button onClick={() => history.push(RoutingPath.aboutView)}>
        få veta hur det fungerar.
      </button>
    </div>
    ;
  };

  return displayNavigationOrUsername()
};
