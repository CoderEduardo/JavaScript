//o setTimeout executa a função depois de um tempo determinado em milissegundos apenas uma vez
//setTimeout(function(){document.write("Teste")},2000)

//o setInterval executa a funcção depois de um tempo determinando em milissegundos de forma constante
var i = 5
 var x = setInterval(function () {
    document.write(i + "<br/>")
    i--

    if (i == 0){
        clearInterval(x) //força o setInterval a parar
    }

}, 1000)

//window.location.reload() força a página a se atualizar