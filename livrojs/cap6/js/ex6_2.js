function montarDica() {
    let inputFruta = document.getElementById('inputFruta');
    let saidaDica = document.getElementById('saidaDica');

    let fruta = inputFruta.value;

    // verifica se o campo está vázio
    if(fruta == "") {
        alert("Informe a fruta");
        inputFruta.focus();
        return;
    }

    let resposta = fruta.charAt(0); // letra inicial da fruta
    let estrelas = "*"; // vai concatenar *
    let tam = fruta.length // obtem o tamanho da fruta

    // Pecorre os demais caracteres da fruta
    for(let i = 1; i < tam; i++) {
        // se a letra da posição da variável de controle for igual à primeira
        if(fruta.charAt(i) == fruta.charAt(0)) {
            resposta += fruta.charAt(0); // adiciona a letra inicial
        } else {
            resposta += " _ ";
        }
        estrelas += "*"; 
    }

    saidaDica.textContent = resposta;
    inputFruta.value = estrelas;
}

let btnDica = document.getElementById('btnDica');
btnDica.addEventListener('click', montarDica);