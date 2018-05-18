function CalcularVoto() {

    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");
    var outResposta = document.getElementById("outResposta");
    var nome = inNome.value;
    var idade = Number(inIdade.value);

    if (nome == "" || idade == 0 || isNaN(idade)) {
        alert("Informe corretamente os dados");
        inNome.focus();
        return;
    }
    if (idade < 16) {
        outResposta.textContent = nome + " Você não pode votar!";
    } else
    if (idade == 16 || idade == 17 || idade > 65) {
        outResposta.textContent = nome + " Você pode Votar! ";
    } else {
        outResposta.textContent = nome + " você deve votar!";
    }

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", CalcularVoto);


function LimparCampos() {

    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");
    var outResposta = document.getElementById("outResposta");

    inNome.value = "";
    inIdade.value = "";
    outResposta.textContent = "";

    inNome.focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", LimparCampos);