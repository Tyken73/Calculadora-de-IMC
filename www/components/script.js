function CalcIMC(){
    var nome, imc, massa, altura, resultado 

    nome = document.getElementById('nome').value
    massa = document.getElementById('massa').value
    altura = document.getElementById('altura').value

    imc = massa / (altura * altura)

    resultado = document.getElementById('resultado')

    resultado.innerHTML = nome + ', seu IMC é ' + imc.toFixed(2)
}