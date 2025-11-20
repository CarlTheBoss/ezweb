document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productos-grid");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  let allProducts = [];

  // 1. Cargar productos desde el JSON
  fetch("../data/productos.json")
    .then((response) => response.json())
    .then((data) => {
      allProducts = data;
      populateCategories(allProducts);
      renderProducts(allProducts);
    })
    .catch((error) => console.error("Error al cargar los productos:", error));

  // 2. Función para renderizar los productos en el HTML
  function renderProducts(products, searchTerm = "") {
    productGrid.innerHTML = ""; // Limpiar la vista actual
    
    // Condicional IF/ELSE: Si no hay productos
    if (products.length === 0) {
      // Si el usuario buscó algo específico, mostrar mensaje personalizado
      if (searchTerm) {
        productGrid.innerHTML = '<p class="no-results">❌ No se tiene este producto</p>';
      } else {
        productGrid.innerHTML = '<p class="no-results">No se encontraron productos.</p>';
      }
      return;
    }

    // Si hay productos, mostrarlos
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "producto-card";
      productCard.innerHTML = `
                <img src="../${product.imagen}" alt="${product.nombre}" class="producto-imagen">
                <h2>${product.nombre}</h2>
                <p class="categoria">${product.categoria}</p>
                <p class="precio">S/ ${product.precio.toFixed(2)}</p>
                <p class="descripcion">${product.descripcion || ''}</p>
            `;
      productGrid.appendChild(productCard);
    });
  }

  // 3. Poblar el filtro de categorías dinámicamente
  function populateCategories(products) {
    const categories = [...new Set(products.map((p) => p.categoria))];
    categories.sort(); // Ordenar alfabéticamente
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }

  // 4. Función para filtrar y buscar
  function filterAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    let filteredProducts = allProducts;

    // Filtrar por categoría
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.categoria === selectedCategory
      );
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.nombre.toLowerCase().includes(searchTerm)
      );
    }

    // Pasar el término de búsqueda para mostrar mensaje personalizado
    renderProducts(filteredProducts, searchTerm);
  }

  // 5. Añadir Event Listeners a los inputs
  searchInput.addEventListener("input", filterAndSearch);
  categoryFilter.addEventListener("change", filterAndSearch);
});
