import { render, screen} from "@testing-library/react";
import App from "./App";
import { listaTransacciones } from "./api";

jest.mock("./api");
describe('Peticiones al API', () => {
    it('Debe mostrar las transacciones realizadas', async() => {
        listaTransacciones.mockResolvedValue([
            {
                "valor": "100",
                "transaccion": "retiro",
                "data": "25/09/2021",
                "id": 1
              },
              {
                "transaccion": "deposito",
                "valor": "200",
                "data": "25/09/2021",
                "id": 2
              },
        ])

        render(<App/>);
        const transacciones = screen.getByTestId("transacciones");
        expect(await screen.findByText("retiro".toUpperCase())).toBeInTheDocument();
         expect(transacciones.children.length).toBe(2);
    });

});
