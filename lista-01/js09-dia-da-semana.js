/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = [4, 1, 2, 5, 9, 7]

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var resultado = 'Domingo'
for (elemento of entrada){

if(elemento == '1') {
    resultado="Domingo"
} else if (elemento == '2') {
    resultado="Segunda-feira"
} else if (elemento == '3') {
    resultado="Terça-feira"
} else if (elemento == '4') {
    resultado="Quarta-feira"
} else if (elemento == '5') {
    resultado="Quinta-feira"
}
else if (elemento =='6') {
    resultado="Sexta-feira"
}
else if (elemento == '7') {
    resultado="Sábado"
}
else {
    resultado="Entrada inválida."
}
console.log(resultado)
}

