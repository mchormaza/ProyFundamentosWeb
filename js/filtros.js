let productos;
let iterator = 1;
const colorFiltro = document.getElementById("color");
const buscarBoton = document.getElementById("buscar");
const paginacionDiv = document.getElementById("paginacion");
const tbody = document.querySelector("#tabla-productos tbody");
const precioDesplegable = document.getElementById("precio");
const precioDiv = document.getElementById("numeroMinimo");
const categoriaFiltro = document.getElementById("categoria");
const cargar = document.getElementById("cargando");

const promise = (data) => {
  //como creo una promesa
  return new Promise((resolve, reject) => {
    //new promise -> declara call back -> resol y reject
    // data informacion para rellenar de las tablas
    //promesa para simular un tiempo
    cargar.style.display = "block";
    setTimeout(() => {
      if (data) {
        cargar.style.display = "none";
        resolve("resolve data"); //si el array tiene contenido pasa el filtro, sino, no lo pasa.
      } else {
        reject("reject data"); //si no hay nada dentro, rechaza la data.
      }
    }, 2000);
  });
};

precioDesplegable.oninput = () => {
  precioDiv.innerHTML = `$${precioDesplegable.value}`;
};

function mostrarProductos(productos) {
  tbody.innerHTML = "";
  for (let index = 10 * iterator - 10; index < 10 * iterator; index++) {
    const producto = productos[index];
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${producto.nombre}</td> 
            <td>${producto.tipo}</td>
            <td>${producto.referencia}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.color}</td>
            <td>$${parseInt(producto.precio) * 1000}</td>
            <td><img src="${producto.imagen}" alt="${
      producto.nombre
    }" width="100"></td>
            <td>${producto.codigo}</td>
          
        `;

    tbody.appendChild(row); //appendChild: poner dentro de la etiqueta 1 solo elemento.
  }
}

const cambiarIterator = (numero) => {
  iterator = numero;
  paginacionDiv.innerHTML = "";
  rellenarPaginacion(productos);
  mostrarProductos(productos);
};

const rellenarPaginacion = (productos) => {
  while (paginacionDiv.firstChild) {
    paginacionDiv.removeChild(paginacionDiv.firstChild);
  } //Para eliminar todos los hijos del padre.
  let producto = 0;
  let paginacion = 0;

  for (let index = 0; index < productos.length; index++) {
    producto += 1;

    if (producto == 10) {
      producto = 0;
      paginacion += 1;
    }

    if (paginacion * 10 < index) {
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

async function mostrarTodosProductos() {
  productos = await buscarProductos();
  await promise(productos);
  mostrarProductos(productos);
  rellenarPaginacion(productos);
}

mostrarTodosProductos();

const filtradoProductos = async () => {
  let productosFiltrados = await buscarProductos();
  let productoFinal = [];
  for (let index = 0; index < productos.length; index++) {
    const element = productos[index];
    if (parseInt(element.precio) * 1000 >= precioDesplegable.value) {
      console.log(element);
      productosFiltrados.push(element);
    }
  }
  productosFiltrados = productosFiltrados.filter((producto) => {
    const valorBuscado = categoriaFiltro.value.toLocaleLowerCase();
    const nombreBuscado = producto.tipo.toLowerCase();
    return nombreBuscado.includes(valorBuscado);
  });
  console.log(productosFiltrados);

  for (let index = 0; index < productosFiltrados.length; index++) {
    const element = productosFiltrados[index];
    console.log(element);
    let colores = element.color.split("-");
    let contieneColor = false;
    for (let index = 0; index < colores.length; index++) {
      const element = colores[index];
      console.log(element);
      if (element.toLowerCase() === colorFiltro.value.toLocaleLowerCase()) {
        contieneColor = true;
        break;
      }
    }
    if (contieneColor) {
      productoFinal.push(element);
    }
  }

  console.log(productoFinal);
  return productoFinal;
};

const filtrarProductos = async () => {
  productos = await filtradoProductos();
  await promise(productos); //Es una función que finalmente se convierte en una promesa
  rellenarPaginacion(productos);
  mostrarProductos(productos);
};

buscarBoton.addEventListener("click", () => {
  filtrarProductos();
});
