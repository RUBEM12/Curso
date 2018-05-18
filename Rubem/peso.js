function calcularPeso() {
    var inNome = document.getElementById("inNome");
    var rbMasc = document.getElementById("rbMasc");
    var rbFem = document.getElementById("rbFem");
    var inAltura = document.getElementById("inAltura");
    var outPeso = document.getElementById("outPeso");
    var nome = inNome.value;
    var masc = rbMasc.checked;
    var fem = rbFem.checked;
    var altura = Number(inAltura.value);


    if (masc) {

        var peso = 22 * Math.pow(altura, 2);

    } else {

        var peso = 21 * Math.pow(altura, 2);
    }
    outPeso.textContent = nome + " ,seu peso ideal é: " + peso.toFixed(3);









}
var btCalcularpeso = document.getElementById("btCalcularpeso");
btCalcularpeso.addEventListener("click", calcularPeso);