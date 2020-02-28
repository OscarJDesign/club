import React from "react";
import axios from "axios";
import styled from "@emotion/styled";

const FotoVideo = styled.div`
  width: 100%;
  min-width: 300px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
  border-radius: 14px;
  padding: 0px 0px;
  video {
    width: 100%;

    vertical-align: top;
    border-radius: 14px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

var urlCompleta = "http://18.217.42.238/api/videosPagina";
var urlCorta = ".";

export default class CuadroVideos extends React.Component {
  state = {
    listaVideos: []
  };

  async componentDidMount() {
   await axios.get(urlCompleta).then(res => {
      const listaVideos = res.data;
      this.setState({ listaVideos });
    });
  }

  render() {
    return (
      <>
        {this.state.listaVideos.map(videos => (
          <div className="cajavideos" key={videos.id}  >
            <FotoVideo className="foto-video">
              <video
                width="300"
                src={urlCorta + videos.path}
                controls
                controlsList="nodownload"
                disablePictureInPicture
                preload="metadata"
              >
                <source src="movie.mp4" type="video/mp4"></source>
              </video>
            </FotoVideo>
          </div>
        ))}
      </>
    );
  }
}
