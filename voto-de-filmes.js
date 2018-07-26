var check1 = document.getElementById('check1');
var check2 = document.getElementById('check2');
var check3 = document.getElementById('check3');
var btVotar = document.getElementById('btVotar')


function exibirImagens() {

    var filme1 = document.getElementById('filme1');
    var filme2 = document.getElementById('filme2');
    var filme3 = document.getElementById('filme3');


    if (check1.checked) {
        filme1.classList.remove('d-none');
        filme1.classList.add('d-block');
        filme3.classList.remove('d-block');
        filme2.classList.remove('d-block');
        filme2.classList.add('d-none');
        filme3.classList.add('d-none');
        btVotar.disabled = false;
    }
    if (check2.checked) {
        filme2.classList.remove('d-none');
        filme2.classList.add('d-block');
        filme1.classList.remove('d-block');
        filme3.classList.remove('d-block');
        filme1.classList.add('d-none');
        filme2.classList.add('d-none');
        btVotar.disabled = false;
    }
    if (check3.checked) {
        filme3.classList.remove('d-none');
        filme3.classList.add('d-block');
        filme2.classList.remove('d-block');
        filme1.classList.remove('d-block');
        filme1.classList.add('d-none');
        filme2.classList.add('d-none');
        btVotar.disabled = false;
    }
}

check1.addEventListener("change", exibirImagens);
check2.addEventListener("change", exibirImagens);
check3.addEventListener("change", exibirImagens);

function votar() {

    var outTotal = document.getElementById('outTotal');
    var votos1 = 0;
    var votos2 = 0;
    var votos3 = 0;

    if (check1.checked){
        localStorage.setItem('Votos', votos1)
    }

    outTotal.textContent = 'Guerra infinita:' + votos1 + '\n' + 'Homem Formiga:' + votos2 + '\n' + 'Homem Aranha' + votos3 + '\n';
}
btVotar.addEventListener('click', votar);