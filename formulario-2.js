function Verificar() {

    var inNome = document.getElementById("inNome");
    var inEndereco = document.getElementById("inEndereco");
    var inEmail = document.getElementById("inEmail");
    var inTelefone = document.getElementById("inTelefone");

    var nome = inNome.value;
    var endereco = inEndereco.value;
    var email = inEmail.value;
    var telefone = inTelefone.value;
    var form=document.querySelector("form");

    //testar nome
    //se ok nao faz nada
    //senao coloca borda no nome
    if(! /^[a-zA-Z\s]+$/.test(nome)) {
        inNome.classList.add('error');
    }else {
        inNome.classList.remove('error');
    }

    if(endereco == "") {
        inEndereco.classList.add('error');
    }else {
        inEndereco.classList.remove('error');
    }

    if(email == "") {
        inEmail.classList.add('error');
    }else {
        inEmail.classList.remove('error');
    }

    if(telefone.length <= 8 || telefone.length >= 11 || isNaN(telefone)) {
        inTelefone.classList.add('error');
    }else {
        inTelefone.classList.remove('error');
    }



    if (testaLetra(nome) || endereco == "" || email == "" || telefone == 0 || isNaN(telefone) || nome == "") {
        alert("fracasso");
        form.classList.add("not-ok");


    } else {
            alert("sucesso");
            form.classList.remove("not-ok");

        }

    }

    
    var btEnviar = document.getElementById("btEnviar");
    btEnviar.addEventListener("click", Verificar);

    function testaLetra(valor) {
        return ! /^[a-zA-Z\s]+$/.test(valor);
    }
