function CalcularNotas() {

    var inValor = document.getElementById("inValor");
    var outResult1 = document.getElementById("outResult1");
    var outResult2 = document.getElementById("outResult2");

    var valor = Number(inValor.value);

    var calculo = Math.floor(valor / 60);
    var resto = Math.floor(valor % 60);

    if (valor == 0 || isNaN(valor)) {
        alert("Por favor digite um valor válido");
        inValor.focus();
        return;
    }

    if (resto > 0) {
        outResult1.textContent = calculo + " notas fiscais de 60 un";
        outResult2.textContent = "1 nota de " + resto + " un";
    }else if (resto == 0){
        outResult1.textContent = calculo + " notas fiscais de 60 un";
    }else if (calculo == 0){
        outResult2.textContent = "1 nota de " + resto + " un";
    }





}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", CalcularNotas);