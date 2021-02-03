import { useEffect, useState } from "react";

export const HomeView = () => {
  /*  const [authUser, setAuthUser] = useState() */

  useEffect(() => {
    alert(
      "HomeView first render"
    ); /* det första som sker när komponenten laddas in */
    return () => {
      /* det sista som sker när komponeneten avlägsnas*/
    };
  }, []); /* när det värdet vi sätter in i input uppdateras så körs hela useEffect om */

  return (
    <div>
      <h1>This is the HomeView!</h1>
    </div>
  );
};
