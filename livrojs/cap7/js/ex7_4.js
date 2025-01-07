let btnExibir = document.getElementById('btnExibir');

btnExibir.addEventListener('click', function() {
    let inputPreco = document.getElementById('inputPreco');
    let saidaParcelas = document.getElementById('saidaParcelas');

    let preco = Number(inputPreco.value);

    // vai acumular as formas de pagamento
    let lista = ""

    // cria uma repetição para montar as opções de pagamento
    for(let i = 1; i <= 10; i++) {
        // acumula em lista o nº de parcela e o calculo do valor
        lista += i + "x de R$: " + (preco / i).toFixed(2) + "\n";
    }

    saidaParcelas.textContent = "Opções de pagamento \n\n" + lista;
});
