import './DesktopNavigation.css'
import LogoType from '../../../shared/images/LogoType.png'
import { useHistory } from 'react-router-dom'

export const DesktopNavigation = () => {
  const history = useHistory()

  return (
    <div className="desktopNavigationWrapper">
      
      <span onClick={() => history.push('/home')}><img className="navigationLogotype" src={LogoType} alt={"Logotype"}/></span>
      <span onClick={() => history.push('/categories')}>Kategorier</span>
      <span onClick={() => history.push('/about')}>Hur det fungerar</span>
      <span onClick={() => history.push('/login')}>Logga in</span>
      <span onClick={() => history.push('/signup')}>Skapa konto</span>
    </div>
  )
}
