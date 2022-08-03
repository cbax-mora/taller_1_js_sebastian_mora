//Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el
//mes al que corresponde el valor ingresado, la cantidad de días que tiene
//ese mes y sus signos del zodiaco. Ejemplo: si el valor ingresado es 5,
//entonces imprimir “Mayo”, “31 días”, “Tauro - Géminis”.

let mes = Number(prompt('Ingrese un numero del 1 al 12 para saber el mes y algunas de sus caracteristicas'))


switch (mes) {
  case 1:
    alert('El primer mes de año es Enero: Tiene 31 días y sus signos son Capricornio y Acuario')
    break;
  case 2: 
    alert('El segundo mes del año es Febrero: Tiene 28 días pero cada 4 años tiene un dia demas el cual lo vuelve biciesto, en ese año tiene 29 días y sus signos son Acuario y Piscis')
  break;
  case 3: 
    alert('El tercer mes del año es Mayo: Tiene 31 días y sus signos son Piscis y Aries')
    break;
  case 4: 
    alert('El cuarto mes del año es Abril: Tiene 30 días y sus signos son Aries y Tauro')
    break; 
  case 5: 
    alert('El quinto mes del año es Mayo: Tiene 31 días y sus signos son Tauro y Geminis')
    break;
  case 6:
    alert('El sexto mes del año es Junio: Tiene 30 días y sus signos son Geminis y Cancer')
    break;
  case 7: 
    alert('El septimo mes del año es Julio: Tiene 31 días y sus signos son Cancer y Leo')
    break;
  case 8:
    alert('El octavo mes del año es Agosto: Tiene 31 días y sus signos son Leo y Virgo')
    break;
  case 9:
    alert('El noveno mes del año es Septiembre: Tiene 30 días y sus signos son Virgo y Libra') 
    break;
  case 10:
    alert('El decimo mes del año es Octubre: Tiene 31 días y sus signos son Libra y Escorpio')
    break;
  case 11:
    alert('El onceavo mes del año es Noviembre: Tiene 30 días y sus signos son Escorpio y Sagitario')
    break;
  case 12:
    alert('El doceavo y ultimo mes del año es Diciembre: Tiene 31 días y sus signos son Sagitario y Capricornio')
    break;
    default:
      alert('Ingrese un numero del mes entre el 1 y el 12 de lo contrario estara ingresando un mes que no existe')
    break;
}