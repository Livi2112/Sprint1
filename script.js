function displayConta(input) {
    if (document.getElementById("conta").textContent == 0)
        document.getElementById("conta").textContent = "";
    conta.textContent += input;
}

function limparDisplay() {
    conta.textContent = 0;
    resultado.textContent = 0;
}

function mostrarResultado() {
    resultado.textContent = eval(conta.textContent);
    conta.textContent = eval(conta.textContent);
}

function apagar() {
    let conta = document.getElementById("conta").textContent;
    document.getElementById("conta").textContent = conta.substring(0, conta.length -1);
    if (document.getElementById("conta").textContent == "")
        document.getElementById("conta").textContent = 0;
}

function mudarSinal() {
    document.getElementById("conta").textContent = (-1) * document.getElementById("conta").textContent;
}