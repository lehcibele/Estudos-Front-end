function criptografia() {
    let inputMensagem = document.getElementById('inputMensagem');
    let saidaCriptografia= document.getElementById('saidaCriptografia');

    let mensagem = inputMensagem.value;

    let mensagemPar = '';
    let mensagemImpar = '';

    for(let i = 0; i < mensagem.length; i++) {
        if(i % 2 == 0) {
            mensagemPar += mensagem[i];
        } else {
            mensagemImpar += mensagem[i];
        }
    }

    saidaCriptografia.textContent = mensagemImpar + mensagemPar;
}

function decriptografar() {
    let inputMensagem = document.getElementById('inputMensagem');
    let saidaCriptografia= document.getElementById('saidaCriptografia');

    let mensagem = inputMensagem.value;

    saidaCriptografia.textContent = mensagem;
}

let btnCriptografia = document.getElementById('btnCriptografia');
btnCriptografia.addEventListener('click', criptografia);

let btnDecriptografia = document.getElementById('btnDecriptografia');
btnDecriptografia.addEventListener('click', decriptografar);