// Declara e inicializr contadores e acumuladores (variaveis globais)
var numContas = 0;
var valTotal = 0;

var resposta = "";

function registrarContas() {
    let descricao = document.getElementById('descricao').value;
    let valor = Number(document.getElementById('valor').value);
    let listaContas = document.getElementById('listaContas');
    let saidaTotal = document.getElementById('saidaTotal');

    // Verifica se os campos foram preenchidos
    if(descricao == "" || valor == 0 || isNaN(valor)){
        alert("Informe os dados");
        descricao.focus();
        return;
    }

    // adiciona valores ao contador e acumulador
    numContas++;
    valTotal = valTotal + valor;

    // concatena as contas
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

    // altera o conteúdo das tags de resposta
    listaContas.textContent = resposta + "----------------------------------";
    saidaTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

    // limpa campos e posiciona cursor em descricao
    descricao.value = "";
    valor.value = "";
    descricao.focus();

}

let btnRegistrar = document.getElementById('btnRegistrar');
btnRegistrar.addEventListener('click', registrarContas);