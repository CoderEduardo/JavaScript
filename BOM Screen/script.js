//Esses atributos apresentam o potencial de altura e de largura
var altura = window.screen.availHeight
var largura = window.screen.availWidth

document.write("A altura da janela é de: "+altura)
document.write(" A largura da janela é de: " + largura)

if (largura <600){
    document.write("Lógica para apresentar o menu versão mobile")
} 
else{
    document.write("Lógica para apresentar o menu versão web")
}