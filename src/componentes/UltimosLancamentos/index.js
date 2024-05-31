import { produtos } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import { idAleatorio } from './dadosUltimosLancamentos'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
`

const NovosProdutosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    flex-wrap: wrap;
    padding: 10px 10px;
`
const EstiloProd = styled.div`
padding: 10px 10px;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosProdutosContainer>
                {idAleatorio.map( produtos => (
                <EstiloProd>
                    <img src={produtos.src} alt={produtos.nome} width="350" height="350"/>
                    <li> {produtos.nome}</li>
                    <li> <p>R${produtos.value}</p></li>
                    <li> <button>DETALHES</button> </li>
                    </EstiloProd>
                    
                ))}
            </NovosProdutosContainer>
           
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos