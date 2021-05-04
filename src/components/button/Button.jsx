import {ButtonStyle} from './ButtonStyle'
const Button = (props)=> {
    return <ButtonStyle className={props.className} onClick={props.onClick} placeholder={props.placeholder}>{props.iconButton}</ButtonStyle>
}
export default Button