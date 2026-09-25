let readline = require('readline');

let teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let producto = "";
let precio = 0;
let cantidad = 0;
let total = 0;

let productos = [
    { nombre: "Sabritas", precio: 25, descuento: 10, disponible: true },
    { nombre: "Jocho", precio: 65, descuento: 15, disponible: true },
    { nombre: "Matiburguer", precio: 105, descuento: 20, disponible: false }
];

let pedidos = [];

function mostrarMenu() {
    console.log(`
        SISTEMA DE PEDIDOS
        1. Consultar productos
        2. Crear pedido
        3. Listar pedidos
        4. Ver promociones
        5. Salir
        6. Cancelar pedido
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
            consultarPromociones();
            mostrarMenu();

        } else if (opcion == "5") {
            console.log("Saliendo");
            teclado.close();

        } else if (opcion == "6") {
            cancelarPedido();

        } else {
            console.log("Opción inválida.");
            mostrarMenu();
        }
    });
}

function consultarProductos() {
    console.log(`
        PRODUCTOS DISPONIBLES
    `);

    productos.forEach(function(producto, i) {
        if (producto.disponible == true) {
            console.log(
                (i + 1) + ". " +
                producto.nombre +
                " - $" + producto.precio
            );
        } else {
            console.log(
                (i + 1) + ". " +
                producto.nombre +
                " - No disponible"
            );
        }
    });
}

function consultarPromociones() {
    console.log(`
        Promociones disponibles
    `);

    let promociones = productos.map(function(producto) {
        let precioFinal =
            producto.precio -
            (producto.precio * producto.descuento / 100);

        return precioFinal;
    });

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].disponible == true) {
            console.log(`
                Producto: ${productos[i].nombre}
                Precio original: $${productos[i].precio}
                Descuento: ${productos[i].descuento}%
                Precio final: $${promociones[i]}
            `);
        }
    }
}

function crearPedido() {
    consultarProductos();

    teclado.question("Seleccione un producto: ", function(opcionProducto) {
        let indice = Number(opcionProducto) - 1;

        if (
            opcionProducto.trim() == "" ||
            !Number.isInteger(indice) ||
            indice < 0 ||
            indice >= productos.length
        ) {
            console.log("Producto inválido.");
            mostrarMenu();
            return;
        }

        if (productos[indice].disponible == false) {
            console.log("Producto no disponible.");
            mostrarMenu();
            return;
        }

        producto = productos[indice].nombre;
        precio = productos[indice].precio;

        teclado.question("Ingrese la cantidad: ", function(cantidadIngresada) {
            cantidad = Number(cantidadIngresada);

            if (
                cantidadIngresada.trim() == "" ||
                !Number.isInteger(cantidad) ||
                cantidad <= 0
            ) {
                console.log("Cantidad inválida.");
                mostrarMenu();
                return;
            }

            let subtotal = precio * cantidad;
            let descuento =
                subtotal * productos[indice].descuento / 100;

            total = subtotal - descuento;

            let pedido = {
                producto: producto,
                precio: precio,
                cantidad: cantidad,
                descuento: descuento,
                total: total,
                estado: "Pedido recibido"
            };

            pedidos.push(pedido);

            console.log(`
                PEDIDO CREADO

                Pedido: ${pedidos.length}
                Producto: ${producto}
                Precio unitario: $${precio}
                Cantidad: ${cantidad}
                Subtotal: $${subtotal}
                Descuento: $${descuento}
                Total: $${total}
                Estado: ${pedido.estado}
            `);

            actualizarEstado(pedido, pedidos.length);
            mostrarMenu();
        });
    });
}

function actualizarEstado(pedido, numeroPedido) {
    setTimeout(function() {
        if (pedido.estado == "Cancelado") {
            return;
        }

        pedido.estado = "Preparando...";
        console.log(`\nPedido ${numeroPedido}: ${pedido.estado}`);

        setTimeout(function() {
            if (pedido.estado == "Cancelado") {
                return;
            }

            pedido.estado = "Empacando...";
            console.log(`\nPedido ${numeroPedido}: ${pedido.estado}`);

            setTimeout(function() {
                if (pedido.estado == "Cancelado") {
                    return;
                }

                pedido.estado = "Pedido entregado";
                console.log(`\nPedido ${numeroPedido}: ${pedido.estado}`);
            }, 5000);

        }, 5000);

    }, 5000);
}

function listarPedidos() {
    if (pedidos.length == 0) {
        console.log("No hay pedidos registrados.");
    } else {
        console.log(`
            PEDIDOS REGISTRADOS
        `);

        pedidos.forEach(function(pedido, i) {
            console.log(`
                Pedido ${i + 1}

                Producto: ${pedido.producto}
                Precio: $${pedido.precio}
                Cantidad: ${pedido.cantidad}
                Descuento: $${pedido.descuento}
                Total: $${pedido.total}
                Estado: ${pedido.estado}
            `);
        });
    }
}

function cancelarPedido() {
    if (pedidos.length == 0) {
        console.log("No hay pedidos para cancelar.");
        mostrarMenu();
        return;
    }

    listarPedidos();

    teclado.question("Número del pedido que desea cancelar: ", function(numero) {
        let indice = Number(numero) - 1;

        if (
            numero.trim() == "" ||
            !Number.isInteger(indice) ||
            indice < 0 ||
            indice >= pedidos.length
        ) {
            console.log("Número de pedido inválido.");

        } else if (pedidos[indice].estado == "Pedido entregado") {
            console.log("El pedido ya fue entregado.");

        } else if (pedidos[indice].estado == "Cancelado") {
            console.log("El pedido ya está cancelado.");

        } else {
            pedidos[indice].estado = "Cancelado";
            console.log(`Pedido ${indice + 1}: Cancelado`);
        }

        mostrarMenu();
    });
}

mostrarMenu();