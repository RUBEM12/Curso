function CalcularMédia(){
 var inNome = document.getElementById("inNome")
 var inNota1 = document.getElementById("inNota1")
 var inNota2 = document.getElementById("inNota2")
 var outMédia = document.getElementById("outMédia")
 var outSituacao = document.getElementById("outSituacao")


 var nome = inNome.value;
 var nota1 = Number(inNota1.value);
 var nota2 = Number(inNota2.value);

 var media = (nota1 + nota2) / 2;

 outMédia.textcontent="Média: " +media.toFixed(1);

 if (media >= 7) {
  outSituacao.textContent = "Parabéns " + nome + " Você foi aprovado sua média foi " + media;
  outSituacao.style.color = "green"

 }else{
     outSituacao.textContent = "Ops " + nome + " Você foi reprovado sua média foi " + media;
     outSituacao.style.color = "red"
 }
}

var btCalcular=document.getElementById("btCalcular");
btCalcular.addEventListener("click",CalcularMédia);

function LimparDados(){
 var inNome = document.getElementById("inNome")
 var inNota1 = document.getElementById("inNota1")
 var inNota2 = document.getElementById("inNota2")
 var outMédia = document.getElementById("outMédia")
 var outSituacao = document.getElementById("outSituacao")

 inNome.value="";
 inNota1.value="";
 inNota2.value="";
 outMédia.textContent=""
 outSituacao.textContent=""
 
}

var btLimpar=document.getElementById("btLimpar");
btLimpar.addEventListener("click",LimparDados);
