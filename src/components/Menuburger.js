import React, { Fragment } from 'react';
import btnmenu from "../asset/img/img-btn-menu.png";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFemale, faAd, faVideo, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-scroll";

const Enlaces = styled.div`
    
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
    .menu li .enlace{

            display:block;
            padding:10px 20px;
            color:rgb(255,255,255);
            text-shadow: 1px 3px 3px #696;
            cursor: pointer;

    }
    @media screen and (max-width:730px ){
        .menu{
            justify-content:center;
            margin-left:-30px;
            li .enlace{
                padding:10px 10px;
            }
        }
        
    }

    @media screen and (max-width:620px ){
        .menu li .enlace{

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
                
                li .enlace{
                    padding:10px 10px;
                }
            }
        }
    }
    @media screen and (max-width:470px ){
        .menu{
            justify-content:center;
                margin-left:-20px;
                ul{
                    margin-left:-20px;
                
                li .enlace{
                    font-size:15px;
                    padding:10px 7px;
                }
            }
        }
    }
        
    
    
`;

const Menuburger = () => {
    return (
        <Fragment>
        <Menubur>
            <label htmlFor="btn-menu">
                <img src={btnmenu} width = "30px"  height="30px" alt="Menú"></img>
            </label>
            <nav className="menu">
                <ul>
                <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
>
                    <li><Enlaces className="enlace" >Home
                    <FontAwesomeIcon className="iconos-menu" icon={faHome} /></Enlaces></li></Link>                    
                    
                    <li>
                        <Enlaces className="enlace">
                        <a href="https://api.whatsapp.com/send?phone=992758262&text=Hola%2C%20quiero%20trabajar%20con%20ustedes">Trabajo</a>
                            <FontAwesomeIcon className="iconos-menu" icon={faFemale} />
                        </Enlaces>
                    </li>

                    <Link
                        activeClass="active"
                        to="videos"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
>
                    <li><Enlaces className="enlace">Videos
                    <FontAwesomeIcon className="iconos-menu" icon={faVideo} /></Enlaces></li></Link>
                    <Link
                        activeClass="active"
                        to="avisos"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
>
                    <li><Enlaces className="enlace">Avisos
                    <FontAwesomeIcon className="iconos-menu" icon={faAd} /></Enlaces></li></Link>
                    <Link
                        activeClass="active"
                        to="novedades"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
>
                    <li><Enlaces className="enlace">Novedades
                    <FontAwesomeIcon className="iconos-menu" icon={faNewspaper} /></Enlaces></li></Link>
                    <Link
                        activeClass="active"
                        to="nosotros"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
>
                    <li><Enlaces className="enlace">Nosotros
                    <FontAwesomeIcon className="iconos-menu" icon={faAd} /></Enlaces></li></Link>
                </ul>
            </nav> 
        </Menubur>
        <br/>>
        </Fragment>
    );
};

export default Menuburger;