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

function resumirLista() {
    // verifica se vetor está vazio
    if (criancas.length == 0) {
        alert("Não há crianças na lista");
        return;
    }

    // cria uma cópia do vetor crianças
    let copia = criancas.slice();

    // ordena o vetor copia pela idade
    copia.sort(function (a, b) { 
        return a.idade - b.idade 
    });

    let resumo = ""; // para concatenar saída

    let aux = copia[0].idade; // menor idade do vetor ordenado
    let nomes = []; // vetor para inserir nomes de cada idade
    
    for (let i = 0; i < copia.length; i++) {
        // se é da mesma idade auxiliar, adiciona ao vetor
        if (copia[i].idade == aux) {
            nomes.push(copia[i].nome);
        } else {
            // senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) +
            "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = copia[i].idade; // obtém a nova idade na ordem
            nomes = []; // limpa o vetor dos nomes
            nomes.push(copia[i].nome); // adiciona o primeiro da nova idade
        }    

    } 

    // adiciona os nomes da última idade ordenada
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    // altera conteúdo de outLista
    document.getElementById("saidaLista").textContent = resumo;
}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionar);

let btnListarTodos = document.getElementById('btnListarTodos');
btnListarTodos.addEventListener('click', listarCriancas);

let btnResumir = document.getElementById('btnResumir');
btnResumir.addEventListener('click', resumirLista);