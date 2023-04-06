function calcularTrilhos (comprimento, largura) {
  const distLajota = 0.42;
  if (comprimento > largura) {
    return comprimento / distLajota;
  }

  return largura / distLajota;
}


function calcularLajotas (comprimento, largura) {
  const qtdLajotaMetroQuadrado = 12;
  const areaVao = comprimento * largura;
  return areaVao * qtdLajotaMetroQuadrado;
}

export {
  calcularTrilhos,
  calcularLajotas
}