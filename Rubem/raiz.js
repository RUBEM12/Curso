function Raiz() {
    var inRaiz = document.getElementById("inRaiz");
    var outValor = document.getElementById("outValor");
    var num = Number(inRaiz.value);
    var raiz = Math.sqrt(num);

    if (raiz == Math.floor(raiz)) {

        outValor.textContent = "A raiz é: " + raiz;
    } else {

        outValor.textContent = "Não existe raiz exata";
    }




}

var btRaiz = document.getElementById("btRaiz");
btRaiz.addEventListener("click", Raiz);