import React from 'react';
import styled from "@emotion/styled";
import nos from "../asset/img/nosotros.jpg";

const ContenedorPublicidad = styled.div`

    background:#1a1a1a;
    width:100%;
        .publicidad{
            width:100%;

            .cajapublicidad{
                display:flex;
                justify-content:flex-start;
                
                p{
                    justify-content:flex-end;
                    color:white;
                }

                img{
                    
                    padding:5px;
                    width:40%;
                }   
            }
            
        }
        @media screen and (max-width: 800px){
            
             .publicidad{
                .cajapublicidad{
                    img{

                        width:70%;
                        
                    }
                }
             }   
        }
        @media screen and (max-width: 650px){
            
            .publicidad{
               .cajapublicidad{
                   img{
                       width:95%;
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
                    <p className="texto">Hola!</p>
                </div>
                
            </div>
        </ContenedorPublicidad>
    );
};

export default Nosotros;