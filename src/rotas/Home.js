import Header from '../componentes/Header'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import styled from 'styled-components'
import { produtos } from '../componentes/UltimosLancamentos/dadosUltimosLancamentos' 


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
function Home() {
  return (
    <AppContainer>
      <UltimosLancamentos />
      <Pesquisa />
      <ProdutosContainer>
      </ProdutosContainer>
      <Header />
    </AppContainer>
  );
}

export default Home
