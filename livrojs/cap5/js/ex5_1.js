let listaPacientes = []; // declara o vetor global

function adicionarPaciente() {
    let paciente = document.getElementById('paciente').value;
    let saidaLista = document.getElementById('saidaLista');

    // verifica o preenchimento do campo nome do paciente
    if(paciente == ""){
        alert("Informe o nome");
        paciente.focus();
        return;
    }

    listaPacientes.push(paciente); // adiciona o nome ao final do vetor

    let lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for(i = 0; i < listaPacientes.length; i++){
        lista += (i + 1) + ". " + listaPacientes[i] + "\n";
    }

    saidaLista.textContent = lista;

    paciente.value = " ";
    paciente.focus();

}

let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarPaciente);

function urgencia() {
    let paciente = document.getElementById('paciente').value;
    let saidaLista = document.getElementById('saidaLista');

    // verifica o preenchimento do campo nome do paciente
    if(paciente == ""){
        alert("Informe o nome");
        paciente.focus();
        return;
    }

    listaPacientes.unshift(paciente); // adiciona o nome no inicio do vetor

    let lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for(i = 0; i < listaPacientes.length; i++){
        lista += (i + 1) + ". " + listaPacientes[i] + "\n";
    }

    saidaLista.textContent = lista;

    paciente.value = " ";
    paciente.focus();

}

let btnUrgencia = document.getElementById('btnUrgencia');
btnUrgencia.addEventListener('click', urgencia);

function atenderPaciente() {
    let paciente = document.getElementById('paciente').value;
    let saidaLista = document.getElementById('saidaLista');
    let saidaAtendimento = document.getElementById('saidaAtendimento');

    // verifica se vetor pacientes está vazio
    if (listaPacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        paciente.focus();
        return;
    }

    // remove paciente do início da fila (e obtém nome)
    let atender = listaPacientes.shift();
    // exibe nome do paciente em atendimento
    saidaAtendimento.textContent = atender;

    let lista = ""; // string para concatenar pacientes

    // percorre os elementos do vetor
    for(i = 0; i < listaPacientes.length; i++){
        lista += (i + 1) + ". " + listaPacientes[i] + "\n";
    }

    // altera o conteúdo da tag outLista
    saidaLista.textContent = lista;

}

let btnAtender = document.getElementById('btnAtender');
btnAtender.addEventListener('click', atenderPaciente);