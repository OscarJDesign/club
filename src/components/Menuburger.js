import React from 'react';
import btnmenu from "../asset/img/img-btn-menu.png";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFemale, faAd, faVideo, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Link = styled.a`
    
    color: #ffffff;
    padding-bottom: 15px 20px;
    display: block;
    text-decoration: none;
    border-bottom: 2px solid transparent; 
    
     :hover, :focus{
        border-bottom: 2px solid rgb(255, 17, 108);
        border-radius:10px;
        border-width:2px;
    }
`;
const Menubur= styled.div`
    #btn-menu{
        display:none;
    }
    label{
        display:none;
        width:30px;
        padding:10px;
    }
    .menu{
        display:flex;
        margin-top:0px;
        justify-content:center;
        margin-top:-30px;
        
    }
    .menu ul{
        list-style:none;
        display:flex;
        margin:0px 0px;
        justify-content:center;
        z-index:100;
        position:fixed;
    }
    .menu li{
        .iconos-menu{
               display:none;
               justify-content:flex-end;
               
               
           }
    }
    .menu li a{

            display:block;
            padding:10px 20px;
            color:rgb(255,255,255);
            text-shadow: 1px 3px 3px #696;

    }
    @media screen and (max-width:1010px ){
        
        label{
            display:fixed;
            justify-content:flex-end;
            margin:-35px 0px;   
            :hover{
                cursor:pointer;
            }
            img{
                position:fixed;

                z-index: 100;
            }    
        }
        .menu{
           position:fixed;
           justify-content:flex-end;
           width:38%;
           margin-left:-40%;
           transition:all 0.5s;

            ul{
                display:flex;
                border-radius:10px;
                padding:0px;
                background:rgba(0, 0, 0, 0.9);
                flex-direction:column;
                width:40%;
                margin-top:140px;
            
            .iconos-menu{
               display:fixed;
               justify-content:flex-end;
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
        label{   
            margin:-35px -10px;   
        }
    }
    .menu{
        padding:0px 0px;
    }
`;

const Menuburger = () => {
    return (
        <Menubur>
            <input type="checkbox" id="btn-menu"></input>
                        <label htmlFor="btn-menu">
                            <img src={btnmenu} width = "30px"  height="30px" alt="Menú"></img>
                        </label>
            <nav className="menu">
                <ul>
                    <li><Link href="#!">Home
                    <FontAwesomeIcon className="iconos-menu" icon={faHome} /></Link></li>
                    <li><Link href="#!">Trabajo
                    <FontAwesomeIcon className="iconos-menu" icon={faFemale} /></Link></li>
                    <li><Link href="#!">Videos
                    <FontAwesomeIcon className="iconos-menu" icon={faVideo} /></Link></li>
                    <li><Link href="#!">Avisos
                    <FontAwesomeIcon className="iconos-menu" icon={faAd} /></Link></li>
                    <li><Link href="#!">Novedades
                    <FontAwesomeIcon className="iconos-menu" icon={faNewspaper} /></Link></li>
                    <li><Link href="#!">Nosotros
                    <FontAwesomeIcon className="iconos-menu" icon={faAd} /></Link></li>
                </ul>
            </nav> 
        </Menubur>
    );
};

export default Menuburger;