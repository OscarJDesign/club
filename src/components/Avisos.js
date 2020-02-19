import React from 'react';
import styled from '@emotion/styled';


const ContenedorPublicidad = styled.div`
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
                display:flex;
                justify-content:flex-end;
                width:100%;
                padding:10px;
                align-items:center;
                text-align:center;
                border-radius:8px;
                padding-bottom:40px;
                
                .imagen{
                    display:flex;
                    width:25%;
                    margin-bottom:-35px;
                    border-radius:4px;
                    z-index:50;
                    
                    img{
                        width:100%;
                        
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
                    margin-left:-60px;  
                
                    
                    .tituloaviso{
                        margin:20px 40px;
                        color:#D4AFB9;
                        font-size:30px;
                        text-decoration:none;
                        :hover{
                            color:rgb(255, 17, 108);
                        }
                    }
                    .descripcionAviso{
                        padding:0px 70px;
                        color:white;
                    }
                }
            }
        }   
    }
   
} 
@media screen and (max-width: 560px){
  section .contenedor .efecto-titulo{
      
  }
}
   
`;
const Avisos = () => {
    return (
        <ContenedorPublicidad>
            <section className="seccion">
                <div className="contenedor">
                    <h2 className="efecto-titulo">Avisos</h2>
                    <div className="contenedor-imagenes"> 
                        <div className="cajaimagenes">
                            <div className="imagen">
                                <img src="http://18.217.42.238/uploads/d4e07ff5-d7fa-4b09-86b9-f4cdbb4d838a.jpeg"  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica">
                                    
                                    <a href="#!" className="tituloaviso">TITULO DEL AVISO</a>
                                    <p className="descripcionAviso"> Descripcion del aviso </p>
                            </div>
                        </div>
                        <div className="cajaimagenes">
                            <div className="imagen">
                                <img src="http://18.217.42.238/uploads/d4e07ff5-d7fa-4b09-86b9-f4cdbb4d838a.jpeg"  width = "" height="" alt="Logo_ClubVip"/>
                            </div>
                            <div className="datos-chica">
                                    
                                    <a href="#!" className="tituloaviso">HERMOSAS CHICAS FULL NOCHE</a>
                                    <p className="descripcionAviso">ESTA NOCHE TE ESPERAN HERMOSAS ESCORT EN CONCEPCION CENTRO, PARA QUE DISFRUTES Y TE RELAJES CON NOSOTRAS ... </p>
                            </div>
                        </div>
                    </div> 
                </div>           
            </section>
        </ContenedorPublicidad>
    );
};

export default Avisos;