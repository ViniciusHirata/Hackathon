import Header from '../componentes/Header'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import styled from 'styled-components'
import { produtos } from '../componentes/UltimosLancamentos/dadosUltimosLancamentos' 
import { idAleatorio } from '../componentes/UltimosLancamentos/dadosUltimosLancamentos'

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
`
const ProdutosContainer = styled.div`
    margin-top: 0px;
    display: flex;
    overflow-y: auto;
    justify-content: center;
    cursor: pointer;
    heigth: 500px;
    flex-wrap: wrap;
    padding: 30px 10px;
`
console.log(produtos);
// console.log(prodRandom);
function Home() {
  return (
    <AppContainer>
      <UltimosLancamentos />
      <Pesquisa />
      <ProdutosContainer>
       
      
      {/* {idAleatorio.map( produto => (
        <ol>        
                    {<img src={produto.src} alt={produto.nome} width="350" height="350"/>}
                    <li> {produto.nome}</li>
                    <li> <p>R${produto.value}</p></li>
                    <li> <button>DETALHES</button> </li>
                </ol>
                )
              )} */}
      </ProdutosContainer>
      <Header />
    </AppContainer>
  );
}

export default Home
