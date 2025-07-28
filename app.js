let amigos = [];

function agregarAmigo() {
    // Obtiene el valor del input y elimina espacios en blanco
    let nombre = document.getElementById('amigo').value.trim();

    // Verifica si el nombre no está vacío y no existe en la lista
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        mostrarListaAmigos();
    } else {
        // Si el nombre ya existe
        if (nombre) {
            alert("El nombre ya existe en la lista.");
        } else {
            alert("El nombre no puede estar vacío.");
        }
    }
    // Limpia el campo después de intentar agregar
    document.getElementById('amigo').value = "";
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
