/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {

  let marca;
  let precio;
  let peso;
  let tipo;

  let acumuladorPeso = 0;
  let mayorLiquido;
  let marcaMayor;
  let menorSolido;
  let marcaMenor;

  let flagLiquido = 0;
  let flagSolido = 0;

  let respuesta;


  do {


		do {
			marca = prompt("Ingrese marca");
		}
    while (!(isNaN(marca)));
    
    do {

      precio = parseFloat(prompt("Ingrese precio"));
    }

    while (precio<=0);

		do {

			peso = parseInt(prompt("Ingrese peso en kg"));

		}
		while (!(peso >= 1 && peso <= 1000));

		do {
			tipo = prompt("Ingrese tipo: solido - liquido");

		}
    while (!(tipo == "solido" || tipo == "liquido"));
    
    acumuladorPeso += peso;

    if (tipo=="liquido" && flagLiquido ==0 || precio > mayorLiquido){

      mayorLiquido = precio;
      marcaMayor = marca;
      flagLiquido = 1;

    }

    if (tipo=="solido" && flagSolido == 0 || precio < menorSolido){

      menorSolido = precio;
      marcaMenor = marca;
      flagSolido = 1;

    }

    respuesta = (prompt("¿Agregar otro producto? si/no"));
  }

  while (respuesta == "si");

  console.log("Peso total de la compra: " + acumuladorPeso + " kg");

  if (flagLiquido != 0){

    console.log ("Marca del producto líquido mas caro: "+ marcaMayor + " precio: " + mayorLiquido);
  }

  else {
    console.log("No se registraron productos líquidos");
  }

  if (flagSolido != 0) {
    console.log ("Marca del producto sólido más barato: " + marcaMenor + " precio: " + menorSolido);
  }



}
