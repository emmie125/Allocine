import {ButtonStyle} from './ButtonStyle'
const Button = (props)=> {
    return <ButtonStyle secondary={props.secondary} className={props.className} onClick={props.onClick} placeholder={props.placeholder}>{props.label}{props.iconButton}</ButtonStyle>
}
export default Button