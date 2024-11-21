function converterDuracao() {
    var inTitulo = document.getElementById('titulo');
    var inDuracao = document.getElementById('duracao');
    var mostrarTitulo = document.getElementById('mostrarTitulo');
    var mostrarDuracao = document.getElementById('mostrarDuracao');

    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    //Arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao/60);

    //Obtém o resto da divisão
    var minutos = duracao % 60;

    //altera o conteúdo dos parágrafos
    mostrarTitulo.textContent = titulo;
    mostrarDuracao.textContent = horas + "hora(s) e " + minutos + "minuto(s)";

}

var btnConverter = document.getElementById('btnConverter');

// Evento associado ao botão, para carregar a função
btnConverter.addEventListener('click', converterDuracao);