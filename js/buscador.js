const inputBuscador = document.createElement("input");
inputBuscador.type = "text";
inputBuscador.id = "buscador";
inputBuscador.placeholder = "Buscar palabra o descripción...";

inputBuscador.addEventListener("input", function () {
  filtros.texto = inputBuscador.value;
  aplicarFiltros();
});

document.getElementById("controles").appendChild(inputBuscador);
