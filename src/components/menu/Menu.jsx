import {MenuStyle,LinkStyle} from './MenuStyle'
import { Link } from "react-router-dom"
export const Menu = ()=>{
    return (
        <MenuStyle>
            <ul>
                <li>
                  <LinkStyle to="/">Accueil</LinkStyle>
                </li>
                <li>
                  <LinkStyle to="/category">Catégories</LinkStyle>
                </li>
                <li>
                  <LinkStyle to="/contact">Contactez-nous</LinkStyle>
                </li>
              </ul>
        </MenuStyle>
    )
}