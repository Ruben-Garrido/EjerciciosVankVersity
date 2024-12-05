// Inventario de productos
let inventario = [];

// Función para agregar un producto
function agregarProducto(nombre, categoria, precio, cantidad, codigo) {
    // Validar que el código sea único
    let productoExistente = inventario.find(p => p.codigo === codigo);
    if (productoExistente) {
        console.log(`Error: Ya existe un producto con el código "${codigo}".`);
        return;
    }

    // Crear el nuevo producto
    let nuevoProducto = {
        nombre,
        categoria,
        precio,
        cantidad,
        codigo
    };

    // Agregar al inventario
    inventario.push(nuevoProducto);
    console.log(`Producto "${nombre}" agregado correctamente.`);
}

// Función para editar un producto
function editarProducto(codigo, nuevosDatos) {
    let producto = inventario.find(p => p.codigo === codigo);
    if (!producto) {
        console.log(`Error: Producto con código "${codigo}" no encontrado.`);
        return;
    }

    // Actualizar los datos del producto
    Object.assign(producto, nuevosDatos);
    console.log(`Producto "${producto.nombre}" editado correctamente.`);
}

// Función para eliminar un producto
function eliminarProducto(codigo) {
    let indice = inventario.findIndex(p => p.codigo === codigo);
    if (indice === -1) {
        console.log(`Error: Producto con código "${codigo}" no encontrado.`);
        return;
    }

    let productoEliminado = inventario.splice(indice, 1);
    console.log(`Producto "${productoEliminado[0].nombre}" eliminado correctamente.`);
}

// Función para visualizar un producto
function visualizarProducto(codigo) {
    let producto = inventario.find(p => p.codigo === codigo);
    if (!producto) {
        console.log(`Error: Producto con código "${codigo}" no encontrado.`);
        return;
    }

    console.log("......Detalles del producto:.......");
    console.log(producto);
}

// Función para visualizar todos los productos
function visualizarTodosLosProductos() {
    if (inventario.length === 0) {
        console.log("El inventario está vacío.");
        return;
    }

    console.log("Inventario completo:");
    inventario.forEach(producto => {
        console.log(`- ${producto.nombre} (Código: ${producto.codigo}) | Categoría: ${producto.categoria} | Precio: $${producto.precio} | Cantidad: ${producto.cantidad}`);
    });
}

// Llamados modificados para que los realice el usuario desde el menú interactivo:

// Función para manejar la creación de productos
function agregarProductosDePrueba() {
    agregarProducto("Camisa", "Ropa Casual", 25000, "001");
    agregarProducto("Pantalón", "Ropa Formal", 49000, "002");
    agregarProducto("Zapatos", "Calzado", 89900, "003");
}

// Menú interactivo
function menu() {
    let opcion;

    // Llamamos a agregar los productos de prueba inicialmente
    agregarProductosDePrueba();

    do {
        opcion = prompt(
            "Sistema de Inventario de Ropa\n\n" +
            "1. Agregar producto\n" +
            "2. Editar producto\n" +
            "3. Eliminar producto\n" +
            "4. Visualizar un producto\n" +
            "5. Visualizar todos los productos\n" +
            "6. Salir\n\n" +
            "Seleccione una opción:"
        );

        switch (opcion) {
            case "1":
                let nombre = prompt("Ingrese el nombre del producto:");
                let categoria = prompt("Ingrese la categoría del producto:");
                let precio = parseFloat(prompt("Ingrese el precio del producto:"));
                let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
                let codigo = prompt("Ingrese el código único del producto:");
                agregarProducto(nombre, categoria, precio, cantidad, codigo);
                break;

            case "2":
                let codigoEditar = prompt("Ingrese el código del producto a editar:");
                let nuevosDatos = {};
                if (confirm("¿Desea editar el nombre?")) nuevosDatos.nombre = prompt("Ingrese el nuevo nombre:");
                if (confirm("¿Desea editar la categoría?")) nuevosDatos.categoria = prompt("Ingrese la nueva categoría:");
                if (confirm("¿Desea editar el precio?")) nuevosDatos.precio = parseFloat(prompt("Ingrese el nuevo precio:"));
                if (confirm("¿Desea editar la cantidad?")) nuevosDatos.cantidad = parseInt(prompt("Ingrese la nueva cantidad:"));
                editarProducto(codigoEditar, nuevosDatos);
                break;

            case "3":
                let codigoEliminar = prompt("Ingrese el código del producto a eliminar:");
                eliminarProducto(codigoEliminar);
                break;

            case "4":
                let codigoVisualizar = prompt("Ingrese el código del producto a visualizar:");
                visualizarProducto(codigoVisualizar);
                break;

            case "5":
                visualizarTodosLosProductos();
                break;

            case "6":
                console.log("Saliendo del sistema de inventario. ¡Hasta luego!");
                break;

            default:
                console.log("Opción inválida. Intente de nuevo.");
        }
    } while (opcion !== "6");
}

// Ejecutar el menú
menu();

