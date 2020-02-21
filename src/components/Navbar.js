import React from 'react';
import logo from "../asset/img/logo.png";
import headmenu from "../asset/img/menu.png";

import styled from "@emotion/styled";


const Header= styled.header`
    width: 100%;
    height:170px;
    background: url(${headmenu}) no-repeat;
    background-size: contain;
    background-attachment: fixed;
    padding: 10px 0px;
    justify-content: space-around;
    position: fixed;
    animation-name: tamaño;
    animation-duration: 2.2s;
    animation-iteration-count: initial; 
    z-index:100;
    .logo{
        padding:0px 50px;
        img{
            display:block;
        }
    }

    /* --------------MEDIAQUERIS----------- */
    @keyframes tamaño{
        0%{height: 0px;   
    } 
 }
    @media screen and (max-width:1010px ){
        
        
        .logo{
            display:flex;
            position:relative;
            top:-10px;
            justify-content:center;
            padding:50px 0px;
            
            img{
                display:block;
                width:140px;
                
            }
        }
        

    @media screen and (max-width:670px ){
        .logo {
            display:flex;
            position:relative;
            top:-30px;
            img{
                width:130px;
            }
        }
    }
    @media screen and (max-width:620px ){
        
    }
    }   
`;


const Navbar = () => {
    
    return (
      
        <div className="contenedor" id="home">
            <Header > 
                    <div className="logo">
                        <img src={logo}  width = "" height="" alt="Logo_ClubVip"/>
                    </div>
                              
            </Header> 
        </div>
 
    );
};

export default Navbar;