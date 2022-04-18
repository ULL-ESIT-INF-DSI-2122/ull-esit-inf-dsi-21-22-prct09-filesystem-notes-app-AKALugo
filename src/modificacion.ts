
/**
 * @class ReduceAlgoritmo
 */
export abstract class ReduceAlgoritmo {
  /**
   * Constructor
   * @param almacen valores numericos
   */
  constructor(protected almacen: number[]) {}

  /**
   * Metodo que realiza todo el trabajo.
   * @returns El valor del reduce
   */
  public run(): number {
    // Hook
    this.informacionArray();

    const aux = this.operacion();

    // Hook
    this.informacionReduce();

    return aux;
  }

  /**
   * Metodo abstracto que cada algortimo tiene que implementar
   */
  protected abstract operacion(): number;

  /**
   * Metodo que es un Hook y muesta la informacion de los arrays de entrada.
   */
  protected informacionArray() {
    console.log(this.almacen);
  }

  /**
   * Método que es un Hook y muestra que operacion se hizo correctamente.
   */
  protected informacionReduce() {}
}
