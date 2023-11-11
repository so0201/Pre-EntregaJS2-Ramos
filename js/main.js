function agregarAlCarrito(producto, precio) {
    const carrito = document.getElementById("carrito");

    const nuevoProducto = document.createElement("div");
    const parrafo = document.createElement("p");
    const botonEliminar = document.createElement("button");

    parrafo.textContent = `${producto} - $${precio}`;
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function() {
        eliminarDelCarrito(nuevoProducto);
    });

    nuevoProducto.appendChild(parrafo);
    nuevoProducto.appendChild(botonEliminar);
    
    carrito.appendChild(nuevoProducto);
}

function eliminarDelCarrito(producto) {
    const carrito = document.getElementById("carrito");
    carrito.removeChild(producto);
}