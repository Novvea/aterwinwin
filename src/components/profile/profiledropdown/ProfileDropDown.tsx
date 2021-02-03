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
      <button> Alternativ 1</button>
      <button>Alternativ 2</button>
      <button>Alternativ 3</button>
      <button onClick={() => logOut()}>Logga ut</button>
    </div>
  );
};
