 function dobrarNum() {
 var inNumero = document.getElementById("inNumero");
 var outDobro = document.getElementById("outDobro");
 var numero = Number(inNumero.value);
 var dobro = numero * 2;
 outDobro.textContent="Dobro é: " + dobro;


}

 var btCalcular=document.getElementById("btCalcular");
 btCalcular.addEventListener("click",dobrarNum);


