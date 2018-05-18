function Rev(){
 var inModelo = document.getElementById("inModelo");
 var inPreço = document.getElementById("inPreço");
 var outRev = document.getElementById("outRev");
 var modelo = (inModelo.value);
 var preco = Number(inPreço.value);
 var ent = preco / 2;
 var par = ent / 12;
 outDados.textContent="A entrada é de R$ " + ent + " e mais 12x de R$ ";

}

var btCalcular=document.getElementById("btCalcular");
btCalcular.addEventListener("click",Rev);
