function calcularEstado(){
    var nome = document.getElementById('nome').value
    var nota1 = document.getElementById('nota1').value 
    var nota2 = document.getElementById("nota2").value 
    var situacao = ''

    var media = (parseInt(nota1)  +parseInt(nota2)) / 2

    if(media >= 7 ){
       situacao ='Parabéns '+ nome + '! você foi aprovado '
    } else {
        situacao = 'Infelizmente você foi Reprovado ' + nome
    }

    var mediaNotas = document.getElementById('mediaNotas')
    mediaNotas.textContent = "Média das Notas: "+ media 

    var situacaoAluno = document.getElementById('situacaoAluno')
    situacaoAluno.textContent = situacao
}

var btnCalcular = document.getElementById('btnCalcular')
btnCalcular.addEventListener('click',calcularEstado)