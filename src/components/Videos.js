import React from 'react';
import styled from "@emotion/styled";
import video from "../asset/img/video.jpg";

const ContenedorVideos = styled.div`

section{
    background:rgba(160, 160, 160, .6);
    margin:50px 5px;
    padding: 10px;
    border-radius:15px;
    

    .contenedor{
        overflow:hidden;
        align-items:center;
        
        .efecto-titulo{
            margin-top:0px;
            font-size:45px;
            color:rgb(255, 17, 108);
            text-align:center;
            }

        .contenedor-videos{
            display: flex;
            flex-direction:row;
            flex-wrap:wrap;
            justify-content:space-between;

            .cajavideos{
                padding:10px;
                width:33.3%;
                align-items:center;
                text-align:center;
                
                .foto-video{
                    width:100%;
                    margin-bottom:40px;
                    
                    

                    img{
                        width:100%;
                        vertical-align:top;
                        border-radius:4px;
                        border: 1px solid #484848;
                        padding:5px;
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