import "./ProfileDropDown.css";
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const ProfileDropDown = () => {
  const history = useHistory()
  const [authUser, setAuthUser] = useContext(UserContext);

  const logOut = () => {
    setAuthUser(false);
    localStorage.removeItem('user')
    history.push(RoutingPath.homeView)

  };

  return (
    <div className="profileDropDown">
      <span>Alternativ 1</span>
      <span>Alternativ 2</span>
      <span>Alternativ 3</span>
      <span onClick={() => logOut()}>Logga ut</span>
    </div>
  );
};
