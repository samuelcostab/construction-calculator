import { calcularTrilhos, calcularLajotas, calcularSubTotalLaje } from "../functions/LajeCalculateMetrics";
import { calcularTijolos, calcularCimento, calcularAreia } from "../functions/ParedesCalculateMetrics";
import { calcularCimentoPiso, calcularAreiaPiso } from "../functions/ContraPisoCalculateMetrics";
import { calcularCimentoReboco, calcularAreiaReboco } from "../functions/RebocoCalculateMetrics";

const formatCimentoValue = (qtdCimento) => {
  return qtdCimento > 0.9 ? `${Math.ceil(qtdCimento).toFixed(2)} un` : `${qtdCimento.toFixed(2)*50} kg`
}

function processLajeDetails(inputs) {
    const detalhes = inputs.map(({ name, width, length }) => {
      const qtdTrilhos = calcularTrilhos(width, length);
      return {
        vao: `${name} (${width} x ${length})`,
        qtdTrilhos,
        tamTrilhos: width > length ? length : width,
        qtdLajotas: calcularLajotas(width, length),
        subTotal: calcularSubTotalLaje(width, length).toFixed(2),
      };
    });
    return detalhes;
}

function processParedesDetails(inputs) {
    const detalhes = inputs.map(({ name, height, width, length }) => {
      return {
        vao: `${name} (${height} x ${length})`,
        qtdTijolos: calcularTijolos(height, length),
        qtdCimento: formatCimentoValue(calcularCimento(height, length)),
        qtdAreia: calcularAreia(height, length).toFixed(2),
        subTotal: calcularSubTotalLaje(width, length).toFixed(2),
      };
    });
    return detalhes;
}

function processContraPisoDetails(inputs) {
    const detalhes = inputs.map(({ name, depth, width, length }) => {
      const qtdCimento = calcularCimentoPiso(width, length, depth);
      const qtdAreia = calcularAreiaPiso(qtdCimento).toFixed(2)
      return {
        vao: `${name} (${width} x ${length} x ${depth})`,
        qtdCimento,
        qtdAreia
      };
    });
    return detalhes;
}

function processRebocoDetails(inputs) {
    const detalhes = inputs.map(({ depth, height, length }) => {
      return {
        vao: `${height} x ${length} x ${depth}`,
        qtdCimento: formatCimentoValue(calcularCimentoReboco(height, length, depth)),
        qtdAreia: calcularAreiaReboco(height, length, depth).toFixed(2)
      };
    });
    return detalhes;
}


function createRowData(etapa, inputs) {
  let detalhes = []
  if(etapa.includes("Laje")){
    detalhes = processLajeDetails(inputs);
  }
  if(etapa.includes("Paredes")){
    detalhes = processParedesDetails(inputs);
  }
  if(etapa.includes("Contra-Piso")){
    detalhes = processContraPisoDetails(inputs);
  }
  
  if(etapa.includes("Reboco")){
    detalhes = processRebocoDetails(inputs);
  }

  return {
    total: detalhes.reduce((total, {subTotal} ) => total + Number(subTotal), 0).toFixed(2),
    etapa,
    inputs,
    detalhes
  };
}


export {
  createRowData
}