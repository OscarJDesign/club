import React, { Fragment } from 'react';
import styled from "@emotion/styled";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faFemale, faAd, faVideo, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-scroll";
import LazyLoad from "react-lazyload";
import Spinner from "./Spinner";

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

    /* vietnamese */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dancingscript/v14/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Rep8hNP6pnxP.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dancingscript/v14/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3ROp8hNP6pnxP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/dancingscript/v14/If2cXTr6YS-zF4S-kcSWSVi_sxjsohD9F50Ruu7BMSo3Sup8hNP6pg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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
            text-decoration: none;
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
            <LazyLoad placeholder={<Spinner />}>
                {/* <img src={btnmenu} width = "30px"  height="30px" alt="Menú"></img> */}
                </LazyLoad>
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
                    {/* <FontAwesomeIcon className="iconos-menu" icon={faHome} /> */}
                    </Enlaces></li></Link>                    
                    
                    <li>
                        <Enlaces >
                        <a className="enlace" href="https://api.whatsapp.com/send?phone=992758262&text=Hola%2C%20quiero%20trabajar%20con%20ustedes">Trabajo</a>
                            {/* <FontAwesomeIcon className="iconos-menu" icon={faFemale} /> */}
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
                    {/* <FontAwesomeIcon className="iconos-menu" icon={faVideo} /> */}
                    </Enlaces></li></Link>
                    <Link
                        activeClass="active"
                        to="avisos"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
>
                    <li><Enlaces className="enlace">Avisos
                    {/* <FontAwesomeIcon className="iconos-menu" icon={faAd} /> */}
                    </Enlaces></li></Link>
                    <Link
                        activeClass="active"
                        to="novedades"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
>
                    <li><Enlaces className="enlace">Novedades
                    {/* <FontAwesomeIcon className="iconos-menu" icon={faNewspaper} /> */}
                    </Enlaces></li></Link>
                    <Link
                        activeClass="active"
                        to="nosotros"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
>
                    <li><Enlaces className="enlace">Nosotros
                    {/* <FontAwesomeIcon className="iconos-menu" icon={faAd} /> */}
                    </Enlaces></li></Link>
                </ul>
            </nav> 
        </Menubur>
        <br/>>
        </Fragment>
    );
};

export default Menuburger;