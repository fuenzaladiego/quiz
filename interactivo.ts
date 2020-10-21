let parrafo = document.getElementById("p");
function menu(b) {
  switch (b.innerHTML) {
    case "Ofertas": {
      parrafo.innerHTML = "Estas son las ofertas de mujeres";
      break;
    }
    case "Zapatos":{
      parrafo.innerHTML = "EStas son los zapatos de mujeres";
      break;
    }
    case "Ropa deportiva":{
      parrafo.innerHTML = "Esta es la ropa deportiva de mujer";
      break;
    }
    case "Accesorios":{
      parrafo.innerHTML = "Accesorios mujer";
      break;
    }
    case "zapatos":{
      parrafo.innerHTML = "Zapatos hombre";
      break;
    }
    case "ofertas":{
      parrafo.innerHTML = "Ofertas hombres";
      break;
    }
    case "ropa deportiva":{
      parrafo.innerHTML = "Ropa deportiva de hombre";
      break;
    }
    case "accesorios":{
      parrafo.innerHTML = "Accesorios de hombre";
      break;
    }
    case "Camas":{
      parrafo.innerHTML = "Camas en venta";
      break;
    }
    case "Ropa de cama":{
      parrafo.innerHTML = "Ropa de cama en venta";
      break;
    }
    case "Colchones":{
      parrafo.innerHTML = "Colchones en venta";
      break;
    }
    case "Muebles dormitorio":{
      parrafo.innerHTML = "Muebeles en catalogo";
      break;
    }
    case "Televisores":{
      parrafo.innerHTML = "Televisores en catalogo";
      break;
    }
    case "Audio":{
      parrafo.innerHTML = "Parlantes en venta";
      break;
    }
    case "Destacado":{
      parrafo.innerHTML = "Objetos destacados";
      break;
    }
  }
}