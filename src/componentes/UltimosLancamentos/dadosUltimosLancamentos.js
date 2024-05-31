import raqueteWilsonB from '../../imagens/wilsonBlade.webp'
import raqueteWilsonC from '../../imagens/wilsonClash.webp'
import raqueteWilsonP from '../../imagens/wilsonPro.webp'
import raqueteWilsonU from '../../imagens/wilsonUltra.webp'
import raqueteiraSuper from '../../imagens/Raqueteira Super Tour 15 pack.webp'
import raqueteiraBlade from '../../imagens/Raqueteira Blade.webp'
import mochilaWilson from '../../imagens/Mochila Wilson.webp'
import blusaPerformance from '../../imagens/Blusa Performace.webp'
import blusaTour from '../../imagens/Blusa Tour U.webp'
import bolaUsOpen from '../../imagens/Bola De Tênis Us Open.webp'
import bolaChampionship from '../../imagens/Bola De tenis Championship.webp'
import bolaUsOpenGreen from '../../imagens/Bola de Tenis Us Open Green.webp'
import boneBigLogoV from '../../imagens/Boné Big Logo Vermelho.webp'
import boneBigLogo from '../../imagens/Boné Big Logo.webp'
import tenisRushProAce from '../../imagens/Rush Pro Ace 4.0.webp'
import tenisRushProLite from '../../imagens/Rush Pro Lite.webp'
import ShortPerformanceTourVerde from '../../imagens/Short Performace Tour Verde.webp'
import ShortPerformanceTourAzul from '../../imagens/Short Performance Tour Azul.webp'

export const produtos = [
    {nome: 'Wilson Blade V9', src: raqueteWilsonB, id: 1, value:`1,500.00` },
    {nome: 'Wulson Clash', src: raqueteWilsonC, id: 2, value:`1,500.00`},
    {nome: 'Wilson ProStaff', src: raqueteWilsonP, id: 3, value:`1,500.00`},
    {nome: 'Wilson Ultra', src: raqueteWilsonU, id: 4, value:`1,500.00`},
    {nome: 'Raqueteira Super Tour 15', src: raqueteiraSuper, id: 5, value:`1,500.00`},
    {nome: 'Raqueteira Blade 15 ', src: raqueteiraBlade, id: 6, value:`1,500.00`},
    {nome: 'Mochila Tour Ultra Wilson', src: mochilaWilson, id: 7, value:`1,500.00`},
    {nome: 'Blusa Performance Wilson', src: blusaPerformance, id: 8, value:`1,500.00`},
    {nome: 'Blusa Tour Wilson', src: blusaTour, id: 9, value:`1,500.00`},
    {nome: 'Bola de Tênis US Open Wilson', src: bolaUsOpen, id: 10, value:`1,500.00`},
    {nome: 'Bola de Tênis Championship Wilson', src: bolaChampionship, id: 11, value:`1,500.00`},
    {nome: 'Bola de Tênis US open Green Tour Wilson', src: bolaUsOpenGreen, id: 12, value:`1,500.00`},
    {nome: 'Boné Big Logo Wilson Vermelho', src: boneBigLogoV, id: 13, value:`1,500.00`},
    {nome: 'Boné Big Logo Wilson', src: boneBigLogo, id: 14, value:`1,500.00`},
    {nome: 'Tênis Rush Pro Ace', src: tenisRushProAce, id: 15, value:`1,500.00`},
    {nome: 'Tênis Rush Pro Lite', src: tenisRushProLite, id: 16, value:`1,500.00`},
    {nome: 'Short Performance Tour Verde', src: ShortPerformanceTourVerde, id: 17, value:`1,500.00`},
    {nome: 'Short Performance Tour Azul', src: ShortPerformanceTourAzul, id: 18, value:`1,500.00`}
]


export const random = produtos
console.log(produtos);
function getRandomInt(random, numItens) {
    const arrayEmbaralhado = produtos.sort(() => 0.5 - Math.random())
    return arrayEmbaralhado.slice(0, numItens);
    
    }
    
export let idAleatorio = getRandomInt(random, 6);
console.log(idAleatorio)
