/* Esquema feito para sempre capturar o tamanho atual da janela da página, com a implementação do onresize no body chamando a função ajustarTamanho()*/

var altura = 0
var largura = 0

function ajustarTamanho() {
    altura = innerHeight
    largura = innerWidth
}

ajustarTamanho()

/** ************************************************************************************************************************************************/

