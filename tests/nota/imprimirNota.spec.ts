import 'mocha';
import {expect} from "chai";
import {ImprimirNota} from "../../src/notas/imprimirNota";
import {Nota} from "../../src/notas/nota";

const impNota = new ImprimirNota(new Nota("Invitados", "ale, sergio, juan", "red"));
describe("Pruebas de la clase ImprimirNota", () => {
  it('Se puede instanciar un objeto', () => {
      expect(impNota).instanceOf(ImprimirNota);
  });
  it('Metodo para imprimir una nota', () => {
      expect(impNota.print()).to.eql("{\"titulo\": \"Invitados\", \"cuerpo\": \"ale, sergio, juan\", \"color\": \"red\"}")
  });
})