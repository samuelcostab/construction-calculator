function calcularTrilhos (largura, comprimento) {
  const distLajota = 0.42;
  if (comprimento > largura) {
    return Math.ceil(comprimento / distLajota);
  }
  return Math.ceil(largura / distLajota);
}


function calcularLajotas (comprimento, largura) {
  const qtdLajotaMetroQuadrado = 12;
  const areaVao = comprimento * largura;
  return Math.ceil(areaVao * qtdLajotaMetroQuadrado);
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