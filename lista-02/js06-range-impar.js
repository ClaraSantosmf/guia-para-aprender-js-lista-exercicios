/**
 * Faça um programa que gere apenas os números ímpares entre 1 e 150. 
 * 
 * ENTRADA              SAÍDA
 * [1,150]              [1,3,5,7,9,11...147,149]
 * 
 */

// Entrada
var range = [1, 150]

var contador = range[0]

var impares = []

while (contador <= range[1]) {
    impares.push(contador)
    contador += 2
}


console.log(impares)
