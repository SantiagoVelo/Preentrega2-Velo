function calcularCotizacion() {
  // Obtener valores del formulario
  let edad = document.getElementById("edad").value;
  let vehiculo = document.getElementById("vehiculo").value;
  let años = document.getElementById("años").value;

  // Validar entrada
  if (edad <= 0 || años <= 0) {
    document.getElementById("resultado").innerText =
      "Por favor, ingrese valores válidos.";
    return;
  }

  // Calcular cotización base según el tipo de vehículo
  let cotizacionBase;
  switch (vehiculo) {
    case "auto":
      cotizacionBase = 500;
      break;
    case "moto":
      cotizacionBase = 300;
      break;
    case "camion":
      cotizacionBase = 700;
      break;
    default:
      cotizacionBase = 0;
  }

  // Algoritmo condicional: agregar cargos adicionales según la edad
  let cargoEdad = 0;
  if (edad < 25) {
    cargoEdad = 100; // Cargo adicional para menores de 25
  } else if (edad > 60) {
    cargoEdad = 50; // Cargo adicional para mayores de 60
  }

  // Algoritmo con ciclo: descuento por años de seguro
  let descuento = 0;
  for (let i = 1; i <= años; i++) {
    descuento += 20; // Descuento de 20 por cada año de seguro
  }

  // Calcular cotización final
  let cotizacionFinal = cotizacionBase + cargoEdad - descuento;
  if (cotizacionFinal < 0) cotizacionFinal = 0; // Asegurarse que la cotización no sea negativa

  // Mostrar resultado
  document.getElementById(
    "resultado"
  ).innerText = `La cotización del seguro es: $${cotizacionFinal}`;
}
