import "./Navigation.css";
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const Navigation = () => {
  const { height, width } = useWindowDimensions()
  const history = useHistory()

  const displayNavigationDependingOnDevice = () => {
    return (width <= 750)
      ? <MobileNavigation/>
      : <DesktopNavigation/>
  }

  return (
    <div className='navigationWrapper'>
      <button className='appName' onClick={() => history.push(RoutingPath.homeView)}>ÅTERWINWIN</button>
      {displayNavigationDependingOnDevice() }
    </div>
  );
};
