import './Profile.css'
import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'

export const Profile = () => {
  const [authUser, setAuthUser] = useContext(UserContext)

  return (
    <div>
      <img className='profileImg' src={'https://thispersondoesnotexist.com/image'}  alt={'Profilepicture'}/>
      {authUser.username}
    </div>
  )
}
