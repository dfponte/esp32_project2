

import React from 'react'
import styled from "styled-components";


const Inicio = styled.div`  // Inicio vai substituir a div principal de BenvindoSection
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`
const Descricao = styled.div`  // Aqui iremos colocar em BenvindoSection, uma div para a descrição e o botão
    flex: 1;
    padding-right: 5rem;
    z-index: 5;

    h1{
        font-weight: bold;
        color: yellow;
    }
    h2{
        font-weight: bold;
        color: yellow;
    }
    p{
        font-size: 18px;
        color: white;
    }
`;

const SecaoResumo = ()=>{
    return(
        <Inicio>
            <Descricao>
                <h1>Daniel F Ponte</h1>
                <h2>Prof. Eletrônica</h2>
                <p>
                    Sistemas de monitoramento de sensores de temperatura, pressão, intensidade luminosa 
                    voltado para indústria. O objetivo principal é garantir a qualidade dos produtos 
                    e evitar prejuizos durante a produção. 
                </p>
                <button>Faça Contato</button>
            </Descricao>
        </Inicio>
    )
}






export default SecaoResumo