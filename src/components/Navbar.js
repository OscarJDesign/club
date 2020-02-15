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

    }
    #btn-menu{
        display:none;
    }
    label{
        display:none;
        width:30px;
        padding:10px;
    }
    .logo{
        padding:0px 50px;
        img{
            display:block;
        }
    }
    .menu{
        display:flex;
        margin-top:0px;
        justify-content:center;
        margin-top:-100px;
    }
    .menu ul{
        list-style:none;
        display:flex;
        margin:0px 0px;
        justify-content:center;
    }
    .menu li{
        .iconos-menu{
               display:none;
               justify-content:left;
               
           }
    }
    .menu li a{
            display:block;
            padding:10px 20px;
            color:rgb(255,255,255);
            text-shadow: 1px 3px 3px #696;

    }

    /* --------------MEDIAQUERIS----------- */
    @keyframes tamaño{
    0%{height: 0px;   
    } 
 }
    @media screen and (max-width:1010px ){
        
        label{
            display:fixed;
            justify-content:left;
            margin:-100px 30px;   
            :hover{
                cursor:pointer;
            }
            img{
                display:block;
            }    
        }
        .logo{
            display:flex;
            justify-content:center;
            
            img{
                display:block;
                
            }
        }
        .menu{
           position:flex;
           justify-content:left;
           width:38%;
           margin-left:-40%;
           transition:all 0.5s;

            ul{
                display:flex;
                border-radius:10px;
                padding:0px;
                background:rgba(0, 0, 0, 0.9);
                flex-direction:column;
                width:100%;
                margin-top:90px;
            
            .iconos-menu{
               display:fixed;
               justify-content:left;
               margin-top:-20px;
            }
        }
           li{
            text-align:center;
            border-radius:10px;
            border-style:dashed;
               border-top: 1px solid rgba(255,255,255,.1);
               border-width:1px;
           }  
        }
        #btn-menu:checked ~ .menu{
            margin:0px;
        }
    }

    @media screen and (max-width:370px ){
        .logo img{
                width:160px;
        }
        label{   
            margin:-90px 0px;   
        }
        

    }
    .menu{
        padding:0px 0px;
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