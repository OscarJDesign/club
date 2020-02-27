import React from 'react';
import logo from "../asset/img/logo.png";
import headmenu from "../asset/img/footer.png";
import styled from "@emotion/styled";


const Header= styled.header`
    width: 100%;
    height:130px;
    background: url(${headmenu}) no-repeat;
    background-size: cover;
    justify-content: space-around;
   
    animation-name: tamaño;
    animation-duration: 2.2s;
    animation-iteration-count: initial; 
    .ContenedorFooter{
        .logo{
            display:flex;
            justify-content:center;
            padding:0px 50px;
            img{
                display:block;
            }    
            p{
                display:flex;
                position:relative;
                font-size:20px;
                left:50px;
                top:45px;
                color:white;
             
            }
        }
    
            
    }
    
    /* --------------MEDIAQUERIS----------- */
    @keyframes tamaño{
        0%{height: 0px;   
    } 
 }
    @media screen and (max-width:1010px ){
        
        .ContenedorFooter{ 
            .logo{
                display:flex;
                justify-content:center;
                
                img{
                    display:block;
                    
                }
            }
        }
    @media screen and (max-width:450px ){
        .ContenedorFooter{
            .logo {
                img{
                        width:160px;    
                }
                p{
                    font-size:15px;
                }
                
            } 
        }
    }    

    @media screen and (max-width:370px ){
        .ContenedorFooter{
            .logo img{
                    width:100px;
            }
    }  
    }
    }   
`;


const Footer = () => {
    
    return (      
        <div className="contenedor">
            <Header > 
                <div className="ContenedorFooter">
                    <div className="logo">
                        <img src={logo}  width = "" height="" alt="Logo_ClubVip"/>
                        <p>ClubVip © 2020 Todos los derechos reservados.</p>
                    </div>
                    
                </div>    
                              
            </Header> 
        </div> 
    );
};

export default Footer;