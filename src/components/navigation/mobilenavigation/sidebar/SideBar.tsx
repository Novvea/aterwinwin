import './SideBar.css'

export const SideBar = (props: {sideBarIsOpen: boolean, sideBarHandler: Function}) => {
  return (
    <div className={props.sideBarIsOpen ? 'sideBarWrapper open' : 'sideBarWrapper'}>
      <button onClick={() => props.sideBarHandler(false)}>Close</button>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  )
}
