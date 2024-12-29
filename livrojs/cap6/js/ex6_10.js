const TAXA_MULTA = 2 / 100; // Multa por atraso
const TAXA_JUROS = 0.33 / 100; // juros por dia de atraso

function calcularMultaJuros() {
    let inputData = document.getElementById('inputData');
    let inputValor = document.getElementById('inputValor');
    let saidaMulta = document.getElementById('saidaMulta');
    let saidaJuros = document.getElementById('saidaJuros');
    let saidaTotal = document.getElementById('saidaTotal');

    let dataVenc = inputData.value;
    let valor = Number(inputValor.value);

    // verifica o preenchimento dos campos
    if(dataVenc == "" || valor == 0 || isNaN(valor)) {
        alert("Informe os dados da conta");
        inputData.focus();
        return;
    }

    // cria duas variaveis (instancia dois objetos) tipo data
    let hoje = new Date();
    let vencto = new Date();

    // a data vem no formato aaaa-mm-dd
    let partes = dataVenc.split("-"); // transforma a data em vetor a cada -
    vencto.setDate(Number(partes[2])); // pega o dia
    vencto.setMonth(Number(partes[1]) - 1); // pega o mes
    vencto.setFullYear(Number(partes[0]));

    // calcula a diferença de dia entre as datas (em milissegundos)
    let atraso = hoje - vencto;

    let multa = 0;
    let juros = 0;
    
    // se a conta estiver em atraso 
    if(atraso > 0) {
        // converte os milissegundos da diferença em dias
        // 1 dia = 24hr * 60min * 60s * 1000mseg : 86400000
        // round() necessário para periodos envolvendo horario de verão
        let dias = Math.round(atraso/86400000);

        multa = valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * dias;

    }

    let total = valor + multa + juros;

    saidaMulta.value = multa.toFixed(2);
    saidaJuros.value = juros.toFixed(2);
    saidaTotal.value = total.toFixed(2);
}

function limparCampos() {
    location.reload(); // o reload recarrega a página, portanto limpa os campos de entrada
}

let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcularMultaJuros);

let btnNovaConta = document.getElementById('btnNovaConta');
btnNovaConta.addEventListener('click', limparCampos);