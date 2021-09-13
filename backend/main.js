const { usuarios } = require('./data/usuario')
const { ingressos } = require('./data/ingressos')
const { valorTotal } = require('./funcoes/valor-total')
const { validaQuantidadeUsuarios } = require('./funcoes/valida-quantidade-usuarios')

const resposta = validaQuantidadeUsuarios(usuarios.length, ingressos)

if (resposta == true) {
  const total = valorTotal(usuarios)
  console.log(total);
} else {
  console.log('quantidade de ingressos ou usuarios nao sao iguais');
}


