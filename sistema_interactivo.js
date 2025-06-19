//funcion para el nombre 
function obtenerNombre() {
  let nombre = prompt("Ingresa tu nombre");
   // Este ciclo while se va a repetir hasta que los datos del nombre esten correctamente 
  while (
    !nombre ||
    nombre.trim() === "" ||
    !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)
  ) {
    nombre = prompt("Tu nombre no puede llegar numero, intantalo de nuevo.");
  }
  return nombre.trim();
}

// Función para obtener y validar la edad
function obtenerEdad() {
  let edadTexto = prompt("Ingresa tu edad por favor.");
  let edad = Number(edadTexto);

  if (isNaN(edad)) {
    console.error("Por favor, ingresa una edad válida.");
    return null;
  }

  return edad;
}

// Función para mostrar el mensaje adecuado según la edad
function mostrarMensaje(nombre, edad) {
  if (edad < 18) {
    let mensaje = `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`;
    alert(mensaje);
    console.log(mensaje);
  } else {
    let mensaje = `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`;
    alert(mensaje);
    console.log(mensaje);
  }
}

// Programa principal
let nombre = obtenerNombre();
let edad = obtenerEdad();

if (edad !== null) {
  mostrarMensaje(nombre, edad);
}
