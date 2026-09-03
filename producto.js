const product = window.catalogo.find((item) => item.id === new URLSearchParams(window.location.search).get('id'));

const mainImage = document.getElementById('mainImage');
const gallery = document.getElementById('gallery');
const nombre = document.getElementById('productoNombre');
const precio = document.getElementById('productoPrecio');
const descripcion = document.getElementById('productoDescripcion');
const detalle = document.getElementById('productoDetalle');
const colores = document.getElementById('colores');
const colorInfo = document.getElementById('colorInfo');
const tallas = document.getElementById('tallas');
const tallaInfo = document.getElementById('tallaInfo');

if (!product) {
  document.body.innerHTML = `
    <div class="not-found">
      <h1>Producto no encontrado</h1>
      <a href="catalogo.html" class="button secondary">Volver al catálogo</a>
    </div>
  `;
} else {
  let colorActual = product.colores[0];
  let tallaActual = null;

  function actualizarInfoSeleccion() {
    colorInfo.textContent = `Color seleccionado: ${colorActual.nombre}`;
    tallaInfo.textContent = tallaActual ? `Talla seleccionada: ${tallaActual}` : 'Selecciona una talla';
  }

  function actualizarImagenPrincipal(src) {
    mainImage.src = src;
    mainImage.alt = `${product.nombre} - ${colorActual.nombre}`;
  }

  function renderGaleria() {
    gallery.innerHTML = product.imagenes
      .map(
        (imagen, index) => `
          <button class="thumb ${index === 0 ? 'active' : ''}" type="button" data-image="${imagen}">
            <img src="${imagen}" alt="${product.nombre} vista ${index + 1}" />
          </button>
        `
      )
      .join('');

    gallery.querySelectorAll('.thumb').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        gallery.querySelectorAll('.thumb').forEach((btn) => btn.classList.remove('active'));
        thumb.classList.add('active');
        actualizarImagenPrincipal(thumb.dataset.image);
      });
    });
  }

  function renderColores() {
    colores.innerHTML = product.colores
      .map(
        (color) => `
          <button
            class="swatch ${color === colorActual ? 'active' : ''}"
            type="button"
            data-color="${color.nombre}"
            data-image="${color.imagen}"
            title="${color.nombre}"
            style="background: ${color.hex};"
          ></button>
        `
      )
      .join('');

    colores.querySelectorAll('.swatch').forEach((swatch) => {
      swatch.addEventListener('click', () => {
        const colorSeleccionado = product.colores.find((item) => item.nombre === swatch.dataset.color);
        if (!colorSeleccionado) return;

        colorActual = colorSeleccionado;
        actualizarImagenPrincipal(colorSeleccionado.imagen);
        renderColores();
        actualizarInfoSeleccion();
      });
    });
  }

  function renderTallas() {
    tallas.innerHTML = product.tallas
      .map((talla) => `
        <button class="size-option ${talla === tallaActual ? 'active' : ''}" type="button" data-size="${talla}">
          ${talla}
        </button>
      `)
      .join('');

    tallas.querySelectorAll('.size-option').forEach((size) => {
      size.addEventListener('click', () => {
        tallaActual = size.dataset.size;
        renderTallas();
        actualizarInfoSeleccion();
      });
    });
  }

  nombre.textContent = product.nombre;
  const precioFinal = product.precioDescuento ?? product.precio;
  precio.innerHTML = `
    <span class="price-item price-bcv">
      <small>Precio BCV</small>
      <strong>$${product.precio.toFixed(2)}</strong>
    </span>
    <span class="price-item price-divisa">
      <small>Precio en divisa</small>
      <strong>$${precioFinal.toFixed(2)}</strong>
    </span>
  `;
  descripcion.textContent = product.descripcion;
  detalle.textContent = product.detalle;

  actualizarImagenPrincipal(colorActual.imagen);
  renderGaleria();
  renderColores();
  renderTallas();
  actualizarInfoSeleccion();

  const botonCompra = document.getElementById('botonCompra');
  const storageKey = 'simulacionCalzados';

  function actualizarEstadoBoton() {
    let guardados;
    try {
      guardados = JSON.parse(localStorage.getItem(storageKey) || '[]');
    } catch (error) {
      guardados = [];
    }
    const seleccionado = Array.isArray(guardados) && guardados.some((item) =>
      typeof item === 'string' ? item === product.id : item?.id === product.id
    );
    botonCompra.classList.toggle('selected', seleccionado);
    botonCompra.textContent = seleccionado ? 'Agregado a la simulación' : 'Agregar a la simulación';
  }

  actualizarEstadoBoton();

  botonCompra.addEventListener('click', () => {
    if (!tallaActual) {
      tallaInfo.textContent = 'Selecciona una talla antes de agregar a la simulación';
      return;
    }

    let guardados;
    try {
      guardados = JSON.parse(localStorage.getItem(storageKey) || '[]');
    } catch (error) {
      guardados = [];
    }
    const seleccionActual = Array.isArray(guardados)
      ? guardados.filter((item) => typeof item === 'object' && item?.id !== product.id)
      : [];

    seleccionActual.push({
      id: product.id,
      talla: tallaActual,
      color: colorActual.nombre,
      imagen: colorActual.imagen
    });
    localStorage.setItem(storageKey, JSON.stringify(seleccionActual));

    actualizarEstadoBoton();
  });
}
