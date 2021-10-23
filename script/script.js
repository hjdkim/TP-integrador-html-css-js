// borra todo el formulario
function borrar() {
  document.getElementById("form-ticket").reset();
}

document.getElementById("borrarbtn").onclick = borrar;

// calcula el monto
function calcular() {
  let ticket = document.getElementById("categoria").value;
  let cant = document.getElementById("cantidad").value;
  let valor = 200 * cant;
  if (cant == "") {
    alert("Por favor, ingrese la cantidad de tickets.");
  }
  switch (ticket) {
    case "Estudiante":
      valor *= 0.2;
      break;
    case "Trainee":
      valor *= 0.5;
      break;
    case "Junior":
      valor *= 0.85;
      break;
    default:
      break;
  }

  document.getElementById("total").innerHTML = "Total a pagar: $ " + valor;
}

document.getElementById("resumenbtn").onclick = calcular;
