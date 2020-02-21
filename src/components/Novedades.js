import React from 'react';
import styled from "@emotion/styled";
import nov1 from "../asset/img/novedad1.jpeg";
import nov2 from "../asset/img/novedad2.jpeg";




const Contenedornovedades = styled.div`
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
            
            padding:20px;

            .cajaimagenes{
                width:100%;
                padding:10px;
                align-items:center;
                text-align:center;
                border-radius:8px;
                .imagenD {
                    display:flex;
                    justify-content:flex-start;
                }
                .imagen{
                    display:flex;
                    justify-content:flex-end;
                    width:100%;
                    margin-bottom:-35px;
                    border-radius:4px;
                   
                    
                    img{
                        width:40%;
                        
                        box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
                        vertical-align:top;
                        border-radius:4px; 
                        z-index: 50;
                    
                    }
                }   
                .datos-chica{
                    padding:30px 370px 30px 30px;
                    
                    display:inline-block;
                    position:relative;
                    top:-150px;
                    width:80%;
                    justify-content:center;
                    background:rgba(229,180,227 ,.4 );
                    border-radius:4px;
                    box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
                    
                    .tituloaviso{
                        color:rgb(255, 17, 108);
                        text-decoration:none;
                        :hover{
                            color:rgba(0, 0, 0, .6);
                        }
                    }
                    
                    p{
                        padding-top:25px;
                        margin: 0px;
                        color:black;
                    }
                }
            }
            .cajaimagenesI{
                width:100%;
                padding:10px;
                align-items:center;
                text-align:center;
                border-radius:8px;
                
                .imagen{
                    display:flex;
                    justify-content:flex-start;
                    width:100%;
                    margin-bottom:-35px;
                    border-radius:4px;
                   
                    
                    img{
                        width:40%;
                        
                        box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
                        vertical-align:top;
                        border-radius:4px; 
                        z-index: 50;
                    
                    }
                }   
                .datos-chica{
                    padding:30px 30px 30px 370px;
                    
                    display:inline-block;
                    position:relative;
                    top:-150px;
                    width:80%;
                    justify-content:center;
                    background:rgba(229,180,227 ,.4 );
                    border-radius:4px;
                    box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
                    
                    .tituloaviso{
                        color:rgb(255, 17, 108);
                        text-decoration:none;
                        :hover{
                            color:rgba(0, 0, 0, .6);
                        }
                    }
                    
                    p{
                        padding-top:25px;
                        margin: 0px;
                        color:black;
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
            .imagen {
                justify-content:center;
                img{
                width:25%;
                }   
            }
            .datos-chica{
                padding:50px 0px 50px 20px;
                position: relative;
                padding-left:0px;
                width:100%;
                top:0px;
                
            }
            
        }
        section .contenedor .contenedor-imagenes .cajaimagenesI{
            .imagen {
                justify-content:center;
                img{
                width:25%;
                }   
            }
            .datos-chica{
                padding:50px 0px 50px 20px;
                position: relative;
                padding-left:0px;
                width:100%;
                top:0px;
                
            }
            
        }
        
    }
    @media screen and (max-width:800px){
        section .contenedor .efecto-titulo{
            font-size:30px;
            color:rgb(255, 17, 108);
        }
        section .contenedor .contenedor-imagenes .cajaimagenes{
            .imagen img{
                width:37%;
            }
        }
        section .contenedor .contenedor-imagenes .cajaimagenesI{
            .imagen img{
                width:37%;
            }
        }
        
    }
    @media screen and (max-width: 500px){
        section .contenedor .contenedor-imagenes .cajaimagenes{
           .imagen img{
               width:73%;
           }
        }
        section .contenedor .contenedor-imagenes .cajaimagenesI{
           .imagen img{
               width:73%;
           }
        }
    }
`;

const Novedades = () => {
    return (
        <Contenedornovedades id="novedades">
          <section className="SeccionChicas">
                <div className="contenedor">
                    <h2 className="efecto-titulo">Novedades</h2>
                    <div className="contenedor-imagenes"> 
                        <div className="cajaimagenes">
                            <div className="imagen">
                                <img src={nov1}  width = "700" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica">
                                <a href="#!" className="tituloaviso">7 CONSEJOS PARA HACER LLEGAR AL ORGASMO A LA MUJER</a>
                                <p className="descripcionAviso">¿Cómo hacer que una mujer llegue al orgasmo? Y, lo más difícil si cabe: ¿cómo conseguir que ese clímax lo recuerde para siempre? Que no te entren los sudores, querido lector, es más fácil de lo que crees. Que la mayoría lo haga mal no significa que tú también. De hecho, tienes la posibil...  </p>
                            </div>
                        </div>
                        <div className="cajaimagenesI">
                            <div className="imagen">
                                <img  src={nov2}  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica">
                                <a href="#!" className="tituloaviso">LUGARES PARA LA MUSICA EN CONCEPCIÓN </a>
                                <p className="descripcionAviso">A Concepción muchas veces la han denominado como la ciudad del rock en el sur de Chile. Y es que de ahí han salido varias bandas conocidas como: “Emociones Clandestinas”, “Machuca” o los populares “Los Tres”. ¿Por qué ocurre esto? ¿Será que algo hay en el agua? La cosa es que, si v... </p>
                            </div>
                        </div>
                        
                        
                    </div>      
                </div>
            </section>  
        </Contenedornovedades>
    );
};    




export default Novedades;