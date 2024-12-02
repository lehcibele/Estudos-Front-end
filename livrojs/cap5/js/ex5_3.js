let carros = [];

function adicionarCarros() {
    let inputModelo = document.getElementById('inputModelo');
    let inputPreco = document.getElementById('inputPreco');

    let modelo = inputModelo.value;
    let preco = Number(inputPreco.value);

    // Verifica o preenchimento dos campos
    if (modelo === "" || preco <= 0 || isNaN(preco)) {
        alert("Informe corretamente os dados");
        inputModelo.focus();
        return;
    }

        // Adiciona dados ao vetor objeto
    carros.push({
        modelo: modelo,
        preco: preco
    });

    // Limpa os campos e posiciona o cursor no campo modelo
    inputModelo.value = "";
    inputPreco.value = "";
    inputModelo.focus();

    listarCarros(); // Chama a função listar carros
}

function listarCarros() {
    // Verifica se o vetor está vazio
    if (carros.length === 0) {
        alert("Não há carros na lista");
        return;
    }

    let lista = ""; // Para concatenar a lista de carros

    // Percorre os elementos do vetor
    for (let i = 0; i < carros.length; i++) {
        // Adiciona à lista, cada objeto do vetor
        lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n";
    }

    document.getElementById('saidaLista').textContent = lista;
}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarCarros);

let btnListarCarros = document.getElementById('btnListarCarros');
btnListarCarros.addEventListener('click', listarCarros);