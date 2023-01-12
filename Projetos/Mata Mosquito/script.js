/* Esquema feito para sempre capturar o tamanho atual da janela da página, com a implementação do onresize no body chamando a função ajustarTamanho()*/

var altura = 0
var largura = 0

function ajustarTamanho() {
    altura = innerHeight
    largura = innerWidth
}

ajustarTamanho()

/** ************************************************************************************************************************************************/

/**Função Criada para movitar o mosquito de forma aleatória na página*/

function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    /*como é subtraido os 90 quando o valor 
    for  ficaria -90, por isso esse esquema
    para ele recever o seu proprio valor*/
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosquito.png"
    mosquito.className = 'mosquito1'
    //implementado para a aleatóriedade funcionar
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)
}