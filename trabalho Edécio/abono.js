function CalcularAbono() {

    var inSalario = document.getElementById("inSalario");
    var inTempo = document.getElementById("inTempo");
    var outResult1 = document.getElementById("outResult1");
    var outResult2 = document.getElementById("outResult2");

    var salario = Number(inSalario.value);
    var tempo = Number(inTempo.value);

    if (salario == 0 || isNaN(salario)) {
        alert("Por favor digite um valor válido");
        inSalario.focus();
        return;
    }

    var abono = Math.floor(tempo / 2);
    var vezes = salario * abono;
    var salarioabonado = vezes / 100;
    var salariofinal = salarioabonado + salario;

    outResult1.textContent = "Abono: " + abono + "%";

    outResult2.textContent = "Salário final: " + salariofinal.toFixed(2);





}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", CalcularAbono);