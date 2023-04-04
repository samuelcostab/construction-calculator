import { render, screen, fireEvent, getByTestId } from "@testing-library/react"
import  Dashboard from "../Dashboard"
import '@testing-library/jest-dom'

describe("Dashboard testes", () => {
  test("should render dashboard", () => {
    render(<Dashboard />);

    expect(screen.getByText("Calcular Orçamento - Obra Certa")).toBeInTheDocument();
    expect(screen.getByText("Adicionar Novo Orçamento")).toBeInTheDocument();
  })
  
  
  test("should display the sidebar items", () => {
    render(<Dashboard />);

    fireEvent.click(screen.getByTestId("sidebar-button"));

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  })
  
  
  test("should open the measurements popup", () => {
    render(<Dashboard />);

    fireEvent.click(screen.getByText("Adicionar Novo Orçamento"));

    expect(screen.getByText("Informe as Medidas")).toBeInTheDocument();
  })
});