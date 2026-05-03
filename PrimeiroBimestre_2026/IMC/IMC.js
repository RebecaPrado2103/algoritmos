function CalcularIMC(){
    let p = parseFloat(document.getElementById("inputPeso").value);
    let a = parseFloat(document.getElementById("inputAltura").value);

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    if(isNaN(p)|| isNaN(a)){
        footer.classList.add("erro");
        mensagem.innerHTML = "Os espaços precisam ser preenchidos com números";
        imc = "-";
        classific = "-";
    }else if(p <= 0 || a <= 0){
        footer.classList.add("erro");
        mensagem.innerHTML = "Os valores precisam ser maiores que 0";
        imc = "-";
        classific = "-";
    }else{
        footer.classList.remove("erro");
        mensagem.innerHTML = "Calculo realizado com sucesso";
    }

    let imc = p/(a*a);
    let i = imc.toFixed(2);
    let classific = "";

    if(imc<18.5){
        classific = "Abaixo do peso";
    }else if(imc<=24.9){
        classific = "Peso normal";
    }else if(imc<=29.9){
        classific = "Sobrepeso";
    }else if(imc<=34.9){
        classific = "Obesidade grau I";
    }else if(imc<=39.9){
        classific = "Obesidade grau II";
    }else if(imc>=40){
        classific = "Obesidade grau III";
    }

    document.getElementById("respIMC").innerHTML = i;
    document.getElementById("respClassific").innerHTML = classific;
}