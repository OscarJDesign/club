import React from 'react';
import video from "../asset/img/video.jpg";
import styled from "@emotion/styled";

const FotoVideo = styled.div`

    width:100%;
    margin-bottom:20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
    border-radius:14px;
    padding:5px 0px;
        img{
            width:100%;
            vertical-align:top;
            border-radius:14px;
            border: 1px solid rgba(0, 0, 0, .3);
            
         }

`;


const CuadroVideos = () => {
    return (
                <FotoVideo className="foto-video">
                    <video width="300" src="http://18.217.42.238/uploads/7d898a43-f305-4d1d-a3e0-2a4f7d43ecd1.mp4#t=0.5" controls controlsList="nodownload" disablepictureinpicture preload="metadata">
                    <source src="movie.mp4" type="video/mp4"></source>
                </video>
                </FotoVideo>
    );
};

export default CuadroVideos;