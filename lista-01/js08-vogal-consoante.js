/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = 'a'

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var resultado = 'vogal'

console.log(resultado)


// Entrada
var entrada = ['a', 'I', 'z', 'J']
var resultado = 'vogal'
let afirmacoes = ["A", "E", "I", "O", "U"]

for (entra of entrada){
    entra.toUpperCase()
    if (afirmacoes.includes(entra)){
        resultado = 'vogal'
        console.log('Resultado de:' + entra + ' ' + resultado)
    }
    else {
        resultado = 'consoante'
        console.log('Resultado de:' + entra + ' ' + resultado)
    }
}