// A ideia do programa é ler o valor de cada 15 minutos de uso de um computador e o tempo de su por um cliente em minutos.

function valorPagar() {
	var inValor = document.getElementById('inValor');
	var inTempo = document.getElementById('inTempo');
	var outMostrar = document.getElementById('outMostrar')

	valor = Number(inValor.value);
	tempo = Number(inTempo.value);

	duracao = Math.ceil(tempo / 15);
	aPagar = duracao * 15;
	total = aPagar / 15 * valor;

	outMostrar.textContent = "Valor a Pagar R$: " + total;
}
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener("click", valorPagar);