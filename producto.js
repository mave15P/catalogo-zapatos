const product = window.catalogo.find((item) => item.id === new URLSearchParams(window.location.search).get('id'));

const mainImage = document.getElementById('mainImage');
const gallery = document.getElementById('gallery');
const nombre = document.getElementById('productoNombre');
const precio = document.getElementById('productoPrecio');
const descripcion = document.getElementById('productoDescripcion');
const detalle = document.getElementById('productoDetalle');
const colores = document.getElementById('colores');
const colorInfo = document.getElementById('colorInfo');

if (!product) {
  document.body.innerHTML = `
    <div class="not-found">
      <h1>Producto no encontrado</h1>
      <a href="catalogo.html" class="button secondary">Volver al catálogo</a>
    </div>
  `;
} else {
  let colorActual = product.colores[0];

  function actualizarInfoSeleccion() {
    colorInfo.textContent = `Color seleccionado: ${colorActual.nombre}`;
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
  actualizarInfoSeleccion();

  const botonCompra = document.getElementById('botonCompra');
  botonCompra.textContent = 'Agregar a la simulación';

  botonCompra.addEventListener('click', () => {
    const storageKey = 'simulacionCalzados';
    const guardados = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const seleccionActual = Array.isArray(guardados) ? [...new Set(guardados)] : [];

    if (!seleccionActual.includes(product.id)) {
      seleccionActual.push(product.id);
      localStorage.setItem(storageKey, JSON.stringify(seleccionActual));
    }

    botonCompra.textContent = 'Agregado a la simulación';
    setTimeout(() => {
      botonCompra.textContent = 'Agregar a la simulación';
    }, 1200);
  });
}
