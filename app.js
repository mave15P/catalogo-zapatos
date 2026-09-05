const STORAGE_KEY = 'simulacionCalzados';

const catalogoOrdenado = [...window.catalogo].sort((a, b) =>
  a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' })
);

const getSavedSelection = () => {
  try {
    const guardados = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const idsUnicos = Array.isArray(guardados) ? guardados : [];
    return [...new Set(idsUnicos)];
  } catch (error) {
    return [];
  }
};

const formatCurrency = (value) =>
  new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);

const formatUsdt = (value) =>
  `${new Intl.NumberFormat('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)} USDT`;

const normalizeSearchText = (value) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const contenedor = document.getElementById('catalogo');
const total = document.getElementById('totalProductos');
const searchInput = document.getElementById('searchInput');
const simulacionLista = document.getElementById('simulacionLista');
const simulacionVacia = document.getElementById('simulacionVacia');
const precioBvc = document.getElementById('precioBvc');
const descuentoDivisa = document.getElementById('descuentoDivisa');
const consultarPedido = document.getElementById('consultarPedido');
const consultaPedidoError = document.getElementById('consultaPedidoError');

const seleccion = new Map();
getSavedSelection().forEach((guardado) => {
  const id = typeof guardado === 'string' ? guardado : guardado?.id;
  const item = catalogoOrdenado.find((producto) => producto.id === id);
  if (item) seleccion.set(item.id, { ...item, variante: typeof guardado === 'object' ? guardado : null });
});

let modeloSeleccionadoId = getSavedSelection()[0] || catalogoOrdenado[0]?.id || null;

function guardarSeleccion() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(
      [...seleccion.values()].map((item) =>
        item.variante
          ? { id: item.id, talla: item.variante.talla, color: item.variante.color, imagen: item.variante.imagen }
          : item.id
      )
    )
  );
}

function renderSimulador() {
  const itemsSeleccionados = [...seleccion.values()];

  const totalBcv = itemsSeleccionados.reduce((sum, item) => sum + item.precio, 0);
  const totalDivisa = itemsSeleccionados.reduce(
    (sum, item) => sum + (item.precioDescuento ?? item.precio),
    0
  );

  if (precioBvc) precioBvc.textContent = formatCurrency(totalBcv);
  if (descuentoDivisa) descuentoDivisa.textContent = formatUsdt(totalDivisa);

  if (!simulacionLista || !simulacionVacia) return;

  if (!itemsSeleccionados.length) {
    simulacionVacia.style.display = 'block';
    simulacionLista.innerHTML = '';
    if (precioBvc) precioBvc.textContent = formatCurrency(0);
    if (descuentoDivisa) descuentoDivisa.textContent = formatUsdt(0);
    return;
  }

  simulacionVacia.style.display = 'none';
  simulacionLista.innerHTML = itemsSeleccionados
    .map(
      (item) => `
        <div class="sim-item">
          <img src="${item.variante?.imagen || item.imagenes[0]}" alt="${item.nombre}" />
          <div class="sim-item-copy">
            <strong>${item.nombre}</strong>
            ${item.variante ? `<span class="sim-item-variant">Talla ${item.variante.talla} · ${item.variante.color}</span>` : ''}
            <div class="sim-item-prices">
              <span class="sim-bcv">${formatCurrency(item.precio)}</span>
              <span class="sim-divisa">${formatUsdt(item.precioDescuento ?? item.precio)}</span>
            </div>
          </div>
          <button type="button" class="sim-remove" data-id="${item.id}" aria-label="Quitar ${item.nombre}">Quitar</button>
        </div>
      `
    )
    .join('');

  simulacionLista.querySelectorAll('.sim-remove').forEach((button) => {
    button.addEventListener('click', () => {
      seleccion.delete(button.dataset.id);
      guardarSeleccion();
      renderCatalogo();
      renderSimulador();
    });
  });
}

function renderCatalogo(items = catalogoOrdenado) {
  if (!contenedor || !total) return;

  const query = normalizeSearchText(searchInput?.value.trim() || '');
  const productosFiltrados = query
    ? items.filter((item) => normalizeSearchText(item.nombre).includes(query))
    : items;

  total.textContent = `${productosFiltrados.length} artículos`;
  contenedor.innerHTML = productosFiltrados
    .map((item) => {
      const precioFinal = item.precioDescuento ?? item.precio;
      const colores = item.colores
        .map(
          (color) => `
            <div class="color-pill" title="${color.nombre}">
              <span class="color-dot" style="background:${color.hex};"></span>
              <span>${color.nombre}</span>
            </div>
          `
        )
        .join('');

      const tallas = item.tallas.map((talla) => `<span class="talla-chip">${talla}</span>`).join('');
      const seleccionado = seleccion.has(item.id);

      return `
        <article class="select-card ${item.id === modeloSeleccionadoId ? 'active' : ''}">
          <img src="${item.imagenes[0]}" alt="${item.nombre}" />
          <div class="content">
            <div class="card-header-row">
              <h2 class="name">${item.nombre}</h2>
            </div>

            <div class="meta">
              <div class="price-stack">
                <span class="price-old">${formatCurrency(item.precio)}</span>
                <span class="price-discount">${formatUsdt(precioFinal)}</span>
              </div>
            </div>

            <div class="info-block">
              <p class="info-label">Colores disponibles</p>
              <div class="color-list">${colores}</div>
            </div>

            <div class="info-block">
              <p class="info-label">Tallas</p>
              <div class="talla-list">${tallas}</div>
            </div>

            <div class="card-actions">
              <a class="detail-link" href="producto.html?id=${item.id}">Ver perfil</a>
              <button class="select-button ${seleccionado ? 'selected' : ''}" type="button" data-id="${item.id}">
                ${seleccionado ? 'Seleccionado' : 'Seleccionar'}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  contenedor.querySelectorAll('.select-button').forEach((button) => {
    button.addEventListener('click', () => {
      const producto = catalogoOrdenado.find((item) => item.id === button.dataset.id);
      if (!producto) return;

      if (seleccion.has(producto.id)) {
        seleccion.delete(producto.id);
      } else {
        seleccion.set(producto.id, producto);
      }

      guardarSeleccion();
      renderCatalogo();
      renderSimulador();
    });
  });

  contenedor.querySelectorAll('.select-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.select-button') || event.target.closest('.detail-link')) {
        return;
      }
      const id = card.querySelector('.select-button')?.dataset.id;
      if (!id) return;
      modeloSeleccionadoId = id;
      renderCatalogo();
    });
  });
}

if (searchInput) {
  searchInput.addEventListener('input', () => {
    renderCatalogo(catalogoOrdenado);
  });
}

if (consultarPedido) {
  consultarPedido.addEventListener('click', () => {
    const simulacionCompleta = [...seleccion.values()].length > 0 && [...seleccion.values()].every((item) =>
      item.variante?.color && item.variante?.talla
    );

    if (!simulacionCompleta) {
      if (consultaPedidoError) {
        consultaPedidoError.textContent = 'Falta especificar el color y la talla del calzado.';
      }
      return;
    }

    if (consultaPedidoError) consultaPedidoError.textContent = '';
    window.location.href = 'datos-pedido.html';
  });
}

renderCatalogo();
renderSimulador();
