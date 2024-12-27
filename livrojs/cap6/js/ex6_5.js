function gerarEmail() {
    let inputNome = document.getElementById('inputNome');
    let saidaEmail = document.getElementById('saidaEmail');

    let nome = inputNome.value;

    if(nome == "" || nome.indexOf(" ") == -1) {
        alert("Informe o nome completo do funcionário");
        inputNome.focus();
        return;
    }

    // divide o nome em itens do vetor, criados a cada ocorrência do espaço
    let partes = nome.split(" ");
    let email = ""; // vai concatenar as letras
    let tam = partes.length; // obtém o numero de itens do vetor partes
    
    // percorrer os itens do vetor (exceto o último)
    for(let i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0); // obtem a letra inicial de cada item
    }

    // concatena as letras iniciais com a última parte (sobrenome) e empresa
    email += partes[tam - 1] + "@empresa.com.br";

    saidaEmail.textContent = "E-mail: " + email.toLocaleLowerCase();
}

let btnGerarEmail = document.getElementById('btnGerarEmail');
btnGerarEmail.addEventListener('click', gerarEmail);