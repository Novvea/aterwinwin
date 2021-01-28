import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { AboutView } from '../view/AboutView'
import { HomeView } from '../view/HomeView'
import { CategoriesView } from '../view/CategoriesView'
import { LogInWiev } from '../view/LogInWiev'
import { SignUpView } from '../view/SignUpView'
import RoutingPath from './RoutingPath'

export const Routes = (props: {children: React.ReactChild}) => {
  const { children } = props

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={RoutingPath.homeView} component={HomeView}/>
        <Route exact path={RoutingPath.aboutView} component={AboutView}/>
        <Route exact path={RoutingPath.categoriesView} component={CategoriesView}/>
        <Route exact path={RoutingPath.logInView} component={LogInWiev}/>
        <Route exact path={RoutingPath.signUpView} component={SignUpView}/>
        <Route component={HomeView}/> {/* Om vi vill att homeView är den första sidan vi kommer till och om något blir fel */}
      </Switch>
    </BrowserRouter>
  )
}