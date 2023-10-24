import { calcularCimentoPiso, calcularAreiaPiso } from "../ContraPisoCalculateMetrics";

describe("ContraPiso Calculate Metrics tests", () => {
  test("should calculate cimento correctly", () => {
    expect(Number(calcularCimentoPiso(7,7, 0.02, false).toFixed(2))).toEqual(6.86);
  })
  
  test("should calculate cimento + brita correctly", () => {
    // around the 0,49 to 1 and then return (1 * 7)
    expect(Number(calcularCimentoPiso(3,1.5, 0.01, true).toFixed(2))).toEqual(0.22);
  })
  
  test("should calculate areia correctly", () => {
    const qtdCimento = Number(calcularCimentoPiso(7,7, 0.02, false));
    expect(Number(calcularAreiaPiso(qtdCimento).toFixed(2))).toEqual(1.03);
  })
});