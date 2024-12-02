// declara vetor de escopo global que irá conter os números já apostados
let erros = [];

// gera um número aleatório entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1;

// declara constante com o número de chances
const CHANCES = 6;

function apostarNumero() {
    let numero = Number(document.getElementById('numero').value);
    let saidaErros = document.getElementById('saidaErros');
    let saidaChances = document.getElementById('saidaChances');
    let saidaDica = document.getElementById('saidaDica');

    // valida o número
    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Informe um número válido...");
        numero.focus();
        return;
    }

    // se aposta do jogador for igual ao número sorteado
    if(numero == sorteado) {
        alert("Parabéns!! Você Acertou!!!");
        btnApostar.disabled = true;
        btnJogar.className = "exibir";
        saidaDica.textContent = "Parabéns!! Número sorteado " + sorteado;
    } else {
        // se número existe no vetor erros
        if(erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número " + numero + ". Tente outro...");
        } else {
            erros.push(numero); // adiciona número ao vetor
            let numErros = erros.length; // obtém tamanho do vetor
            let numChances = CHANCES - numErros; // calcula nº de chances

            // exibe nº de erros, conteúdo do vetor e nº de chances
            saidaErros.textContent =  numErros + " (" + erros.join(", ") + ")";
            saidaChances.textContent = numChances;
            if (numChances == 0) {
                alert("Suas chances acabaram...");
                btnApostar.disabled = true;
                btnJogar.className = "exibir";
                saidaDica.textContent = "Game Over!! Número Sorteado: " + sorteado;
            } else {
                // usa operador ternário (condicional) para mensagem da dica
                let dica = numero < sorteado ? "maior" : "menor";
                saidaDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
            }
        }
    }
    // Limpa campo de entrada e posiciona cursor neste campo
    numero.value = "";
    numero.focus();

    
}

let btnApostar = document.getElementById('btnApostar');
btnApostar.addEventListener('click', apostarNumero);

function jogarNovamente() {
    location.reload(); // recarrega a página
}

let btnJogar = document.getElementById('btnJogar');
btnJogar.addEventListener('click', jogarNovamente);