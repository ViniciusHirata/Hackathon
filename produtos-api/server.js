import raqueteWilsonB from '../src/imagens/wilsonBlade.webp'
import raqueteWilsonC from '../src/imagens/wilsonClash.webp'
import raqueteWilsonP from '../src/imagens/wilsonPro.webp'
import raqueteWilsonU from '../src/imagens/wilsonUltra.webp'
import raqueteiraSuper from '../src/imagens/Raqueteira Super Tour 15 pack.webp'
import raqueteiraBlade from '../src/imagens/Raqueteira Blade.webp'
import mochilaWilson from '../src/imagens/Mochila Wilson.webp'
import blusaPerformance from '../src/imagens/Blusa Performace.webp'
import blusaTour from '../src/imagens/Blusa Tour U.webp'
import bolaUsOpen from '../src/imagens/Bola De Tênis Us Open.webp'
import bolaChampionship from '../src/imagens/Bola De tenis Championship.webp'
import bolaUsOpenGreen from '../src/imagens/Bola de Tenis Us Open Green.webp'
import boneBigLogoV from '../src/imagens/Boné Big Logo Vermelho.webp'
import boneBigLogo from '../src/imagens/Boné Big Logo.webp'
import tenisRushProAce from '../src/imagens/Rush Pro Ace 4.0.webp'
import tenisRushProLite from '../src/imagens/Rush Pro Lite.webp'
import ShortPerformanceTourVerde from '../src/imagens/Short Performace Tour Verde.webp'
import ShortPerformanceTourAzul from '../src/imagens/Short Performance Tour Azul.webp'
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

const produtos = [
    {nome: 'Wilson Blade V9', src: raqueteWilsonB, id: 1, value:`1,849.90`, 
    txt:`
    Gênero: Unissex, 

    Família: Blade
    
    Benefício Principal: Potência/Spin
    
    Tipo de Jogador: Competidor
    
    Tamanho do aro: 98 sq in
    
    Padrão de Encordoamento: 16x19
    
    Peso sem corda: 10.9 oz / 300 g
    
    Peso com corda: 11 oz / 326 g
    
    Comprimento: 27" / 68.58cm
    
    Balanço sem corda: 30.6 cm / -12 pts HL
    
    Balanço com corda:  31.6 cm / -8 pts HL
    
    Encordoada: Não
    
    Capa de Proteção: Não
    
    Composição: 88% Carbono e 12% fibra de vidro

    `},

    {nome: 'Wulson Clash', src: raqueteWilsonC, id: 2, value:`1,849.90`, 
    txt:`
    Gênero: Unissex, 

    Família: Clash
    
    Benefício Principal: Controle
    
    Tipo de Jogador: Competidor
    
    Tamanho do aro: 98 sq in
    
    Padrão de Encordoamento: 16x20
    
    Peso sem corda: 10.9 oz / 310 g
    
    Peso com corda: 11 oz / 326 g
    
    Comprimento: 27" / 68.58cm
    
    Balanço sem corda: 30.6 cm / -12 pts HL
    
    Balanço com corda:  31.6 cm / -8 pts HL
    
    Encordoada: Não
    
    Capa de Proteção: Não
    
    Composição: 88% Carbono e 12% fibra de vidro

    `},
    
    {nome: 'Wilson ProStaff', src: raqueteWilsonP, id: 3, value:`1,849.90`,
    txt:`
    Gênero: Unissex

    Família: Pro Staff

    Benefício Principal: Precisão

    Tipo de Jogador: Competidor

    Tamanho do aro: 97 sq in

    Padrão de Encordoamento: 16x19

    Peso sem corda: 11.11 oz / 315 g

    Peso com corda: 11.64 oz / 330 g

    Comprimento: 27" / 68.58cm

    Balanço sem corda: 31cm / -10 pts HL

    Balanço com corda: 32cm / -7 pts HL

    Encordoada: Não

    Capa de Proteção: Não

    Composição: Grafite
    `},
    {nome: 'Wilson Ultra', src: raqueteWilsonU, id: 4, value:`1,849.90`,
    txt: `
    Gênero: Unissex

    Família: Ultra

    Benefício Principal: Potência

    Tipo de Jogador: Competidor

    Tamanho do aro: 100 sq in

    Padrão de Encordoamento: 16x19

    Peso sem corda: 10.58 oz / 300g

    Peso com corda: 11.15 oz / 316g

    Comprimento: 27" / 68.58cm

    Balanço sem corda: 32cm / -7 pts HL

    Balanço com corda: 33cm / -4 pts HL

    Encordoada: Não

    Capa de Proteção: Não

    Composição: 95% Grafite e 5% Fibras de Vidro

    `},
    {nome: 'Raqueteira Super Tour 15', src: raqueteiraSuper, id: 5, value:`1,799.90`,
    txt:`
    Gênero: Unissex

    Cor: Vermelho

    Tamanho: BR 75 x 32 x 40 cm

    Capacidade: 15 raquetes

    Composição: 100% Poliéster`},

    {nome: 'Raqueteira Blade 15 ', src: raqueteiraBlade, id: 6, value:`1,799.90`,
    txt: `
    Gênero: Unissex

    Cor: Verde Esmeralda
    
    Tamanho: BR 73.5 x 40.5 x 33 cm
    
    Capacidade: 15 raquetes
    
    Composição: 84% Poliéster 16% PU
    `},

    {nome: 'Mochila Tour Ultra Wilson', src: mochilaWilson, id: 7, value:`899.90`,
    txt:`
    Gênero: Unissex

    Cor: Azul Marinho
    
    Tamanho: BR 30.5 x 20 x 44.5 cm
    
    Capacidade: 02 raquetes
    
    Composição: 100% Poliéster
    `},

    {nome: 'Blusa Performance Wilson', src: blusaPerformance, id: 8, value:`329.90`, 
    txt:`
    Gênero: Masculino

    Cor: Azul Marinho
    
    Estampa: Estampa em Silk
    
    Tecido: Malha
    
    Composição: 90% Poliéster - 10% Elastano
    `},

    {nome: 'Blusa Tour Wilson', src: blusaTour, id: 9, value:`329.90`, 
    txt: 
    `Gênero: Unissex

    Cor: Grafite
    
    Estampa: Estampa em Silk
    
    Tecido: Malha
    
    Composição: 65% Poliéster - 35% Algodão`},

    {nome: 'Bola de Tênis US Open Wilson', src: bolaUsOpen, id: 10, value:`74.90`,
    txt: `
    Gênero: Unissex

    Bolas de Tênis: All Court
    
    Tamanho: Único
    
    Modelo: Jogos de performance ou longa duração
    
    Packaging: Tubo plástico pressurizado, contendo 3 unidades.
    
    Composição: Borracha e Feltro
    `},
    {nome: 'Bola de Tênis Championship Wilson', src: bolaChampionship, id: 11, value:`59.90`,
    txt:`
    Gênero: Unissex

    Bolas de Tênis: All Court
    
    Tamanho: Único
    
    Modelo: Jogos de performance ou longa duração
    
    Packaging: Tubo plástico pressurizado, contendo 3 unidades.
    
    Composição: Borracha e Feltro
    `},
    {nome: 'Bola de Tênis US open Green Tour Wilson', src: bolaUsOpenGreen, id: 12, value:`80.00`,
    txt: 
    `Gênero: Unissex

    Bolas de Tênis: Clay Court
    
    Tamanho: Único
    
    Modelo: Jogos de performance ou longa duração
    
    Packaging: Tubo plástico pressurizado, contendo 3 unidades.
    
    Composição: Borracha e Feltro`},
    {nome: 'Boné Big Logo Wilson Vermelho', src: boneBigLogoV, id: 13, value:`69.90`, 
    txt: 
    `Gênero: Unissex

    Indicação Uso: Dia-a-Dia
    
    Tamanho: Único
    
    Modelo: Ajustável
    
    Composição: 100% Poliéster
    
    `},
    {nome: 'Boné Big Logo Wilson', src: boneBigLogo, id: 14, value:`69.90`,
    txt: 
    `
    Gênero: Unissex

    Indicação Uso: Dia-a-Dia

    Tamanho: Único

    Modelo: Ajustável

    Composição: 100% Poliéster
    `},
    {nome: 'Tênis Rush Pro Ace', src: tenisRushProAce, id: 15, value:`1,199.90`,
    txt: `
    Gênero: Masculino

    Peso: 304 g
    
    Amarração: Amarração convencional em cadarço, lingueta macia em mesh para maior conforto, palmilha removível, logo W na lingueta, logo Wilson nas laterais, biqueira reforçada e proteção lateral, furos frontais para melhor respirabilidade e design e cores modernas.
    
    Solado Non-Marking: Solado que não deixa marcas no piso e garante alta tração em qualquer tipo de quadra
    
    Superfície: All Court
    `
    },
    {nome: 'Tênis Rush Pro Lite', src: tenisRushProLite, id: 16, value:`999.90`,
    txt: ` 
    Gênero: Masculino

    Peso: 304 g

    Amarração: Amarração convencional em cadarço, lingueta macia em mesh para maior conforto, palmilha removível, logo W na lingueta, logo Wilson nas laterais, biqueira reforçada e proteção lateral, furos frontais para melhor respirabilidade e design e cores modernas.

    Solado Non-Marking: Solado que não deixa marcas no piso e garante alta tração em qualquer tipo de quadra

    Superfície: All Court
    
    `},
    {nome: 'Short Performance Tour Verde', src: ShortPerformanceTourVerde, id: 17, value:`149,90`},
    {nome: 'Short Performance Tour Azul', src: ShortPerformanceTourAzul, id: 18, value:`149,90`,
        txt: `
    Gênero: Masculino

    Cor: Azul Marinho

    Estampa: Logo em Silk

    Tecido: Malha

    Composição: 90% Poliéster - 10% Elastano
    `
    }

];

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        res.json(produto);
    } else {
        res.status(404).send('Produto não encontrado');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
