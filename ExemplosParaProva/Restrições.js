
const nome= document.getElementById("inputNome").value; 
let n = nome.split(" "); 
if(n.length < 2){ 
mostrarAviso("Deve ter no mínimo 2 nomes"); 
document.getElementById("inputNome").focus(); 
return; 
}

let dataInformada = new Date(data); 
if(dataInformada > hoje){ 
mostrarAviso("A data não pode ser maior que a atual"); 
document.getElementById("inputData").focus(); 
return; 
} 

function localizarNome(){ 
let locnome = document.getElementById("locnome").value; 
let resposta = ""; 
for(let i=0; i<listaMotorista.length; i++){ 
let motorista = listaMotorista[i]; 
if(locnome == motorista.nome){ 
resposta += motorista.id + " - " + motorista.nome + " - " +  
motorista.especialidade + " - " + motorista.tempo + " - " +  
motorista.data + " - " + motorista.habilitado + "<br>" ; 
} 
} 
document.getElementById("outputSaida").innerHTML = resposta; 
}

function Filtrar(){ 
let especi = document.getElementById("especialidade").value; 
let listaEspecialidade = []; 
for(let i = 0; i < listaMotorista.length; i ++){ 
let motorista = listaMotorista[i]; 
if(especi == motorista.especialidade){ 
listaEspecialidade.push(motorista) 
} 
} 
document.getElementById("outputSaida").innerHTML = preparaListagem(listaEspecialidade); 
}

function listarExperiencia(){ 
let expe = document.getElementById("experiencia").value; 
let listaExperiencia = []; 
for(let i = 0; i < listaMotorista.length; i ++){ 
let motorista = listaMotorista[i]; 
if(expe == motorista.tempo){ 
listaExperiencia.push(motorista) 
} 
} 
document.getElementById("outputSaida").innerHTML = preparaListagem(listaExperiencia); 
} 

