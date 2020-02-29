import React, { Fragment, useEffect, useState  } from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menuburger from "./Menuburger";
// import axios from 'axios';

// import Login from "./Login";

const Contenedornovedad = styled.div`
  section {
    background: rgba(255, 255, 255, 0.6);
    margin: 130px 20px 20px 20px;
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
          padding: 10px;
          align-items: center;
          text-align: center;
          border-radius: 8px;

          .imagen {
            display: flex;
            position: relative;
            top: 90px;
            justify-content: flex-end;
            width: 100%;
            margin-bottom: -5px;
            border-radius: 4px;

            img {
              width: 550px;
              box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
              vertical-align: top;
              border-radius: 4px;
              z-index: 50;
            }
          }
          .datos-chica {
            padding: 160px 0px 30px 30px;

            display: inline-block;
            position: relative;
            top: -150px;
            width: 90%;
            justify-content: center;
            background: rgba(229, 180, 227, 0.4);
            border-radius: 4px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);

            .tituloaviso {
              text-shadow: 3px 4px 3px rgba(0, 0, 0, 0.4);
              color: rgb(255, 17, 108);
              width: 50%;
              text-decoration: none;
              :hover {
                color: rgba(0, 0, 0, 0.6);
              }
            }

            p {
              width: 95%;
              padding-top: 65px;
              margin: 0px;
              color: black;
            }
          }
        }
        .cajaimagenesI {
          width: 100%;
          padding: 10px;
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
              width: 34%;

              box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
              vertical-align: top;
              border-radius: 4px;
              z-index: 50;
            }
          }
          .datos-chica {
            padding: 30px 30px 30px 370px;

            display: inline-block;
            position: relative;
            top: -150px;
            width: 80%;
            justify-content: center;
            background: rgba(229, 180, 227, 0.4);
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
      .imagen {
        justify-content: center;
        display: flex;
        position: relative;
        top: 0px;
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

        .tituloaviso {
          width: 100%;
        }
        p {
          width: 100%;
          padding: 30px 5px;
        }
      }
    }
    section .contenedor .contenedor-imagenes .cajaimagenesI {
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
    section .contenedor .contenedor-imagenes .cajaimagenesI {
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
    section .contenedor .contenedor-imagenes .cajaimagenesI {
      .imagen img {
        width: 73%;
      }
    }
  }
`;
function Novedad ({match}) {

const [novedad, setNovedad] = useState({});
  useEffect(() => {
    async function fetchNovedad() {
      const response = await fetch(`http://18.217.42.238/api/noticias/${match.params.id}`);
      const json = await response.json();
      setNovedad(json);
    }

    fetchNovedad();
  }, [match]);

   

  
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      {/* <Login /> */}
      <Menuburger />
      <Contenedornovedad>
        <section className="SeccionNovedad">
          <div className="contenedor">
            <div className="contenedor-imagenes">
              <div className="cajaimagenes">
                <div className="imagen">
                <img
                  src= {'http://18.217.42.238/' + novedad.path}
                    width="700"
                    height=""
                    alt="Logo_ClubVip"
                />
                </div>
                <div className="datos-chica">
                  <div className="tituloaviso">
                    {novedad.titulo}
                  </div>

                  <p className="descripcionAviso">
                  {novedad.descripcion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Contenedornovedad>
      <Footer />
    </Fragment>
  );
};

export default Novedad;