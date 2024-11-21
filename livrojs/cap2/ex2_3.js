function precoVeiculo(){
    let veiculo = document.getElementById('veiculo').value;
    let preco = Number(document.getElementById('preco').value);
    let nomeVeiculo = document.getElementById('nomeVeiculo');
    let valorEntrada = document.getElementById('valorEntrada');
    let mostrarPreco = document.getElementById('mostrarPreco');

    nomeVeiculo.textContent = veiculo;
    
    let metadePreco = preco / 2;

    valorEntrada.textContent = "Entrada de R$: " + metadePreco.toFixed(2);

    let parcelas = metadePreco / 12;
    
    mostrarPreco.textContent = "+ 12x de R$: " + parcelas.toFixed(2);

}

var btnPromocao = document.getElementById('btnPromocao');

btnPromocao.addEventListener('click', precoVeiculo);