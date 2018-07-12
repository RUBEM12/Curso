var tbFilmes = document.getElementById("tbFilmes");

function adicionarFilme() {

    var inTitulo = document.getElementById("inTitulo");
    var inGenero = document.getElementById("inGenero");
    var inNota = document.getElementById("inNota");

    var titulo = inTitulo.value;
    var genero = inGenero.value;
    var nota = Number(inNota.value);

    if (titulo == "" || genero == "" || nota <= 0 || nota > 10) {
        alert("Informe corretamente os dados");
        inTitulo.focus();
        return;
    }

    inserirLinha(titulo, genero, nota);

    inTitulo.value = "";
    inGenero.value = "";
    inNota.value = "";
    inTitulo.focus();

    salvarFilmes(titulo, genero, nota);

}
var btSalvar = document.getElementById("btSalvar");
btSalvar.addEventListener("click", adicionarFilme);

function inserirLinha(titulo, genero, nota) {

    var linha = tbFilmes.insertRow(-1);

    var col1 = linha.insertCell(0);
    var col2 = linha.insertCell(1);
    var col3 = linha.insertCell(2);
    var col4 = linha.insertCell(3);

    col1.textContent = titulo;
    col2.textContent = genero;
    col3.textContent = nota;
    col4.innerHTML = "<input type='checkbox'>";

}

function salvarFilmes(titulo, genero, nota) {

    if (localStorage.getItem("FilmesTitulo")) {
        var FilmesTitulo = localStorage.getItem("FilmesTitulo") + " ; " + titulo;
        var FilmesGenero = localStorage.getItem("FilmesGenero") + " ; " + genero;
        var FilmesNota = localStorage.getItem("FilmesNota") + " ; " + nota;

        localStorage.setItem("FilmesTitulo", FilmesTitulo);
        localStorage.setItem("FilmesGenero", FilmesGenero);
        localStorage.setItem("FilmesNota", FilmesNota);

    } else {
        localStorage.setItem("FilmesTitulo", titulo);
        localStorage.setItem("FilmesGenero", genero);
        localStorage.setItem("FilmesNota", nota);

    }
}

function mostrarFilmes() {

    if (localStorage.getItem("FilmesTitulo")) {
        var titulos = localStorage.getItem("FilmesTitulo").split(";");
        var generos = localStorage.getItem("FilmesGenero").split(";");
        var notas = localStorage.getItem("FilmesNota").split(";");

        for (var i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], generos[i], notas[i]);
        }
    }
}
window.addEventListener("load", mostrarFilmes);

var ckTodos = document.getElementById("ckTodos");
ckTodos.addEventListener("change", marcarItens);

function marcarItens() {

    var check = tbFilmes.getElementsByTagName("input");

    for (var i = 1; i < check.length; i++) {
        check[i].checked = ckTodos.checked;
    }
}

function excluirSelecionados() {

    var check = tbFilmes.getElementsByTagName("input");
    var existe = -1;
    for (var i = 1; i < check.length; i++) {
        if (check[i].checked) {
            existe = i;
            break;
        }
    }

    if (existe == -1) {
        alert('Não há filmes marcados');
        return;
    }

    if (confirm("Confira a exclusão dos filmes selecionados")) {
        localStorage.removeItem("FilmesTitulo");
        localStorage.removeItem('FilmesGenero');
        localStorage.removeItem('FilmesNota');

        for (var i = 1; i < check.length; i++) {
            if (!check[i].checked) {
                var titulo = tbFilmes.rows[i].cells[0].textContent;
                var genero = tbFilmes.rows[i].cells[1].textContent;
                var nota = tbFilmes.rows[i].cells[02].textContent;
                salvarFilmes(titulo, genero, nota);
            }
        }


        for (var i = check.length - 1; i > 0; i--) {
            if (check[i].checked) {

                tbFilmes.deleteRow(i);

            }

            ckTodos.checked = false;
        }
    }

}
var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", excluirSelecionados);

function estatisticas() {

    var FilmesTitulo = localStorage.getItem("FilmesTitulo");    
    var nota = localStorage.getItem("FilmesNota");

    var filmesCadastrados = FilmesTitulo.length;

    var media = (nota + nota) / filmesCadastrados;
    var notas ="";

    for (var i =0;i<notas.length;i++){
        notas=nota[i];
    }

        alert("Nº Filmes Cadastrados: " + filmesCadastrados + "\n" + "Média das Notas: " + media + "\n" + "Maior Nota: ");
}
var btinfo=document.getElementById("btinfo");
btinfo.addEventListener("click", estatisticas);