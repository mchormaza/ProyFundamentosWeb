let formulario = document.getElementById("formPdto");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let tipo = document.getElementById("tipo").value;
  let referencia = document.getElementById("referencia").value;
  let cantidad = document.getElementById("cantidad").value;
  let color = document.getElementById("color").value;
  let precio = document.getElementById("precio").value;
  let imagen = document.getElementById("imagen").value;

  if (!validarCodigoProducto(referencia)) {
  }

  switch (imagen) {
    case "imagen1":
      imagen =
        "https://www.volevarxiaomi.com.br/wp-content/uploads/2021/02/acessorios-celular-1536x960.jpg";
      break;

    case "imagen2":
      break;

    case "imagen3":
      break;

    case "imagen4":
      break;

    case "imagen5":
      break;

    case "imagen6":
      break;

    case "imagen7":
      break;

    case "imagen8":
      break;

    case "imagen9":
      break;

    case "imagen1":
      break;

    default:
      break;
  }

  const nuevoProducto = {
    nombre: nombre,
    tipo: tipo,
    referencia: referencia,
    cantidad: cantidad,
    color: color,
    precio: precio,
    imagen: imagen,
    codigo: codigo,
  };
  console.log(nuevoProducto);

  añadirProducto(nuevoProducto);
});

const validarCodigoProducto = (code) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(code);
};

const añadirProducto = (productoNuevo) => {
  let productos = JSON.parse(localStorage.getItem("productos")) || [];

  productos.push(productoNuevo);

  localStorage.setItem("productos", JSON.stringify(productos));
};
