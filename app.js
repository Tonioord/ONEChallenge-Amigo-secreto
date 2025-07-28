// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []



function agregarAmigo(nombre) {
    
    // Obtiene el valor del input y elimina espacios en blanco al inicio y al final
    let nombre = document.getElementById('amigo').value.trim();

    // Verifica si el nombre no está vacío y no existe en la lista
    if (nombre && !amigos.includes(nombre)) {
    amigos.push(nombre);
    mostrarListaAmigos();

  } else {
    // Si el nombre es inválido o ya existe, no se agrega
        if (nombre) {
        console.log("El nombre ya existe en la lista.");
        }
        else{
            alert("El nombre no puede estar vacío.");
    }
  }
      // Limpia el campo después de agregar
    document.getElementById('amigo').value = "";
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}
