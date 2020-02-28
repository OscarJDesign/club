import React, { useState } from 'react';
import styled from "@emotion/styled";
import axios from "axios";

const Botonlogin= styled.div`
    .contenedor-general{
        overflow:hidden;

        #btn-login{
            display:none;
        }

        .btn-login{
                display:flex;
                justify-content:flex-end;
                margin:0px 20px;   
                :hover{
                    cursor:pointer;
                }
                .icono-login{
                    display:flex;
                    position:fixed;
                    justify-content:flex-end;
                    color:rgb(255, 17, 108);
                
                    z-index: 100;
                }
                
            }
            .fondotransparente{
                display:flex;
                position:relative;
                background:transparent;
                width:100%;
                background:transparent;
                margin-right:-100%;
               ;


            }
            .login{
                display:flex;
                justify-content:center;
                position:fixed;
                width:100%;
                margin-left:-130%;
                transition:all 0.5s;
                background:transparent;
                padding-left:40px;
                padding-right:40px;
                background:transparent;
                z-index:100;
            

                .formulario{
                    display:flex;
                    justify-content:center;
                    list-style:none;
                    border-radius:10px;
                    padding:   5px 0px;
                    background:rgba(0, 0, 0, 0.9);
                    flex-direction:column;
                    width:30%;
                    margin-top:140px;
                    margin-bottom:140px;
                    z-index:100;
                    
                    h3{
                        display:flex;
                        color:white;
                        justify-content:center;
                    }
                    .boton{
                        background:rgb(255, 17, 108);
                        color:#fff;
                        border:none;
                        border-radius:3px;
                        padding:14px 40px;
                        cursor:pointer;
                    }
                    .registrate{
                        display:flex;
                        color:white;
                        justify-content:flex-end;
                        padding-right:30px;
                        text-decoration:none;
                    }
                    

                
                .iconos-menu{
                    display:fixed;
                    justify-content:left;
                    margin-top:-20px;
                }
                li{
                    text-align:center;
                    border-radius:0px;
                    padding:10px 0px;

                    input[type="text"], [type="password"]{
                    border: 1px solid white;
                    border-radius:5px;
                    padding:8px 35px;
                    color:#a4a4a4;
                }
              
            }  
            }
            
            }
            #btn-login:checked ~ .login{
                margin:0px;
            }

        }
        @media screen and (max-width:850px ){
            .contenedor-general .login .formulario{
                width:40%;
            }
            
            
        }

        @media screen and (max-width:680px ){
            .contenedor-general .login .formulario{
                width:70%;
            }
        }
        @media screen and (max-width:540px ){
            .btn-login{
                display:flex;
                position:relative;
                right:22px;
                top:30px;
                .icono-login{
                    display:flex;
                    position:fixed;
                    justify-content:flex-end;
                    
                }
                
            }
            .contenedor-general .login .formulario{
                width:100%;
            }
        }
`;

const Alerta = styled.p`
color: white;
`;

const Login = ({datos, guardarDatos, guardarConsulta}) => {    

    // State error
    const [error, guardarError] = useState(false);

    // Extraer valores
    const {email, password} = datos;

    // Poner datos en el State
     const handleChange = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
     }     

     // para el submit
      const handleSubmit = e => {
         e.preventDefault(e);
        let url = "http://18.217.42.238/api/login"


         axios.post(url, {
             email : datos.email,
             password : datos.password
         }).then(
            res => {
                console.log(res.data);
                localStorage.setItem("clubvip", JSON.stringify({
                    id: res.data.id,  
                    nombre: res.data.nombre,
                    rol: res.data.rolsistema,
                    token: res.data.token
                  }));
                  window.location.href = "http://18.217.42.238/administracion"
            },
            err => {
                console.log(err)
            }
        )

        //  validar 
        if(email.trim() === '' || password.trim() === '' ){
            guardarError(true);
            return;
        }
        guardarError(false);

        guardarConsulta(true);
     }


    return (
        <>
            <Botonlogin>                
                <div className="contenedor-general">
                    <input type="checkbox" id="btn-login"></input>
                    <label className="btn-login" htmlFor="btn-login">
                        <img className="icono-login" icon="#!" alt="login-logo"/>
                        </label>
                    <input type="checkbox" id="btn-login"></input>
                    <label className="login" >
                        <label className="fondotransparente" htmlFor="btn-login"> </label>
                        <form 
                            className="formulario"
                            onSubmit={handleSubmit} 
                        >
                            <h3>Ingresar a ClubVip</h3>
                            {/* Email */}
                            <li>
                            {error ? <Alerta>Ingrese todos los datos</Alerta> : null}
                                <input
                                    type="text" 
                                    placeholder="Email" 
                                    name="email" 
                                    onChange= {handleChange}
                                    value={email}
                                />
                            </li>
                            {/* Password */}
                            <li>
                                <input 
                                    type="password" 
                                    placeholder="Contraseña" 
                                    name="password" 
                                    onChange= {handleChange}
                                    value={password}
                                />
                            </li>
                            {/* Submit */}
                            <li>
                                <input 
                                    className="boton" 
                                    type="submit" 
                                    value="Iniciar Sesion"
                                />
                            </li>   
                            {/* <Link to="/registro">
                            <div className="registrate">Registrate aquí</div>
                            </Link> */}
                        </form>
                    </label> 
                </div>    
            </Botonlogin>            
      <br />
      </>
    );
};

export default Login;