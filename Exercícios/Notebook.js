class Notebook {
    constructor(id, modelo, dataLancamento, fabricante, quantidadeDeRAM, fabricanteDoProcessador, armazenamentoPermanente, posicaoNaLista) {
        this.id = id;
        this.modelo = modelo;
        this.dataLancamento = dataLancamento;
        this.fabricante = fabricante;
        this.quantidadeDeRAM = quantidadeDeRAM;
        this.fabricanteDoProcessador = fabricanteDoProcessador;
        this.armazenamentoPermanente = armazenamentoPermanente;


        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}