/**
 * Faça um Programa que peça a temperatura em Fahrenheit, 
 * transforme e mostre graus Celsius. 
 * 
 * ENTRADA              SAÍDA
 * 102                  39
 * 89                   32
 * 70                   21
 */

// Entrada
var fahrenheit = [102, 89, 70]
// Altere a expressão abaixo para converter Fahrenheit em Celsius

var resultado = 0
for (let fahr of fahrenheit) {
    resultado = (fahr - 32) / 1.8
    console.log(resultado.toFixed(0))
}

