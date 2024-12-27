function verSenha() {
    let inputSenha = document.getElementById('inputSenha');
    let saidaSenha = document.getElementById('saidaSenha');

    let senha = inputSenha.value;

    let erros = []; // vetor com erros

    // a) verifica se o tamanho da senha é invalido
    if(senha.length < 8 || senha.length > 15) {
        erros.push("Possuir entre 8 e 15 caracteres");
    }

    // b) verifica se não possui números
    if(senha.match(/[0-9]/g) == null) {
        erros.push("Possuir números (no mínimo, 1)");
    }

    // c) verifica se não possui letras minúsculas
    if(!senha.match(/[a-z]/g)) {
        erros.push("Possuir letras minúsculas (no mínimo, 1)");
    }

    // d) verifica se não possui letras maiúsculas ou se possui apenas 1
    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erros.push("Possuir letras maiúsculas (no mínimo, 2)");
    }

    // e) verifica se não possui simbolos ou "_"
    if(!senha.match(/[\W|_]/g)) {
        erros.push("Possuir simbolos (no mínimo, 1)");
    }

    // se o vetor erros está vazio (significa que não foram encontrados erros)
    if(erros.length == 0) {
        saidaSenha.textContent = "OK! Senha Válida";
    } else {
        saidaSenha.textContent = "Erro... A senha deve " + erros.join(", ");
    }

}

let btnVerificar = document.getElementById('btnVerificar');
btnVerificar.addEventListener('click', verSenha);