import React, { lazy, Suspense } from "react";
import styled from "@emotion/styled";
import Spinner from "./Spinner";

const ContenedorVideos = styled.div`
  section {
    background: rgba(255, 255, 255, 0.6);
    margin: 130px 20px 0px 20px;
    padding: 3px;
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

      .contenedor-videos {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .cajavideos {
          padding: 0px 10px;
          width: 33.3%;
          align-items: center;
          text-align: center;
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    section .contenedor .efecto-titulo {
      font-size: 35px;
      color: rgb(255, 17, 108);
    }
    section .contenedor .contenedor-videos .cajavideos {
      width: 50%;
    }
  }
  @media screen and (max-width: 670px) {
    section .contenedor .contenedor-videos .cajavideos {
      width: 100%;
      margin: 0px;
    }
  }
  @media screen and (max-width: 500px) {
    section .contenedor .efecto-titulo {
      font-size: 30px;
      color: rgb(255, 17, 108);
    }
    section .contenedor .contenedor-videos .cajavideos {
      width: 100%;
      margin: 0px;
    }
  }
`;

const CuadroVideos = lazy(() => import("./CuadroVideos.js"));

const Videos = () => {
    return (
      <ContenedorVideos id="videos">
        <section className="SeccionVideos">
          <div className="contenedor">
            <h2 className="efecto-titulo">Videos</h2>
            <div className="contenedor-videos">
              <Suspense
                fallback={
                  <div>
                    <Spinner />
                  </div>
                }
              >
                <CuadroVideos />
              </Suspense>
            </div>
          </div>
        </section>
      </ContenedorVideos>
    );  
}

export default Videos;
