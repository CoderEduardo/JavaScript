//Para funcionar o método close() a objeto window precisa estar dentro de uma variável
var janela

function abrirPopUp(){
    //window.open serve para abrir uma nova janela no google, com o link e tamanho desejado
    janela = window.open('http://www.google.com', 'nova_janela', 'width=500, height=500')
}

function fecharPopUp(){
    janela.close()
}