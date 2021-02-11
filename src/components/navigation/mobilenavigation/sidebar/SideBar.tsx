import './SideBar.css'
import { useHistory, Link } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'

export const SideBar = (props: {sideBarIsOpen: boolean, sideBarHandler: Function}) => {

  const history = useHistory()
  
  const handleRedirectFromSideBar = (selectedView: string) => {
    history.push(selectedView)
    props.sideBarHandler(false)
  }

  return (
    <div className={props.sideBarIsOpen ? 'sideBarWrapper open' : 'sideBarWrapper'}>
        <Link to={RoutingPath.signUpView}>Gå med</Link>
        <span>eller</span>
        <Link to={RoutingPath.logInView}>logga in</Link>
        <span>eller</span>
        <Link to={RoutingPath.aboutView}> få veta hur det fungerar.</Link>
    </div>
  )
}
