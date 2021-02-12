import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './HomeView.css'
import { ProductCards } from '../../components/productcards/ProductCards'
import { Search } from '../../components/search/Search'
import RoutingPath from '../../routes/RoutingPath'

export const HomeView = () => {
  /*  const [authUser, setAuthUser] = useState() */

  useEffect(() => {
 ; /* det första som sker när komponenten laddas in */
    return () => {
      /* det sista som sker när komponeneten avlägsnas*/
    };
  }, []); /* när det värdet vi sätter in i input uppdateras så körs hela useEffect om */

  return (
    <div className='homeViewWrapper'>
      <div className='homeViewCategoriesWrapper'>
        <Link to={RoutingPath.categoriesView}>Kategorier</Link>
      </div>
      <div className='homeViewSearchWrapper'>
        <Search/>
      </div>
      <div className='homeViewProductCardsWrapper'>
        <ProductCards/>
      </div>
    </div>
  );
};
