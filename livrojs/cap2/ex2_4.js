function calcularPreco(){
    let valorQuilo = Number(document.getElementById('valorQuilo').value);
    let grama = Number(document.getElementById('grama').value);

    let converterGramaPraQuilo = grama / 1000;
    let valor = valorQuilo * converterGramaPraQuilo;

    let valorPagar = document.getElementById('valorPagar');

    valorPagar.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcularPreco);