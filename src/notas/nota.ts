
export type colorType = 'red' | 'green' | 'blue' | 'yellow';

export class Nota {
  constructor(private titulo: string, private cuerpo: string, private color: colorType) {}

  getTitulo(): string {
    return this.titulo;
  }

  getCuerpo(): string {
    return this.cuerpo;
  }

  getColor(): colorType {
    return this.color;
  }

  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  setCuerpo(cuerpo: string): void {
    this.cuerpo = cuerpo;
  }

  setColor(color: colorType): void {
    this.color = color;
  }
}
