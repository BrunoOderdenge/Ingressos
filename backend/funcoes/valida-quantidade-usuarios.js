/* function validaQuantidadeUsuarios(quantidadeUsuarios, quantidadeIngressos) {
  if (quantidadeUsuarios == quantidadeIngressos) {
    return true
  } else {
    return false
  }
} */

const validaQuantidadeUsuarios = (quantidadeUsuarios, quantidadeIngressos) => {
  if (quantidadeUsuarios == quantidadeIngressos) {
    return true
  } else {
    return false
  }
};

module.exports = { validaQuantidadeUsuarios }