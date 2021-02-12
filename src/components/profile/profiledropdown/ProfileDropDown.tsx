import "./ProfileDropDown.css";
import { useContext } from "react";
import { UserContext } from "../../../shared/provider/UserProvider";
import { useHistory, Link } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const ProfileDropDown = () => {
  const history = useHistory()
  const [authUser, setAuthUser] = useContext(UserContext);

  return (
    <div className="profileDropDown">
      <Link to={RoutingPath.myProfileView}>Min profil</Link>
      <button>Lägg upp vara</button>
      <button>Skapa önskelista</button>
      <Link to={RoutingPath.settingsView}>Inställningar</Link>
      <Link to={RoutingPath.homeView} onClick={() => localStorage.removeItem('user')}>Logga ut</Link>
    </div>
  );
};
