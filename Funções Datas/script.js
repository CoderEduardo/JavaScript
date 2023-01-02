var data = new Date()

//Exibe o dia atual
//document.write(data.getDate()+ '/' + (data.getMonth()+ 1) + '/' + data.getFullYear() )

document.write(data.toString())
//adionar e remover dias
data.setDate(data.getDate() + 1)
document.write('<hr>')
document.write(data.toString())
document.write('<br>')

//adicionar e remover meses
data.setMonth(data.getMonth() + 7)
document.write('<hr>')
document.write(data.toString())
document.write('<br>')

//adicionar e remover anos
data.setFullYear(data.getFullYear() + 5)
document.write('<hr>')
document.write(data.toString())
document.write('<br>')

document.write('<hr>')
document.write('<br>')
document.write('<hr>')
document.write('<br>')
document.write('<hr>')

//Calculando a distância de datas

var data1 = new Date(2022,8,21)
var data2 = new Date(2023,0,2)

document.write(data1.toDateString())
document.write('<br>')
document.write(data2.toString())
document.write('<hr>')

document.write(data1.getTime())
document.write('<hr>')
document.write(data2.getTime())

document.write('<hr>')

var milisegundos_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(milisegundos_entre_datas)
var milisegundos_por_dia = (1*24*60*60*1000)
var resultado = milisegundos_entre_datas / milisegundos_por_dia
document.write('<hr>')
document.write('A diferença de dias entre essas duas datas é de: '+ resultado)



