class Livro {
    constructor(codigo, titulo, autor, anoPublicacao, genero, posicaoNaLista) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}