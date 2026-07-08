const input = document.getElementById("buscarProducto");
const list = document.getElementById("sugerenciaProductos");
let timer;
document.querySelectorAll(".contador-producto").forEach((contador) => {
  const btnRestar = contador.querySelector(".btn-restar");
  const btnSumar = contador.querySelector(".btn-sumar");
  const cantidad = contador.querySelector(".cantidad-producto");

  btnSumar.addEventListener("click", () => {
    cantidad.textContent = Number(cantidad.textContent) + 1;
  });

  btnRestar.addEventListener("click", () => {
    const valorActual = Number(cantidad.textContent);

    if (valorActual > 0) {
      cantidad.textContent = valorActual - 1;
    }
  });
});
input.addEventListener("input", () => {
  clearTimeout(timer);
  const q = input.value.trim();
  if (q.length < 2) {
    list.innerHTML = "";
    return;
  }

  timer = setTimeout(async () => {
    const res = await fetch(`/catalogo/sugerencia?q=${encodeURIComponent(q)}`);
    const data = await res.json();
    list.innerHTML = data.map((n) => `<option value="${n}"></option>`).join("");
  }, 300);
});
