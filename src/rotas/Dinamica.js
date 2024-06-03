
import styled from 'styled-components';
import { produtos } from '../componentes/UltimosLancamentos/dadosUltimosLancamentos'
import { useParams } from 'react-router-dom';
 
const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    color: #fff;
   
`
const ListaProdutos= styled.ol`
 
border-radius:20px;
width:100%;
padding: 10px 10px;
color:black;
justify-content:center;
display:flex;
gap: 2rem;
background-color: #fff;

 
`
const BodyStyle= styled.body`
  display: flex;
  align-items: center;
  justify-content:center;
  background-color:#fff;
  overflow-y: auto;
  padding: 30x 90px;
  height: 600px;
`
const DetalhesStyle = styled.p`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #100f0f;
border-color: #100f0f;
font-family: 'Arial', 
sans-serif; /* Exemplo de fonte */
font-size: 30px; /* Tamanho da fonte */
font-weight: 400; /* Peso da fonte */
line-height: 1.5; /* Altura da linha */
`
 
function Detalhes() {
    const parametro = useParams()
    const produtosSelecionados = produtos.filter( produto => produto.id === Number(parametro.idProduto))
    
  return (
    <AppContainer>
     <BodyStyle>
            <ListaProdutos>
                <DetalhesStyle>
                <img src={produtosSelecionados[0].src} alt={produtosSelecionados[0].nome}  width='250px' height='250px'  />
                <li>   <p>{produtosSelecionados[0].nome}</p> </li>
                <li> <p>R$:{produtosSelecionados[0].value}</p> </li>
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>1x {Math.round(((produtosSelecionados[0].value)/4)+(produtosSelecionados[0].value*0.0199))} com 1.99% de juros</option>
                      <option>2x {Math.round((((produtosSelecionados[0].value)/4)+(produtosSelecionados[0].value*0.0398)))} com 1.99% de juros</option>
                      <option>3x {Math.round((((produtosSelecionados[0].value)/4)+(produtosSelecionados[0].value*0.0597)))} com 1.99% de juros</option>
                      <option>4x {Math.round((((produtosSelecionados[0].value)/4)+(produtosSelecionados[0].value*0.0796)))} com 1.99% de juros</option>
                    </select>
                    <li><p></p>{produtosSelecionados[0].txt} </li>
                </DetalhesStyle>
 
            </ListaProdutos>
     </BodyStyle>
    </AppContainer>
  );
}
 
 
export default Detalhes;