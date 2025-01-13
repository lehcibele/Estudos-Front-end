let itens = [];     // vetor para armazenar os itens do pedido

function trocarItem() {
    let inputPizza = document.getElementById('inputPizza');
    let inputBebida = document.getElementById('inputBebida');

    // se estiver marcado
    if(rbPizza.checked) {
        inputBebida.className = 'oculta'; // oculta o select das bebidas
        inputPizza.className = 'exibe';         // exibe o select das pizzas
    } else {
        inputPizza.className = 'oculta'; // oculta o select das pizzas
        inputBebida.className = 'exibe';         // exibe o select das bebidas
    }
}

// cria referencia aos radiosbuttons r associa função ao evento change
let rbPizza = document.getElementById('rbPizza');
rbPizza.addEventListener('change', trocarItem);

let rbBebida = document.getElementById('rbBebida');
rbBebida.addEventListener('change', trocarItem);

function mostrarNumSabores() {
    let inputPizza = document.getElementById('inputPizza');
    // se radiobutton rbPizza estiver marcado
    if(rbPizza.checked) {
        let pizza = inputPizza.value; // obtém valor do item selecionado
        let numSabores = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
        inputDetalhes.placeholder = "Até " + numSabores + " sabores";

    }
}

let inputDetalhes = document.getElementById('inputDetalhes');
inputDetalhes.addEventListener('focus', mostrarNumSabores);

// cria função (anônima) ao evento blur (quando o campo perde o foco)
inputDetalhes.addEventListener('blur', function() {
    inputDetalhes.placeholder = ""; // limpa a dica de preenchimento
});

// cria função (anônima) associada ao evento keypress (teclado pressionado)
inputDetalhes.addEventListener('keypress', function(tecla) {
    if(tecla.keyCode == 13) { // se tecla pressionada for Enter
        adicionarItem(); // chama função para adicionar item ao pedido
    }
});

function adicionarItem() {
    let inputPizza = document.getElementById('inputPizza');
    let inputBebida = document.getElementById('inputBebida');
    let saidaPedido = document.getElementById('saidaPedido');

    let num;
    let produto;

    // se radiobutton estiver marcado
    if(rbPizza.checked) {
        num = inputPizza.selectedIndex; // obtém nº do item selecionado
        produto = inputPizza.options[num].text; // texto do item selecionado
    } else {
        num = inputBebida.selectedIndex; // obtém nº do item selecionado
        produto = inputBebida.options[num].text; // texto do item selecionado 
    }

    let detalhes = inputDetalhes.value; // obtém detalhes do pedido
    itens.push(produto + " (" + detalhes + ")"); // adiciona item ao vetor
    saidaPedido.textContent = itens.join("\n"); // exibe itens do pedido
    limparCampos(); // chama função para limpar campos do formulário
}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarItem);

function limparCampos() {
    rbPizza.checked = true; // marca radiobutton rbPizza
    inputBebida.className = 'oculta'; // Oculta select das bebidas
    inputPizza.className = 'exibe'; // exibe select das pizzas
    inputPizza.selectedIndex = 0; // seleciona o primeiro item do select
    inputDetalhes.value = ""; // limpa campo de detalhes
    rbPizza.focus(); // dá foco ao radiobutton rbPizza
}