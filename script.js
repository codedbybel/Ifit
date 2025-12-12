function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultadoIMC");

    if (!peso || peso <= 0) {
        resultado.innerText = "❌ Informe um peso válido!";
        return;
    }

    if (!altura || altura <= 0) {
        resultado.innerText = "❌ Informe uma altura válida!";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>${classificacao}`;
}
