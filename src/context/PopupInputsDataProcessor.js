import { calcularTrilhos, calcularLajotas, calcularSubTotalLaje } from "../functions/LajeCalculateMetrics";
import { calcularTijolos, calcularCimento, calcularAreia } from "../functions/ParedesCalculateMetrics";
import { calcularCimentoPiso, calcularAreiaPiso } from "../functions/ContraPisoCalculateMetrics";

function processLajeDetails(inputs) {
    const detalhes = inputs.map(({ width, length }) => {
      const qtdTrilhos = calcularTrilhos(width, length);
      return {
        vao: `${width} x ${length}`,
        qtdTrilhos,
        tamTrilhos: width > length ? length : width,
        qtdLajotas: calcularLajotas(width, length),
        subTotal: calcularSubTotalLaje(width, length).toFixed(2),
      };
    });
    return detalhes;
}

function processParedesDetails(inputs) {
    const detalhes = inputs.map(({ height, width, length }) => {
      return {
        vao: `${height} x ${length}`,
        qtdTijolos: calcularTijolos(height, length),
        qtdCimento: calcularCimento(height, length),
        qtdAreia: calcularAreia(height, length).toFixed(2),
        subTotal: calcularSubTotalLaje(width, length).toFixed(2),
      };
    });
    return detalhes;
}

function processContraPisoDetails(inputs) {
    const detalhes = inputs.map(({ depth, width, length }) => {
      const qtdCimento = calcularCimentoPiso(width, length, depth);
      const qtdAreia = calcularAreiaPiso(qtdCimento).toFixed(2)
      return {
        vao: `${width} x ${length} x ${depth}`,
        qtdCimento,
        qtdAreia
      };
    });
    console.log(detalhes);
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