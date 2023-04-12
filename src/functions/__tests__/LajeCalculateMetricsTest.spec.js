import { calcularLajotas, calcularTrilhos } from "../LajeCalculateMetrics";

describe("Calculate Metrics tests", () => {
  test("should calculate lajotas correctly", () => {
    expect(Number(calcularLajotas(2.5,2).toFixed(2))).toEqual(60);
  })
  
  test("should calculate trilhos correctly", () => {
    expect(Number(calcularTrilhos(2.5,2).toFixed(2))).toEqual(6);
  })
});