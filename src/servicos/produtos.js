import axios from "axios"

const produtosAPI = axios.create({baseURL: "http://localhost:8000/livros"})

async function getProdutos() {
    const response = await produtosAPI.get('/')

    return response.data
}

export {
    getProdutos
}