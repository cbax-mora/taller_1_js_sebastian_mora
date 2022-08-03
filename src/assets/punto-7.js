/* En una sala de cine se están estrenando 4 películas, se desea crear un
algoritmo que al ingresar un número del 1 al 4 se muestre el nombre de la
película, la categoría y su valor de entrada.
● La primera película es Batman, su categoría es acción y el valor de entrada
es 5,000.
● La segunda película es Los Vengadores, su categoría es acción y el valor de
la entrada es 10,000.
● La tercera película es SuperCool, su categoría es comedia y el valor de la
entrada es 8,000.
● Por último la cuarta película es rápidos y furiosos 5, subcategoría es de
aventura eso valor de entrada es 15,000 */

let pelicula = Number(prompt('Ingrese el numero de la pelicula que es de su elección ver: 1 para Batman, 2 para Los Vengadores, 3 para SuperCool, 4 para Rápidos y Furiosos 5'))

switch (pelicula) {
    case 1:
        alert('La pelicula que ha elegido ver es Batman, esta tiene un costo de 5.000 pesos por boleta para el ingreso y su categoria es denominada pelicula de acción.')
        break;
    case 2: 
        alert('La pelicula que ha elegido ver es Los Vengadores, esta tiene un costo de 10.000 pesos por boleta para el ingreso y su categoria es denominada pelicula de acción.')
        break;
    case 3:
        alert('La pelicula que ha elegido ver es SuperCool, esta tiene un costo de 8.000 pesos por boleta para el ingreso y su categoria es denominada una pelicula de comedia.')
        break;
    case 4: 
        alert('La pelicula que ha elegido ver es Rápidos y Furiosos 5, esta tiene un costo de 15.000 pesos por boleta para el ingreso y tiene una subcategoría denominada aventura')
        break;
    default: 
        alert('Si deseas ver una pelicula debes elegir un numero que concuerde con las peliculas que ofrecemos, de lo contrario tu solicitud no puede ser procesada hasta que tengamos una seleccion más extensa')
        break;
}