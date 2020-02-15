import React from 'react';
import logo from "../asset/img/logo.png";
import headmenu from "../asset/img/menu.png";
import styled from "@emotion/styled";


const Header= styled.header`
    width: 100%;
    height:130px;
    background: url(${headmenu}) no-repeat;
    background-size: contain;
    background-attachment: fixed;
    padding: 10px 0px;
    justify-content: space-around;
    position: fixed;
    animation-name: tamaño;
    animation-duration: 2.2s;
    animation-iteration-count: initial; 
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
            justify-content:center;
            
            img{
                display:block;
                
            }
        }
        

    @media screen and (max-width:370px ){
        .logo img{
                width:160px;
        }
    }
    }   
`;


const Navbar = () => {
    
    return (
      
        <div className="contenedor">
            <Header > 
                    <div className="logo">
                        <img src={logo}  width = "" height="" alt="Logo_ClubVip"/>
                    </div>
                              
            </Header> 
        </div>
 
    );
};

export default Navbar;