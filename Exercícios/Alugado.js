class Alugado {
    constructor(numeroContrato, nomePropretario, nomeInquilino, valorAluguel, prazoDoContrato, estaAlugado, cepImovel, enderecoImovel, bairro, cidade, posicaoNaLista) {
        this.numeroContrato = numeroContrato;
        this.nomePropretario = nomePropretario;
        this.nomeInquilino = nomeInquilino;
        this.valorAluguel = valorAluguel;
        this.prazoDoContrato = prazoDoContrato;
        this.estaAlugado = estaAlugado;
        this.cepImovel = cepImovel;
        this.enderecoImovel = enderecoImovel;
        this.bairro = bairro;
        this.cidade = cidade;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}