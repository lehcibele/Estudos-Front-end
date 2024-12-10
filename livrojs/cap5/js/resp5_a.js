let listaDeTimes = [];

function adicionar() {
    let inputClube = document.getElementById('inputClube');
    let clube = inputClube.value;

    // verificar se o campo foi preenchido
    if(clube == "") {
        alert("Preencha o campo");
        inputClube.focus();
        return;
    }

    // adiciona o nome do campo a lista de times
    listaDeTimes.push({
        clube: clube
    })

    inputClube.value = "";
    inputClube.focus();

    listarClubes();
}

function listarClubes() {
    if(listaDeTimes.length === 0) {
        alert("Lista vázia");
        return;
    }

    let lista = "";

    for(let i = 0; i < listaDeTimes.length; i++) {
        lista += `${i + 1}. ${listaDeTimes[i].clube}\n`
        
    }

    let listarClubes = document.getElementById('listarClubes');
    listarClubes.textContent = lista;

    limparTabela();
}

function tabelaJogos() {
    let tabela = document.getElementById('tabela');

    let tabelaTimes = "";

    for(let i = 0; i < listaDeTimes.length / 2; i++) {
        if(listaDeTimes.length % 2 != 0) {
            alert('A quantidade de times é impar');
            return;
        } else {
            tabelaTimes += `${listaDeTimes[i].clube} x ${listaDeTimes[listaDeTimes.length - 1 - i].clube}\n`;
        }
    }

    tabela.textContent = tabelaTimes;
    
    limparLista();
}

function limparTabela() {
    let tabela = document.getElementById('tabela');
    tabela.textContent = "";
}

function limparLista() {
    let listarClubes = document.getElementById('listarClubes');
    listarClubes.textContent = "";
}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionar);

let btnListarClubes = document.getElementById('btnListarClubes');
btnListarClubes.addEventListener('click', listarClubes);

let btnTabelaJogos = document.getElementById('btnTabelaJogos');
btnTabelaJogos.addEventListener('click', tabelaJogos);