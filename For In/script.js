//O For In percorre todos os itens dentro de um Array, mesmo que existam índices diferentes

var listaConvidados = Array()

listaConvidados['abacaxi'] = 'Luis'
listaConvidados[50] = 'Maria'
listaConvidados['zebra'] = 'Salvador da Rima'
listaConvidados['Sangue'] = 'Murilo'
listaConvidados[1000] = 'Elaine'

for (var x in listaConvidados){
    console.log(listaConvidados[x])
}