var divCompras = document.getElementById("divCompras");
var inProduto = document.getElementById("inProduto");

function adicionarProduto() {



    var produto = inProduto.value;

    if (produto == "") {
        alert("Informe um produto a ser inserido")
    }




    var h5 = document.createElement("h5");
    var texto = document.createTextNode(produto);
    h5.appendChild(texto);
    divCompras.appendChild(h5);

    inProduto.value = "";
    inProduto.focus();

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProduto);


function selecionarProduto() {

    var h5 = document.getElementsByTagName("h5");

    if (h5.length == 0) {
        alert("Não há produtos para selecionar");
        return;
    }

    var aux = -1;

    for (var i = 0; i < h5.length; i++) {
        if (h5[i].className == "h5Destaque") {
            aux = i;
            h5[i].className = "h5Normal";
            break
        }
    }

    if (aux == h5.length - 1) {
        aux = -1;
    }


    h5[aux + 1].className = "h5Destaque";


}
var btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarProduto);

function excluirProduto() {

    var h5 = document.getElementsByTagName("h5");

    var aux = -1;

    for (var i = 0; i < h5.length; i++) {
        if (h5[i].className == "h5Destaque") {
            aux = i;
            break;
        }
    }

    if (aux == -1) {
        alert('Selecione o produto a ser excluido.');
        return;
    }

    if (confirm("Confirma a exclusão de " + h5[aux].textContent + "?")) {
        divCompras.removeChild(h5[aux]);
    }


}
var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", excluirProduto);
var lista = "";

function Gravar() {


    var h5 = document.getElementsByTagName("h5");

    for (var i = 0; i < h5.length; i++) {
        lista = lista + h5[i].textContent + ";";
    }

    localStorage.setItem("Compras", lista.substr(0, lista.length - 1));

}
window.addEventListener("unload", Gravar);

function recuperarDados() {

    if (localStorage.getItem("Compras")) {
        var dados = localStorage.getItem("Compras").split(";");


        for (var i = 0; i < dados.length; i++) {

            var h5 = document.createElement("h5");
            var texto = document.createTextNode(dados[i]);
            h5.appendChild(texto);
            divCompras.appendChild(h5);
        }
    }
}
window.addEventListener("load", recuperarDados);

function validar() {

    for (var i = 0; i < lista[9]; i++) {

        if (produto == lista[i]) {
            alert("O produto já está na lista. ");
        }
    }



}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", validar);