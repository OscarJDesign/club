import React from 'react';
import styled from "@emotion/styled";
import pub1 from "../asset/img/pub1.jpeg";



const ContenedorPublicidad = styled.div`

    background:rgba(0,0,0,.5);
    width:100%;
        .publicidad{
            width:100%;

            .cajapublicidad{
                display:flex;
                justify-content:center;
                

                img{
                    padding:5px;
                    width:60%;
                }   
            }
            
        }
        @media screen and (max-width: 800px){
            
             .publicidad{
                .cajapublicidad{
                    img{
                        width:80%;
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
const Publicidad = () => {
    return (
        <ContenedorPublicidad>
            <div className="publicidad">
                <div className="cajapublicidad">
                    <img src={pub1} alt="publicidadclubvip"></img>
                    
                </div>
                <div className="cajapublicidad">
                    <img src={pub1}  alt="publicidadclubvip"></img>
                    
                </div>
            </div>
        </ContenedorPublicidad>
    );
};

export default Publicidad;