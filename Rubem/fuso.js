function CalcularHora() {

    var inHora = document.getElementById("inHora");
    var outResult = document.getElementById("outResult");
    var hora = Number(inHora.value);
    var franca = hora + 5;


if (franca > 24) {
   franca = franca - 24;
}
outResult.textContent="Hora na França: " + franca.toFixed(2);

}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", CalcularHora);