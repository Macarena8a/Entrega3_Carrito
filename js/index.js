const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en catalogo.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoItem = document.createElement("div");
    nuevoItem.classList = "tarjeta-producto"
    nuevoItem.innerHTML = `
    <img src="${producto.thumbnail}" alt="item1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <p>${producto.description}</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevoItem);
    nuevoItem.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(catalogo);