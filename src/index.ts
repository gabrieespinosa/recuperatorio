let cantidad: number = Number(prompt("Ingrese la cantidad de productos"));
let indice: number = 0;
let producto: string[] = new Array(cantidad);
let cantidadProductos: number[] = new Array(cantidad);
let precioUnitario: number[] = new Array(cantidad);

for (indice = 0; indice < cantidad; indice++) {
  producto[indice] = String(prompt("Ingrese el nombre del producto"));
  cantidadProductos[indice] = Number(
    prompt("Ingrese la cantidad del producto")
  );
  precioUnitario[indice] = Number(prompt("Ingrese el precio del producto"));
  let total: number = cantidadProductos[indice] * precioUnitario[indice];
  console.log(
    "Prod. " +
      producto[indice] +
      "- Cant. " +
      cantidadProductos[indice] +
      "- PreUn. " +
      precioUnitario[indice] +
      "- Total " +
      total
  );
}
//Función que calcula el precio total de la compra
function precioTotal(
  arreglo1: number[],
  arreglo2: number[],
  cantidad: number
): number {
  let suma: number = 0;
  for (indice = 0; indice < cantidad; indice++) {
    suma += arreglo1[indice] * arreglo2[indice];
  }
  return suma;
}
console.log(
  "Total de la Compra " +
    precioTotal(cantidadProductos, precioUnitario, cantidad)
);

function calcularPromocion(): string {
  let texto: string;
  let total: number = precioTotal(cantidadProductos, precioUnitario, cantidad);
  if (total >= 1000 && total < 2000) {
    texto = "Felicidades, participa en el sorteo de un tv led";
  } else if (total >= 2000 && total < 3000) {
    texto = "Felicidades, participa en el sorteo de una moto 0 Km";
  } else if (total >= 3000) {
    texto = "Felicidades, participa en el sorteo de un auto 0 Km";
  } else {
    texto = "Gracias por su compra";
  }
  return texto;
}

console.log(calcularPromocion());
