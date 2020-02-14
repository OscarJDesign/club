import React from 'react';
import logo from "../asset/img/logo.png";
import btnmenu from "../asset/img/img-btn-menu.png";
import headmenu from "../asset/img/menu.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt,faBars } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled";

const Link = styled.a`
    
    color: #ffffff;
    padding-bottom: 15px 20px;
    display: block;
    text-decoration: none;
    border-bottom: 2px solid transparent; 
    
     :hover, :focus{
        border-bottom: 2px solid rgb(255, 17, 108);
    }
`;
const Header= styled.header`
    width: 100%;
    height:105px;
    display: inline-flex;
    background: url(${headmenu}) no-repeat;
    background-size: contain;
    background-attachment: fixed;
 
    justify-content: space-around;
    animation-name: tamaño;
    animation-duration: 2.2s;
    animation-iteration-count: initial; 

    }
    #btn-menu{
        display:none;
    }
    label{
        display:none;
    }
    
    .menu ul{
        list-style:none;
        margin:0px;
        padding:0px;

    }
    .login{
        margin: 20px 0px;
        font-size: 25px;
        color: rgb(255, 17, 108);
        transition: .7s;
        :hover{
            color: #F84AA7;
        }
    }

    /* --------------MEDIAQUERIS----------- */
    @keyframes tamaño{
    0%{height: 0px;
        
    } 
}
    @media screen and (max-width:800px ){
        label{
            display:block;
            :hover{
            cursor:pointer;
        }
              
        }
        .login{
           display:none; 
        }
        .menu{
           position:absolute;
           background:rgba(160, 160, 160, .6);
           ul{
               flex-direction:column;
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
                    <input type="checkbox" id="btn-menu"></input>
                    <label for="btn-menu">
                        <img src={btnmenu}width = "30px" height="30px"></img>
                    </label>
                    <nav className="menu">
                        <ul>
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">Trabajo</Link></li>
                            <li><Link href="#">Videos</Link></li>
                            <li><Link href="#">Avisos</Link></li>
                            <li><Link href="#">Novedades</Link></li>
                            <li><Link href="#">Nosotros</Link></li>
                        </ul>
                    </nav>
                    {/* <a href="#" className="toggle" oneclick="toggle()">
                        <FontAwesomeIcon icon={faBars} />
                    </a> */}

                     <a href="#" className="login">
                     <FontAwesomeIcon icon={faSignInAlt} />
                     </a>        
            </Header> 
        </div>
 
    );
};

export default Navbar;