/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {

	let nombre;
	let peso;
	let sexo;
	let edad;

	let contadorF = 0;
	let acumuladorEdad = 0;
	let promedioEdad = 0;

	let mayorPesoM;
	let nombreMayor;
	let flagPeso = 0;

	for (let i = 0; i < 5; i++) {

		do {
			nombre = prompt("Ingrese nombre");
		}
		while (!(isNaN(nombre)));

		do {

			peso = parseInt(prompt("Ingrese peso en kg"));

		}
		while (!(peso >= 1 && peso <= 1000));

		do {
			sexo = prompt("Ingrese sexo: m - f");

		}
		while (!(sexo == "m" || sexo == "f"));

		do {

			edad = parseInt(prompt("Ingrese edad"));

		}
		while (!(edad >= 1 && edad <= 120));

		if(sexo=="f"){
			contadorF++;
		}

		else if (flagPeso == 0 || peso > mayorPesoM) {

			mayorPesoM = peso;
			nombreMayor = nombre;
			flagPeso = 1;
		}

		acumuladorEdad += edad;

		}

		promedioEdad = acumuladorEdad / 5;

		console.log ("Cantidad de mujeres: " + contadorF);
		console.log ("Edad promedio: " + promedioEdad);
		console.log ("Hombre mas pesado: " +nombreMayor+ " Peso: "+ mayorPesoM + " kg");

	}

