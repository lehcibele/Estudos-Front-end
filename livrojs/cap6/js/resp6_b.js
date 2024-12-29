function referenciaBibliografica() {
    let inputNome = document.getElementById("inputNome");
    let saidaReferencia = document.getElementById('saidaReferencia');

    let nome = inputNome.value;

    // verifica se o campo foi preenchido
    if(nome == "") {
        alert("Informe o nome do autor!");
        inputNome.focus();
        return;
    }

    // separa o nome em partes de vetor
    let partesNome = nome.split(" ");
    // pega o último nome	
    let ultimoNome = partesNome[partesNome.length - 1];
    // pega o primeiro caractere do nome
    let primeiroCara = nome.charAt(0);
    let segundoCara = nome.charAt(1);

    saidaReferencia.textContent = `Citação Bibliográfica: ${ultimoNome.toUpperCase()}, ${primeiroCara.toUpperCase()}. ${segundoCara.toUpperCase()}.`;	

}

let btnReferencia = document.getElementById('btnReferencia');
btnReferencia.addEventListener('click', referenciaBibliografica);