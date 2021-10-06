//primera parte

//pedir que de lños numeros
let numero_1 = parseInt(prompt("dame dame el primer numero mayor a cero", "1"));
let numero_2 = parseInt(prompt("dame dame el segundo numero mayor a cero", "1"));
// proceso   
let resultadoSumando = numero_1 + numero_2;
let resultadoMultiplicacion = numero_1 * numero_2;
let resultadoResta = numero_1 - numero_2;
let resultadoDivicion = numero_1 / numero_2;
let resultadoModulo = numero_1 % numero_2;

console.log(`el resultado de la suma ${resultadoSumando} , el de la multiplicacion es ${resultadoMultiplicacion}, el de la resta es ${resultadoResta}, el  resultado de la divicion es ${resultadoDivicion} y el del modulo es ${resultadoModulo}`);
document.write(`el resultado de la suma ${resultadoSumando} <hr>  el de la multiplicacion es ${resultadoMultiplicacion} <hr> el de la resta es ${resultadoResta} <hr> el  resultado de la divicion es ${resultadoDivicion} <hr> el del modulo es ${resultadoModulo}`);

//primera parte 

//segunda parte

let gradoCelsius = parseInt (prompt("ingresa la temperatura en grados Celsius", "0"));
//proceso
//kelvi
let kelvin = gradoCelsius + 273.15;
//fahrenheit
let procedimientoFahrenheit = gradoCelsius * 9/5;
let resultadoFahrenheit = procedimientoFahrenheit + 32;

console.log(`la tranformacion de ${gradoCelsius}º a kelvin es ${kelvin}K y para fahrenheit es ${resultadoFahrenheit}ºF`);
document.write(`<hr> la tranformacion de ${gradoCelsius}º <hr> kelvin = ${kelvin}k <hr>  fahrenheit = ${resultadoFahrenheit}ºf`);

//segunda parte
//tercera parte
let dia = parseInt(prompt("ingresa la cantida de dias"));
//proceso
let anios = Math.floor (dia / 365);
let semana = Math.floor ((dia % 365)/7);
let dias = Math.floor ((dia % 365)%7);

console.log(`los dias que nos diste  son años= ${anios}n semanas = ${semana}, dias = ${dias}`);
document.write(`<hr> los dias que nos diste  son años= ${anios}, semanas = ${semana}, dias = ${dias}`);
//tercera parte
//cuarta parte
let primerN = parseInt (prompt("dame un el primer numero"));
let segundoN = parseInt (prompt("dame un el segundo numero"));
let tercerN = parseInt (prompt("dame un el tercer numero"));
let cuartoN = parseInt (prompt("dame un el cuarto numero"));
let quintonN = parseInt (prompt("dame un el quinto numero"));
//PROCESO
let sumaCuarta = primerN + segundoN + tercerN + cuartoN + quintonN;
let promedio = sumaCuarta / 5;

console.log (`la suman de los numeros son ${sumaCuarta} y el promedio es ${promedio}`);
document.write(`<hr> la suman de los numeros son ${sumaCuarta} y el promedio es ${promedio} <hr>`);
//cuarta parte


