import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import App, { calcularNuevoSaldo } from "./App";

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
  describe("Cuando el saldo realiza una operacion", () => {
    it("De tipo retiro, debe  disminuir el saldo", () => {
      const transaccion = {
        transaccion: "retiro",
        valor: 200,
      };
      const nuevoSaldo = calcularNuevoSaldo(transaccion, 1000);
      expect(nuevoSaldo).toBe(800);
    });
    it("De tipo retiro debe realizar la operacion", () => {
      render(<App />);
      const { getByText, getByTestId, getByLabelText } = screen;
      const saldo = getByText("$1000");
      const transaccion = getByLabelText("Retiro");
      const valor = getByTestId("valor");
      const boton = getByText("Realizar operación");

      expect(saldo.textContent).toBe('$1000');

      fireEvent.click(transaccion, {target:{value:"retiro"}});
      fireEvent.change(valor, {target:{value:"100"}});
      fireEvent.click(boton);
      expect(saldo.textContent).toBe("$900");
    });
  });
});
