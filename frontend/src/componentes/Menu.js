
import React from 'react'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledNav = Styled.nav`
    background: #58617B;
    color: white;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 2rem;
    }
    a{
        color: white;
        text-decoration: none;
        &:hover{
            background-color: black;
            color: white;
        }
    }
    h5{
        color: yellow;
    }

`;


const Menu = ()=>{
    return(
        <StyledNav>
            <h1>SisEmbTech</h1>
            <ul>
                 <li><Link to='/'>Bemvindo</Link></li>
                 <li><Link to='/medida'>Medidas</Link></li>
                 <li><Link to='/admin'>Administrador</Link></li>
                 <li><Link to='/mensagens'>Mensagens</Link></li>

            </ul>
        </StyledNav>
    )
}
export default Menu;

