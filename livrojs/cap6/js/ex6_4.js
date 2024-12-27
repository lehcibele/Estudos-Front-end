function gerarCracha() {
    let inputNome = document.getElementById('inputNome');
    let saidaCracha = document.getElementById('saidaCracha');

    let nome = inputNome.value;

    // verifica se o campo foi preenchido
    if(nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe o nome completo do participante...");
        inputNome.focus();
        return;
    }

    let primeiroEspaco = nome.indexOf(" "); // posição do primeiro espaço
    let ultimoEspaco = nome.lastIndexOf(" "); // posição do último espaço

    // copia nome e sobrenome usando os parâmetros do substr()
    let cracha = nome.substr(0, primeiroEspaco) + nome.substr(ultimoEspaco);

    saidaCracha.textContent = "Crachá: " + cracha;
}

let btnCracha = document.getElementById('btnCracha');
btnCracha.addEventListener('click', gerarCracha);