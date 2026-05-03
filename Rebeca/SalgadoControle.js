let listaSalgado = []; 
let oQueEstaFazendo = ''; 
let salgado = null; 
bloquearAtributos(true);

function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaSalgado.length; i++) {
        const salgado = listaSalgado[i];
        if (salgado.id == chave) {
      salgado.posicaoNaLista = i;
        return listaSalgado[i];
        } 
    }
return null;
}

function procure() {
   const id= document.getElementById("inputId").value;
   if (isNaN(id) || !Number.isInteger(Number(id))) {
       mostrarAviso("Precisa ser um número inteiro");
       document.getElementById("inputId").focus();
       return;
   }

   if (id) { 
      salgado = procurePorChavePrimaria(id);
       if (salgado) { 
            mostrarDadosSalgado(salgado); 
             visibilidadeDosBotoes('inline', 'none', 'inline', 'inline', 'none');  
             mostrarAviso("Achou na lista, pode alterar ou excluir"); 
       } else {  
            limparAtributos();
            visibilidadeDosBotoes('inline', 'inline', 'none', 'none', 'none');
            mostrarAviso("Não achou na lista, pode inserir");
       } 
   } else {
       document.getElementById("inputId").focus(); 
       return;
   }
}

function inserir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');  
    oQueEstaFazendo = 'inserindo'; 
    mostrarAviso("INSERINDO - Digite os atributos e clic o botão salvar");
    document.getElementById("inputId").focus();
}

function alterar() { 
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline');
    oQueEstaFazendo = 'alterando';
    mostrarAviso("ALTERANDO - Digite os atributos e clic o botão salvar");
}

function excluir() {
    bloquearAtributos(false);
    visibilidadeDosBotoes('none', 'none', 'none', 'none', 'inline'); 
    oQueEstaFazendo = 'excluindo';
    mostrarAviso("EXCLUINDO - clic o botão salvar para confirmar a exclusão");
}

function salvar() {

    let id;
    if (salgado == null) {
       id = parseInt(document.getElementById("inputId").value);
    } else {
       id = salgado.id;
}

 
    const nome= document.getElementById("inputNome").value;
    if(nome==""){
        mostrarAviso("O nome não pode ficar vazio");
        document.getElementById("inputNome").focus();
        return;
    }
    const categoria= document.getElementById("inputCategoria").value;
 
    const peso_unitario_medio= document.getElementById("inputPeso").value;
    if(peso_unitario_medio<0){
        mostrarAviso("O peso não pode ser negativo");
        document.getElementById("inputPeso").focus();
        return;
    }
    const preco_unitario= document.getElementById("inputPreco").value;
    if(preco_unitario<0){
        mostrarAviso("O preço não pode ser negativo");
        document.getElementById("inputPreco").focus();
        return;
    }
    const quantidade_estoque= document.getElementById("inputQuantidade").value;
 
    const desde_quando_e_fabricado= document.getElementById("inputData").value;
    let hoje = new Date();
    let dataInformada = new Date(desde_quando_e_fabricado);
    if(dataInformada > hoje){
        mostrarAviso("A data informada não pode ser superior a data atual");
        document.getElementById("inputData").focus();
        return;
    }
    const aceitaEncomenda= document.getElementById("inputAceitaEncomenda").checked;
    if(id && nome && categoria && peso_unitario_medio && preco_unitario && quantidade_estoque && desde_quando_e_fabricado) {
       switch (oQueEstaFazendo) {
           case 'inserindo':
              salgado = new Salgado(id, nome, categoria, peso_unitario_medio, preco_unitario, quantidade_estoque, desde_quando_e_fabricado, aceitaEncomenda);
              listaSalgado.push(salgado);
               mostrarAviso("Inserido na lista")
               break;
           case 'alterando':
              salgadoAlterado = new Salgado(id, nome, categoria, peso_unitario_medio, preco_unitario, quantidade_estoque, desde_quando_e_fabricado, aceitaEncomenda);
              listaSalgado[salgado.posicaoNaLista] = salgadoAlterado;
               mostrarAviso("Alterado");
               break;
           case 'excluindo':
               let novalista = [];
               for (let i = 0; i<listaSalgado.length; i++) {
                   if (salgado.posicaoNaLista!= i) {
                       novalista.push(listaSalgado[i]);
                   }
               }
              listaSalgado = novalista;
               mostrarAviso("EXCLUIDO");
               break;
           default:
               mostrarAviso("Erro aleatório")
       }       visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
       limparAtributos();
       listar();
       document.getElementById("inputId").focus();
   } else {
       alert("Erro nos dados digitados");
       return;
   }
}
function preparaListagem(vetor) {
    let texto = "";
    for (let i = 0; i < vetor.length; i++) {
        const linha = vetor[i];
        texto+= 
           linha.id + " - " + 
linha.nome + " - " + 
linha.categoria + " - " + 
linha.peso_unitario_medio + " - " + 
linha.preco_unitario + " - " + 
linha.quantidade_estoque + " - " + 
linha.desde_quando_e_fabricado + " - " + 
linha.aceitaEncomenda +  
"<br>";
    }
    return texto;
}
function listar() {
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaSalgado);
}
function cancelarOperacao() {
    limparAtributos();
    bloquearAtributos(true);
    visibilidadeDosBotoes('inline', 'none', 'none', 'none', 'none');
    mostrarAviso("Cancelou a operação de edição");
}
function mostrarAviso(mensagem) {
    document.getElementById("divAviso").innerHTML = mensagem;
}
function mostrarDadosSalgado(salgado) {
    
document.getElementById("inputId").value=salgado.id 
document.getElementById("inputNome").value=salgado.nome 
document.getElementById("inputCategoria").value=salgado.categoria 
document.getElementById("inputPeso").value=salgado.peso_unitario_medio 
document.getElementById("inputPreco").value=salgado.preco_unitario 
document.getElementById("inputQuantidade").value=salgado.quantidade_estoque 
document.getElementById("inputData").value=salgado.desde_quando_e_fabricado 
document.getElementById("inputAceitaEncomenda").checked=salgado.aceitaEncomenda

    bloquearAtributos(true);
}
function limparAtributos(){
 
     document.getElementById("inputNome").value="" 
     document.getElementById("inputCategoria").value="" 
     document.getElementById("inputPeso").value="" 
     document.getElementById("inputPreco").value="" 
     document.getElementById("inputQuantidade").value="" 
     document.getElementById("inputData").value="" 
     document.getElementById("inputAceitaEncomenda").checked=false

    bloquearAtributos(true);
}function bloquearAtributos(soLeitura) {
 
document.getElementById("inputId").readOnly=!soLeitura 
     document.getElementById("inputNome").readOnly=soLeitura 
     document.getElementById("inputCategoria").readOnly=soLeitura 
     document.getElementById("inputPeso").readOnly=soLeitura 
     document.getElementById("inputPreco").readOnly=soLeitura 
     document.getElementById("inputQuantidade").readOnly=soLeitura 
     document.getElementById("inputData").readOnly=soLeitura 
     document.getElementById("inputAceitaEncomenda").readOnly=soLeitura
}
function visibilidadeDosBotoes(btProcure, btInserir, btAlterar, btExcluir, btSalvar) {
    document.getElementById("btProcure").style.display = btProcure;
    document.getElementById("btInserir").style.display = btInserir;
    document.getElementById("btAlterar").style.display = btAlterar;
    document.getElementById("btExcluir").style.display = btExcluir;
    document.getElementById("btSalvar").style.display = btSalvar;
    document.getElementById("btCancelar").style.display = btSalvar;
    document.getElementById("inputId").focus();
}

function localizarPeloNome(){
    let nomeInf = document.getElementById("inputNomeInf").value;
    let listaNome = [];
    for(let i = 0; i<listaSalgado.length; i++){
        let s = listaSalgado[i];
        if(nomeInf == s.nome){
            listaNome.push(s);
        }
    }
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaNome);
}

function filtrarPorCategoria(){
    let categoriaInf = document.getElementById("inputCategoriaInf").value;
    let listaCategoria =[];
    for(let i=0; i<listaSalgado.length; i++){
        let s = listaSalgado[i];
        if(categoriaInf == s.categoria){
            listaCategoria.push(s);
        }
    }
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaCategoria);
}

function listarPorFaixaDePreco(){
    let p1 = document.getElementById("inputPreco1").value;
    let p2 = document.getElementById("inputPreco2").value;
    let listaPreco = [];
    for(let i = 0; i<listaSalgado.length; i++){
        let s = listaSalgado[i];
        if(s.preco_unitario>p1 && s.preco_unitario<p2){
            listaPreco.push(s);
        }
    }
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaPreco);
}
function persistirEmLocalPermanente(arquivoDestino, conteudo) {
    const blob = new Blob([conteudo], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = arquivoDestino;
    link.click();
    URL.revokeObjectURL(link.href);
}

function abrirArquivoSalvoEmLocalPermanente() {

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = function (event) {
        const arquivo = event.target.files[0];
        console.log(arquivo.name);
        if (arquivo) {
           converterDeCSVparaListaObjeto(arquivo);
        }
   }
   input.click();
}

function prepararESalvarCSV() {
    let nomeDoArquivoDestino = "./Salgado.csv;"
    let textoCSV = "";
    for (let i = 0; i <listaSalgado.length; i++) {
        const linha = listaSalgado[i];
        textoCSV +=linha.id + ";"+linha.nome + ";"+linha.categoria + ";"+linha.peso_unitario_medio + ";"+linha.preco_unitario + ";"+linha.quantidade_estoque + ";"+linha.desde_quando_e_fabricado + ";"+linha.aceitaEncomenda + ";"+ "\n"
    }
persistirEmLocalPermanente(nomeDoArquivoDestino, textoCSV);
}
function converterDeCSVparaListaObjeto(arquivo) {
    const leitor = new FileReader();
    leitor.onload = function (e) {
          const conteudo = e.target.result;
          const linhas = conteudo.split('\n');
          listaSalgado = [];
          for (let i = 0; i < linhas.length; i++) {
              const linha = linhas[i].trim();
              if (linha) {
                  const dados = linha.split(';');
                  if (dados.length ===8) {
                     listaSalgado.push({
                                  id:dados[0],
                                  nome:dados[1],
                                  categoria:dados[2],
                                  peso_unitario_medio:dados[3],
                                  preco_unitario:dados[4],
                                  quantidade_estoque:dados[5],
                                  desde_quando_e_fabricado:dados[6],
                                  aceitaEncomenda:dados[7],
});
                      }
                  }
              }
              listar();
           };
           leitor.readAsText(arquivo);
}