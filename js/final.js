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
    descripcion: `Manguera Corrugada Flotante 1 " X 10mts Pileta Piscina Santa Rita Rollo de manguera corrugada flotante Diámetro: 1"=25,4mm Largo 10 Metros Material Pvc de Alto Impacto Tratamiento UV Ideal Para La Carga r descarga de Piletas y Piscinas También Para La Limpieza Con Barre fondo.`,
    categoria: `accesorios`,
  },
  {
    id: 3,
    nombre: `Sacahojas`,
    img: `sacahojas-grande.png`,
    precio: 700,
    descripcion: `El sacahojas plano (17 mm) posee una red plana con un mango de 5 secciones (50 cm c/sección), que permite ser utilizado de acuerdo a tu necesidad. Está pensado para recolectar impurezas cercanas a la superficie del agua de la piscina.`,
    categoria: `accesorios`,
  },
  {
    id: 4,
    nombre: `Limpiafondo`,
    img: `limpiafondo-grande.png`,
    precio: 800,
    descripcion: `Limpiafondo Vulcano de 8 ruedas fijas. Para piletas de hormigón o fibra. Limpiafondos flexible de 8 ruedas fijas, de óptimo desempeño ya que se adapta a las pequeñas irregularidades de las superficie. Su diseño le aporta resistencia a los impactos. Este producto es uno de los más buscados por su versatilidad y calidad constructiva.`,
    categoria: `accesorios`,
  },
  {
    id: 5,
    nombre: `Regulador de ph`,
    img: `phmenos-grande.png`,
    precio: 240,
    descripcion: `PH Menos Nataclor disminuye el nivel de pH del agua cuando está alto. El ideal es entre 7,2 y 7,6. Generalmente necesario para aguas duras. Puede usarse en forma combinada con todo tipo de cloro y es apto para todo tipo de piscinas. El PH debe medirse antes de aplicar el cloro ya que optimiza el rendimiento del mismo. Se vierte en el agua de la piscina previamente diluido en un balde con agua, sin presencia de bañistas. Luego efectuar una recirculación completa del agua de la pileta.`,
    categoria: `accesorios`,
  },
  {
    id: 6,
    nombre: `Boya`,
    img: `boya-grande.png`,
    precio: 700,
    descripcion: `Boya Dosificadora Cloro Vulcano Regulación Piscinas Pileta Boya dosificadora de cloro modelo Max, para pastillas de 50 y 200 grs. Permite regular el intercambio de cloro, mediante un regulador.`,
    categoria: `accesorios`,
  },
  {
    id: 7,
    nombre: `Boya Satélite`,
    img: `boya-satelite-grande.png`,
    precio: 700,
    descripcion: `Boya SATELITE para pastillas de cloro de 250grs.`,
    categoria: `accesorios`,
  },
  {
    id: 8,
    nombre: `Bidón de cloro`,
    img: `cloro-grande.png`,
    precio: 800,
    descripcion: `bidon de cloro de 10l`,
    categoria: `cloro`,
  },
  {
    id: 9,
    nombre: `Prende fuego`,
    img: `prende-fuego-grande.png`,
    precio: 800,
    descripcion: `Pastillas para encender fuego x 12 u.`,
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
    descripcion: `Bolsa de carbon grande`,
    categoria: `carboneria`,
  },
  {
    id: 13,
    nombre: `Motor`,
    img: `motor-grande.png`,
    precio: 14500,
    descripcion: `Electrobomba Autocebante Vulcano BAP 075 3/4 HP: Bomba autocebante BAP 075 Vulcano de 0.75 HP de potencia y tensión monofásica de 220V-50HZ. Desarrollada para responder a las más altas exigencias ofrece un óptimo rendimiento, convirtiéndola en una excelente opción para su pileta. Dispone de cuerpo autocebante reforzado y pre-filtro incorporado, con canasto atrapa hojas de gran tamaño y tapa de rápida apertura con un ¼ de giro. Las conexiones con uniones dobles; incluye 2 bujes con rosca hembra 1 ½” para caños de polipropileno y 2 bujes lisos de Ø 50 para pegar caños de PVC.`,
    categoria: `accesorios`,
  },
];

let nuestrosProductos = document.querySelector(`#nuestrosProductos`)
console.log(nuestrosProductos);
nuestrosProductos.addEventListener(`click`, (e) => {
  modalCarrito.remove()
  let modalProducto = document.querySelector(`.overlay-modal-producto`)
  let modal = document.querySelector(`.overlay-modal`)
  if (modalProducto) {
    modalProducto.remove()
  }
  if (modal) {
    modal.remove()
    console.log(modal);
  }
})

let logo = document.querySelector(`.logo`)
logo.addEventListener(`click`, e => {
  e.preventDefault()
  modalCarrito.remove()
  let modalProducto = document.querySelector(`.overlay-modal-producto`)
  let modal = document.querySelector(`.overlay-modal`)
  if (modalProducto) {
    modalProducto.remove()
  }
  if (modal) {
    modal.remove()
    console.log(modal);
  }

})

/* CARRITO */

let carrito = {
  ids: [],
  cant: [],
  total: 0,
};

/* AGREGAR PRODUCTO */

let noti = true

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

  console.log(noti);

  if (noti === true) {
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
        img.alt = `icono verificado`
        div.append(span, img);
        document.body.append(div);
        setTimeout(() => {
          div.remove();
        }, 2000);
      }
    }, 200);
  }

  noti = true
  
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
      overlay.className = `overlay-modal-producto`

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
        let Modal = document.querySelector(`.overlay-modal-producto`)
        Modal.remove()
      })

      let columna1 = document.createElement(`div`); 
      columna1.className = `col-12 col-md-8 d-flex justify-content-center align-items-center`
      let imgProducto = document.createElement(`img`); 
      imgProducto.src = `imagenes/productos/${productoFiltrado.img}`
      imgProducto.className = `img-fluid col-12 col-md-8`
      imgProducto.alt = `imagen del producto`
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
      agregarCarrito.className = `btn-comprar-ahora  d-block mt-4`
      agregarCarrito.dataset.id = `${productoFiltrado.id}`;
      agregarCarrito.dataset.precio = `${productoFiltrado.precio}`;
      agregarCarrito.dataset.cat = `${productoFiltrado.categoria}`;
      agregarCarrito.addEventListener(`click`, agregarProducto);
      let comprarAhora = document.createElement(`button`)
      comprarAhora.innerHTML = `Comprar ahora`
      comprarAhora.className = `btn-agregar-carrito mt-3`
      comprarAhora.dataset.id = `${productoFiltrado.id}`;
      comprarAhora.dataset.precio = `${productoFiltrado.precio}`;
      comprarAhora.dataset.cat = `${productoFiltrado.categoria}`;
      comprarAhora.addEventListener(`click`, (producto) => {
        noti = false
        agregarProducto(producto)
        crearCheckOut() 
        
        console.log(noti);
      })
      

      contenedorInfo.append(cuotas, retiro, envio, garantia)
      columna2.append(nombreProducto, categoriaProducto, precioProducto, contenedorInfo,comprarAhora, agregarCarrito)
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

  if (e.target.value != `todos`) {
    let overlayPublicidad = document.createElement(`div`)
  overlayPublicidad.className = `overlay-publicidad`
  let contenedorPublicidad = document.createElement(`div`)
  contenedorPublicidad.className = `contenedor-modal-publicidad col-8 col-md-5 col-lg-5 col-xl-3`
  overlayPublicidad.append(contenedorPublicidad)
  let cerrar = document.createElement(`a`)
  cerrar.href = `#`
  cerrar.innerHTML = `cerrar`
  cerrar.className = `cerrar-modal-publicidad`



  /* switch (e.value) */
  cerrar.addEventListener(`click`, e => {
    e.preventDefault()
    let contenedor = document.querySelector(`.overlay-publicidad`)
    if (contenedor) {
      contenedor.remove()
    }
  })
  let contenedorImg = document.createElement(`div`)
  let img = document.createElement(`img`)
  img.src = `localhost/imagenes/publicidad/publicidad-${e.target.value}.png`
  img.alt = `imagen publicitaria`
  contenedorImg.append(img)
  contenedorPublicidad.append(cerrar, contenedorImg)

  document.body.append(overlayPublicidad)

  setTimeout(() => {
    overlayPublicidad.remove();
  }, 1700);
  }

  

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
  total.style.color = `#0099CC`;
  contenedorTotal.append(total);
  let contenedorVaciar = document.createElement(`div`);
  contenedorVaciar.className = `col-6 mb-2`;
  let btnVaciar = document.createElement(`button`);
  btnVaciar.style.color = `#0099CC`;
  btnVaciar.style.border = `2px solid #0099CC`;
  btnVaciar.className = `btn btn-outline d-block w-100 fw-bold `;
  btnVaciar.innerHTML = `Vaciar carrito`;
  contenedorVaciar.append(btnVaciar);
  contenedorBtn.append(contenedorTotal, contenedorVaciar);
  let btnComprar = document.createElement(`button`);
  btnComprar.className = `btn btn-primary d-block col-11 col-md-8 col-lg-6 col-xl-4 mx-auto border-0 btn-agregar-carrito`;
  btnComprar.style.backgroundColor = `#0099CC`;
  btnComprar.innerHTML = `Comprar`;
  btnComprar.addEventListener(`click`, () => {
      if (!(carrito.ids.length == 0)) {
        crearCheckOut()
      }
  })
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
  let modalProducto = document.querySelector(`.overlay-modal-producto`)
 
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


  let estaCarrito = document.querySelector(`.carrito`);
 
 
  if (estaCarrito) {
    estaCarrito.remove()
  }

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
  let contenedorGrande1 = document.createElement(`div`);
  let contenedorUno = document.createElement(`div`);
  contenedorUno.className = `p-3 text-white titulo-pasos mb-2`
  let tituloDatosPersonales = document.createElement(`h3`);
  tituloDatosPersonales.innerHTML = `Datos Personales`
  contenedorUno.append(tituloDatosPersonales)
  contenedorGrande1.append(contenedorUno)
  colDatos.append(contenedorGrande1)

   /* titulo domicilio */
   let contenedorGrande2 = document.createElement(`div`);
   let contenedorDos = document.createElement(`div`);
   contenedorDos.className = `p-3 text-white titulo-pasos mb-2`
   let tituloDomicilio = document.createElement(`h3`);
   tituloDomicilio.innerHTML = `Domicilio y entrega`
   contenedorDos.append(tituloDomicilio)
   contenedorGrande2.append(contenedorDos)
   colDatos.append(contenedorGrande2)

   /* titulo pago */
   let contenedorGrande3 = document.createElement(`div`);
  let contenedorTres = document.createElement(`div`);
  contenedorTres.className = `p-3 text-white titulo-pasos mb-2`
  let tituloPago = document.createElement(`h3`);
  tituloPago.innerHTML = `Pago`
  contenedorTres.append(tituloPago)
  contenedorGrande3.append(contenedorTres)
  colDatos.append(contenedorGrande3)
  
   mostrarFormDatosPersonales()

  /* form datos personales */
  function mostrarFormDatosPersonales () {
    let formDatosPersonales = document.createElement(`form`);
  formDatosPersonales.action = `#`
  formDatosPersonales.method = `POST`
  formDatosPersonales.className = `form-datos-personales p-3`
  contenedorGrande1.append(formDatosPersonales)

  let labelCorrero = document.createElement(`label`)
  labelCorrero.setAttribute(`for`, `correo`)
  labelCorrero.className = `mb-1`
  labelCorrero.innerHTML = `Correo`
  let inputCorreo = document.createElement(`input`)
  inputCorreo.type = `email`
  inputCorreo.id = `correo`
  inputCorreo.className = `p-1 mb-3 w-100`
  inputCorreo.setAttribute(`required`, ``)
  formDatosPersonales.append(labelCorrero)
  formDatosPersonales.append(inputCorreo)

  let labelNombre = document.createElement(`label`)
  labelNombre.setAttribute(`for`, `nombre`)
  labelNombre.className = `mb-1`
  labelNombre.innerHTML = `Nombre`
  let inputNombre = document.createElement(`input`)
  inputNombre.type = `text`
  inputNombre.id = `nombre`
  inputNombre.className = `p-1 mb-3 w-100`
  inputNombre.setAttribute(`required`, ``)
  formDatosPersonales.append(labelNombre)
  formDatosPersonales.append(inputNombre)

  let labelApellido = document.createElement(`label`)
  labelApellido.setAttribute(`for`, `apellido`)
  labelApellido.className = `mb-1`
  labelApellido.innerHTML = `Apellido`
  let inputApellido = document.createElement(`input`)
  inputApellido.type = `text`
  inputApellido.id = `apellido`
  inputApellido.className = `p-1 mb-3 w-100`
  inputApellido.setAttribute(`required`, ``)
  formDatosPersonales.append(labelApellido)
  formDatosPersonales.append(inputApellido)

  let labelDni = document.createElement(`label`)
  labelDni.setAttribute(`for`, `dni`)
  labelDni.className = `mb-1`
  labelDni.innerHTML = `Dni`
  let inputDni = document.createElement(`input`)
  inputDni.type = `number`
  inputDni.id = `dni`
  inputDni.className = `p-1 mb-3 w-100`
  inputDni.setAttribute(`required`, ``)
  formDatosPersonales.append(labelDni)
  formDatosPersonales.append(inputDni)

  let labelTelefono = document.createElement(`label`)
  labelTelefono.setAttribute(`for`, `telefono`)
  labelTelefono.className = `mb-1`
  labelTelefono.innerHTML = `Telefono`
  let inputTelefono = document.createElement(`input`)
  inputTelefono.type = `number`
  inputTelefono.id = `telefono`
  inputTelefono.className = `p-1 mb-3 w-100`
  inputTelefono.setAttribute(`required`, ``)
  formDatosPersonales.append(labelTelefono)
  formDatosPersonales.append(inputTelefono)

  let contenedorCheckbox = document.createElement(`div`)
  contenedorCheckbox.className = `d-flex mb-3`
  formDatosPersonales.append(contenedorCheckbox)
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
  formDatosPersonales.append(contenedorBoton1)
  inputBoton1.addEventListener(`click`, (e) => {
    let inputs = document.querySelectorAll(`.form-datos-personales input`)
    let errores = 0
    for (let input of inputs) {
      if (input.value == ``) {
        errores++
      }
    }
    if (errores == 0) {
      formDatosPersonales.remove()
      mostrarFormDomicilio()
    }
    
  })
  }



  /* form domicilio */

  function mostrarFormDomicilio () {
    let formDatosDomicilio = document.createElement(`form`);
  formDatosDomicilio.action = `#`
  formDatosDomicilio.method = `GET`
  formDatosDomicilio.className = `form-datos-personales p-3`
  formDatosDomicilio.id = `formDatosDomicilio`
  contenedorGrande2.append(formDatosDomicilio)

  let labelCodigoPostal = document.createElement(`label`)
  labelCodigoPostal.setAttribute(`for`, `codigoPostal`)
  labelCodigoPostal.className = `mb-1`
  labelCodigoPostal.innerHTML = `Codigo Postal`
  let inputCodigoPostal = document.createElement(`input`)
  inputCodigoPostal.type = `number`
  inputCodigoPostal.id = `codigoPostal`
  inputCodigoPostal.setAttribute(`required`, ``) 
  inputCodigoPostal.className = `p-1 mb-3 w-100`
  formDatosDomicilio.append(labelCodigoPostal)
  formDatosDomicilio.append(inputCodigoPostal)

  let labelCalle = document.createElement(`label`)
  labelCalle.setAttribute(`for`, `calle`)
  labelCalle.className = `mb-1`
  labelCalle.innerHTML = `Calle`
  let inputCalle = document.createElement(`input`)
  inputCalle.type = `text`
  inputCalle.id = `Calle`
  inputCalle.setAttribute(`required`, ``) 
  inputCalle.className = `p-1 mb-3 w-100`
  formDatosDomicilio.append(labelCalle)
  formDatosDomicilio.append(inputCalle)

  let contenedorNumeroPiso = document.createElement(`div`)
  contenedorNumeroPiso.className = `d-flex`
  formDatosDomicilio.append(contenedorNumeroPiso)

  let contenedorNumero = document.createElement(`div`)
  contenedorNumero.className = `dos-inputs`
  contenedorNumeroPiso.append(contenedorNumero)
 
  let labelNumeroCalle = document.createElement(`label`)
  labelNumeroCalle.setAttribute(`for`, `numeroCalle`)
  labelNumeroCalle.className = `mb-1`
  labelNumeroCalle.innerHTML = `Numero`
  let inputNumeroCalle = document.createElement(`input`)
  inputNumeroCalle.type = `number`
  inputNumeroCalle.id = `numeroCalle`
  inputNumeroCalle.className = `p-1 mb-3 me-2`
  inputNumeroCalle.setAttribute(`required`, ``) 
  contenedorNumero.append(labelNumeroCalle, inputNumeroCalle)

  let contenedorPiso = document.createElement(`div`)
  contenedorPiso.className = `dos-inputs`
  contenedorNumeroPiso.append(contenedorPiso)

  let labelPiso = document.createElement(`label`)
  labelPiso.setAttribute(`for`, `piso`)
  labelPiso.className = `mb-1`
  labelPiso.innerHTML = `Piso / Departamento`
  let inputPiso = document.createElement(`input`)
  inputPiso.type = `text`
  inputPiso.id = `piso`
  inputPiso.className = `p-1 mb-3 me-2`
  inputPiso.setAttribute(`required`, ``) 
  contenedorPiso.append(labelPiso, inputPiso)

  let labelProvincia = document.createElement(`label`)
  labelProvincia.setAttribute(`for`, `provincia`)
  labelProvincia.className = `mb-1`
  labelProvincia.innerHTML = `Provincia`
  let inputProvincia = document.createElement(`input`)
  inputProvincia.type = `text`
  inputProvincia.id = `provincia`
  inputProvincia.className = `p-1 mb-3 w-100`
  inputProvincia.setAttribute(`required`, ``) 
  formDatosDomicilio.append(labelProvincia, inputProvincia)

  let labelCiudad = document.createElement(`label`)
  labelCiudad.setAttribute(`for`, `ciudad`)
  labelCiudad.className = `mb-1`
  labelCiudad.innerHTML = `Ciudad`
  let inputCiudad = document.createElement(`input`)
  inputCiudad.type = `text`
  inputCiudad.id = `ciudad`
  inputCiudad.className = `p-1 mb-3 w-100`
  inputCiudad.setAttribute(`required`, ``) 
  formDatosDomicilio.append(labelCiudad, inputCiudad)

  let tipoEntrega = document.createElement(`h4`)
  tipoEntrega.innerHTML = `Elige tipo de entrega`
  tipoEntrega.className = `mb-3 h5`
  formDatosDomicilio.append(tipoEntrega)

  let contenedorRadio1 = document.createElement(`div`)
  contenedorRadio1.className =`d-flex`
  let envioDomicilio = document.createElement(`input`)
  envioDomicilio.className = `d-block me-2`
  envioDomicilio.type = `radio`
  envioDomicilio.value = `entrega`
  envioDomicilio.value = `envio a domicilio`
  let spanDomicilio = document.createElement(`span`)
  spanDomicilio.innerHTML = `Envio a domicilio`
  contenedorRadio1.append(envioDomicilio, spanDomicilio)
  formDatosDomicilio.append(contenedorRadio1)

  let contenedorRadio2 = document.createElement(`div`)
  contenedorRadio2.className =`d-flex`
  let envioLocal = document.createElement(`input`)
  envioLocal.className = `d-block me-2`
  envioLocal.type = `radio`
  envioLocal.value = `entrega`
  envioLocal.value = `envio a Local`
  let spanLocal = document.createElement(`span`)
  spanLocal.innerHTML = `Envio a Local`
  contenedorRadio2.append(envioLocal, spanLocal)
  formDatosDomicilio.append(contenedorRadio2)

  let contenedorBoton2 = document.createElement(`div`)
  contenedorBoton2.className = `d-flex justify-content-end`
  let inputBoton2 = document.createElement(`input`)
  inputBoton2.value = `Continuar`
  inputBoton2.type = `submit`
  inputBoton2.className = `btn btn-primary btn-continuar`
  contenedorBoton2.append(inputBoton2)
  formDatosDomicilio.append(contenedorBoton2)
  inputBoton2.addEventListener(`click`, (e) => {
  
    let inputs = document.querySelectorAll(`#formDatosDomicilio input`)
    console.log(inputs);
    let errores = 0
    for (let input of inputs) {
      if (input.value == ``) {
        errores++
      }
    }
    if (errores == 0) {
      formDatosDomicilio.remove()
    mostrarFormPago()
    }

  })
  }

  

  /* form pago*/

  function mostrarFormPago (){
    let formPago = document.createElement(`form`);
    formPago.action = `#`
    formPago.method = `GET`
    formPago.className = `form-datos-personales p-3`
    formPago.id = `formPago`
    contenedorGrande3.append(formPago)
  
    let labelNumeroTarjeta = document.createElement(`label`)
    labelNumeroTarjeta.setAttribute(`for`, `numeroTarjeta`)
    labelNumeroTarjeta.className = `mb-1`
    labelNumeroTarjeta.innerHTML = `Numero Tarjeta`
    let inputNumeroTarjeta = document.createElement(`input`)
    inputNumeroTarjeta.type = `number`
    inputNumeroTarjeta.id = `numeroTarjeta`
    inputNumeroTarjeta.className = `p-1 mb-3 w-100`
    inputNumeroTarjeta.setAttribute(`required`, ``)
    formPago.append(labelNumeroTarjeta, inputNumeroTarjeta)
  
    let cuotas = document.createElement(`label`)
    cuotas.innerHTML = `Cuotas`
    formPago.append(cuotas)
  
    let SelectCuotas = document.createElement(`select`)
    SelectCuotas.className = `p-1 mb-3 w-100`
    let cuota1 = document.createElement(`option`)
    cuota1.value = `1`
    cuota1.innerHTML = `1`
    let cuota3 = document.createElement(`option`)
    cuota3.value = `3`
    cuota3.innerHTML = `3`
    let cuota6 = document.createElement(`option`)
    cuota6.value = `6`
    cuota6.innerHTML = `6`
    let cuota12 = document.createElement(`option`)
    cuota12.value = `12`
    cuota12.innerHTML = `12`
    SelectCuotas.append(cuota1, cuota3, cuota6, cuota12)
    formPago.append(SelectCuotas)
  
  
    let labelFecha = document.createElement(`label`)
    labelFecha.className = `mb-1`
    labelFecha.innerHTML = `Fecha de vencimiento`
  
    let contenedorFecha = document.createElement(`div`)
    contenedorFecha.className = `d-flex`
    formPago.append(contenedorFecha)
  
    let contenedorMes = document.createElement(`div`)
    contenedorMes.className = `dos-inputs`
    contenedorFecha.append(contenedorMes)
   
    let inputFecha = document.createElement(`input`)
    inputFecha.type = `number`
    inputFecha.className = `p-1 mb-3 me-2`
    inputFecha.setAttribute(`required`, ``)
    contenedorMes.append(inputFecha)
  
    let contenedorAno = document.createElement(`div`)
    contenedorAno.className = `dos-inputs`
    contenedorFecha.append(contenedorAno)
  
    let inputAno = document.createElement(`input`)
    inputAno.type = `number`
    inputAno.className = `p-1 mb-3 me-2`
    inputAno.setAttribute(`required`, ``)
    contenedorAno.append(inputAno)
  
    formPago.append(labelFecha, contenedorFecha)
  
    let labelCodigoSeguridad = document.createElement(`label`)
    labelCodigoSeguridad.setAttribute(`for`, `codigoSeguridad`)
    labelCodigoSeguridad.className = `mb-1`
    labelCodigoSeguridad.innerHTML = `Codigo de seguridad`
    let inputCodigoSeguridad = document.createElement(`input`)
    inputCodigoSeguridad.type = `number`
    inputCodigoSeguridad.id = `codigoSeguridad`
    inputCodigoSeguridad.className = `p-1 mb-3 w-100`
    inputCodigoSeguridad.setAttribute(`required`, ``)
    formPago.append(labelCodigoSeguridad, inputCodigoSeguridad)
  
    let labelDniTarjeta = document.createElement(`label`)
    labelDniTarjeta.setAttribute(`for`, `dniTarjeta`)
    labelDniTarjeta.className = `mb-1`
    labelDniTarjeta.innerHTML = `Dni`
    let inputDniTarjeta = document.createElement(`input`)
    inputDniTarjeta.type = `number`
    inputDniTarjeta.id = `dniTarjeta`
    inputDniTarjeta.className = `p-1 mb-3 w-100`
    inputDniTarjeta.setAttribute(`required`, ``)
    formPago.append(labelDniTarjeta, inputDniTarjeta)
  
    let contenedorBoton3 = document.createElement(`div`)
    contenedorBoton3.className = `d-flex justify-content-end`
    let inputBoton3 = document.createElement(`input`)
    inputBoton3.value = `Finalizar Compra`
    inputBoton3.type = `submit`
    inputBoton3.className = `btn btn-primary btn-continuar`
    contenedorBoton3.append(inputBoton3)
    formPago.append(contenedorBoton3)
    inputBoton3.addEventListener(`click`, (e) => {

      let inputs = document.querySelectorAll(`#formPago input`)
     
    let errores = 0
    for (let input of inputs) {
      if (input.value == ``) {
        errores++
      }
    }
    if (errores == 0) {
      let contenedorFinalizada  = document.createElement(`div`)
      contenedorFinalizada.className = `compra-confirmada d-flex justify-content-center align-items-center`
      let imgFinalizada = document.createElement(`img`)
      imgFinalizada.src = `imagenes/iconografia/check.gif`
      imgFinalizada.alt = `foto de compra finalizada`
      contenedorFinalizada.append(imgFinalizada)
      document.body.append(contenedorFinalizada)
  
      let overlay = document.querySelector(`.overlay-modal`)
  
      let Modal = document.querySelector(`.overlay-modal-producto`)
      overlay.remove()
  
      if (Modal) {
        Modal.remove()
      }
 
  
      setTimeout(() => {
       let confirmada = document.querySelector(`.compra-confirmada`) 
        confirmada.remove();
        /* limpio el carrito */
        carrito.ids = [];
        carrito.cant = [];
        carrito.total = 0;
        /* borro la notificacion del carrito */
        let notiCarrito = document.querySelector(`.notificacion-carrito`);
        notiCarrito.innerHTML = 0;
        notiCarrito.style.opacity = 0;
      }, 3800); 
    }
      
   
    })


    
  
  }

 




  /* col-resumen */
  let colResumen = document.createElement(`div`);
  colResumen.className = `col-12 col-md-4 px-4 resumen-productos overflow-auto`

  let filaResumen = document.createElement(`div`);
  filaResumen.className = `row row-cols-1 overflow-auto py-2`
  colResumen.append(filaResumen)


  
  carrito.ids.forEach((idProducto, indice) => {
    let productoCantidad = carrito.cant[indice];
    let productoCarrito = productos.filter(
      (producto) => producto.id == idProducto
    )[0];

   let contenedorCard = document.createElement(`div`);
   contenedorCard.className = `card my-2 sticky-top`
   let contenedorFluid = document.createElement(`div`);
   contenedorFluid.className = `container-fluid`
   let contenedorFilaProducto = document.createElement(`div`);
   contenedorFilaProducto.className = `row` 
   contenedorCard.append(contenedorFluid)
   contenedorFluid.append(contenedorFilaProducto)

   let col1 = document.createElement(`div`);
   col1.className = `col-5 d-flex justify-content-center align-items-center`
   let imgProducto = document.createElement(`img`);
   imgProducto.src = `imagenes/productos/${productoCarrito.img}`
   imgProducto.className = `img-fluid rounded-start`
   imgProducto.alt = `${productoCarrito.nombre}`
   col1.append(imgProducto)

   let col2 = document.createElement(`div`);
   col2.className = `col-7`
   let contenedorBody = document.createElement(`div`);
   contenedorBody.className =`card-body`
   col2.append(contenedorBody)

   let tituloProducto = document.createElement(`h5`);
   tituloProducto.innerHTML = `${productoCarrito.nombre}`
   tituloProducto.className = `card-title`
   let precioProducto = document.createElement(`span`);
   precioProducto.innerHTML = `${productoCarrito.precio}`
   precioProducto.className = `me-2`
   let cantidadProducto = document.createElement(`span`);
   cantidadProducto.innerHTML = `x ${productoCantidad}`

    contenedorBody.append(tituloProducto, precioProducto, cantidadProducto)

 

    contenedorFilaProducto.append(col1, col2)
    filaResumen.append(contenedorCard)

   
  });



  /* appendeo estructura */
  document.body.append(overlay)
  overlay.append(contenedor)
  contenedor.append(fila)
  fila.append(colDatos, colResumen)



}





/* PRUEBAS LOCAL STORAGE */

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

