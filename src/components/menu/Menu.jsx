import {MenuStyle} from './MenuStyle'
import { Link } from "react-router-dom"
export const Menu = ()=>{
    return (
        <MenuStyle>
            <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/category">Catégories</Link>
                </li>
                <li>
                  <Link to="/contact">Contactez-nous</Link>
                </li>
              </ul>
        </MenuStyle>
    )
}