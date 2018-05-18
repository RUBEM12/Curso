function Verificar() {
    var inNúmero = document.getElementById("inNúmero");
    var outResp = document.getElementById("outResp");


    var num = Number(inNúmero.value);
    if (num % 2 == 0) {
        outResp.textContent = "O número é par ";
    } else {
        outResp.textContent = "o número é impar ";
    }


}

var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", Verificar);

