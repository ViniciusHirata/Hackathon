import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
// import { getprodutos } from '../../servicos/produtos'
// import { useEffect } from 'react'
// import { postFavorito } from '../../servicos/favoritos'
import { produtos } from '../UltimosLancamentos/dadosUltimosLancamentos'

const PesquisaContainer = styled.section`
background-color: rgb(34, 87, 107);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 500px;

    overflow-y: auto;
`


const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        
        width: 200px;
        color: #fff;
    }
    
    img {
        width: 100px;
    }
    
    &:hover {
        border: 1px solid white;
       
    }
`
const Paragrafo = styled.p`
width: 200px;
color: #fff;
`
function Pesquisa() {
    const [produtosPesquisados, setprodutosPesquisados] = useState([])
 

    return (
        <PesquisaContainer>
            <Input
                placeholder="Buscar"
                onBlur={evento => {
                    const produtosPesquisados = evento.target.value
                    const resultadoPesquisa = produtos.filter( produto => produto.nome.includes(produtosPesquisados))
                    setprodutosPesquisados(resultadoPesquisa)
                }}
            />
            { produtosPesquisados.map( produto => (
                <Resultado>
                    <img src={produto.src} alt='raquete'/>
                    <Paragrafo>
                    <li> {produto.nome}</li>
                    <li> <p>R${produto.value}</p></li>
                    <li> <button>DETALHES</button> </li>
                    </Paragrafo>
                    {/* <Paragrafo>{produtos.nome}</Paragrafo> */}
                   
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa