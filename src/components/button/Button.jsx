import {ButtonStyle} from './ButtonStyle'
const Button = (props)=> {
    return <ButtonStyle btnmore={props.btnmore} btncat={props.btncat} secondary={props.secondary} className={props.className} onClick={props.onClick} placeholder={props.placeholder}>{props.label}{props.iconButton}</ButtonStyle>
}
export default Button