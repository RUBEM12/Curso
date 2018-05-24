function VerTroco() {

    var inValor = document.getElementById("inValor");
    var inPago = document.getElementById("inPago");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);
    var pago = Number(inPago.value);

    if (valor == 0 || isNaN(valor)) {
        alert("Por favor digite um valor válido");
        inValor.focus();
        return;
    }
    
    var troco = pago - valor;

    if (valor < pago) {
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    } else if (valor == pago){
        outTroco.textContent = "Obrigado, volte sempre! ";
    }else if (valor > pago){
        var faltou = Math.abs(troco);
        outTroco.textContent = "Ops, faltou R$: " + faltou.toFixed(2);
    }

}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", VerTroco);