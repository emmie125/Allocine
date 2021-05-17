import {ButtonStyle} from './ButtonStyle'
const Button = (props)=> {
    return <ButtonStyle btngenre={props.btngenre} btnmore={props.btnmore} btndetails={props.btndetails} btncat={props.btncat} secondary={props.secondary} className={props.className} onClick={props.onClick}>{props.label}{props.iconButton}</ButtonStyle>
}
export default Button