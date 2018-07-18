var leao = Math.ceil(Math.random() * 10);
var tigre = Math.ceil(Math.random() * 10);
var urso = Math.ceil(Math.random() * 10);
var husky = Math.ceil(Math.random() * 10);

function exibirAnimais() {

    var divAnimais = document.getElementById("animais");

    var altLeao = "Leão";
    var altTigre = "Tigre";
    var altUrso = "Urso";
    var altHusky = "Husky";

    // chama o método criarMoedas passando os argumentos
    criarAnimais(leao, divAnimais, "leao.jpg", altLeao, "leao");
    criarAnimais(tigre, divAnimais, "tigre.jpg", altTigre, "tigre");
    criarAnimais(urso, divAnimais, "urso.jpg", altUrso, "urso");
    criarAnimais(husky, divAnimais, "husky.jpg", altHusky, "husky");
}
exibirAnimais();

function criarAnimais(num, pai, animal, textoAlt, classe) {
    // cria laço de repetição para inserir várias imagens de moedas na página
    for (var i = 1; i <= num; i++) {
        var novoAnimal = document.createElement("img"); // cria elemento img
        novoAnimal.src = "./imagens/" + animal; // atributo src
        novoAnimal.textAlt = textoAlt; // texto alternativo
        novoAnimal.className = classe; // classe da moeda(css)
        pai.appendChild(novoAnimal); // hierarquia DOM
    }
    var br = document.createElement("br"); // cria uma quebra de linha (br)
    pai.appendChild(br);
}

function conferir() {

    var check1 = document.getElementById("check1");
    var check2 = document.getElementById("check2");
    var check3 = document.getElementById("check3");
    var check4 = document.getElementById("check4");
    var result = document.getElementById('result');

    var animais = [];
    var checks = [];

    if (check1.checked == true) {
        checks = checks + 1;
    }

    if (check2.checked == true) {
        checks = checks + 2;
    }

    if (check3.checked == true) {
        checks = checks + 3;
    }

    if (check4.checked == true) {
        checks = checks + 4;
    }

    var divAnimais = document.getElementById("animais");
    var animal = divAnimais.getElementsByTagName("img");
    var test=[];


    for (var i = 0; i < animal.length; i++) {
        if (animal[i].className == "leao") {
            test = test +1;
        } else if (animal[i].className == "tigre") {
            test = test +2;
        } else if (animal[i].className == "urso") {
            test = test +4;
        } else {
            test = test +4;
        }
    }

    



    if (animais == checks) {
        result.textContent = "Você acertou!";
    } else {
        result.textContent = "Você Errou!";
    }




    console.log(checks);
    console.log(animais);


}
var btConferir = document.getElementById("btConferir");
btConferir.addEventListener('click', conferir)


var btNovo = document.getElementById("btNovo");
btNovo.addEventListener("click", function () {
    location.reload();
});