function calcularTrilhos (comprimento, largura) {
  const distLajota = 0.42;
  let qtdTrilhos = 0;
  if (comprimento > largura) {
    return qtdTrilhos = comprimento / distLajota;
  }

  return qtdTrilhos = largura / distLajota;
}


function calcularLajotas (comprimento, largura) {
  const qtdLajotaMetroQuadrado = 12;
  const areaVao = comprimento * largura;
  let qtdLajotas = 0;
  
  return qtdLajotas = areaVao * qtdLajotaMetroQuadrado;
}

export {
  calcularTrilhos,
  calcularLajotas
}