/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA                   SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
<<<<<<< HEAD
var entrada = ['Y', 'Yes', 'YES', 'yes', 'y', 'S', 'SIM', 's', 'sim', 'Sim', '1', '👍' ,'n', 'N', 'J', 'espaço']

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var resultado = false
let afirmacoes = ["Y","y","yes","S","sim", "👍"]

for (entra of entrada){
    if (afirmacoes.includes(entra)){
        resultado = true
        console.log('Resultado de:' + entra + ' ' + resultado)
    }
    else {
        resultado = false
        console.log('Resultado de:' + entra + ' ' + resultado)
    }
}
=======
var entrada = "J";

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var resultado = false;

console.log(resultado);
>>>>>>> e47615534e8f4a7917b46af53fd09682c434c501
