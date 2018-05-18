function sacarValor() {
    var inValor = document.getElementById("inValor");
    var outNotas = document.getElementById("outNotas");
    var outMoedas = document.getElementById("outMoedas");

    var valor = Number(inValor.value);

    if (valor == 0 || isNaN(valor)) {
        alert("Por favor digite um valor válido");
        inValor.focus();
        return;
    }

    var notas = Math.floor(valor / 10);
    var moedas = valor % 10;
    outNotas.textContent = "Notas de R$ 10: " + notas;
    outMoedas.textContent = "moedas R$ " + moedas.toFixed(2);

    //se valor em branco (na conversão, fica 0)
    //(|| ou) NaH (not a Number)



}



var btSacar = document.getElementById("btSacar");
btSacar.addEventListener("click", sacarValor);