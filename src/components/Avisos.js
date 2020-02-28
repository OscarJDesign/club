import React from "react";
import styled from "@emotion/styled";
import axios from "axios";
import LazyLoad from "react-lazyload";
import Spinner from "./Spinner";

const Contenedoravisos = styled.div`
  section {
    background: rgba(255, 255, 255, 0.6);
    margin: 0px 20px 20px 20px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.6);
    .contenedor {
      overflow: hidden;
      align-items: center;

      .efecto-titulo {
        margin-top: 0px;
        font-size: 45px;
        color: rgb(255, 17, 108);
        text-align: center;
        text-shadow: 3px 4px 4px rgb(0, 0, 0);
      }

      .contenedor-imagenes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 20px;
        .cajaimagenes {
          width: 100%;
          align-items: center;
          text-align: center;
          border-radius: 8px;

          .imagen {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            margin-bottom: -35px;
            border-radius: 4px;

            img {
              width: 20%;

              box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
              vertical-align: top;
              border-radius: 4px;
              z-index: 50;
            }
          }
          .datos-chica {
            padding: 30px 0px 30px 160px;

            display: inline-block;
            position: relative;
            top: -150px;
            width: 80%;
            justify-content: center;
            background: rgba(255, 192, 203, 0.4);
            border-radius: 4px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);

            .tituloaviso {
              color: rgb(255, 17, 108);
              text-decoration: none;
              :hover {
                color: rgba(0, 0, 0, 0.6);
              }
            }

            p {
              padding-top: 25px;
              margin: 0px;
              color: black;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    section .contenedor .efecto-titulo {
      font-size: 35px;
      color: rgb(255, 17, 108);
    }
    section .contenedor .contenedor-imagenes .cajaimagenes {
      margin-bottom: 30px;
      .imagen {
        justify-content: center;
        img {
          width: 25%;
        }
      }
      .datos-chica {
        padding: 50px 0px 50px 20px;
        position: relative;
        padding-left: 0px;
        width: 100%;
        top: 0px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    section .contenedor .efecto-titulo {
      font-size: 30px;
      color: rgb(255, 17, 108);
    }
    section .contenedor .contenedor-imagenes .cajaimagenes {
      .imagen img {
        width: 37%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    section .contenedor .contenedor-imagenes .cajaimagenes {
      .imagen img {
        width: 73%;
      }
    }
  }
`;

export default class Avisos extends React.Component {
  state = {
    listaAvisos: []
  };

  async componentDidMount() {
    await axios.get(`http://18.217.42.238/api/avisosFotos`).then(res => {
      const listaAvisos = res.data;
      this.setState({ listaAvisos });
    });
  }

  render() {
    return (
      <Contenedoravisos id="avisos">
        <section className="SeccionChicas">
          <div className="contenedor">
            <h2 className="efecto-titulo">Avisos</h2>
            <div className="contenedor-imagenes">
              {this.state.listaAvisos.map(avisos => (
                <div className="cajaimagenes" key={avisos.id}>
                  <div className="imagen">
                    <LazyLoad placeholder={<Spinner />}>
                      <img
                        src={"." + avisos.User.Imagenes[0].path}
                        width=""
                        height=""
                        alt="Logo_ClubVip"
                      />
                    </LazyLoad>
                  </div>
                  <div className="datos-chica">
                    <a href="#!" className="tituloaviso">
                      {avisos.titulo}
                    </a>
                    <p className="descripcionAviso">{avisos.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Contenedoravisos>
    );
  }
}
