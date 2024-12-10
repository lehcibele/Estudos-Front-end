let listaNumeros = [];

function adicionar() {
    let inputNumero = document.getElementById('inputNumero');
    let saidaLista = document.getElementById('saidaLista');
    let numero = inputNumero.value;

    // verificar se o campo foi preenchido
    if(numero == "" || isNaN(numero)){
        alert("Preencha o campo");
        inputNumero.focus();
        return;
    }

    listaNumeros.push({
        numero: numero
    })

    inputNumero.value = "";
    inputNumero.focus();

    let lista = "";

    for(let i = 0; i < listaNumeros.length; i++) {
        lista += `${listaNumeros[i].numero}`;
        if(i < listaNumeros.length - 1){
            lista += ", ";
        }
    }

    saidaLista.textContent = `Números: ${lista}`;

}

function verificarOrdemNumeros() {
    let saidaOrdem = document.getElementById('saidaOrdem');
}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionar);

let btnVerificarOrdem = document.getElementById('btnVerificarOrdem');
btnVerificarOrdem.addEventListener('click', verificarOrdemNumeros);