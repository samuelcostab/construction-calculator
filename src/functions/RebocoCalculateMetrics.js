function calcularCimentoReboco (altura, comprimento, espessura) {
  // Para reboco a escala utilizada é 1:5 (1 cimento para 5 de areia)
  // 1 traco de massa (1:5) tem 216L = 0,216m³
  const tracoM3 = 0.216;
  const volumeNecessario = (altura * comprimento * espessura);

  return volumeNecessario / tracoM3;
}

function calcularAreiaReboco (altura, comprimento, espessura) {
  // 1m³ = 1000g
  // 12 latas de areia = 216L
  // 216 / 1000 = 0,216m³
  const qtdCimentoEmKg = calcularCimentoReboco(altura, comprimento, espessura) * 50;
  const areiaEmKg = qtdCimentoEmKg * 5; // 1:5

  return areiaEmKg / 1000;
}

export {
  calcularCimentoReboco,
  calcularAreiaReboco
}