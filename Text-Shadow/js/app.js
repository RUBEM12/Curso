$("input[type='radio']").click(shadow);

function shadow(e) {

    var valor = e.target.value;

    $("h1").css("text-shadow", valor).text("Este é um texto com a propriedade css Text-Shadow")

    $("span").text(valor);

}