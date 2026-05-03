class Filme {
    constructor(id, titulo, diretor, dataDeLancamento, avaliacao, posicaoNaLista) {
        this.id = id;
        this.titulo = titulo;
        this.diretor = diretor;
        this.dataDeLancamento = dataDeLancamento;
        this.avaliacao = avaliacao;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}