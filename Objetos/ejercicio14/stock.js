// Arreglo de productos
let productos = [
    { nombre: "Audifonos", stock: 20, umbral: 10 },
    { nombre: "celulares", stock: 8, umbral: 15 },
    { nombre: "Computadores", stock: 50, umbral: 20 },
    { nombre: "Televisores", stock: 15, umbral: 5 },
];

// Función para verificar el stock
function verificarStock() {
    console.log("Verificando el stock...");
    productos.forEach(producto => {
        if (producto.stock < producto.umbral) {
            console.log(`Alerta: El stock de "${producto.nombre}" está bajo. Stock actual: ${producto.stock}, Umbral: ${producto.umbral}`);
        }
    });
}

// Función para actualizar el stock
function actualizarStock(nombreProducto, cantidad) {
    let producto = productos.find(produ => produ.nombre === nombreProducto);

    if (!producto) {
        console.log(`Error: Producto "${nombreProducto}" no encontrado.`);
        return;
    }

    producto.stock += cantidad;

    console.log(`El stock de "${producto.nombre}" se actualizó correctamente. Nuevo stock: ${producto.stock}`);
}

// LLamados
verificarStock(); // Muestra alertas iniciales

actualizarStock("celulares", -5); // Reduce el stock de "celulares"
verificarStock(); // Verifica el stock nuevamente

actualizarStock("Computadores", 10); // Aumenta el stock de "Computadores"
verificarStock(); 

//actualizarStock("Tabletas", 10); // Producto no encontrado

