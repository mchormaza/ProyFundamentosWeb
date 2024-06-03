//const fs = require('fs');

// Datos de productos electrónicos
const productos = [
  {
    nombre: "CASE SPACE",
    tipo: "Estuche",
    referencia:
      "Xs, Xr, Xs max, 11, 11 pro, 11 pro Max, 12/12 pro, 12 pro Max, 13/14, 13 pro, 13 pro Max, 14 pro, 14 pro max, 15, 15 pro, 15 pro max, Note 20 ultra, S23 ultra, 10C, 9A, 12C, Edge 40",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Transparente",
    precio: 25.0,
    imagen: "/imagenes/img1.jpeg",
    codigo: "0001",
  },

  {
    nombre: "CASE OSITO",
    tipo: "Estuche",
    referencia: "iPhone, Xr, 7 plus, 11, 13, 14",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Blanco - Rosa",
    precio: 25.0,
    imagen: "/imagenes/C2.jpeg",
    codigo: "0002",
  },

  {
    nombre: "CASE CADENA",
    tipo: "Estuche",
    referencia:
      "A12, A13, Note 10, A14, A51, Moto g30, A34, E22i, G13, Note 12, A22 4G, Y9 prime, E30/e40, Note 9, E13 , Note 8",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Rosa",
    precio: 25.0,
    imagen: "/imagenes/C3.jpeg",
    codigo: "0003",
  },

  {
    nombre: "CASE ACUARIO + CADENA",
    tipo: "Estuche",
    referencia:
      "S21, fe, A12, A13, A24, A34, S20 fe, A21S, Note 12, A14, Note 8, 12C",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Transparente",
    precio: 25.0,
    imagen: "/imagenes/C4.jpeg",
    codigo: "0004",
  },

  {
    nombre: "CASE PIEDRAS",
    tipo: "Estuche",
    referencia:
      "S21 fe, A12, A13, A24, A34, S20 fe, A21S, Note 12, A14, Note 8, 12C",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Negro-Azul-Plateado-Morado-Rosa-Amarillo",
    precio: 25.0,
    imagen: "/imagenes/C5.jpeg",
    codigo: "0005",
  },

  {
    nombre: "CASE LENTES",
    tipo: "Estuche",
    referencia: "13 pro Max, 13/14, 14/15 plus",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Rosa-Blanco-Azul",
    precio: 25.0,
    imagen: "/imagenes/C6.jpeg",
    codigo: "0006",
  },

  {
    nombre: "CASE LINX",
    tipo: "Estuche",
    referencia: "A05, A15, A05S, Redmi A3, Note 13 pro, 13C, A14, A24",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Cafe-Azul-Morado",
    precio: 25.0,
    imagen: "/imagenes/C7.jpeg",
    codigo: "0007",
  },

  {
    nombre: "CASE ASTRONAUTA",
    tipo: "Estuche",
    referencia: "XS MAX, 12, 12 pro, 13, 13 pro, 14, 14 pro, 14 pro Max ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Plateado-Azul-Morado-Dorado",
    precio: 15.0,
    imagen: "/imagenes/C8.jpeg",
    codigo: "0008",
  },

  {
    nombre: "CASE OREJITAS",
    tipo: "Estuche",
    referencia:
      "Hot30 play, S23 fe, Spark 10pro, Reno 10 5G, Moto g84, Spark GO 2024, 15 pro, 15 pro max, 14 pro max ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Rosa-Azul-Amarillo",
    precio: 20.0,
    imagen: "/imagenes/C9.jpeg",
    codigo: "0009",
  },

  {
    nombre: "CASE OSO",
    tipo: "Estuche",
    referencia: "15, 15 pro, 15 pro Max, 11 pro Max, Moto g30 ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Cafe-Azul-Morado",
    precio: 20.0,
    imagen: "/imagenes/C10.jpeg",
    codigo: "0010",
  },

  {
    nombre: "CASE ANILLO",
    tipo: "Estuche",
    referencia: "iPhone 15, iPhone11, iPhone 15 pro, Redmi 12, A21S, Note 12",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Rojo-Azul-Morado-Blanco-Negro",
    precio: 30.0,
    imagen: "/imagenes/C11.jpeg",
    codigo: "0011",
  },

  {
    nombre: "CASE GUMI",
    tipo: "Estuche",
    referencia:
      "13C, A15, Moto g84, Spark 10 pro, Hot 30 play, S23 fe, Reno 10, Spark go 2024, 14 pro Max, 15 pro Max, 15 pro",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Cafe-Azul-Morado",
    precio: 30.0,
    imagen: "/imagenes/C12.jpeg",
    codigo: "0012",
  },

  {
    nombre: "CASE SPACE MATTE",
    tipo: "Estuche",
    referencia:
      "11 pro Max, Note 11, S23 ultra, S22 ultra, S20 fe, Moto g30, Note 12 ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Blanco-Negro",
    precio: 22.0,
    imagen: "/imagenes/C13.jpeg",
    codigo: "0013",
  },

  {
    nombre: "CASE OSO CRISTAL",
    tipo: "Estuche",
    referencia: "Moto g54, Moto g84, iPhone 15, iPhone 15 pro, 11 pro Max ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Multicolor",
    precio: 30.0,
    imagen: "/imagenes/C14.jpeg",
    codigo: "0014",
  },

  {
    nombre: "CASE MAGSAFE",
    tipo: "Estuche",
    referencia:
      "11, 11 pro, 11 pro Max, 12/12pro, 12 pro Max, 13 pro Max, 13 pro, 13, 14 pro max, 14 pro , 14, 15 pro max, 15 pro, 15 ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Rosa-Azul",
    precio: 30.0,
    imagen: "/imagenes/C15.jpeg",
    codigo: "0015",
  },

  {
    nombre: "CASE JUN",
    tipo: "Estuche",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul - Morado - Blanco - Negro",
    precio: 35.0,
    imagen: "/imagenes/C16.jpeg",
    codigo: "0016",
  },

  {
    nombre: "CASE BEAR",
    tipo: "Estuche ",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Multicolor",
    precio: 34.0,
    imagen: "/imagenes/C17.jpg",
    codigo: "0017",
  },

  {
    nombre: "CASE STARBUCKS",
    tipo: "Estuche ",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Multicolor",
    precio: 34.0,
    imagen: "/imagenes/C18.jpg",
    codigo: "0018",
  },

  {
    nombre: "CASE FLOWER ",
    tipo: "Estuche ",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Multicolor",
    precio: 34.0,
    imagen: "/imagenes/C19.jpg",
    codigo: "0019",
  },

  {
    nombre: "CASE GAME",
    tipo: "Estuche ",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Negro",
    precio: 34.0,
    imagen: "/imagenes/C20.jpg",
    codigo: "0020",
  },

  {
    nombre: "CASE FENDI",
    tipo: "Estuche ",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Multicolor",
    precio: 34.0,
    imagen: "/imagenes/C21.jpg",
    codigo: "0021",
  },

  {
    nombre: "CASE NOT RULES ",
    tipo: "Estuche ",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Gris",
    precio: 34.0,
    imagen: "/imagenes/C22.jpg",
    codigo: "0022",
  },

  {
    nombre: "CASE LOU ",
    tipo: "Estuche ",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Multicolor",
    precio: 35.0,
    imagen: "/imagenes/C23.jpg",
    codigo: "0023",
  },

  {
    nombre: "CASE COLORS ",
    tipo: "Estuche",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Multicolor",
    precio: 35.0,
    imagen: "/imagenes/C24.jpg",
    codigo: "0024",
  },

  {
    nombre: "CASE @RBRICK",
    tipo: "Estuche",
    referencia:
      "15, 15 pro, 15 pro Max, 14 / 13, 14 pro, 14 pro Max, 13 pro Max, 11 pro Max, 12/ 12 pro ",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Multicolor",
    precio: 34.0,
    imagen: "/imagenes/C25.jpg",
    codigo: "0025",
  },
  {
    nombre: "DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 3, Pro, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Blanco-Negro",
    precio: 32.0,
    imagen: "/imagenes/A26.jpeg",
    codigo: "0026",
  },

  {
    nombre: "DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 3-Pro-Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Blanco-Negro",
    precio: 36.0,
    imagen: "/imagenes/A27.jpeg",
    codigo: "0027",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 3",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Unico",
    precio: 36.0,
    imagen: "/imagenes/A28.jpg",
    codigo: "0028",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 2-Pro-Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Blanco-Negro",
    precio: 36.0,
    imagen: "/imagenes/A29.jpg",
    codigo: "0029",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 3, Pro, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Negro",
    precio: 36.0,
    imagen: "/imagenes/A30.jpg",
    codigo: "0030",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 3",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Rosa",
    precio: 36.0,
    imagen: "/imagenes/A31.jpg",
    codigo: "0031",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 1",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Rosa",
    precio: 36.0,
    imagen: "/imagenes/A32.jpg",
    codigo: "0032",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 2",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Rosa",
    precio: 32.0,
    imagen: "/imagenes/A33.jpg",
    codigo: "0033",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 3-Pro",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Naranja",
    precio: 32.0,
    imagen: "/imagenes/A34.jpg",
    codigo: "0034",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 2-Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Blanco",
    precio: 32.0,
    imagen: "/imagenes/CR35.jpg",
    codigo: "0035",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie2-Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Cafe",
    precio: 32.0,
    imagen: "/imagenes/CR36.jpeg",
    codigo: "0036",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 2-Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Blanco, Negro",
    precio: 32.0,
    imagen: "/imagenes/CR37.jpeg",
    codigo: "0037",
  },

  {
    nombre: " DISEÑOS AIR PODS ",
    tipo: "Audifonos",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Blanco-Negro",
    precio: 32.0,
    imagen: "/imagenes/CR38.jpeg",
    codigo: "0038",
  },

  {
    nombre: " DISEÑOS CHARGERS ",
    tipo: "Cargadores",
    referencia: "Serie 2 - Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Blanco-Negro",
    precio: 28.0,
    imagen: "/imagenes/CR39.jpeg",
    codigo: "0039",
  },

  {
    nombre: " DISEÑOS CHARGERS ",
    tipo: "Cargadores",
    referencia: "Serie 2-Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Morado",
    precio: 27.0,
    imagen: "/imagenes/CR40.jpeg",
    codigo: "0040",
  },

  {
    nombre: " DISEÑOS CHARGERS ",
    tipo: "Cargadores",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Blanco-Negro-Amarrilo-Gris",
    precio: 27.0,
    imagen: "/imagenes/CR41.jpeg",
    codigo: "00041",
  },

  {
    nombre: " DISEÑOS PINES ",
    tipo: "Pines",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Rosa-Amariilo-Blanco-Negro",
    precio: 5.0,
    imagen: "/imagenes/P42.jpeg",
    codigo: "00042",
  },

  {
    nombre: " DISEÑOS PINES ",
    tipo: "Pines",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Blanco",
    precio: 5.0,
    imagen: "/imagenes/P43.jpeg",
    codigo: "00043",
  },

  {
    nombre: " DISEÑOS PINES ",
    tipo: "Pines",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Blanco-Negro",
    precio: 5.0,
    imagen: "/imagenes/P44.jpeg",
    codigo: "00044",
  },

  {
    nombre: " DISEÑOS PINES ",
    tipo: "Pines",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Blanco-Rosa",
    precio: 5.0,
    imagen: "/imagenes/P45.jpeg",
    codigo: "00045",
  },

  {
    nombre: " DISEÑOS PINES ",
    tipo: "Pines",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Azul-Morado-Blanco-Negro",
    precio: 5.0,
    imagen: "/imagenes/P46.jpg",
    codigo: "00046",
  },

  {
    nombre: " COMPUTER CASE ",
    tipo: "Estuches Computador",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Unico",
    precio: 45.0,
    imagen: "/imagenes/CM47.jpg",
    codigo: "00047",
  },

  {
    nombre: " COMPUTER CASE ",
    tipo: "Estuches Computador",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Unico",
    precio: 40.0,
    imagen: "/imagenes/CM48.jpg",
    codigo: "00048",
  },

  {
    nombre: " COMPUTER CASE ",
    tipo: "Estuches Computador",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Unico",
    precio: 40.0,
    imagen: "/imagenes/CM49.jpg",
    codigo: "00049",
  },

  {
    nombre: " COMPUTER CASE ",
    tipo: "Estuches Computador",
    referencia: "Serie 2, Pro 2G",
    cantidad: Math.floor(Math.random() * 20) + 1,
    color: "Unico",
    precio: 40.0,
    imagen: "/imagenes/CM50.jpg",
    codigo: "00050",
  },
];

console.log(productos.length);
