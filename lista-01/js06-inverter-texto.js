/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

// Entrada
var entrada = ['abacate', '12345']

// gere a variável invertido de forma a transforma a entrada na saída esperada

for (entra of entrada) {
    var invertido = entra.split('').reverse().join('')
    console.log(invertido)
}




