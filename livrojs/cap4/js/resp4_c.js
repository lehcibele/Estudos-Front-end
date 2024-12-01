
function numeroPerfeito(){
    let numero = Number(document.getElementById('numero').value);
    let saidaDivisores = document.getElementById('saidaDivisores');
    let saidaNumero = document.getElementById('saidaNumero');

    // verificar se o campo foi preenchido 
    if(numero == "" || isNaN(numero)){
        alert("Informe um número");
        numero.focus();
        return;
    }

    let respostaDivisores = "Divisores do " + numero + ": ";
    let divisores = 0; // numero de divisores
    let soma = 0;

    for(let i = 1; i < numero; i++){
        
        if(numero%i == 0) {
            divisores = i;
            respostaDivisores = respostaDivisores + divisores + ", ";
            soma = soma + divisores;
        }
    }

    // Remover a última vírgula e espaço
    respostaDivisores = respostaDivisores.slice(0, -2);

    saidaDivisores.textContent = respostaDivisores + " (Soma: " + soma + ")";

    // verifica se o numero é perfeito (se a soma dos divisores = numero --> soma perfeita)
    if( soma == numero){
        saidaNumero.textContent = `${numero} É um Número Perfeito`;
    } else {
        saidaNumero.textContent = `${numero} Não é Número Perfeito`;
    }

}

let btnPerfeito = document.getElementById('btnPerfeito');
btnPerfeito.addEventListener('click', numeroPerfeito);