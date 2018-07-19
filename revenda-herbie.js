var tbCarros = document.getElementById("tbCarros");
var num = 0;

function adicionarVeiculo() {

    var inModelo = document.getElementById("inModelo");
    var inAno = document.getElementById("inAno");
    var inPreco = document.getElementById("inPreco");

    var modelo = inModelo.value;
    var ano = Number(inAno.value);
    var preco = Number(inPreco.value);

    if (modelo == "" || ano == "" || ano < 1940 || ano > 2020 || preco < 2000) {
        alert("Informe corretamente os dados");
        inModelo.focus();
        return;
    }

    inserirLinha(modelo, ano, preco);

    inModelo.value = "";
    inAno.value = "";
    inPreco.value = "";
    inModelo.focus();

    salvarCarros(modelo, ano, preco);


}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarVeiculo);

function inserirLinha(modelo, ano, preco) {

    var linha = tbCarros.insertRow(-1);
    num++



    var col1 = linha.insertCell(0);
    var col2 = linha.insertCell(1);
    var col3 = linha.insertCell(2);
    var col4 = linha.insertCell(3);

    col1.textContent = num;
    col2.textContent = modelo;
    col3.textContent = ano;
    col4.textContent = preco;


}

function salvarCarros(modelo, ano, preco) {

    if (localStorage.getItem("CarrosModelo")) {
        var CarrosNum = localStorage.getItem("CarrosNum") + " ; " + num;
        var CarrosModelo = localStorage.getItem("CarrosModelo") + " ; " + modelo;
        var CarrosAno = localStorage.getItem("CarrosAno") + " ; " + ano;
        var CarrosPreco = localStorage.getItem("CarrosPreco") + " ; " + preco;

        localStorage.setItem("CarrosNum", CarrosNum);
        localStorage.setItem("CarrosModelo", CarrosModelo);
        localStorage.setItem("CarrosAno", CarrosAno);
        localStorage.setItem("CarrosPreco", CarrosPreco);

    } else {
        localStorage.setItem('CarrosNum', num);
        localStorage.setItem("CarrosModelo", modelo);
        localStorage.setItem("CarrosAno", ano);
        localStorage.setItem("CarrosPreco", preco);

    }
}

function mostrarCarros() {

    if (localStorage.getItem("CarrosModelo")) {
        var num = localStorage.getItem("CarrosNum").split(';');
        var modelos = localStorage.getItem("CarrosModelo").split(";");
        var anos = localStorage.getItem("CarrosAno").split(";");
        var precos = localStorage.getItem("CarrosPreco").split(";");

        for (var i = 0; i < modelos.length; i++) {
            inserirLinha(modelos[i], anos[i], precos[i]);
        }
    }
}
window.addEventListener("load", mostrarCarros);

function excluir() {

    var excluirNum = Number(prompt("Qual Nº excluir"));
    var CarrosNum = localStorage.getItem("CarrosNum");
    var CarrosModelo = localStorage.getItem("CarrosModelo");
    var CarrosAno = localStorage.getItem("CarrosAno");
    var CarrosPreco = localStorage.getItem("CarrosPreco");


    CarrosModelo.splice(1, 1);

    console.log("test");

}
var btExcluir = document.getElementById('btExcluir');
btExcluir.addEventListener("click", excluir);

function filtrar() {


    var preco = localStorage.getItem("CarrosPreco");
    var maximo = Number(prompt("Qual o valor Maximo"));
    var test = [];
    console.log(preco);



    if (preco <= maximo) {
        console.log("test")
    }

}
var btFiltrar = document.getElementById('btFiltrar');
btFiltrar.addEventListener("click", filtrar);