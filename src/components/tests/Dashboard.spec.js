import { render, screen } from "@testing-library/react"
import { Dashboard } from "../Dashboard"
import '@testing-library/jest-dom'

describe("Dashboard testes", () => {
  test("should render dashboard", () => {
    render(<Dashboard />);

    expect(screen.getByText("Calcular Orçamento - Obra Certa")).toBeInTheDocument();
    expect(screen.getByText("ADICIONAR NOVO ORÇAMENTO")).toBeInTheDocument();
  })
});