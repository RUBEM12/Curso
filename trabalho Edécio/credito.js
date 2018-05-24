function Verificar() {

    var inNome = document.getElementById("inNome");
    var inAno = document.getElementById("inAno");
    var outResult1 = document.getElementById("outResult1");
    var outResult2 = document.getElementById("outResult2");

    var nome = inNome.value;
    var ano = Number(inAno.value);

    if (ano == 0 || isNaN(ano)) {
        alert("Por favor digite um valor válido");
        inNome.focus();
        return;
    }

    var data = 2018 - ano;

    outResult1.textContent = nome + " - " + data + " anos.";

    if (data < 18 || data > 50) {
        outResult2.textContent = "Você não pode obter crédito empresarial.";
    } else {
        outResult2.textContent = "Você pode obter crédito empresarial.";
    }

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", Verificar);