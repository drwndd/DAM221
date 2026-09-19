let readline = require('readline');
let teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let producto = "";
let precio = 0;
let cantidad = 0;
let total = 0;

function mostrarMenu() {
    console.log(`
        SISTEMA DE PEDIDOS
        1. Consultar productos
        2. Crear pedido
        3. Listar pedidos
        4. Salir
        `);

        teclado.question("Seleccione una opción: ", function(opcion) {

    if (opcion == "1") {
    consultarProductos();
    mostrarMenu();

    } else if (opcion == "2") {
    crearPedido();

    } else if (opcion == "3") {
    listarPedidos();
    mostrarMenu();

    } else if (opcion == "4") {
    console.log("Saliendo del sistema...");
    teclado.close();

    } else {
    console.log("Opción inválida.");
    mostrarMenu();
}

        });
}

function consultarProductos() {
    console.log(`
        PRODUCTOS DISPONIBLES
        1. Sabritas - $25
        2. Jocho - $65
        3. Matiburguer - $105
        `);
    
}
function crearPedido() {
    consultarProductos();

    teclado.question("Seleccione un producto: ", function(opcionProducto) {
        if (opcionProducto == "1") {
    producto = "Sabritas";
    precio = 25;

} else if (opcionProducto == "2") {
    producto = "Jocho";
    precio = 65;

} else if (opcionProducto == "3") {
    producto = "Matiburguer";
    precio = 105;

} else {
    console.log("Producto inválido.");
    mostrarMenu();
    return;
}

        teclado.question("Ingrese la cantidad: ", function(cantidadIngresada) {
            
            cantidad = cantidadIngresada;
            total = precio * cantidad;

            console.log(`
                PEDIDO CREADO
                producto: ${producto}
                precio unitario: $${precio}
                cantidad: ${cantidad}
                Total: $${total}
            `);

            mostrarMenu();
        });
    });
}
            function listarPedidos() {

                if (producto == "") {
                    console.log("No hay pedidos registrados.");
                } else {
                    console.log(`
                        PEDIDO GUARDADO
                        producto: ${producto}
                        precio: $${precio}
                        cantidad: ${cantidad}
                        Total: $${total}
                    `);
                }
            }
        mostrarMenu();
             
