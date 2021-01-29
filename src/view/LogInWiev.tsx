import { useState, useContext } from 'react'
import { i_loginCredentials } from '../shared/interface/Interface'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'

export const LogInWiev = () => {
  const history = useHistory()
  const [loginCredentials, setLoginCredentials] = useState<i_loginCredentials>({username: '', password: ''})
  const [authUser, setAuthUser] = useContext(UserContext)


  const signIn = () => {
    localStorage.setItem('user', loginCredentials.username) /* användarnamnet sparas inne i webläsaren */
    setAuthUser(loginCredentials) /* alla värden i logincredentials sparas i ett globalt värde */
    history.push(RoutingPath.homeView) /* vi flyttas tillbaka till home-view */
  }

  return (
    <div>
      <h1>{loginCredentials.username}</h1>
      <form>
        <input 
          placeholder='username' 
          onChange={event => setLoginCredentials({ ...loginCredentials, username: event.target.value})}/> <br />
        <input 
          placeholder='password' 
          onChange={event => setLoginCredentials({ ...loginCredentials, password: event.target.value})} />
        <button onClick={() => signIn()}>Logga in</button>
      </form>
    </div>
  )
}
