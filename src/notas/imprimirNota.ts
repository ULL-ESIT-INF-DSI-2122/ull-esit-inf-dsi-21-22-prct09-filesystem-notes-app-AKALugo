import {Nota} from "./nota";

export class ImprimirNota {
  constructor(private nota: Nota) {}
  
  print(): string {
    let aux: string = "";
  
    aux += `Titulo: ${this.nota.getTitulo()}\nCuerpo: ${this.nota.getCuerpo()}\nColor: ${this.nota.getColor()}\n`;
  
    return aux;
  }
}
  
