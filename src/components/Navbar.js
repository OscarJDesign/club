import React from 'react';
import logo from "../asset/img/logo.png";
import headmenu from "../asset/img/menu.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled";




const Header= styled.header`
    width: 100%;
    height:200px;
    display: flex;
    background: url(${headmenu}) no-repeat;
    background-size: contain;
    background-attachment: fixed;

    flex-direction: row;
    padding: 30px 0px;
    justify-content: space-around;
    position: fixed;
    animation-name: tamaño;
    animation-duration: 5s;
    animation-iteration-count: initial; 
    @media screen and (max-width: 600px){
    
        flex-direction: column;
        align-items: center;
    }
    img {
        margin: -30px 0px;
    }
    .login{
        font-size: 25px;
        color: rgb(255, 17, 108);
        transition: .7s;
        :hover{
            color: #F84AA7;
        }
    }
    @keyframes tamaño{
    0%{height: 0px;
        
    } 
}
`;
const Link = styled.a`
    margin: 0px 20px;
    color: #ffffff;
    padding-bottom: 9px;
    display: inline-block;
    text-decoration: none;
    border-bottom: 2px solid transparent; 
    font-size:  20px;
    @media screen and (max-width: 600px){
    
        flex-direction: column;
        margin: 40px 20px;
    }
    
     :hover, :focus{
        border-bottom: 2px solid rgb(255, 17, 108);
    }
`;








const Navbar = () => {
    
    return (

        
        <div className="contenedor">
            <Header > 
                    <div className="logo">
                        <img src={logo}  width = "" height="" alt="Logo_ClubVip"/>
                    </div>
                    <nav className="menu">
                        <Link href="#">Home</Link>
                        <Link href="#">Trabajo</Link>
                        <Link href="#">Videos</Link>
                        <Link href="#">Avisos</Link>
                        <Link href="#">Novedades</Link>
                        <Link href="#">Nosotros</Link>
                    </nav>
                     <a href="" className="login">
                     <FontAwesomeIcon icon={faSignInAlt} />
                     </a>        
            </Header> 
                
            
            

            
            
        </div>

    );
};

export default Navbar;