import './DesktopNavigation.css'
import LogoType from '../../../shared/images/LogoType.png'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'

export const DesktopNavigation = () => {
  const history = useHistory()
  const [authUser, setAuthUser] = useContext(UserContext)

  const displaySignInOrUsername = () => {
    return authUser 
      ? <Profile/>
      : <span onClick={() => history.push(RoutingPath.logInView)}>Logga in</span>
  }


  return (
    <div className="desktopNavigationWrapper">
      <span onClick={() => history.push(RoutingPath.homeView)}><img className="navigationLogotype" src={LogoType} alt={"Logotype"}/></span>
      <span onClick={() => history.push(RoutingPath.categoriesView)}>Kategorier</span>
      <span onClick={() => history.push(RoutingPath.aboutView)}>Hur det fungerar</span>
      <span onClick={() => history.push(RoutingPath.signUpView)}>Skapa konto</span>
      {displaySignInOrUsername()}
    </div>
  )
}
