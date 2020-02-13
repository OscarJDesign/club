import React from 'react';
import styled from "@emotion/styled";
import video from "../asset/img/video.jpg";

const ContenedorVideos = styled.div`

section{
    background:rgba(160, 160, 160, .6);
    margin:90px 5px;
    padding: 10px;
    border-radius:15px;

    .contenedor{
        overflow:hidden;
        
        .efecto-titulo{
            display: inline-block;
            position:static;
            font-size:45px;
            color:rgb(255, 17, 108);

            padding-top:-44px ;

            ::after, ::before{
                
                    content:'';
                    position:absolute;
                    width:120px;
                    height: 3px;
                    background-color:currentColor;
                    top:0.6em;
                    
                }
                ::after{
                    left:-135px;
                }
                ::before{
                    right: -135px;
                }
                .foto-video{
                    display: inline-block;
                    flex-direction: row;
                    flex-wrap:wrap;
                    justify-content:space-between;
                }
            }
            
        }
        .contenedor-videos{
            display: flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-between;

            .cajavideos{
                width:23%;

                .foto-video{
                    width:100%;
                    margin-bottom:10px;
                    

                    img{
                        width:100%;
                        vertical-align:top;
                        border-radius:5px;
                    }
                }   
            }
            
        }
    }
    
}
    
`;

const Videos = () => {
    return (
        <ContenedorVideos >
            <p className="vacio" ></p>;
            <section className="SeccionVideos">
                <div className="contenedor">
                    <h2 className="efecto-titulo">Videos</h2>
                    <div className="contenedor-videos"> 
                        <div className="cajavideos">
                            <div className="foto-video">
                                <img src={video}  width = "" height="" alt="Logo_ClubVip"/>
                                </div>
                                <div className="titulo-video">
                                <p className="nombre-modelo">Nombre Modelo</p>
                            </div>
                        </div>
                        <div className="cajavideos">
                            <div className="foto-video">
                                <img src={video}  width = "" height="" alt="Logo_ClubVip"/>
                                </div>
                                <div className="titulo-video">
                                <p className="nombre-modelo">Nombre Modedsaaaaaalo</p>   
                            </div>
                        </div>
                        <div className="cajavideos">
                            <div className="foto-video">
                                <img src={video}  width = "" height="" alt="Logo_ClubVip"/>
                                </div>
                                <div className="titulo-video">
                                <p className="nombre-modelo">Nombre Modedsaaaaaalo</p>   
                            </div>
                        </div>
                        <div className="cajavideos">
                            <div className="foto-video">
                                <img src={video}  width = "" height="" alt="Logo_ClubVip"/>
                                </div>
                                <div className="titulo-video">
                                <p className="nombre-modelo">Nombre Modedsaaaaaalo</p>   
                            </div>
                        </div>
                        <div className="cajavideos">
                            <div className="foto-video">
                                <img src={video}  width = "" height="" alt="Logo_ClubVip"/>
                                </div>
                                <div className="titulo-video">
                                <p className="nombre-modelo">Nombre Modedsaaaaaalo</p>   
                            </div>
                        </div>
                        <div className="cajavideos">
                            <div className="foto-video">
                                <img src={video}  width = "" height="" alt="Logo_ClubVip"/>
                                </div>
                                <div className="titulo-video">
                                <p className="nombre-modelo">Nombre Modedsaaaaaalo</p>   
                            </div>
                        </div>
                        <div className="cajavideos">
                            <div className="foto-video">
                                <img src={video}  width = "" height="" alt="Logo_ClubVip"/>
                                </div>
                                <div className="titulo-video">
                                <p className="nombre-modelo">Nombre Modedsaaaaaalo</p>   
                            </div>
                        </div>
                        <div className="cajavideos">
                            <div className="foto-video">
                                <img src={video}  width = "" height="" alt="Logo_ClubVip"/>
                                </div>
                                <div className="titulo-video">
                                <p className="nombre-modelo">Nombre Modedsaaaaaalo</p>   
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>   
        </ContenedorVideos>
        
    );
};

export default Videos;