let opcion = 3;
let producto = "Jocho";
let precio = 65;
let cantidad = 2;
let total = precio * cantidad;

function mostrarMenu(){
    console.log(`

        Sistema de Pedidos
        1. Consultar Productos
        2. Crear pedido
        3. Listar pedido
        4. Salir
    `);
}

function consultarProductos(){
    console.log(`
        Productos disponibles:
        1. Jocho $65
        2. Monster $39
        3. Chettos Flamin´ Hot $25
    `);
}

function crearPedido(){
    console.log(`
        Pedido Creado jejs
        Producto: ${producto}
        Precio: $${precio}
        Cantidad: ${cantidad}
        Total: $${total}
    `);
}

function listarPedido(){
    console.log(`
        Lista de pedidos:
        Producto: ${producto}
        Precio: $${precio}
        Cantidad: ${cantidad}
        Total: $${total}
    `);
}

mostrarMenu();

if(opcion == 1) {
    consultarProductos();
} else if(opcion == 2) {
    crearPedido();
} else if(opcion == 3) {
    listarPedido();
}
 else if(opcion == 4) {
    console.log("Programa cerrado");
}
 else {
    console.log("Opcin inválida");
} 
