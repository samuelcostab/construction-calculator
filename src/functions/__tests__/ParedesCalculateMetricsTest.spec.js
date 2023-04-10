import { calcularTijolos, calcularCimento, calcularAreia } from "../ParedesCalculateMetrics";

describe("Paredes Calculate Metrics tests", () => {
  test("should calculate tijolos correctly", () => {
    expect(Number(calcularTijolos(2,2).toFixed(2))).toEqual(100.00);
  })

  test("should calculate cimento correctly", () => {
    expect(Number(calcularCimento(11,3).toFixed(2))).toEqual(9);
  })
  
  test("should calculate areia correctly", () => {
    expect(Number(calcularAreia(5,5).toFixed(2))).toEqual(1.05);
  })
});