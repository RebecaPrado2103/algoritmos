class Animal {
    constructor(id, especie, nome, idade, peso, posicaoNaLista) {
        this.id = id;
        this.especie = especie;
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}