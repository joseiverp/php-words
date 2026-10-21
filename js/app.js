let filtros = {
  texto: "",
  categoria: "todas"
};

function aplicarFiltros() {
  const lista = document.getElementById("lista");
  const contador = document.getElementById("contador");

  const textoBusqueda = filtros.texto.toLowerCase().trim();
  const categoriaSeleccionada = filtros.categoria;

  const palabrasFiltradas = PALABRAS.filter(function (item) {
    const coincideTexto = item.palabra.toLowerCase().includes(textoBusqueda) ||
                          item.descripcion.toLowerCase().includes(textoBusqueda);
    const coincideCategoria = categoriaSeleccionada === "todas" || item.categoria === categoriaSeleccionada;
    return coincideTexto && coincideCategoria;
  });

  lista.innerHTML = "";

  palabrasFiltradas.forEach(function (item) {
    const li = document.createElement("li");
    li.className = "tarjeta";

    // textContent evita interpretar datos de las palabras como HTML ejecutable.
    const cabecera = document.createElement("div");
    cabecera.className = "tarjeta-cabecera";

    const palabra = document.createElement("code");
    palabra.className = "palabra";
    palabra.textContent = item.palabra;

    const categoria = document.createElement("span");
    categoria.className = "categoria";
    categoria.textContent = item.categoria;

    const descripcion = document.createElement("p");
    descripcion.className = "descripcion";
    descripcion.textContent = item.descripcion;

    cabecera.append(palabra, categoria);
    li.append(cabecera, descripcion);
    lista.appendChild(li);
  });

  contador.textContent = "Mostrando " + palabrasFiltradas.length + " de " + PALABRAS.length + " palabras";
}

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("titulo").textContent = APP_TITULO;
  document.getElementById("subtitulo").textContent = APP_SUBTITULO;
  document.getElementById("version").textContent = APP_VERSION;
  aplicarFiltros();
});
