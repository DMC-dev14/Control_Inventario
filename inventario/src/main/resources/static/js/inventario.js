const input = document.getElementById("buscarProducto");
const list = document.getElementById("sugerenciaProductos");
let timer;

input.addEventListener("input", () => {
  clearTimeout(timer);
  const q = input.value.trim();
  if (q.length < 2) {
    list.innerHTML = "";
    return;
  }

  timer = setTimeout(async () => {
    const res = await fetch(
      `/inventario/productos/sugerencia?q=${encodeURIComponent(q)}`,
    );
    const data = await res.json();
    list.innerHTML = data.map((n) => `<option value="${n}"></option>`).join("");
  }, 300);
});

function abrirModal(boton) {
  const modal = document.getElementById("editarProductoModal");
  if (!modal) return;

  const id = boton.getAttribute("data-id");
  const nombre = boton.getAttribute("data-nombre");
  const categoria = boton.getAttribute("data-categoria");
  const sku = boton.getAttribute("data-sku");
  const stock = boton.getAttribute("data-stock");
  const precio = boton.getAttribute("data-precio");
  const descripcion = boton.getAttribute("data-descripcion");

  document.getElementById("editarId").value = id;
  document.getElementById("editarNombreProducto").value = nombre;
  document.getElementById("editarCategoriaProducto").value = categoria;
  document.getElementById("editarSkuProducto").value = sku;
  document.getElementById("editarStockProducto").value = stock;
  document.getElementById("editarPrecioProducto").value = precio;
  document.getElementById("editarDescripcionProducto").value = descripcion;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  const modal = document.getElementById("editarProductoModal");
  if (!modal) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

