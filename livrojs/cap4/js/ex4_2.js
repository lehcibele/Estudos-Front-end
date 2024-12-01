function decrescentes(){
    let entradaNumero = Number(document.getElementById('entradaNumero').value);
    let mostrarResposta = document.getElementById('mostrarResposta');

    // verificar se o campo foi preenchido
    if(entradaNumero == "" || isNaN(entradaNumero)){
        alert("Informe um número");
        entradaNumero.focus();
        return;
    }

    let resposta = "Entre " + entradaNumero + " e 1 : ";

    // cria um for decrescente
    for(let i = entradaNumero; i >= 1; i--){
        resposta = resposta + i + " , ";
    }

    // Remover a última vírgula e espaço
    resposta = resposta.slice(0, -2);

    mostrarResposta.textContent = resposta;
    
}

let btnDecrescer = document.getElementById('btnDecrescer');
btnDecrescer.addEventListener('click', decrescentes);