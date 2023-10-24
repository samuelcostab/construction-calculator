import { calcularTijolos, calcularCimento, calcularAreia } from "../ParedesCalculateMetrics";

describe("Paredes Calculate Metrics tests", () => {
  test("should calculate tijolos correctly", () => {
    expect(Number(calcularTijolos(2,2).toFixed(2))).toEqual(100.00);
  })

  test("should calculate cimento correctly", () => {
    expect(Number(calcularCimento(11,3).toFixed(2))).toEqual(6.6);
  })
  
  test("should calculate fractionarity cimento correctly", () => {
    expect(Number(calcularCimento(1,1).toFixed(2))).toEqual(0.20);
  })
  
  test("should calculate areia correctly", () => {
    expect(Number(calcularAreia(5,5).toFixed(2))).toEqual(0.75);
  })
});