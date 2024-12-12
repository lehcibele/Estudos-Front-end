let listaCandidatos = [];

function adicionar() {
    let inputNome = document.getElementById('inputNome');
    let inputAcertos = document.getElementById('inputAcertos');

    let nome = inputNome.value;
    let acertos = Number(inputAcertos.value);

    // verificar se os campos foram preenchidos
    if(nome == "" || isNaN(acertos)) {
        alert("Preencha os campos");
        inputNome.focus();
        return;
    }

    listaCandidatos.push({
        nome: nome,
        acertos: acertos
    });

    inputNome.value = "";
    inputAcertos.value = "";
    inputNome.focus();

    listarTodos();
}

function listarTodos() {
    let saidaListarTodos = document.getElementById('saidaListarTodos');
    let saidaAprovados = document.getElementById('saidaAprovados');

    let lista = "";

    for(let i = 0; i < listaCandidatos.length; i++) {
        lista += `${listaCandidatos[i].nome} - ${listaCandidatos[i].acertos} acertos\n`;
    }

    saidaListarTodos.textContent = lista;
    saidaAprovados.textContent = "";
}

function aprovados2Fase() {
    let saidaListarTodos = document.getElementById('saidaListarTodos');
    let saidaAprovados = document.getElementById('saidaAprovados');

    if(listaCandidatos.length === 0) {
        alert('Lista vázia');
        return;
    }

    let numeroParaAprovacao = prompt("Número de Acertos para Aprovação?");

    let listaAprovados = "";

    for(let i = 0; i < listaCandidatos.length; i++) {
        if(listaCandidatos[i].acertos >= numeroParaAprovacao) {
            listaAprovados += `${listaCandidatos[i].nome} - ${listaCandidatos[i].acertos} acertos\n`;
        }
    }

    saidaAprovados.textContent = listaAprovados;
    saidaListarTodos.textContent = "";
}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionar);

let btnListarTodos = document.getElementById('btnListarTodos');
btnListarTodos.addEventListener('click', listarTodos);

let btnAprovados = document.getElementById('btnAprovados');
btnAprovados.addEventListener('click', aprovados2Fase);
