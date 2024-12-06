let criancas = [];

function adicionar() {
    let inputNome = document.getElementById('inputNome');
    let inputIdade = document.getElementById('inputIdade');

    let nome = inputNome.value;
    let idade = Number(inputIdade.value);

   // verificar se os campos foram preenchidos
    if(nome =="" || idade == 0 || isNaN(idade)) {
        alert("Preencha os campos");
        inputNome.focus();
    }

    // adiciona o nome e idade ao vetor criancas
    criancas.push({
        nome: nome,
        idade: idade
    });

    // Limpa os campos e posiciona o cursor no campo nome
    inputNome.value = "";
    inputIdade.value = "";
    inputNome.focus();

    listarCriancas();

}

function listarCriancas() {
    // Verifica se o vetor está vazio
    if(criancas.length === 0){
        alert("Lista vazia");
        return;
    }

    let lista = "";

    for(let i = 0; i < criancas.length; i++) {
        // Adiciona à lista, cada objeto do vetor
        lista += criancas[i].nome + " - " + criancas[i].idade + " anos \n";
    }

    document.getElementById('saidaLista').textContent = lista;
}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionar);

let btnListarTodos = document.getElementById('btnListarTodos');
btnListarTodos.addEventListener('click', listarCriancas);