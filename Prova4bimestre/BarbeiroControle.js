let listaBarbeiro = []; 
let oQueEstaFazendo = ''; 
let barbeiro = null; 
bloquearAtributos(true);

function procurePorChavePrimaria(chave) {
    for (let i = 0; i < listaBarbeiro.length; i++) {
        const barbeiro = listaBarbeiro[i];
        if (barbeiro.id == chave) {
      barbeiro.posicaoNaLista = i;
        return listaBarbeiro[i];
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
      barbeiro = procurePorChavePrimaria(id);
       if (barbeiro) { 
            mostrarDadosBarbeiro(barbeiro); 
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
    if (barbeiro == null) {
       id = parseInt(document.getElementById("inputId").value);
    } else {
       id = barbeiro.id;
}

 
    const nome= document.getElementById("inputNome").value;

    const especialidade= document.getElementById("inputEspecialidade").value;
 
    const tempo_experiencia= parseInt(document.getElementById("inputTempo").value);

    const nivel= document.getElementById("inputNivel").value;
 
    const atuando= document.getElementById("inputAtuando").checked;
 
    const data_admissao= document.getElementById("inputDataAdmissao").value;
    if(id && nome && especialidade && tempo_experiencia && nivel && data_admissao ) {
       switch (oQueEstaFazendo) {
           case 'inserindo':
              barbeiro = new Barbeiro(id, nome, especialidade, tempo_experiencia, nivel, atuando, data_admissao);
              listaBarbeiro.push(barbeiro);
               mostrarAviso("Inserido na lista")
               break;
           case 'alterando':
              barbeiroAlterado = new Barbeiro(id, nome, especialidade, tempo_experiencia, nivel, atuando, data_admissao);
              listaBarbeiro[barbeiro.posicaoNaLista] = barbeiroAlterado;
               mostrarAviso("Alterado");
               break;
           case 'excluindo':
               let novalista = [];
               for (let i = 0; i<listaBarbeiro.length; i++) {
                   if (barbeiro.posicaoNaLista!= i) {
                       novalista.push(listaBarbeiro[i]);
                   }
               }
              listaBarbeiro = novalista;
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
linha.especialidade + " - " + 
linha.tempo_experiencia + " - " + 
linha.nivel + " - " + 
linha.atuando + " - " + 
linha.data_admissao +
"<br>";
    }
    return texto;
}
function listar() {
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaBarbeiro);
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
function mostrarDadosBarbeiro(barbeiro) {
    
document.getElementById("inputId").value=barbeiro.id 
document.getElementById("inputNome").value=barbeiro.nome 
document.getElementById("inputEspecialidade").value=barbeiro.especialidade 
document.getElementById("inputTempo").value=barbeiro.tempo_experiencia 
document.getElementById("inputNivel").value=barbeiro.nivel 
document.getElementById("inputAtuando").checked=barbeiro.atuando 
document.getElementById("inputDataAdmissao").value=barbeiro.data_admissao

    bloquearAtributos(true);
}
function limparAtributos(){
 
     document.getElementById("inputNome").value="" 
     document.getElementById("inputEspecialidade").value="" 
     document.getElementById("inputTempo").value="" 
     document.getElementById("inputNivel").value="" 
     document.getElementById("inputAtuando").checked=false 
     document.getElementById("inputDataAdmissao").value=""

    bloquearAtributos(true);
}
function bloquearAtributos(soLeitura) {
     document.getElementById("inputId").readOnly=!soLeitura 
     document.getElementById("inputNome").readOnly=soLeitura 
     document.getElementById("inputEspecialidade").readOnly=soLeitura 
     document.getElementById("inputTempo").readOnly=soLeitura 
     document.getElementById("inputNivel").readOnly=soLeitura 
     document.getElementById("inputAtuando").readOnly=soLeitura 
     document.getElementById("inputDataAdmissao").readOnly=soLeitura
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
    let nomeEscolhido = document.getElementById("inputNomeEsclohido").value;
    let listaNome = [];
    for(let i=0; i<listaBarbeiro.length; i++){
        let n = listaBarbeiro[i];
        if(n.nome = nomeEscolhido){
            listaNome.push(n)
        }
    }
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaNome);    
}

function filtrarPorEspecialidade(){
    let especiEscolhida = document.getElementById("inputEspeciEscolhida").value;
    let listaEspecialidade = [];
    for(let i=0; i<listaBarbeiro.length; i++){
        let e = listaBarbeiro[i];
        if(e.especialidade = especiEscolhida){
            listaEspecialidade.push(e)
        }
    }
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaEspecialidade);
}

function filtrarPorFaixa(){
    let f1 = parseInt(document.getElementById("inputFaixaMin").value);
    let f2 = parseInt(document.getElementById("inputFaixaMax").value);
    let listaFaixa = [];
    for(let i=0; i<listaBarbeiro.length; i++){
        let f = listaBarbeiro[i];
        if(f.tempo_experiencia>=f1||f.tempo_experiencia<=f2){
            listaFaixa.push(f)
        }
    }
    document.getElementById("outputSaida").innerHTML = preparaListagem(listaFaixa);
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
    let nomeDoArquivoDestino = "./Barbeiro.csv;"
    let textoCSV = "";
    for (let i = 0; i <listaBarbeiro.length; i++) {
        const linha = listaBarbeiro[i];
        textoCSV +=linha.id + ";"+linha.nome + ";"+linha.especialidade + ";"+linha.tempo_experiencia + ";"+linha.nivel + ";"+linha.atuando + ";"+linha.data_admissao + ";"+"\n"
    }
persistirEmLocalPermanente(nomeDoArquivoDestino, textoCSV);
}
function converterDeCSVparaListaObjeto(arquivo) {
    const leitor = new FileReader();
    leitor.onload = function (e) {
          const conteudo = e.target.result;
          const linhas = conteudo.split('\n');
          listaBarbeiro = [];
          for (let i = 0; i < linhas.length; i++) {
              const linha = linhas[i].trim();
              if (linha) {
                  const dados = linha.split(';');
                  if (dados.length ===7) {
                     listaBarbeiro.push({
                                  id:dados[0],
                                  nome:dados[1],
                                  especialidade:dados[2],
                                  tempo_experiencia:dados[3],
                                  nivel:dados[4],
                                  atuando:dados[5],
                                  data_admissao:dados[6],
});
                      }
                  }
              }
              listar();
           };
           leitor.readAsText(arquivo);
}