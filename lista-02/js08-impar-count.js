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

var impar = par = 0

for (numero of entrada){
    if (numero%2==0){
        par ++
    }
    else{
        impar++
    }
}
console.log(`São ${par} números pares, e ${impar} impares`)