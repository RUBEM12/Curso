function Calcular() {
    var inCasa = document.getElementById("inCasa");
    var inVisitantes = document.getElementById("inVisitantes");
    var outResultado = document.getElementById("outResultado");
    var outResultado2 = document.getElementById("outResultado2");
    var casa = Number(inCasa.value);
    var visitantes = Number(inVisitantes.value);

    if (casa > visitantes) {
        outResultado.textContent = "Vitória do time da casa!!!";
    } else if (casa < visitantes) {
        outResultado.textContent = "Vitória do time Visitante!!!";
    } else if (casa == visitantes) {
        outResultado.textContent = "Empate!!!";
    }
    if (casa - visitantes == 3 || casa - visitantes > 3) {
        outResultado2.textContent = "foi uma goleada!!!";
    } else if (visitantes - casa == 3 || visitantes - casa > 3) {
        outResultado2.textContent = "Foi uma goleada!!!";
    }


}

var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", Calcular);

function LimparCampos() {

    var inCasa = document.getElementById("inCasa");
    var inVisitantes = document.getElementById("inVisitantes");
    var outResultado = document.getElementById("outResultado");
    var outResultado2 = document.getElementById("outResultado2");

    inCasa.value = "";
    inVisitantes.value = "";
    outResultado.textContent = "";
    outResultado2.textContent = "";

    inCasa.focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", LimparCampos);