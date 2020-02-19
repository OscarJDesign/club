import React from 'react';
import video from "../asset/img/video.jpg";
import styled from "@emotion/styled";

const FotoVideo = styled.div`

    width:100%;
    min-width:300px;
    margin-bottom:20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
    border-radius:14px;
    padding:0px 0px;
        video{
            width:100%;
            
            vertical-align:top;
            border-radius:14px;
            border: 1px solid rgba(0, 0, 0, .3);
            
         }

`;


const CuadroVideos = () => {
    return (
                <FotoVideo className="foto-video">
                    <video width="300" src="http://18.217.42.238/uploads/a8009fdf-9e4d-4e6c-b30f-a171433e95f3.mp4#t=0.5" controls controlsList="nodownload" disablePictureInPicture preload="metadata">
                    <source src="movie.mp4" type="video/mp4"></source>
                </video>
                </FotoVideo>
    );
};

export default CuadroVideos;