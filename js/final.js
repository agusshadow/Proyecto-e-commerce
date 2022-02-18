`use strict`;

let catalogo = document.querySelector(`#catalogo-productos`);

let productos = [
  {
    id: 1,
    nombre: `Regulador de ph`,
    img: `phmas-grande.png`,
    precio: 700,
    descripcion: `Regulador Elevador Ph Mas 2 Kg Nataclor Aumenta el nivel de pH del agua cuando está bajo. El ideal es entre 7,2 y 7,6. Generalmente necesario para aguas blandas. Puede usarse en forma combinada con todo tipo de cloro. TIPO DE PISCINA Apto para todo tipo de piscinas. USO El PH debe medirse antes de aplicar el cloro ya que optimiza su rendimiento. Se vierte en el agua de la piscina previamente diluido en un balde con agua, sin presencia de bañistas. Luego efectuar una recirculación completa del agua de la pileta. DOSIFICACIÓN Cada 40,000 litros: 250 grs para subir 0,1 unidad (ej.: de 7,1 a 7,2).`,
    categoria: `accesorios`,
  },
  {
    id: 2,
    nombre: `Manguera flotante`,
    img: `manguera-grande.png`,
    precio: 240,
    descripcion: `manguera para piletas`,
    categoria: `accesorios`,
  },
  {
    id: 3,
    nombre: `Sacahojas`,
    img: `sacahojas-grande.png`,
    precio: 700,
    descripcion: `sacahojas para limpiar las hojas de tu pileta`,
    categoria: `accesorios`,
  },
  {
    id: 4,
    nombre: `Limpiafondo`,
    img: `limpiafondo-grande.png`,
    precio: 800,
    descripcion: `limpiafondo`,
    categoria: `accesorios`,
  },
  {
    id: 5,
    nombre: `Regulador de ph`,
    img: `phmenos-grande.png`,
    precio: 240,
    descripcion: `regulador de ph`,
    categoria: `accesorios`,
  },
  {
    id: 6,
    nombre: `Boya`,
    img: `boya-grande.png`,
    precio: 700,
    descripcion: `boya para insertar pastillas de cloro`,
    categoria: `accesorios`,
  },
  {
    id: 7,
    nombre: `Boya Satélite`,
    img: `boya-satelite-grande.png`,
    precio: 700,
    descripcion: `boya para insertar pastillas de cloro`,
    categoria: `accesorios`,
  },
  {
    id: 8,
    nombre: `Bidón de cloro`,
    img: `cloro-grande.png`,
    precio: 800,
    descripcion: `bidon de cloro`,
    categoria: `cloro`,
  },
  {
    id: 9,
    nombre: `Prende fuego`,
    img: `prende-fuego-grande.png`,
    precio: 800,
    descripcion: `producto para prender fuego`,
    categoria: `carboneria`,
  },
  {
    id: 10,
    nombre: `Leña (1kg)`,
    img: `leña-grande.png`,
    precio: 800,
    descripcion: `1 kg de leña`,
    categoria: `carboneria`,
  },
  {
    id: 11,
    nombre: `Maderitas`,
    img: `maderitas-grande.png`,
    precio: 800,
    descripcion: `maderas atadas`,
    categoria: `carboneria`,
  },
  {
    id: 12,
    nombre: `Bolsa de carbón`,
    img: `carbon-grande.png`,
    precio: 800,
    descripcion: `bolsa de carbón`,
    categoria: `carboneria`,
  },
  {
    id: 13,
    nombre: `Motor`,
    img: `motor-grande.png`,
    precio: 14500,
    descripcion: `motor`,
    categoria: `accesorios`,
  },
];

let logo = document.querySelector(`.logo`)
logo.addEventListener(`click`, e => {
  e.preventDefault()
  modalCarrito.remove()
  let modalProducto = document.querySelector(`.overlay-modal`)
  modalProducto.remove()
})

/* CARRITO */

let carrito = {
  ids: [],
  cant: [],
  total: 0,
};

/* AGREGAR PRODUCTO */

const agregarProducto = (e) => {
  let id = parseFloat(e.target.dataset.id);
  let precio = parseFloat(e.target.dataset.precio);

  let indiceProducto = carrito.ids.indexOf(id);

  if (indiceProducto == -1) {
    carrito.ids.push(id);
    carrito.cant.push(1);
  } else {
    carrito.cant[indiceProducto]++;
  }

  carrito.total += precio;

  let cantProductos = carrito.ids.length;
  let notiCarrito = document.querySelector(`.notificacion-carrito`);
  notiCarrito.style.opacity = `1`;
  notiCarrito.innerHTML = cantProductos;

  setTimeout(() => {
    let notificacion = document.querySelector(`.notificacion-agregado`);
    if (notificacion === null) {
      let div = document.createElement(`div`);
      div.className = `notificacion-agregado`;
      let span = document.createElement(`span`);
      span.innerHTML = `Producto agregado`;
      let img = document.createElement(`img`);
      img.src = `imagenes/iconografia/check.svg`;
      img.className = `ms-2 verificado`;
      div.append(span, img);
      document.body.append(div);
      setTimeout(() => {
        div.remove();
      }, 2000);
    }
  }, 200);
};

let icnCarrito = document.querySelector(`#icncarrito`);
let modalCarrito = document.createElement(`div`);
modalCarrito.className = `carrito overflow-auto col-12`;

/* CREAR HEADER DEL CARRITO */

const crearHeaderCarrito = () => {
  let divHeader = document.createElement(`div`);
  divHeader.className = `py-3 d-flex justify-content-center mb-4 header-carrito col-12`;
  divHeader.style.backgroundColor = `#00CCFF`;
  let tituloHeader = document.createElement(`h2`);
  tituloHeader.innerHTML = `Carrito`;
  tituloHeader.className = `text-center text-white`;
  let btnVolver = document.createElement(`a`);
  btnVolver.innerHTML = `volver`;
  btnVolver.href = `#`;
  btnVolver.className = `cerrar-carrito`;
  btnVolver.addEventListener(`click`, (e) => {
    e.preventDefault()
    modalCarrito.remove();
  });
  divHeader.append(btnVolver, tituloHeader);
  modalCarrito.append(divHeader);
};

/* DIBUJAR CATALOGO */

const crearProductos = (productos) => {
  catalogo.innerHTML = ``;
  for (let producto of productos) {
    let div = document.createElement(`div`);
    
    let divImg = document.createElement(`div`);
    let img = document.createElement(`img`);
    let divCont = document.createElement(`div`);
    let h3 = document.createElement(`h3`);
    let span = document.createElement(`span`);

    div.setAttribute(
      `class`,
      `col-11 col-sm-5 col-md-3 col-lg-3 col-xl-2 px-2 producto`
    );
    div.dataset.id = `${producto.id}`
    div.addEventListener(`click`, (e) => {
      e.preventDefault()

      /* busco el producto mediante filter */

      let idProducto = e.currentTarget.dataset.id
      let productoFiltrado = productos.filter(
        (producto) => producto.id == idProducto
      )[0];
      console.log(productoFiltrado);

      /* genero la ventana modal del producto */

      let overlay = document.createElement(`div`);
      overlay.className = `overlay-modal`

      let contenedor = document.createElement(`div`);
      contenedor.className = `contenedor-modal-producto container-lg pt-3 pb-3 overflow-auto`

      let fila1 = document.createElement(`div`);
      fila1.className = `row position-relative`
      let volver = document.createElement(`a`);
      volver.href = `#`
      volver.innerHTML = `Volver al inicio`
      volver.className = `mb-3 text-decoration-none text-secondary`
      volver.addEventListener(`click`, e => {
        e.preventDefault()
        let Modal = document.querySelector(`.overlay-modal`)
        Modal.remove()
      })

      let columna1 = document.createElement(`div`); 
      columna1.className = `col-12 col-md-8 d-flex justify-content-center align-items-center`
      let imgProducto = document.createElement(`img`); 
      imgProducto.src = `imagenes/productos/${productoFiltrado.img}`
      imgProducto.className = `img-fluid col-12 col-md-8`
      columna1.append(imgProducto)

      let columna2 = document.createElement(`div`); 
      columna2.className = `col-12 col-md-4 d-flex justify-content-center flex-column px-3 px-md-4 info-producto py-5 mt-3`
      let nombreProducto = document.createElement(`h2`)
      nombreProducto.innerHTML = productoFiltrado.nombre
      nombreProducto.className = `nombre-producto`
      let categoriaProducto = document.createElement(`h3`)
      categoriaProducto.innerHTML = productoFiltrado.categoria
      categoriaProducto.className = `h6`
      let precioProducto = document.createElement(`span`)
      precioProducto.innerHTML = `$ ${productoFiltrado.precio}`
      precioProducto.className = `fw-bold fs-4 precio`
      let contenedorInfo = document.createElement(`div`)
      contenedorInfo.className = `mt-4 verde`
      let cuotas = document.createElement(`div`)
      cuotas.className = `mb-3 cuotas`
      let cuotas1 = document.createElement(`p`)
      cuotas1.innerHTML = `Pago en Cuotas`
      cuotas1.className = `m-0 d-inline`
      let cuotas2 = document.createElement(`p`)
      cuotas2.innerHTML = `12 cuotas sin interes`
      cuotas2.className = `abajo`
      cuotas.append(cuotas1, cuotas2)
      let retiro = document.createElement(`div`)
      retiro.className = `mb-3 retiro`
      let retiro1 = document.createElement(`p`) 
      retiro1.innerHTML = `Retiro ¡Gratis!`
      retiro1.className = `m-0 d-inline`
      let retiro2 = document.createElement(`p`) 
      retiro2.innerHTML = `San Isidro`
      retiro2.className = `abajo`
      retiro.append(retiro1, retiro2)
      let envio = document.createElement(`div`)
      envio.className = `mb-3 envio`
      let envio1 = document.createElement(`p`)
      envio1.innerHTML = `Envío a todo el país`
      envio1.className = `m-0 d-inline`
      let envio2 = document.createElement(`a`)
      envio2.innerHTML = `Ver costos de envío`
      envio2.href = `#`
      envio2.className = `costo-envio d-block text-decoration-none`
      envio.append(envio1, envio2)
      let garantia = document.createElement(`div`)
      garantia.className =`mb-3 garantia`
      let garantia1 = document.createElement(`p`)
      garantia1.innerHTML = `Garantía`
      garantia1.className = `m-0 d-inline`
      let garantia2 = document.createElement(`p`)
      garantia2.innerHTML = `360 días`
      garantia2.className = `abajo`
      garantia.append(garantia1, garantia2)

      let agregarCarrito = document.createElement(`button`)
      agregarCarrito.innerHTML = `Agregar al carrito`
      agregarCarrito.className = `btn-agregar-carrito d-block mt-4`
      agregarCarrito.dataset.id = `${productoFiltrado.id}`;
      agregarCarrito.dataset.precio = `${productoFiltrado.precio}`;
      agregarCarrito.dataset.cat = `${productoFiltrado.categoria}`;
      agregarCarrito.addEventListener(`click`, agregarProducto);
      let agregarFavorito = document.createElement(`button`)
      agregarFavorito.innerHTML = `Agregar a favoritos`
      agregarFavorito.className = `btn-agregar-favoritos mt-3`

      contenedorInfo.append(cuotas, retiro, envio, garantia)
      columna2.append(nombreProducto, categoriaProducto, precioProducto, contenedorInfo, agregarCarrito, agregarFavorito)
      fila1.append(volver, columna1, columna2)


      let fila2 = document.createElement(`div`);
      fila2.className = `row mt-5 descripcion-producto`
      let contenedorFila2 = document.createElement(`div`);
      contenedorFila2.className = `col-12 col-md-8`
      let tituloDescripcion = document.createElement(`h4`);
      tituloDescripcion.innerHTML = `Descripción del producto`
      let parrafoDescripcion = document.createElement(`p`);
      parrafoDescripcion.innerHTML = productoFiltrado.descripcion
      parrafoDescripcion.className = `pt-4`
      contenedorFila2.append(tituloDescripcion, parrafoDescripcion)
      fila2.append(contenedorFila2)


      contenedor.append(fila1, fila2)
      overlay.append(contenedor)
      document.body.append(overlay)

    })
    img.src = `imagenes/productos/${producto.img}`;
    img.setAttribute(`class`, `img-fluid fx mx-auto d-block`);
    img.alt = producto.nombre;
    divImg.append(img);
    divCont.setAttribute(`class`, `py-3`);
    divCont.append(h3, span);
    h3.innerHTML = producto.nombre;
    h3.setAttribute(`class`, `text-center h5`);
    span.innerHTML = `$ ${producto.precio}`;
    span.setAttribute(`class`, `precio text-center d-block fw-bold`);
    div.append(divImg, divCont);
    catalogo.append(div);
  }
};

crearProductos(productos);

/* FILTROS */

let selectFiltro = document.querySelector(`#filtros`);

selectFiltro.addEventListener(`change`, (e) => {
  if (e.target.value == `todos`) {
    crearProductos(productos);
  } else {
    let productosFiltrados = productos.filter(
      (producto) => producto.categoria == e.target.value
    );
    crearProductos(productosFiltrados);
  }

  /* crear publicidad al cambiar el valor del filtro */

  let overlayPublicidad = document.createElement(`div`)
  overlayPublicidad.className = `overlay-publicidad`
  let contenedorPublicidad = document.createElement(`div`)
  contenedorPublicidad.className = `contenedor-modal-publicidad col-8 col-md-5 col-lg-5 col-xl-3`
  overlayPublicidad.append(contenedorPublicidad)
  let cerrar = document.createElement(`a`)
  cerrar.href = `#`
  cerrar.innerHTML = `cerrar`
  cerrar.className = `cerrar-modal-publicidad`
  cerrar.addEventListener(`click`, e => {
    e.preventDefault()
    let contenedor = document.querySelector(`.overlay-publicidad`)
    if (contenedor) {
      contenedor.remove()
    }
  })
  let contenedorImg = document.createElement(`div`)
  let img = document.createElement(`img`)
  img.src = `imagenes/slider-banner/publicidad.png`
  img.alt = `imagen publicitaria`
  contenedorImg.append(img)
  contenedorPublicidad.append(cerrar, contenedorImg)

  document.body.append(overlayPublicidad)

  setTimeout(() => {
    overlayPublicidad.remove();
  }, 1700);

});


/* CREAR BOTONES CARRITO */

const crearBotonesCarrito = () => {
  let divResumen = document.createElement(`div`);
  divResumen.className = `fixed-bottom py-4 border-top`;
  divResumen.style.backgroundColor = `white`;

  let contenedorBtn = document.createElement(`div`);
  contenedorBtn.className = `d-flex justify-content-between col-11 col-md-8 col-lg-6 col-xl-4 mx-auto`;
  let contenedorTotal = document.createElement(`div`);
  contenedorTotal.className = `col-5 mb-2`;
  let total = document.createElement(`span`);
  total.innerHTML = `Total: $ ${carrito.total}`;
  total.className = `p-2 text-center fw-bold d-block`;
  total.style.border = `2px solid #0099CC`;
  total.style.color = `#0099CC`;
  contenedorTotal.append(total);
  let contenedorVaciar = document.createElement(`div`);
  contenedorVaciar.className = `col-6 mb-2`;
  let btnVaciar = document.createElement(`button`);
  btnVaciar.style.color = `#0099CC`;
  btnVaciar.style.border = `2px solid #0099CC`;
  btnVaciar.className = `btn btn-outline d-block w-100 fw-bold`;
  btnVaciar.innerHTML = `Vaciar carrito`;
  contenedorVaciar.append(btnVaciar);
  contenedorBtn.append(contenedorTotal, contenedorVaciar);
  let btnComprar = document.createElement(`button`);
  btnComprar.className = `btn btn-primary d-block col-11 col-md-8 col-lg-6 col-xl-4 mx-auto border-0`;
  btnComprar.style.backgroundColor = `#0099CC`;
  btnComprar.innerHTML = `Comprar`;
  divResumen.append(contenedorBtn, btnComprar);
  modalCarrito.append(divResumen);
  btnVaciar.addEventListener(`click`, (e) => {
    carrito.ids = [];
    carrito.cant = [];
    carrito.total = 0;
    modalCarrito.innerHTML = ``;
    crearHeaderCarrito();
    crearProductosCarrito();
    crearBotonesCarrito();
    let notiCarrito = document.querySelector(`.notificacion-carrito`);
    notiCarrito.innerHTML = 0;
    notiCarrito.style.opacity = 0;
    totalMostrar.innerHTML = `$ 0`;
  });
};

/* CREAR PRODUCTOS CARRITO */

const crearProductosCarrito = () => {
  if (carrito.ids.length == 0) {
    let p = document.createElement(`p`);
    p.innerHTML = `No hay productos en el carrito`;
    p.className = `text-center h3 pt-5`;
    modalCarrito.append(p);
  }

  carrito.ids.forEach((idProducto, indice) => {
    let productoCantidad = carrito.cant[indice];
    let productoCarrito = productos.filter(
      (producto) => producto.id == idProducto
    )[0];

    let fila = document.createElement(`div`);
    fila.className = `row m-0`;
    let div = document.createElement(`div`);
    div.className = `d-flex mb-3 py-3 mx-auto col-11 col-md-8 col-lg-6 col-xl-4`;
    div.style.backgroundColor = `white`;
    let divImg = document.createElement(`div`);
    let img = document.createElement(`img`);
    img.src = `imagenes/productos/${productoCarrito.img}`;
    img.alt = productoCarrito.img;
    img.className = `img-fluid mx-2`;
    img.style.height = `80px`;
    img.style.width = `80px`;
    divImg.append(img);
    let divContenido = document.createElement(`div`);
    divContenido.className = `position-relative w-100 ps-3`;
    let h2 = document.createElement(`h2`);
    h2.innerHTML = productoCarrito.nombre;
    let precio = document.createElement(`span`);
    precio.innerHTML = `$ ${productoCarrito.precio}`;
    precio.className = `d-block precio`;
    let span = document.createElement(`span`);
    span.innerHTML = `x ${productoCantidad}`;
    let borrar = document.createElement(`a`);
    borrar.dataset.id = productoCarrito.id;
    borrar.dataset.precio = productoCarrito.precio;
    borrar.innerHTML = `eliminar producto`;
    borrar.href = `#`;
    borrar.className = `borrar`;
    borrar.addEventListener(`click`, borrarProductoCarrito);
    divContenido.append(h2, precio, span, borrar);
    div.append(divImg, divContenido);
    fila.append(div);
    modalCarrito.append(fila);
  });
};

/* BORRAR PRODUCTOS CARRITO */

const borrarProductoCarrito = (e) => {
  let id = parseFloat(e.target.dataset.id);
  let precio = parseFloat(e.target.dataset.precio);
  let indiceProducto = carrito.ids.indexOf(id);
  if (indiceProducto !== -1) {
    if (carrito.cant[indiceProducto] > 0) {
      carrito.cant[indiceProducto]--;
      carrito.total -= precio;
    }
    if (carrito.cant[indiceProducto] == 0) {
      carrito.ids.splice(indiceProducto, 1);
      carrito.cant.splice(indiceProducto, 1);
    }
  }
  let notiCarrito = document.querySelector(`.notificacion-carrito`);

  notiCarrito.innerHTML = carrito.ids.length;
  cantNoti = carrito.ids.length;
  if (cantNoti === 0) {
    notiCarrito.style.opacity = 0;
  }

  modalCarrito.innerHTML = ``;
  crearHeaderCarrito();
  crearProductosCarrito();
  crearBotonesCarrito();
};

/* VER CARRITO */

icnCarrito.addEventListener(`click`, (e) => {
  e.preventDefault();
  let estaCarrito = document.querySelector(`.carrito`);
  let modalProducto = document.querySelector(`.overlay-modal`)
 
  if (modalProducto) {
    modalProducto.remove()
  }
  if (estaCarrito === null) {
    modalCarrito.innerHTML = ``;
    crearHeaderCarrito();
    crearProductosCarrito();
    crearBotonesCarrito();
    document.body.append(modalCarrito);
  } else {
    modalCarrito.remove();
  }
});



/* CHECKOUT */

const crearCheckOut = () => {

  /* overlay */
  let overlay = document.createElement(`div`);
  overlay.className = `overlay-modal`;
  /* contenedor */
  let contenedor = document.createElement(`div`);
  contenedor.className = `container-lg overflow-auto contenedor-datos-personales`
  /* row */
  let fila = document.createElement(`div`);
  fila.className = `row`
  /* col-datos */
  let colDatos = document.createElement(`div`);
  colDatos.className = `col-12 col-md-8 p-0`

  /* titulo datos personales */
  let contenedorUno = document.createElement(`div`);
  contenedorUno.className = `p-3 text-white titulo-pasos mb-2`
  let tituloDatosPersonales = document.createElement(`h3`);
  tituloDatosPersonales.innerHTML = `Datos Personales`
  contenedorUno.append(tituloDatosPersonales)

  /* form datos personales */
  let formDatosPersonales = document.createElement(`form`);
  formDatosPersonales.action = `#`
  formDatosPersonales.method = `get`
  formDatosPersonales.className = `form-datos-personales p-3`

  let labelCorrero = document.createElement(`label`)
  labelCorrero.setAttribute(`for`, `correo`)
  labelCorrero.className = `mb-1`
  labelCorrero.innerHTML = `Correo`
  let inputCorreo = document.createElement(`input`)
  inputCorreo.type = `email`
  inputCorreo.id = `correo`
  inputCorreo.className = `p-1 mb-3 w-100`

  let labelNombre = document.createElement(`label`)
  labelNombre.setAttribute(`for`, `nombre`)
  labelNombre.className = `mb-1`
  labelNombre.innerHTML = `Nombre`
  let inputNombre = document.createElement(`input`)
  inputNombre.type = `text`
  inputNombre.id = `nombre`
  inputNombre.className = `p-1 mb-3 w-100`

  let labelApellido = document.createElement(`label`)
  labelApellido.setAttribute(`for`, `apellido`)
  labelApellido.className = `mb-1`
  labelApellido.innerHTML = `Apellido`
  let inputApellido = document.createElement(`input`)
  inputApellido.type = `text`
  inputApellido.id = `apellido`
  inputApellido.className = `p-1 mb-3 w-100`

  let labelDni = document.createElement(`label`)
  labelDni.setAttribute(`for`, `dni`)
  labelDni.className = `mb-1`
  labelDni.innerHTML = `Dni`
  let inputDni = document.createElement(`input`)
  inputDni.type = `number`
  inputDni.id = `dni`
  inputDni.className = `p-1 mb-3 w-100`

  let labelTelefono = document.createElement(`label`)
  labelTelefono.setAttribute(`for`, `telefono`)
  labelTelefono.className = `mb-1`
  labelTelefono.innerHTML = `Telefono`
  let inputTelefono = document.createElement(`input`)
  inputTelefono.type = `number`
  inputTelefono.id = `telefono`
  inputTelefono.className = `p-1 mb-3 w-100`

  let contenedorCheckbox = document.createElement(`div`)
  contenedorCheckbox.className = `d-flex mb-3`
  let inputPromociones = document.createElement(`input`)
  inputPromociones.type = `checkbox`
  inputPromociones.id = `promociones`
  inputPromociones.className = `my-auto me-2`
  let labelPromociones = document.createElement(`label`)
  labelPromociones.setAttribute(`for`, `promociones`)
  labelPromociones.innerHTML = `Quiero recibir promociones por mail`
  contenedorCheckbox.append(inputPromociones, labelPromociones)

  let contenedorBoton1 = document.createElement(`div`)
  contenedorBoton1.className = `d-flex justify-content-end`
  let inputBoton1 = document.createElement(`input`)
  inputBoton1.value = `Continuar`
  inputBoton1.type = `submit`
  inputBoton1.className = `btn btn-primary btn-continuar`
  contenedorBoton1.append(inputBoton1)

  /* appendeo del primer bloque */
  


  /* titulo domicilio */
  let contenedorDos = document.createElement(`div`);
  contenedorDos.className = `p-3 text-white titulo-pasos mb-2`
  let tituloDomicilio = document.createElement(`h3`);
  tituloDomicilio.innerHTML = `Domicilio y entrega`
  contenedorDos.append(tituloDomicilio)

  /* form datos personales */
  let formDomicilio = document.createElement(`form`);
  formDomicilio.action = `#`
  formDomicilio.method = `get`
  formDomicilio.className = `form-datos-personales p-3`


  












  /* col-resumen */
  let colResumen = document.createElement(`div`);
  colResumen.className = `col-12 col-md-4 px-4 resumen-productos`
}


/* PRUEBAS LOCAL STORAGE */

console.log(`Info local storage`);

let infoLocal = JSON.stringify(carrito)
console.log(infoLocal);

localStorage.carrito = infoLocal

const cargarInfoCarrito = (info) => {
  if (localStorage.info) {
    info = JSON.parse(localStorage.info)
  } else {
    localStorage.info = JSON.stringify(info)
  }
}