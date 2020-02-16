import React from 'react';
import styled from '@emotion/styled';


const ContenedorPublicidad = styled.div`
section{
    background:rgba(255, 255, 255, .6);
    height:1000px;
    margin:0px 20px 0px 20px;
    padding: 10px;
    border-radius:10px;
    box-shadow: 10px 10px 7px rgba(0, 0, 0, .6);
    

    .contenedorGeneral{
        overflow:hidden;
        align-items:center;
    }
    .diseño-titulo{
            margin-top:0px;
            font-size:45px;
            color:rgb(255, 17, 108);
            text-align:center;
            text-shadow: 3px 4px 4px rgb(0, 0, 0);
    }
}
`;
const Publicidad = () => {
    return (
        <ContenedorPublicidad>
            <section>
                <div className="contenedorGeneral">
                <h2 className="diseño-titulo">Publicidad</h2>
                </div>
            </section>
        </ContenedorPublicidad>
    );
};

export default Publicidad;