const inputBuscador = document.createElement("input");
// El tipo search ofrece controles de búsqueda nativos y una etiqueta accesible.
inputBuscador.type = "search";
inputBuscador.id = "buscador";
inputBuscador.placeholder = "Buscar palabra o descripción...";
inputBuscador.setAttribute("aria-label", "Buscar palabra o descripción");

inputBuscador.addEventListener("input", function () {
  filtros.texto = inputBuscador.value;
  aplicarFiltros();
});

document.getElementById("controles").appendChild(inputBuscador);
