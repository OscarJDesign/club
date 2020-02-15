import React from 'react';
import styled from "@emotion/styled";
import chica from "../asset/img/chica.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAd, faWeightHanging } from '@fortawesome/free-solid-svg-icons';


const Contenedorchicas = styled.div`
    section{
        background:rgba(255, 255, 255, .6);
        margin:0px 20px 20px 20px;
        padding: 10px;
        border-radius:10px;
        box-shadow: 10px 10px 7px rgba(0, 0, 0, .6);
        .contenedor{
        overflow:hidden;
        align-items:center;
        
        
        .efecto-titulo{
            margin-top:0px;
            font-size:45px;
            color:rgb(255, 17, 108);
            text-align:center;
            text-shadow: 3px 4px 4px rgb(0, 0, 0);
            }

        .contenedor-imagenes{
            display: flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-between;
            padding:20px;

            .cajaimagenes{
                width:25%;
                padding:10px;
                align-items:center;
                text-align:center;
                border-radius:8px;
                
                .imagen{
                    display:flex;
                    justify-content:center;
                    width:100%;
                    margin-bottom:-35px;
                    border-radius:4px;
                    
                    img{
                        width:80%;
                        height:330px ;
                        box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
                        vertical-align:top;
                        border-radius:4px; 
                    
                    }
                }   
                .datos-chica{
                    display:inline-block;
                    width:100%;
                    justify-content:center;
                    background:rgba(0, 0, 0, .6);
                    border-radius:4px;
                    box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
                    .icono-wsp{
                        color:white;
                    }
                    p{
                        margin: 0px;
                        color:white;
                    }
                }
            }
            
        }
    }
    
}
    @media screen and (max-width: 1100px){
        section .contenedor .efecto-titulo{
            font-size:35px;
            color:rgb(255, 17, 108);
        }
        section .contenedor .contenedor-imagenes .cajaimagenes{
            width:50%;
        }
        
    }
    @media screen and (max-width:500px){
        section .contenedor .efecto-titulo{
            font-size:30px;
            color:rgb(255, 17, 108);
        }
        section .contenedor .contenedor-imagenes .cajaimagenes{
            width:100%;
        }
    }
    @media screen and (max-width:370px){
        
    }
`;

const Chicasagencia = () => {
    return (
        <Contenedorchicas>
          <section className="SeccionChicas">
                <div className="contenedor">
                    <h2 className="efecto-titulo">Chicas de la Agencia</h2>
                    <div className="contenedor-imagenes"> 
                        <div className="cajaimagenes">
                            <div className="imagen">
                                <img src={chica}  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica">
                                    <a href="#" className="icono-wsp" >
                                        <FontAwesomeIcon  icon={faAd} />
                                    </a> 
                                    <p className="nombre-modelo">Nombre</p>
                                    <p className="descripcion">Descripcion</p>
                                    <p className="medidas">Medidas</p>
                            </div>
                        </div>
                        <div className="cajaimagenes">
                            <div className="imagen">
                                <img src={chica}  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica">
                                    <p className="nombre-modelo">Nombre</p>
                                    <p className="descripcion">Descripcion</p>
                                    <p className="medidas">Medidas</p>
                            </div>
                        </div>
                        <div className="cajaimagenes">
                            <div className="imagen">
                                <img src={chica}  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica">
                                    <p className="nombre-modelo">Nombre</p>
                                    <p className="descripcion">Descripcion</p>
                                    <p className="medidas">Medidas</p>
                            </div>
                        </div>
                        <div className="cajaimagenes">
                            <div className="imagen">
                                <img src={chica}  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica">
                                    <p className="nombre-modelo">Nombre</p>
                                    <p className="descripcion">Descripcion</p>
                                    <p className="medidas">Medidas</p>
                            </div>
                        </div>
                        <div className="cajaimagenes">
                            <div className="imagen">
                                <img src={chica}  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica">
                                    <p className="nombre-modelo">Nombre</p>
                                    <p className="descripcion">Descripcion</p>
                                    <p className="medidas">Medidas</p>
                            </div>
                        </div>
                    </div>      
                </div>
            </section>  
        </Contenedorchicas>
    );
};    




export default Chicasagencia;