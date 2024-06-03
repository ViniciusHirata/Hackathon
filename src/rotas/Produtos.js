
import { produtos } from '../componentes/UltimosLancamentos/dadosUltimosLancamentos'
import { Button } from 'antd'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #fff;
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
const CentralizaTexto = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #100f0f;
border-color: #100f0f;
`
const StyleButton = styled(Button)`
display:flex;
text-decoration: none;
color: #100f0f;
border-color: #100f0f;
hover: none;
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
`


function UltimosLancamentos() {
   

    return (
        <UltimosLancamentosContainer>
         
            <NovosProdutosContainer>
                    
                {produtos.map( produto => (
                    <Paragrafo> 
                    <img src={produto.src} alt={produto.nome} width="350" height="350"/>
                    <CentralizaTexto>
                    <li> {produto.nome}</li>
                    <li> <p>R${produto.value}</p></li>
                    <li> <StyleButton href={`/produtos/${produto.id}/detalhes`}>Detalhes </StyleButton> </li>
                    </CentralizaTexto>
                    </Paragrafo>
                )
                )}
            
            </NovosProdutosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos