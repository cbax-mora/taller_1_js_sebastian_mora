//Hacer un algoritmo que calcule e imprima los números primos comprendidos
//entre 1 y 100.


let primos = []

let cantidadMuntiplos = 0

for (let i = 0; i < 100; i++) {
    for (let j = 1; j <= i; j++){
      console.log('j')
      if (i % j === 0) {
        cantidadMuntiplos++
        if ( cantidadMuntiplos > 2) {
          break
        }
      }
    }
    if (cantidadMuntiplos === 2) {
      primos.push(i)
    }
cantidadMuntiplos = 0
}
console.log(primos)