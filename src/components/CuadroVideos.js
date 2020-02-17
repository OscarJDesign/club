import React from 'react';
import video from "../asset/img/video.jpg";
import styled from "@emotion/styled";

const FotoVideo = styled.div`

    width:100%;
    margin-bottom:20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
    border-radius:14px;
        img{
            width:100%;
            vertical-align:top;
            border-radius:14px;
            border: 1px solid rgba(0, 0, 0, .3);
            padding:5px;
         }

`;


const CuadroVideos = () => {
    return (
                <FotoVideo className="foto-video">
                <img src={video}  width = "" height="" alt="Logo_ClubVip"/>
                </FotoVideo>
    );
};

export default CuadroVideos;