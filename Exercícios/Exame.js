class Exame {
    constructor(id, nome_exame, tipo, data_validade, custo, tempo, nome_laboratorio, posicaoNaLista) {
        this.id = id;
        this.nome_exame = nome_exame;
        this.tipo = tipo;
        this.data_validade = data_validade;
        this.custo = custo;
        this.tempo = tempo;
        this.nome_laboratorio = nome_laboratorio;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}