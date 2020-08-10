/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let lugar;
	let temporada;
	let cantidad;

	let mayorLugar;
	let contBariloche = 0
	let contCataratas = 0;
	let contSalta = 0;

	let mayorCantidad;
	let sexoMayorCant;

	let acumInvierno = 0;

	let respuesta;

	do {

		do {

			sexo = prompt("Ingrese sexo del titular");

		}
		while (!(sexo == "m" || sexo == "f"));

		do {

			lugar = prompt("Ingrese destino (minusculas): bariloche - cataratas - salta");

		}
		while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"));

		do {

			temporada = prompt("Ingrese destino (minusculas): bariloche - cataratas - salta");

		}
		while (!(temporada == "otoño" || temporada == "invierno" || temporada == "primavera" || temporada == "verano"));

		do {

			cantidad = parseInt (prompt("Ingrese cantidad de personas"));

		}
		while ((cantidad <= 0));
		respuesta = prompt("¿Agregar otra estadía?");
	}
	
	while (respuesta == "si");





}
