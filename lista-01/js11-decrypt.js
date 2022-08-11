/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbdbuf          abacate
 * @fcsb            zebra
<<<<<<< HEAD
 * $fcsb            Zebra
 *
=======
 * 
>>>>>>> soluções
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
<<<<<<< HEAD
var texto = "bcbdbuf";
=======
>>>>>>> soluções

// implemente aqui uma lógica para descriptografar o texto
var textoDecripto = "abacate";

<<<<<<< HEAD
console.log(textoDecripto);
=======
var texto = '@fcsb'
    contador = 0
    criptografado= ''

for (var indice in texto){
    letraNumero = texto.charCodeAt(contador) -1
    contador ++
    
    if (texto.charCodeAt(contador) == '@'){
        criptografado += String.fromCharCode(123)
    }
    else if (texto.charCodeAt(contador) == '$'){
        criptografado += String.fromCharCode(91)
    }
    else{
        criptografado += String.fromCharCode(letraNumero)
    }
}
console.log(criptografado)
>>>>>>> soluções
