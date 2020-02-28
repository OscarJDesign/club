import React, { Fragment } from 'react';
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menuburger from "./Menuburger";

const Contenedorperfil = styled.div`
    section{
        background:rgba(255, 255, 255, .6);
        margin:130px 20px 20px 20px;
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
                width:35%;
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
                        box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
                        vertical-align:top;
                        border-radius:4px; 
                    
                    }
                }   
                .datos-chica{
                    display:inline-flex;
                    flex-wrap:wrap;
                    width:100%;
                    justify-content:center;
                    background:rgba(0, 0, 0, .6);
                    border-radius:4px;
                    box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
                    
                    p{
                      padding:0px 15px;
                       
                        color:white;
                    }
                }
            }
        
            .contenedorTexto{
              padding:0px 15px;
              width:60%;
              .descripcion{
                .nombreModelo{
                  display:flex;
                  justify-content:center;
                  color:#731963;
                  font-size:33px;
                  text-shadow: 3px 4px 3px rgba(0, 0, 0, .6);
                }
                .nacionalidad{
                  display:flex;
                  justify-content:center;
                  font-size:17px;
                  color:#820933;
                  margin-top:-30px;
                }
                
              }
            }
            .galeriaImagenes{
              
              
              .contenedor{
                margin:40px 0px;
                display:flex;
                justify-content:center;
                flex-wrap:wrap;
                .textoimagenes{
                  width:98%;
                  font-size:15px;
                  display:flex;
                  justify-content:center;
                  background:rgba(0,0,0,.9);
                  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
                  border-radius:10px;
                  color:white;
                  margin-bottom:29px;
                }
                .imagen, .video{
                  
                  padding:10px 15px;
                  img{
                    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
                    border-radius:10px;
                  }
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
            width:40%;
        }
        
    }
    @media screen and (max-width:800px){
        section .contenedor .efecto-titulo{
            font-size:30px;
            color:rgb(255, 17, 108);
        }
        section .contenedor .contenedor-imagenes .cajaimagenes{
            width:40%;
            .datos-chica{
              font-size:12px;
              padding:0px 20px;
            }
        }
    }
    @media screen and (max-width:600px){
        section .contenedor .contenedor-imagenes{ 
          .cajaimagenes{
              width:100%;
              .datos-chica{
                
                font-size:17px;
              }
          }
          .contenedorTexto{
            width:100%;
          }
        }
    }
    @media screen and (max-width:400px){
        section .contenedor .contenedor-imagenes{ 
          .cajaimagenes{
              width:100%;
              .datos-chica{
                font-size:17px;
                
              }
          }
          .contenedorTexto{
            width:100%;
            
            
          }
          .galeriaImagenes{
            .contenedor{
              width:99%;
              .textoimagenes{
              }
              .imagen{
              }
              .video{
                img{
                  width:100%;
                }
              }
            }
          }
        }
    }
`;
const Perfil = () => {
    return (
      <Fragment>
      <GlobalStyles />
      <Navbar />
      <br/>
      <Menuburger />
        <Contenedorperfil>
          <section className="SeccionChicas">
                <div className="contenedor">
                    <h2 className="efecto-titulo">Perfil</h2>
                    <div className="contenedor-imagenes"> 
                        <div className="cajaimagenes">
                            <div className="imagen">
                                <img src="#!"  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica"> 
                                    <p className="edad">Edad</p>
                                    <p className="altura">Altura</p>
                                    <p className="busto">Busto</p>
                                    <p className="cintura">Cintura</p>
                                    <p className="caderas">Cadera</p>
                            </div>
                        </div>
                        <div className="contenedorTexto">
                          <div className="descripcion">
                            <h3 className="nombreModelo">Nombre Modelo</h3>
                            <h4 className="nacionalidad"> --- Nacionalidad ---</h4>
                            <p> Hola amor, soy Michelle, una simpática y cariñosa joven de 22 años, soy entregada y dedicada, quiero que pasemos buenos momentos juntos y te relajes junto a mi. Soy una chica atrevida y con mucha pasión, ven a disfrutar junto a mi </p>
                          </div>
                        </div> 
                        <div className="galeriaImagenes">
                          <div className="contenedor">
                            <div className="textoimagenes">
                              <h2> Imágenes </h2>
                            </div>
                            <div className="imagen">
                              <img src="#!"  width = "" height="" alt="Logo_ClubVip"/>
                            </div>

                            <div className="textoimagenes">
                              <h2> Videos </h2>
                            </div>
                            <div className="video">
                              <img src="#!"  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            
                          </div>
                        </div>
                    </div>  
                       
                </div>
            </section> 
               
        </Contenedorperfil>
        <Footer/> 
        </Fragment>
    );
};    
export default Perfil;