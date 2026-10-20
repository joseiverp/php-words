const selectCategorias = document.createElement("select");
selectCategorias.id = "selector-categorias";

const opcionTodas = document.createElement("option");
opcionTodas.value = "todas";
opcionTodas.textContent = "todas";
selectCategorias.appendChild(opcionTodas);

const categorias = [];
PALABRAS.forEach(function (item) {
  if (!categorias.includes(item.categoria)) {
    categorias.push(item.categoria);
  }
});

categorias.forEach(function (cat) {
  const opcion = document.createElement("option");
  opcion.value = cat;
  opcion.textContent = cat;
  selectCategorias.appendChild(opcion);
});

selectCategorias.addEventListener("change", function () {
  filtros.categoria = selectCategorias.value;
  aplicarFiltros();
});

document.getElementById("controles").appendChild(selectCategorias);
