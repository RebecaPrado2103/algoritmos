function funcaoCalcular() {
    let a = parseFloat(document.getElementById("inputA").value);
    let b = parseFloat(document.getElementById("inputB").value);
    let c = parseFloat(document.getElementById("inputC").value);

    let delta = b ** 2 - 4 * a * c;

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    if (delta < 0) {
        footer.classList.add("erro");
        mensagem.innerHTML = "Delta negativo — impossível calcular";
        document.getElementById("respX1").innerHTML = "-";
        document.getElementById("respX2").innerHTML = "-";
    } else {
        footer.classList.remove("erro");
        mensagem.innerHTML = "Cálculo realizado com sucesso";

        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        document.getElementById("respX1").innerHTML = x1;
        document.getElementById("respX2").innerHTML = x2;
    }
}