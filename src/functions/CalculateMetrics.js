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

function calcularSubTotalLaje (comprimento, largura) {
  const precoMetroQuadrado = 38;
  const areaVao = comprimento * largura;
  return areaVao * precoMetroQuadrado;
}

export {
  calcularTrilhos,
  calcularLajotas,
  calcularSubTotalLaje
}