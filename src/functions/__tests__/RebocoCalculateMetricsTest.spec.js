import { calcularCimentoReboco, calcularAreiaReboco } from "../RebocoCalculateMetrics.js";

describe("Reboco Calculate Metrics tests", () => {
  test("should calculate cimento correctly", () => {
    expect(Number(calcularCimentoReboco(6,3,0.02).toFixed(2))).toEqual(1.67);
  })
  
  test("should calculate cimento correctly", () => {
    expect(Number(calcularCimentoReboco(6,3,0.03).toFixed(2))).toEqual(2.50);
  })
  
  test("should calculate areia correctly", () => {
    expect(Number(calcularAreiaReboco(6,3,0.02).toFixed(2))).toEqual(0.42);
  })
});