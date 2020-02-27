import React, { Fragment } from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Menuburger from "./Menuburger";
import Login from "./Login";
import nov1 from "../asset/img/novedad1.jpeg";

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

const Novedades = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Login />
      <Menuburger />
      <Contenedornovedad>
        <section className="SeccionNovedad">
          <div className="contenedor">
            <div className="contenedor-imagenes">
              <div className="cajaimagenes">
                <div className="imagen">
                  <img src={nov1} width="" height="" alt="Logo_ClubVip" />
                </div>
                <div className="datos-chica">
                  <div className="tituloaviso">
                    7 CONSEJOS PARA HACER LLEGAR AL ORGASMO A LA MUJER
                  </div>

                  <p className="descripcionAviso">
                    ¿Cómo hacer que una mujer llegue al orgasmo? Y, lo más
                    difícil si cabe: ¿cómo conseguir que ese clímax lo recuerde
                    para siempre? Que no te entren los sudores, querido lector,
                    es más fácil de lo que crees. Que la mayoría lo haga mal no
                    significa que tú también. De hecho, tienes la posibilidad de
                    dejar por todo lo alto al sector masculino. No son críticas
                    gratuitas. Antes de empezar con la teoría, has de grabarte
                    estas cifras a fuego: 61,6% y 85,5%. La primera corresponde
                    a las veces que ellas alcanzan el orgasmo, y el segundo, a
                    la de ellos. Todo ello según una investigación realizada por
                    el Instituto Kinsey de la Universidad de Indiana. Vamos
                    allá. Recogemos las claves que debes seguir para que tu
                    pareja, compañera o amiga tenga el mayor éxtasis de su vida.
                    1) Contextualiza Las mujeres no son como vosotros. Su
                    orgasmo es más emocional: si su cabeza y su cuerpo no están
                    en sintonía, lo más probable es que acabe por fingir el
                    orgasmo para que pares de una vez. O será sincera y verás
                    que has fracasado. No entiendes nada, porque has hecho todo
                    bien: caricias, lametones, preliminares... pero nada. ¿Qué
                    se te ha olvidado? Contextualizar el acto sexual. Nos
                    referimos a que le hagas olvidar todas las tareas que tiene
                    pendientes, los problemas del trabajo y la reunión que tiene
                    al día siguiente con el jefe. Ellas no son como los hombres:
                    les es más difícil desconectar. Por ello, cúrratelo: velas,
                    masajes, un baño caliente... Todo lo que le haga estar en el
                    presente, ahí y en ese momento contigo. "Dile lo guapa que
                    se ve a la luz de las velas", asegura el terapeuta sexual
                    Ian Kerner a 'Men's Health'. "Se ha descubierto que los
                    pensamientos negativos frenan la excitación de las mujeres".
                    2) No tengas prisa Muchos hombres cometen este error: van
                    demasiado rápido. No puedes tocar los pezones o el clítoris
                    de una mujer y pensar que sólo con eso se va a excitar.
                    Además, resulta muy incómodo que lo hagas si ella aún no ha
                    entrado en el juego: puedes hacerle daño. Empieza con besos
                    en la boca, en el cuello, en la espalda, la entrepierna... y
                    cuando lo veas claro, estimula las zonas propiamente
                    erógenas. 3) Estimula el clítoris Una vez que hayas
                    comprobado que está excitada, has de estimular el clítoris,
                    también conocido como el botón del placer. Un estudio
                    publicado en el 'Journal of Sex & Marital Therapy', a partir
                    de 1.055 entrevistas con mujeres desde los 18 hasta los 94
                    años, determinó que más de un tercio de las consultadas (un
                    37%) necesitaban estimulación clitoriana para poder alcanzar
                    el orgasmo durante el coito. Cuando este órgano entraba en
                    la ecuación, más de un 40% de las mujeres afirmaba llegar al
                    orgasmo más del 75% de las ocasiones. Tan solo un 18%
                    reconocía poder llegar al clímax únicamente con la
                    penetración vaginal. Las cifras hablan por sí solas. Si
                    quieres que tenga un gran orgasmo, hazlo a lo grande. 4)
                    Comprueba que está mojado Antes de entrar, debes comprobar
                    que está suficientemente lubricado. Si la metes a lo bruto
                    no solo puedes hacerle daño a ella, sino que además puedes
                    desgarrarte el frenillo (duele bastante, tendrás que ir a
                    urgencias y tendrás puntos...). No obstante, has de tener en
                    cuenta que mojado no significa listo. Lo mejor es preguntar,
                    y si te dice que sí puedes iniciar la prenetración pero su
                    lenguaje no verbal te dice otra cosa, espera. No hay ninguna
                    prisa. Puedes practicar sexo oral. Ten una cosa clara:
                    cuando ella quiera comenzar con el coito de verdad, te lo
                    hará saber. 5) Cuida los olores De todos nuestros sentidos,
                    el olfato nos conecta con nuestra naturaleza más primitiva.
                    Un olor nos puede gustar, resultarnos desagradable o
                    dejarnos indiferente, pero nadie se pone a reflexionar sobre
                    las impresiones que este nos causa. Los síntomas de una
                    fuerte atracción son una suma acelerada de reacciones
                    químicas en el cerebro que empiezan con la percepción del
                    olor corporal de la persona que nos atrapa. Al respecto,
                    Rebecca Rosenblat, psicoterapeuta especializada en
                    relaciones de pareja y sexualidad, aconseja a los hombres
                    que se hagan con algunas fragancias masculinas que simulen
                    los olores causados por altos niveles de testosterona. Eso,
                    sin duda, aumentará la intensidad de su orgasmo. 6) Zona
                    derecha de la espalda Tienes que recorrer tantas zonas del
                    cuerpo como puedas, pero sobre todo, la espalda. Besa,
                    acaricia o cosquillea el lado derecho de esta parte del
                    cuerpo durante el acto. Por las terminaciones nerviosas que
                    se encuentran localizadas en esta parte del cuerpo,
                    Rosenblat asegura que dicha zona resulta más intensa que el
                    izquierdo para las mujeres Pasa tu lengua suavemente por su
                    espalda, empezando por la nuca hasta llegar a los glúteos.
                    Roza apenas su piel y hazle sentir tu respiración. Al igual
                    que las caderas, los hombros, el vientre o las muñecas, la
                    espalda es una zona erógena poco conocida por los hombres
                    que es, sin embargo, una de las más apreciadas en lo que a
                    las damas se refiere. Recuerda que cuanto más te lo curres
                    antes, más intenso será el final. 7) Sé gracioso Reír
                    aumenta la satisfacción sexual de la mujer. Para el género
                    femenino un hombre divertido es también uno que se acepta y
                    que muestra confianza. En definitiva: el sentido del humor
                    del hombre es todo un afrodisíaco para ellas. Lo dice un
                    trabajo llevado a cabo por la Universidad de Albany liderado
                    por el psicólogo George Gallup. Reír favorece la circulación
                    y la oxigenación de la sangre y estimula la generación de
                    endorfinas, neurotransmisores que son toda una droga para el
                    amor y para el sexo. El cuerpo las produce especialmente
                    durante las fases de enamoramiento, así como durante los
                    orgasmos. Ya que lo haces, hazlo bien.{" "}
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

export default Novedades;
