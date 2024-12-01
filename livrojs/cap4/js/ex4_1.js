function mostrarTabuada() {
    // cria uma referencia aos elementos da página
    let entradaNumero = Number(document.getElementById('entradaNumero').value);
    let mostarTabuada = document.getElementById('mostarTabuada');

    // Verifica se foi inserido o numero no campo
    if(entradaNumero == 0 || isNaN(entradaNumero)){
        alert("Informe um número válido");
        entradaNumero.focus();
        return;
    } 

    // cria uma variavel do tipo string que ira concatenar a resposta
    let resposta = "";

    // cria um laço de repetição
    for(let i = 1; i <= 10; i++){
        resposta = resposta + entradaNumero + " x " + i + " = " + entradaNumero * i + "\n";
    }

    mostarTabuada.textContent = resposta;
    
}

// cria referência ao botão e associa a função ao evento click
let btnMostrar = document.getElementById('btnMostrar');
btnMostrar.addEventListener('click', mostrarTabuada);

