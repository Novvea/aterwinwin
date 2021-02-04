import './DesktopNavigationTabs.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import { useContext } from 'react'
import { UserContext } from '../../../../shared/provider/UserProvider'
import { Profile } from '../../../profile/Profile' 

export const DesktopNavigationTabs = () => {
  const history =useHistory()
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
        logga in
      </button>
    ;
  };

  return (
    <div className="desktopNavigationTabWrapper"> 
{/*       <button onClick={() => history.push(RoutingPath.homeView)}> 
      Hem 
      </button> */}
{/*        <button onClick={() => history.push(RoutingPath.categoriesView)}>
        Kategorier
      </button> */}
            <button onClick={() => history.push(RoutingPath.signUpView)}>
        Gå med
      </button>
      <span> eller </span>
{/*       <button onClick={() => history.push(RoutingPath.logInView)}>
        logga in
      </button> */}
      {displaySignInOrUsername()}
      <span> eller </span>
      <button onClick={() => history.push(RoutingPath.aboutView)}>
        få veta hur det fungerar
      </button>

    </div>
  )
}
