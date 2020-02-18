import React from 'react';
import logo from "../asset/img/logo.png";
import headmenu from "../asset/img/footer.png";
import styled from "@emotion/styled";


const Header= styled.header`
    width: 100%;
    height:130px;
    background: url(${headmenu}) no-repeat;
    background-size: cover;
    padding: 10px 0px;
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
                left:100px;
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


const Footer = () => {
    
    return (
      
        <div className="contenedor">
            <Header > 
                <div className="ContenedorFooter">
                    <div className="logo">
                        <img src={logo}  width = "" height="" alt="Logo_ClubVip"/>
                        <p>© 2018 Todos los derechos reservados.</p>
                    </div>
                    
                </div>    
                              
            </Header> 
        </div>
 
    );
};

export default Footer;