import React from 'react';
import styled from "@emotion/styled";
import nos from "../asset/img/nosotros.jpg";

const ContenedorPublicidad = styled.div`
    background:#1a1a1a;
    width:100%;
    
        .publicidad{
            display:flex;
            width:100%;

            .cajapublicidad{
                display:flex;
                
                justify-content:center;
                img{
                    
                    padding:4px;
                    width:40%;
                }   
                .textonosotros{  
                    display:inline-block;
                    padding-bottom:80px;
                    .titulo-nosotros{  
                        display:flex;
                        justify-content:center;
                        color:rgb(255, 17, 108);
                        font-size:50px;
                    }
                    .texto{
                        justify-content:center;
                        color:white;
                    }
                }
            }
            
        }
        @media screen and (max-width: 800px){
            
             .publicidad{
                 width:100%;
                 
                .cajapublicidad{
                    width
                    img{

                        width:100%;
                        
                    }
                    .textonosotros{
                        
                        .titulo-nosotros{
                            font-size:40px;
                        }
                        .texto{
                            font-size:18px;
                        }
                    }
                }
             }   
        }
        @media screen and (max-width: 650px){
            
            .publicidad{
                width:100%;
               .cajapublicidad{
                   img{
                      
                   }
                   .textonosotros{
                        
                        .titulo-nosotros{
                            font-size:30px;
                        }
                        .texto{
                            font-size:15px;
                        }
                    }
               }
            }   
       }
       @media screen and (max-width: 500px){
            
            .publicidad{
                
               .cajapublicidad{
                    ;
                   img{
                       display:flex;
                       position: relative;
                       bottom:-110px;
                       width:50%;
                       height:50%;
                       
                   }
                   .textonosotros{
                        width:50%;
                        padding-bottom:10px;
                        .titulo-nosotros{
                            font-size:30px;
                        }
                        .texto{
                            font-size:15px;
                            
                        }
                    }
               }
            }   
       }
`;
const Nosotros = () => {
    return (
        <ContenedorPublicidad id="nosotros">
            <div className="publicidad">
                <div className="cajapublicidad">
                    <img src={nos} alt="nosotrosclubvip"></img>
                    <div className="textonosotros">
                        <p className="titulo-nosotros">Hola!</p>
                        <p className="texto">Portal para visitantes y clientes anunciantes mayores de 18 años.
                        clubvip.cl Escort en Concepción, Scort concepción, Putas en Concepción, Prostitutas Concepción, Damas de compañía en concepción. 
                        <br/> 
                        <br/>
                        Portal para visitantes y clientes anunciantes mayores de 18 años. Nuestro portal se reserva el derecho de publicación.</p>
                    </div>
                </div>
                
            </div>
        </ContenedorPublicidad>
    );
};

export default Nosotros;