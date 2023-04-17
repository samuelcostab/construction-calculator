import { calcularTrilhos, calcularLajotas, calcularSubTotalLaje } from "../functions/LajeCalculateMetrics";
import { calcularTijolos, calcularCimento, calcularAreia } from "../functions/ParedesCalculateMetrics";
import { calcularCimentoPiso, calcularAreiaPiso } from "../functions/ContraPisoCalculateMetrics";

function processLajeDetails(inputs) {
    const detalhes = inputs.map(({ width, length }) => {
      return {
        vao: `${width} x ${length}`,
        qtdTrilhos: calcularTrilhos(width, length),
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
    const detalhes = inputs.map(({ height, width, length }) => {
      return {
        vao: `${height} x ${length}`,
        qtdTijolos: calcularTijolos(height, length),
        qtdCimento: calcularCimentoPiso(height, length),
        qtdAreia: calcularAreiaPiso(height, length).toFixed(2),
        subTotal: calcularSubTotalLaje(width, length).toFixed(2),
      };
    });
    return detalhes;
}


function createData(etapa, inputs) {
  let detalhes = []
  console.log(inputs);
  if(etapa.includes("Laje")){
    detalhes = processLajeDetails(inputs);
  }
  if(etapa.includes("Paredes")){
    detalhes = processParedesDetails(inputs);
  }
  if(etapa.includes("Contra Piso")){
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
  createData
}