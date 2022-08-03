//Escribir un algoritmo para calcular el índice de masa corporal de una
//persona.

let altura = prompt('Ingrese su altura')
let peso = prompt('Ingrese su peso')

let resultadoAltura = altura * altura
let resultadoPeso = peso / resultadoAltura

alert(`El indice de su masa corporal es ${resultadoPeso.toFixed(2)}`)
