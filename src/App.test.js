import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Componente principal", () => {
  describe("Cuando la aplicación se inicializa", () => {
    test("Muestra el nombre de la aplicación", () => {
      render(<App />);
      expect(screen.getByText("AluraBank")).toBeInTheDocument();
    });
    it("Muestra el saldo", () => {
      render(<App />);
      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("Muestra el boton para realizar una transacción", () => {
      render(<App />);
      expect(screen.getByText("Realizar operación")).toBeInTheDocument();
    });
  });
});
