var formEL = document.getElementById("meuForme");

// Chama a função para capturar o evento de envio do formulário
captura_eventos(formEL, 'submit', formValid);

// Função para capturar eventos (compatível com navegadores antigos)
function captura_eventos(objeto, eventos, funcao) {
    if (objeto.addEventListener) {
        objeto.addEventListener(eventos, funcao, true);
    } else if (objeto.attachEvent) {
        var eventoComOn = 'on' + eventos;
        objeto.attachEvent(eventoComOn, funcao);
    }
}

// Função para cancelar o envio do formulário
function cancela_eventos(evento) {
    if (evento.preventDefault) {
        evento.preventDefault();
    } else {
        window.event.returnValue = false;
    }
}

// Função que verifica se algum campo (radio ou checkbox) foi marcado
function verificaCampos(campos) {
    var checados = false;

    for (var i = 0; i < campos.length; i++) {
        if (campos[i].checked) {
            checados = true;
        }
    }

    if (!checados) {
        alert('Marque o campo: ' + campos[0].name);
        return false;
    }

    return true;
}

// Função que valida o formulário
function formValid(event) {
    var campoNome = formEL.elements["textname"].value;
    var campoCidade = formEL.elements["cidades"];
    var campoRadio = formEL.elements["sexo"];
    var campoCheckbox = formEL.elements["rede"];

    // Verifica o campo de nome
    if (campoNome.trim().length === 0) {
        alert("O campo nome é obrigatório");
        cancela_eventos(event);
        return false;
    }

    // Verifica se uma cidade foi selecionada
    var cidadeSelecionada = false;
    for (var i = 0; i < campoCidade.length; i++) {
        if (campoCidade[i].selected && campoCidade[i].value !== '') {
            cidadeSelecionada = true;
            break;
        }
    }

    if (!cidadeSelecionada) {
        alert('Selecione uma cidade');
        cancela_eventos(event);
        return false;
    }

    // Verifica se um radio foi marcado
    if (!verificaCampos(campoRadio)) {
        cancela_eventos(event);
        return false;
    }

    // Verifica se ao menos um checkbox foi marcado
    if (!verificaCampos(campoCheckbox)) {
        cancela_eventos(event);
        return false;
    }

    alert("O formulário será enviado!");
    return true;
}
