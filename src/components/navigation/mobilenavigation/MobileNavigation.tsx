import "./MobileNavigation.css";
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { SideBar } from './sidebar/SideBar'
import { useState } from 'react'

export const MobileNavigation = () => {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false)

  return (
  <div>
    <HamburgerButton sideBarHandler={setOpenSideBar}/>
    <SideBar sideBarIsOpen={openSideBar} sideBarHandler={setOpenSideBar}/>
  </div>);
};
