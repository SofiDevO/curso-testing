import {render, screen, fireEvent} from "@testing-library/react";
import Cuenta from "./index";
describe('El componente cuenta', () => {
    it('Debe mostrar el valor en formato de moneda', () => {
        render(<Cuenta saldo={1000} />)
        const saldo = screen.getByTestId("saldo-cuenta");
        expect(saldo.textContent).toBe("$1000")
    });
    it('Llama la funcion para realizar operacion', () => {
        const functionTest = jest.fn();
        render(<Cuenta saldo={1000} realizarTransaccion={functionTest}/>);
        const boton = screen.getByText("Realizar operación");
        fireEvent.click(boton);
        expect(functionTest).toHaveBeenCalled();
    });

});
