//o state pode variar entre 3 estados: equ, op, num
var state = "equ";
var conta = "0";
let contaDisplay = document.getElementById("contaDisplay").textContent;
let result = document.getElementById("resultado");
state = "num";

//essa função checa os possíveis estados e adiciona os input de tipo número
function num(input) {
    console.log(state);

    if (state == "equ") {
        conta = input;
        document.getElementById("contaDisplay").textContent = input;
        document.getElementById("resultado").textContent = eval(conta);
    }
    else if (state == "op") {
        conta += input;
        document.getElementById("contaDisplay").textContent += input;
        document.getElementById("resultado").textContent = eval(conta);
    }
    else {
        conta += input;
        document.getElementById("contaDisplay").textContent += input;
        document.getElementById("resultado").textContent = eval(conta);
    }
    state = "num";
}

//essa função checa os possíveis estados e adiciona os inputs de tipo operadore
function op(input) {
    if (state == "equ") {
        conta += input;
        document.getElementById("contaDisplay").textContent += input;
    }
    else if (state == "op") {
        return;
    }
    else {
        conta += input;
        document.getElementById("contaDisplay").textContent += input;
    }
    state = "op";
}

//função da tecla igual
function equ() {
    conta = eval(conta);
    document.getElementById("contaDisplay").textContent = conta;
    document.getElementById("resultado").textContent = conta;
    state = "equ";
}

//essa função limpa a tela
function limparDisplay() {
    conta = 0;
    document.getElementById("contaDisplay").textContent = 0;
    document.getElementById("resultado").textContent = 0;
    state = "equ"
}

//essa função ativa a função igual e troca o sinal
function mudarSinal() {
    equ();
    conta = (-1) * conta;
    document.getElementById("contaDisplay").textContent = conta;
    document.getElementById("resultado").textContent = conta;
}

//essa função apaga o último caractere da string
function apagar() {
    if (conta.length != 1) {
    conta = conta.slice(0, -1);
    }
    else {conta = 0}
    document.getElementById("contaDisplay").textContent = conta;
    document.getElementById("resultado").textContent = conta;
    state = "num"
}