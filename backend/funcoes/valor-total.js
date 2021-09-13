const { calculaValor } = require('./calcula-valor')

function valorTotal(usuarios) {
  let somaDosIngressos = 0;

  usuarios.map(usuario => {
    const respostaDoValor = calculaValor(usuario.genero, usuario.idade)

    somaDosIngressos = somaDosIngressos + respostaDoValor
  })

  return somaDosIngressos
}

module.exports = { valorTotal }
