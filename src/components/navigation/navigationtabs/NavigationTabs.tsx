import './NavigationTabs.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const NavigationTabs = () => {
  const history =useHistory()
  return (
    <div className="navigationWrapper"> 
      <button onClick={() => history.push(RoutingPath.homeView)}> 
      Hem 
      </button>
       <button onClick={() => history.push(RoutingPath.categoriesView)}>
        Kategorier
      </button>
      <button onClick={() => history.push(RoutingPath.aboutView)}>
        Hur det fungerar
      </button>
      <button onClick={() => history.push(RoutingPath.signUpView)}>
        Skapa konto
      </button>
    </div>
  )
}
