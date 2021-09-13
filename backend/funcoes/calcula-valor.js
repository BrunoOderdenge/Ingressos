function calculaValor(genero, idade) {
  let valorTotal = 0; 

  if (genero == "M" && idade >= 18 && idade <= 21) {
    valorTotal = 45
  } else if (genero == "M" && idade > 21){
    valorTotal = 55
  } else if (genero == "F" && idade >= 18 && idade <= 21){
    valorTotal = 35
  } else if (genero == "F" && idade > 21){
    valorTotal = 45
  }

  return valorTotal
} 

module.exports = { calculaValor }