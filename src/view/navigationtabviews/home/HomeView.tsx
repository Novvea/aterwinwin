import { useEffect, useState } from "react";
import LogoType from '../../../shared/images/LogoType.png'
import './HomeView.css'

export const HomeView = () => {
  /*  const [authUser, setAuthUser] = useState() */

  useEffect(() => {
 ; /* det första som sker när komponenten laddas in */
    return () => {
      /* det sista som sker när komponeneten avlägsnas*/
    };
  }, []); /* när det värdet vi sätter in i input uppdateras så körs hela useEffect om */

  return (
    <div>
      <img className='logoType' src={LogoType} alt={'Logotype'}/>
    </div>
  );
};
