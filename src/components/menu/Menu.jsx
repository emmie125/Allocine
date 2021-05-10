import {MenuStyle,LinkStyle} from './MenuStyle'
import { Link } from "react-router-dom"
export const Menu = ()=>{
    return (
        <MenuStyle>
            <ul>
                <li>
                  <LinkStyle to="/">Home</LinkStyle>
                </li>
                <li>
                  <LinkStyle to="/category">Category</LinkStyle>
                </li>
                <li>
                  <LinkStyle to="/contact">Contactez-us</LinkStyle>
                </li>
              </ul>
        </MenuStyle>
    )
}