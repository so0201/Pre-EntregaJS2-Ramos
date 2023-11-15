const productos = [
    { id: 1, nombre: 'Remera', precio: 2500 },
    { id: 2, nombre: 'Pantalón', precio: 4000 },
    { id: 3, nombre: 'Zapatillas', precio: 3000 },
    { id: 4, nombre: 'Gorra', precio: 1500 },
    { id: 5, nombre: 'Bufanda', precio: 1200 },
    { id: 6, nombre: 'Reloj', precio: 5000 },
    { id: 7, nombre: 'Mochila', precio: 3500 },
    { id: 8, nombre: 'Guantes', precio: 1800 },
    { id: 9, nombre: 'Lentes de sol', precio: 2000 },
    { id: 10, nombre: 'Camisa', precio: 6000 },
];

const carrito = [];

function mostrarProductosConsola() {
   console.log("Estos son los productos disponibles:");
   productos.forEach(producto => {
     console.log(`${producto.id} - Nombre: ${producto.nombre} - Precio: $${producto.precio}`);
   });
}

function agregarAlCarritoConsola(id) {
const productoElegido = productos.find(producto => producto.id === id);
    carrito.push(productoElegido);
    console.log('Producto agregado al carrito:', productoElegido);
    actualizarTotalConsola();
}

function actualizarTotalConsola() {
const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    console.log(`El total de tu carrito es: $${total}`);
}

function iniciarCompra() {
  mostrarProductosConsola();
  const idSeleccionado = parseInt(prompt("Ingresa el Numero del producto que quieres agregar al carrito (o escribe '0' para terminar la compra):"));
  if (idSeleccionado === 0) {
    console.log("Terminaste la compra.");
    actualizarTotalConsola();
  } else {
    const productoExistente = productos.find(producto => producto.id === idSeleccionado);
    if (productoExistente) {
      agregarAlCarritoConsola(idSeleccionado);
      iniciarCompra();
    } else {
      console.log("El Numero ingresado no corresponde a un producto válido. Intenta de nuevo.");
      iniciarCompra();
    }
  }
}
iniciarCompra();