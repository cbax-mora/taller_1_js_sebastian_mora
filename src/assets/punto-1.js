const num1 = Number(prompt('Ingrese el número 1'))
const num2 = Number(prompt('Ingrese el número 2'))

const suma = num1 + num2 
alert(suma)

if (suma > 0){
    alert('Es un número poritivo')
    } else if (suma === 0) {
        alert(`${suma}`)
    } else {
        alert(`${suma} Es un número negativo`)
    }

//Escribir un algoritmo que valide si la suma de 2 números ingresados es
//positiva, negativa o cero.