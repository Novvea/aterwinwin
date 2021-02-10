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
      <h1>Varmt välkomna till hemvyn! Testar att göra en mondriantavla här nedan</h1>
      <div className="mondrianOuterBox">
        <div className="a">a</div>
        <div className="b">b</div>
        <div className="c">c</div>
        <div className="d">d</div>
        <div className="e">e</div>
        <div className="f">f</div>
        <div className="g">g</div>
      </div>

    </div>
  );
};
