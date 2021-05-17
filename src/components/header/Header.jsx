
import { Icon, InlineIcon } from '@iconify/react';
import searchOutlined from '@iconify-icons/ant-design/search-outlined';
import { HeaderStyle } from "./HeaderStyle"
import Navbar from '../navbar/Navbar'
import { Input } from "../input/Input"
import Button from "../button/Button"


export const Header = (props)=>{
 
    return(
        <HeaderStyle>
            
            <Navbar toggleClick={props.toggleClick} navbarState = {props.navbarState} iconButton={props.iconButton} className="header__navbar"/>
            <div className="header__search">
                <Input/>
                <Button onClick={props.onClick} iconButton={<Icon icon={searchOutlined} />} className="btn__search"/>
            </div>
           
        </HeaderStyle>
    )
}