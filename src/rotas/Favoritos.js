import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens//wilsonBlade.webp'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(154, 173, 164);
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const response = await getFavoritos()
    setFavoritos(response)
  }

  async function deletaFavorito(id) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Você deletou o item de id: ${id}`)
  }

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus itens favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              <Resultado onClick={() => deletaFavorito(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={livroImg}/>
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos
