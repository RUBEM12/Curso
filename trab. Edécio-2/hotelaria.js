var check1 = document.getElementById('Check1');
var check2 = document.getElementById('Check2');
var OutCheck = document.getElementById('OutCheck');
var inDiaria = document.getElementById('inDiaria');
var CheckIn = document.querySelector('.CheckIn');
var hotel = [];
var tempo = 0;
var valores = 0;

function adicionarCachorro() {

    var inNome = document.getElementById('inNome');
    var inValor = document.getElementById('inValor');
    var nome = inNome.value;
    var valor = Number(inValor.value);
    var diaria = Number(inDiaria.value);

    if (valor == "" || nome == '' || isNaN(valor)) {
        alert('Insira os Dados Corretamente.')
        inNome.focus();
        return;
    }


    if (check1.checked) {
        tempo = 1;
    }
    if (check2.checked) {
        tempo = diaria;

    }


    mostrarCachorros(nome, valor);


    CheckIn.classList.remove('d-none');

    inNome.value = "";
    inValor.value = "";
    check1.checked = false;
    check2.checked = false;
    inNome.focus();
}
var btAdicionar = document.getElementById('btAdicionar');
btAdicionar.addEventListener('click', adicionarCachorro);

function verificar() {

    if (check2.checked) {
        OutCheck.classList.remove('d-none');
        OutCheck.classList.add('d-block');
    } else if (check1.checked) {
        OutCheck.classList.remove('d-block');
        OutCheck.classList.add('d-none');
    }

}
check1.addEventListener('change', verificar);
check2.addEventListener('change', verificar);

function mostrarCachorros(nome, valor) {
    valores = valores + valor;
    var dados = "";
    var pre = document.getElementById('outResult');
    for (var i = 0; i <= hotel.length; i++){
        dados = dados + nome + ' - R$ ' + valor.toFixed(2);
        
    }
pre.textContent = dados + '\n' + valores;

}

function salvar() {

    if (valores == "" || nome == '') {
        return;
    }

    var nome = inNome.value;
    if (localStorage.getItem("cachorrosNomes")) {
        var cachorrosNomes = localStorage.getItem("cachorrosNomes") + " ; " + nome;
        var cachorrosValor = localStorage.getItem('cachorrosValor') + ';' + valores;
        var cachorrosDiarias = localStorage.getItem('cachorrosDiarias') + ';' + tempo;

        localStorage.setItem("cachorrosNomes", cachorrosNomes);
        localStorage.setItem("cachorrosValor", cachorrosValor);
        localStorage.setItem("cachorrosDiarias", cachorrosDiarias);

    } else {
        localStorage.setItem("cachorrosNomes", nome);
        localStorage.setItem("cachorrosValor", valores);
        localStorage.setItem("cachorrosDiarias", tempo);
    }

}
window.addEventListener('unload', salvar);
