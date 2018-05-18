function ano() {
        var inIdade = document.getElementById("inIdade");
        var inNome = document.getElementById("inNome");
        var outDados = document.getElementById("outDados");
        var idade = Number(inIdade.value);
        var nome = (inNome.value);
        var ano = 2018 - idade; 
        outDados.textContent="O ano em que " + nome + " nasceu é : " + ano;


}

var btCalcular=document.getElementById("btCalcular");
btCalcular.addEventListener("click",ano);


