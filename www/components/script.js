function CalcIMC(){
    var nome, imc, massa, altura, faixa, resultado 

    nome = document.getElementById('nome').value
    massa = document.getElementById('massa').value
    altura = document.getElementById('altura').value

    imc = massa / (altura * altura)

    if (imc < 18,5) {
      faixa = "magreza"
    }
    if (imc > 18,5 && imc < 24,9) {
      faixa = "Saudável"
    }
    if (imc > 25 && imc < 29,9) {
      faixa = "Sobrepeso"
    }
    if (imc > 30 && imc < 34,9) {
      faixa = "Obesidade"
    }
    if (imc > 35 && imc < 39,9) {
      faixa = "Obesidade severa"
    }
    if (imc > 40) {
      faixa = "Obesidade morbida"
    }

    resultado = document.getElementById('resultado')

    resultado.innerHTML = nome + ', seu IMC é ' + imc.toFixed(2) + ' e sua faixa é ' + faixa
}