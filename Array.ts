



    class ArraySimples<T> {
  private elementos: T[];

  constructor(elementos: T[]) {
    this.elementos = elementos;
  }

  // Remove duplicados e retorna o valor único caso todos sejam iguais
  removeDuplicados(): T | T[] {
    if (
      this.elementos.length > 0 &&
      this.elementos.every(e => e === this.elementos)
    ) {
      return this.elementos;
    }
    // Senão, retorna array de únicos
    return Array.from(new Set(this.elementos));
  }
}


    // Todos iguais
    const todosIguais = new ArraySimples<number>([2,2,2,2]);
    console.log(todosIguais.removeDuplicados()); // 2

    // Todos diferentes
    const diferentes = new ArraySimples<number>([1,2,3,4]);
    console.log(diferentes.removeDuplicados()); // [1,2,3,4]

    // Vazios
    const vazio = new ArraySimples<number>([]);
    console.log(vazio.removeDuplicados()); // []

    // Mistos e repetidos
    const mistos = new ArraySimples<any>([1, 'a', 'a', true, 1, false, true]);
    console.log(mistos.removeDuplicados()); // [1, 'a', true, false]

    const frutas = new ArraySimples<string>(["maçã", "banana", "maçã", "laranja"]);
    console.log(frutas.removeDuplicados());
    

    
