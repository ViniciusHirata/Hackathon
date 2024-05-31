
import { produtos } from '../componentes/UltimosLancamentos/dadosUltimosLancamentos'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
`

const NovosProdutosContainer = styled.div`
    margin-top: 0px;
    display: flex;
    overflow-y: auto;
    justify-content: center;
    cursor: pointer;
    heigth: 500px;
    flex-wrap: wrap;
    padding: 30px 10px;
`
const Paragrafo = styled.p `
padding: 10px 10px
`

function UltimosLancamentos() {
   

    return (
        <UltimosLancamentosContainer>
         
            <NovosProdutosContainer>
                {produtos.map( produto => (
                    <Paragrafo> 
                    <img src={produto.src} alt={produto.nome} width="350" height="350"/>
                    <li> {produto.nome}</li>
                    <li> <p>R${produto.value}</p></li>
                    <li> <button>DETALHES</button> </li>
                </Paragrafo>
                )
                )}
            
            </NovosProdutosContainer>
              
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos