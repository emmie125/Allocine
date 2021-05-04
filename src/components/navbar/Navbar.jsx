import { Link } from "react-router-dom"
import { NavbarStyles } from "./NavbarStyle"
import Button from "../button/Button";
import { Menu } from "../menu/Menu";





 const Navbar = (props)=>{
  
   
    return (
      <NavbarStyles>
        <div className='navbar__container'>
          <Button onClick={props.toggleClick} iconButton={props.iconButton}/>
          {props.etatNavbar?
            <Menu/>
          :
          <div></div>}
        </div>
      </NavbarStyles>
    );
}
export default Navbar