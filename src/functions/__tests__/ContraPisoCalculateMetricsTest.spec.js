import { calcularCimento, calcularAreia } from "../ContraPisoCalculateMetrics";

describe("ContraPiso Calculate Metrics tests", () => {
  test("should calculate cimento correctly", () => {
    expect(Number(calcularCimento(7,7, 0.02, false))).toEqual(7);
  })
  
  test("should around calculate cimento correctly", () => {
    // around the 0,49 to 1 and then return (1 * 7)
    expect(Number(calcularCimento(7,7, 0.01, false))).toEqual(7);
  })
  
  test("should calculate areia correctly", () => {
    const qtdCimento = Number(calcularCimento(7,7, 0.02, false));
    expect(Number(calcularAreia(qtdCimento).toFixed(2))).toEqual(1.05);
  })
});