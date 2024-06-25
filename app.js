// Tarea 1: Invertir una cadena
function invertirCadena() {
    const input = document.getElementById('inputString').value;
    const invertida = input.split('').reverse().join('');
    document.getElementById('result1').innerText = `Cadena invertida: ${invertida}`;
}

// Tarea 2: Número primo
function esPrimo() {
    const numero = parseInt(document.getElementById('inputNumber').value);
    if (numero <= 1) {
        document.getElementById('result2').innerText = 'No es un número primo';
        return;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            document.getElementById('result2').innerText = 'No es un número primo';
            return;
        }
    }
    document.getElementById('result2').innerText = 'Es un número primo';
}

// Tarea 3: Eliminar duplicados en un arreglo
function eliminarDuplicados() {
    const input = document.getElementById('inputArray').value;
    const array = input.split(',').map(Number);
    const sinDuplicados = [...new Set(array)];
    document.getElementById('result3').innerText = `Arreglo sin duplicados: ${sinDuplicados.join(', ')}`;
}

// Tarea 4: Factorial de un número
function calcularFactorial() {
    const numero = parseInt(document.getElementById('inputFactorial').value);
    if (numero < 0) {
        document.getElementById('result4').innerText = 'El factorial no está definido para números negativos';
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    document.getElementById('result4').innerText = `Factorial de ${numero}: ${factorial}`;
}

// Tarea 5: Recuento de vocales
function contarVocales() {
    const input = document.getElementById('inputVowels').value.toLowerCase();
    const vocales = 'aeiou';
    let contador = 0;
    for (let char of input) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    document.getElementById('result5').innerText = `Número de vocales: ${contador}`;
}

// Tarea 6: Suma los números en un arreglo
function sumarNumeros() {
    const input = document.getElementById('inputSumArray').value;
    const array = input.split(',').map(Number);
    const suma = array.reduce((acc, num) => acc + num, 0);
    document.getElementById('result6').innerText = `Suma de los números: ${suma}`;
}

// Tarea 7: Encontrar el máximo en un arreglo
function encontrarMaximo() {
    const input = document.getElementById('inputMaxArray').value;
    const array = input.split(',').map(Number);
    const maximo = Math.max(...array);
    document.getElementById('result7').innerText = `Número máximo: ${maximo}`;
}
