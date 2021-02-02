import './ProfileDropDown.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'

export const ProfileDropDown = () => {
  const [ authUser, setAuthUser ] = useContext(UserContext)

  const logOut = () => {
    setAuthUser(false)
  
  }  

  return (
  <div className='profileDropDown'>
    <span>Alternativ 1</span>
    <span>Alternativ 2</span>
    <span>Alternativ 3</span>
    <span onClick={() => logOut()}>Logga ut</span>
  </div>
  )
}
