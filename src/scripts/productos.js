// ========================================
// VARIABLES GLOBALES
// ========================================
let todosLosProductos = []; // Aquí guardamos todos los productos del JSON

// ========================================
// 1. CARGAR PRODUCTOS AL INICIAR
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  cargarProductos();
  configurarEventos();
});

// ========================================
// 2. CARGAR PRODUCTOS DESDE EL JSON
// ========================================
function cargarProductos() {
  fetch("./data/productos.json")
    .then((respuesta) => respuesta.json())
    .then((productos) => {
      todosLosProductos = productos;
      llenarCategorias();
      mostrarProductos(todosLosProductos);
    })
    .catch((error) => console.error("Error:", error));
}

// ========================================
// 3. MOSTRAR PRODUCTOS EN LA PÁGINA
// ========================================
function mostrarProductos(productos, textoBuscado = "") {
  const contenedor = document.getElementById("productos-grid");
  contenedor.innerHTML = ""; // Limpiar

  // IF: Si no hay productos
  if (productos.length === 0) {
    if (textoBuscado) {
      contenedor.innerHTML = '<p class="no-results">❌ No se tiene este producto</p>';
    } else {
      contenedor.innerHTML = '<p class="no-results">No hay productos</p>';
    }
    return;
  }

  // ELSE: Si hay productos, mostrarlos
  productos.forEach((producto) => {
    const tarjeta = crearTarjetaProducto(producto);
    contenedor.appendChild(tarjeta);
  });
}

// ========================================
// 4. CREAR TARJETA DE PRODUCTO
// ========================================
function crearTarjetaProducto(producto) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "producto-card";
  tarjeta.innerHTML = `
    <img src="./${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
    <h2>${producto.nombre}</h2>
    <p class="categoria">${producto.categoria}</p>
    <p class="precio">S/ ${producto.precio.toFixed(2)}</p>
    <p class="descripcion">${producto.descripcion || ""}</p>
  `;
  return tarjeta;
}

// ========================================
// 5. LLENAR SELECT DE CATEGORÍAS
// ========================================
function llenarCategorias() {
  const select = document.getElementById("category-filter");
  
  // Obtener categorías únicas
  const categorias = [...new Set(todosLosProductos.map((p) => p.categoria))];
  categorias.sort();

  // Agregar cada categoría al select
  categorias.forEach((categoria) => {
    const opcion = document.createElement("option");
    opcion.value = categoria;
    opcion.textContent = categoria;
    select.appendChild(opcion);
  });
}

// ========================================
// 6. BUSCAR Y FILTRAR PRODUCTOS
// ========================================
function buscarYFiltrar() {
  const inputBusqueda = document.getElementById("search-input");
  const selectCategoria = document.getElementById("category-filter");

  const textoBuscado = inputBusqueda.value.toLowerCase();
  const categoriaSeleccionada = selectCategoria.value;

  let productosFiltrados = todosLosProductos;

  // Filtrar por categoría (si hay una seleccionada)
  if (categoriaSeleccionada) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.categoria === categoriaSeleccionada
    );
  }

  // Filtrar por nombre (si hay texto buscado)
  if (textoBuscado) {
    productosFiltrados = productosFiltrados.filter((producto) =>
      producto.nombre.toLowerCase().includes(textoBuscado)
    );
  }

  // Mostrar resultados
  mostrarProductos(productosFiltrados, textoBuscado);
}

// ========================================
// 7. CONFIGURAR EVENTOS
// ========================================
function configurarEventos() {
  const inputBusqueda = document.getElementById("search-input");
  const selectCategoria = document.getElementById("category-filter");

  inputBusqueda.addEventListener("input", buscarYFiltrar);
  selectCategoria.addEventListener("change", buscarYFiltrar);
}
