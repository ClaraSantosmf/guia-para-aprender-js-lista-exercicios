/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */

// Entrada
var entrada = [1,2,3,4,5,6,7]
var impares = pares = 0

for (numero of entrada){
    if (numero%2 == 0){
        pares++
    }
    else{
        impares++
    }
}

console.log(`Números impares: ${impares}, números pares: ${pares}`)
