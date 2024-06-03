const lista_productosContainer = document.getElementById("lista_productos");
const paginacionDiv = document.getElementById("paginacion");

let datastorage;
let iterator = 1;

const rellenarProductos = () => {
  for (let index = 15 * iterator - 15; index < 15 * iterator; index++) {
    const element = datastorage[index];
    console.log(element);
    const productoHTML = `
        <div class="producto">
            <img src="${element.imagen}" alt="${element.nombre}"></img>
            <h3>${element.nombre}</h3>
            <p>Tipo: ${element.tipo}</p>
            <p>Referencia: ${element.referencia}</p>
            <p>Color: ${element.color}</p>
            <p>Precio: $${element.precio}</p>
            <p>Cantidad disponible: ${element.cantidad}</p>
            <p>Disponible: ${element.agotado ? "Agotado" : "Si"}</p>
        </div>
        `;
    lista_productosContainer.innerHTML += productoHTML;
  }
};

const cambiarIterator = (numero) => {
  iterator = numero;
  lista_productosContainer.innerHTML = "";
  rellenarProductos();
};

const rellenarPaginacion = () => {
  let producto = 0;
  let paginacion = 0;

  for (let index = 0; index < datastorage.length; index++) {
    producto += 1;

    if (producto == 15) {
      producto = 0;
      paginacion += 1;
    }

    if (paginacion * 15 < index) {
      paginacion += 1;
    }
  }

  for (let index = 1; index <= paginacion; index++) {
    let divProducto = document.createElement("div");
    divProducto.classList.add("paginacionItems");
    let parrafopaginacion = document.createElement("p");
    parrafopaginacion.innerHTML = index;
    divProducto.appendChild(parrafopaginacion);
    divProducto.onclick = () => {
      cambiarIterator(index);
    };
    paginacionDiv.appendChild(divProducto);
  }
};

const buscarProductos = async () => {
  let productos = JSON.parse(localStorage.getItem("productos")) || [];
  return productos;
};

const iniciarPagina = async () => {
  datastorage = await buscarProductos();
  rellenarProductos();
  rellenarPaginacion();
};

iniciarPagina();
