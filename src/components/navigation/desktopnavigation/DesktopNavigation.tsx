import './DesktopNavigation.css'
import LogoType from '../../../shared/images/LogoType.png'

export const DesktopNavigation = () => {
  return (
    <div className="desktopNavigationWrapper">
      <img className="navigationLogotype" src={LogoType} alt={"Logotype"}/>
    </div>
  )
}
