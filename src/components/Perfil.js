import React, { Fragment, useEffect, useState } from 'react';
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menuburger from "./Menuburger";
import axios from "axios"

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
const Perfil = ({match}) => {

  const [perfil, setPerfil] = useState({});
  const [fotoPerfil, setFotoPerfil] = useState({});
  const [galeriaFotos, setGaleriaFotos] = useState({});
  const [galeriaVideos, setGaleriaVideos] = useState({});


  

  const fetchData = async() => {
    const url = `http://18.217.42.238/api/chicaAgenciaTodo/${match.params.id}`


    const datosApi = axios.get(url);
    

    await axios.all([datosApi]).then(
      await axios.spread((...allData) =>{
        const allDatos = allData[0].data;
        console.log(allDatos)
        allDatos.Imagenes.map( data => { 
          if(data.tipo == 'perfil'){
            setFotoPerfil(data.path)
          }else{
            setGaleriaFotos(...data.path)
          }
        })
        setPerfil(allDatos);
        console.log(galeriaFotos)
      })
    )
  }

  useEffect(() => {
      fetchData()
    },[match]);

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
                                <img src= { 'http://18.217.42.238/' + fotoPerfil} width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica"> 
                                    <p className="edad">{perfil.edad}</p>
                                    <p className="altura">{perfil.altura}</p>
                                    <p className="busto">{perfil.busto}</p>
                                    <p className="cintura">{perfil.cintura}</p>
                                    <p className="caderas">{perfil.caderas}</p>
                            </div>
                        </div>
                        <div className="contenedorTexto">
                          <div className="descripcion">
                            <h3 className="nombreModelo">{perfil.nombre}</h3>
                            <h4 className="nacionalidad">{perfil.nacionalidad}</h4>
                            <p>{perfil.descripcion}</p>
                          </div>
                        </div> 
                        <div className="galeriaImagenes">
                          <div className="contenedor">
                            <div className="textoimagenes">
                              <h2> Imágenes </h2>
                            </div>
                           {/* {galeriaFotos.map(fotos => (
                            <div className="imagen">
                              <img src=""  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                             ))} */}

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