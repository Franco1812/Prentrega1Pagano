function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: Division por cero.";
    }
    return a / b;
}

function simuladorCalculadora() {
    console.log("Simulador de Calculadora");

    const operacion = prompt("Elije una operacion (sumar, restar, multiplicar, dividir):");

    if (operacion === "sumar") {
        const num1 = parseFloat(prompt("Ingresa el primer numero:"));
        const num2 = parseFloat(prompt("Ingresa el segundo numero:"));
        console.log(`Resultado: ${sumar(num1, num2)}`);
    } else if (operacion === "restar") {
        const num1 = parseFloat(prompt("Ingresa el primer numero:"));
        const num2 = parseFloat(prompt("Ingresa el segundo numero:"));
        console.log(`Resultado: ${restar(num1, num2)}`);
    } else if (operacion === "multiplicar") {
        const num1 = parseFloat(prompt("Ingresa el primer numero:"));
        const num2 = parseFloat(prompt("Ingresa el segundo numero:"));
        console.log(`Resultado: ${multiplicar(num1, num2)}`);
    } else if (operacion === "dividir") {
        const num1 = parseFloat(prompt("Ingresa el primer numero:"));
        const num2 = parseFloat(prompt("Ingresa el segundo numero:"));
        console.log(`Resultado: ${dividir(num1, num2)}`);
    } else {
        console.log("Operacion no valida.");
    }
}

simuladorCalculadora();
