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
    { nombre: "Sabritas", precio: 25 },
    { nombre: "Jocho", precio: 65 },
    { nombre: "Matiburguer", precio: 105 }
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

            let precioFinal = producto.precio - (producto.precio * producto.descuento / 100);
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

                if (pedidos.length === 0) {
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
        
             
