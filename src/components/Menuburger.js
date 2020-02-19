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
        margin-top:-40px;
        
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
    @media screen and (max-width:730px ){
        .menu{
            justify-content:center;
            margin-left:-30px;
            li a{
                padding:10px 10px;
            }
        }
        
    }

    @media screen and (max-width:620px ){
        .menu li a{

            display:block;
            padding:10px 10px;
            color:rgb(255,255,255);
            text-shadow: 1px 3px 3px #696;
        }
    }
    @media screen and (max-width:550px ){
        .menu{
            justify-content:center;
                margin-left:-40px;
                ul{
                    margin-left:-20px;
                
                li a{
                    padding:10px 10px;
                }
            }
        }
    }
    @media screen and (max-width:470px ){
        .menu{
            justify-content:center;
                margin-left:-40px;
                ul{
                    margin-left:-20px;
                
                li a{
                    font-size:15px;
                    padding:10px 7px;
                }
            }
        }
    }
        
    
    
`;

const Menuburger = () => {
    return (
        <Menubur>
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