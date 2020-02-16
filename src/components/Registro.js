import React from 'react';
import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
const ContenedorRegistro = styled.div`
    .login{
        display:flex;
        justify-content:flex-end;
        margin-top:0px;
        a{
            position:fixed;
            display:block;
            margin: 0px -30px;
            font-size: 25px;
            color: rgb(255, 17, 108);
            transition: .7s;
            z-index: 100;
            :hover{
                color: #F84AA7;
            }
        }
    }
    @media screen and (max-width:1010px ){
        .login{
            display:flex;
            margin:0px -20px;
            a{
                display:fixed;
                justify-content:flex-end;
                
            }
        }
    }
    @media screen and (max-width:800px ){
        .login{
            margin:0px -30px;
        }
    }
    
`;
const Registro = () => {
    return (
        <ContenedorRegistro>
            <div className="login">
                    <a href="#" >
                     <FontAwesomeIcon  icon={faSignInAlt} />
                    </a> 
            </div>
        </ContenedorRegistro>
    );
};
export default Registro;