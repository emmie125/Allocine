import styled from 'styled-components'

export const HeaderStyle = styled.header`
width:100vw;
height:10vh;
position:fixed;
background-color:#24445C;
background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7));
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