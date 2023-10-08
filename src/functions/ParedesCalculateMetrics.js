function calcularTijolos (altura, comprimento) {
  const qtdTijolosMetroQuadrado = 25;

  return Math.ceil((comprimento * altura) * qtdTijolosMetroQuadrado);
}

function calcularCimento (altura, comprimento) {
  // Em média de 100 a 150 tijolos por 1 Traço de massa
  // qtdTraços = qtdTijolos (total) / qtdTijolosTraço
  // 1 Traço = 1 Saco de Cimento
  // qtdSacosCimento = qtdTraços 
  const tijolosTraco = 125;
  const qtdTotalTijolos = calcularTijolos(altura, comprimento);

  return qtdTotalTijolos / tijolosTraco;
}

function calcularAreia (altura, comprimento) {
  // 1m³ = 1000g
  const qtdCimentoEmKg = calcularCimento(altura, comprimento) * 50;
  const areiaEmKg = qtdCimentoEmKg * 3; //1:3

  return areiaEmKg / 1000;
}

export {
  calcularTijolos,
  calcularCimento,
  calcularAreia
}