import React from 'react';
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faDice} from '@fortawesome/free-solid-svg-icons';
const ContenedorRegistro = styled.div`
    label{
        display:flex;
        justify-content:right;
        justify-content:flex-end;
        margin-top:0px;
        a{
            position:fixed;
            
            margin-left:-5px;
            font-size: 25px;
            color: rgb(255, 17, 108);
            transition: .7s;
            z-index: 100;
            :hover{
                color: #F84AA7;
            }
        }
    }
    #btn-login{
        
    }
    @media screen and (max-width:1010px ){
        label{
            display:flex;
            margin:0px -20px;
            a{
                display:fixed;
                
                justify-content:flex-end;
                
            }
        }
    }
    @media screen and (max-width:800px ){
        label{
            margin:0px -30px;
        }
    }
    
`;
const Registro = () => {
    return (
        <ContenedorRegistro>
            <div className="contenedor">
                <input type="checkbox" id="btn-login"></input>
                <label for="btn-login">  
                        <a href="#" >
                        <FontAwesomeIcon  icon={faSignInAlt} />
                        </a> 
                </label>
                <div className="login">
                    <form className="formulario">
                        <input type="text" placeholder="Nombre" name="nombre" requerid></input>
                        <input type="email" placeholder="Correo" name="correo"requerid></input>
                        <input className="boton" type="submit" value="IniciarSesion"></input>
                    </form>
                </div>        
            </div>
                
        </ContenedorRegistro>
    );
};
export default Registro;