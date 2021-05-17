import { Link } from "react-router-dom"
import { NavbarStyles } from "./NavbarStyle"
import Button from "../button/Button";
import { Menu } from "../menu/Menu";





 const Navbar = (props)=>{
  console.log(props)
   
    return (
      <NavbarStyles>
        <div className='navbar__container'>
          <Button onClick={props.toggleClick} iconButton={props.iconButton}/>
          {props.navbarState?
            <Menu/>
          :
          <div></div>}
        </div>
      </NavbarStyles>
    );
}
export default Navbar