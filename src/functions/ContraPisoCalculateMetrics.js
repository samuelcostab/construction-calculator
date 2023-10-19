function calcularCimentoPiso (largura, comprimento, expessura, comBrita = false) {
  // 1m³ gasta de 5 a 7 sacos de cimento 50kg
  // sem brita gasta 7 sacos
  // com brita gasta 5 sacos
  const qtdCimentoMetroCubico = comBrita ? 5 : 7;

  return (comprimento * largura * expessura) * qtdCimentoMetroCubico;
}

function calcularAreiaPiso (qtdCimento) {
  // 1m³ = 1000kg
  debugger
  const qtdCimentoEmKg = qtdCimento * 50;
  const areiaEmKg = qtdCimentoEmKg * 3; //1:3

  return areiaEmKg / 1000;
}

export {
  calcularCimentoPiso,
  calcularAreiaPiso
}