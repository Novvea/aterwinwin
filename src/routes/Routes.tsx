import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { AboutView } from '../view/AboutView'
import { HomeView } from '../view/HomeView'

export const Routes = (props: {children: React.ReactChild}) => {
  const { children } = props

  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route exact path={'/home'} component={HomeView}/>
        <Route exact path={'/about'} component={AboutView}/>
      </Switch>
    </BrowserRouter>
  )
}