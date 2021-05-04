import styled from 'styled-components'

export const HeaderStyle = styled.header`
width:100vw;
height:10vh;
position:fixed;
background-color:#00455E;
display:flex;
justify-content:space-evenly;
align-items:center;
z-index:1000;

.header__search{
    display:flex;
    justify-content: center;
    text-align:end;
    whidth:50%;
    height:50%;
    padding:0% 5%;
}

.btn__search{
    margin-left:2%;
    text-align:end;
}
Input{
    z-index:1000;
}`