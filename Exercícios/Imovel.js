class Imovel {
    constructor(numMatricula, endereco, bairro, tipo, area, comodos, alugado, data, posicaoNaLista) {
        this.numMatricula = numMatricula;
        this.endereco = endereco;
        this.bairro = bairro;
        this.tipo = tipo;
        this.area = area;
        this.comodos = comodos;
        this.alugado = alugado;
        this.data = data;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}