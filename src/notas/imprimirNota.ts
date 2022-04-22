import {Nota} from "./nota";

export class ImprimirNota {
  constructor(private nota: Nota) {}
  
  print(): string {
    return `{\"titulo\": \"${this.nota.getTitulo()}\", \"cuerpo\": \"${this.nota.getCuerpo()}\", \"color\": \"${this.nota.getColor()}\"}`;
  }
}
