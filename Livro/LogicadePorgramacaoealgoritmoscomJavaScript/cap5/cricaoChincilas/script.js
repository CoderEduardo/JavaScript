/*O usuário vai inserir o número de chincilas na fazendo e o número de anos, e o programa vai mostrar a taxa de crescimento de cada ano,
levando em consideração que elas tripilcam a cada ano, e que o número informado de chincilas precisa ser maior que 1(um casal)*/
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    let numero = Number(form.inNumero.value)
    let ano = Number(form.inAno.value)
    let pre = document.querySelector("pre")
    let resultado =""
    let i = 1

    do{

        if(numero <= 2){
            alert("Informe um número maior de chincilas, no minímo um casal(2)")
            break
        } else{
            resultado = resultado + `${i}º Ano: ${numero *= 3} Chinchilas \n`
            i++
        }

        pre.innerText = resultado
       
    }while(i == ano)

})