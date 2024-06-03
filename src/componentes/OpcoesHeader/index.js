import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcao = styled.li`
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 150px;
    hover: none;
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
`

const Opcoes = styled.ul`
    display: flex;
    hover: none;
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
`

const textoOpcoes = ['PRODUTOS', 'FAVORITOS']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Link to={`/${texto.toLowerCase()}`} ><Opcao><p>{texto}</p></Opcao></Link>
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader