const STORAGE_KEY = 'simulacionCalzados';
const pedidoLista = document.getElementById('pedidoLista');
const pedidoVacio = document.getElementById('pedidoVacio');
const pedidoTotalBcv = document.getElementById('pedidoTotalBcv');
const pedidoTotalDivisa = document.getElementById('pedidoTotalDivisa');
const pedidoReservaBcv = document.getElementById('pedidoReservaBcv');
const pedidoReservaUsdt = document.getElementById('pedidoReservaUsdt');
const datosPedidoForm = document.getElementById('datosPedidoForm');
const datosPedidoResultado = document.getElementById('datosPedidoResultado');

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

function leerPedido() {
  try {
    const guardados = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(guardados) ? guardados : [];
  } catch (error) {
    return [];
  }
}

function guardarPedido(pedido) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pedido));
}

function obtenerProducto(id) {
  return window.catalogo.find((item) => item.id === id);
}

function renderPedido() {
  const pedido = leerPedido()
    .map((seleccion) => ({ seleccion, producto: obtenerProducto(seleccion.id) }))
    .filter((item) => item.producto && typeof item.seleccion === 'object');

  if (!pedido.length) {
    pedidoLista.innerHTML = '';
    pedidoVacio.hidden = false;
    datosPedidoForm.hidden = true;
    pedidoTotalBcv.textContent = formatCurrency(0);
    pedidoTotalDivisa.textContent = formatUsdt(0);
    pedidoReservaBcv.textContent = formatCurrency(0);
    pedidoReservaUsdt.textContent = formatUsdt(0);
    return;
  }

  pedidoVacio.hidden = true;
  datosPedidoForm.hidden = false;
  pedidoLista.innerHTML = pedido
    .map(({ seleccion, producto }) => {
      const colorActual = producto.colores.find((color) => color.nombre === seleccion.color) || producto.colores[0];
      const tallaActual = producto.tallas.includes(seleccion.talla) ? seleccion.talla : producto.tallas[0];
      return `
        <article class="order-item" data-id="${producto.id}">
          <img src="${colorActual.imagen}" alt="${producto.nombre} - ${colorActual.nombre}" />
          <div class="order-item-info">
            <h3>${producto.nombre}</h3>
            <label>Color
              <select class="order-color" aria-label="Color de ${producto.nombre}">
                ${producto.colores.map((color) => `<option value="${color.nombre}" ${color.nombre === colorActual.nombre ? 'selected' : ''}>${color.nombre}</option>`).join('')}
              </select>
            </label>
            <label>Talla
              <select class="order-size" aria-label="Talla de ${producto.nombre}">
                ${producto.tallas.map((talla) => `<option value="${talla}" ${talla === tallaActual ? 'selected' : ''}>${talla}</option>`).join('')}
              </select>
            </label>
          </div>
          <button class="order-delete" type="button" data-id="${producto.id}">Eliminar</button>
        </article>
      `;
    })
    .join('');

  const totalBcv = pedido.reduce((total, item) => total + item.producto.precio, 0);
  const totalDivisa = pedido.reduce((total, item) => total + (item.producto.precioDescuento ?? item.producto.precio), 0);
  pedidoTotalBcv.textContent = formatCurrency(totalBcv);
  pedidoTotalDivisa.textContent = formatUsdt(totalDivisa);
  pedidoReservaBcv.textContent = formatCurrency(totalBcv * 0.2);
  pedidoReservaUsdt.textContent = formatUsdt(totalDivisa * 0.2);
}

pedidoLista.addEventListener('change', (event) => {
  const item = event.target.closest('.order-item');
  if (!item) return;

  const pedido = leerPedido();
  const seleccion = pedido.find((guardado) => guardado.id === item.dataset.id);
  if (!seleccion) return;

  if (event.target.classList.contains('order-color')) {
    seleccion.color = event.target.value;
    const producto = obtenerProducto(seleccion.id);
    seleccion.imagen = producto.colores.find((color) => color.nombre === seleccion.color)?.imagen;
  }
  if (event.target.classList.contains('order-size')) seleccion.talla = event.target.value;

  guardarPedido(pedido);
  renderPedido();
});

pedidoLista.addEventListener('click', (event) => {
  const button = event.target.closest('.order-delete');
  if (!button) return;

  const pedido = leerPedido().filter((seleccion) => seleccion.id !== button.dataset.id);
  guardarPedido(pedido);
  renderPedido();
});

datosPedidoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const pedido = leerPedido()
    .map((seleccion) => ({ seleccion, producto: obtenerProducto(seleccion.id) }))
    .filter((item) => item.producto && typeof item.seleccion === 'object');
  if (!pedido.length) return;

  const datos = new FormData(datosPedidoForm);
  const totalBcv = pedido.reduce((total, item) => total + item.producto.precio, 0);
  const totalDivisa = pedido.reduce((total, item) => total + (item.producto.precioDescuento ?? item.producto.precio), 0);
  const reservaBcv = totalBcv * 0.2;
  const reservaUsdt = totalDivisa * 0.2;
  const detalles = pedido
    .map(({ seleccion, producto }) => [
      `Calzado: ${producto.nombre}`,
      `Talla: ${seleccion.talla}`,
      `Color: ${seleccion.color}`
    ].join('\n'))
    .join('\n\n');

  const mensaje = [
    'Pedido de Mai Shoes',
    `Nombre: ${datos.get('nombre')}`,
    `Apellido: ${datos.get('apellido')}`,
    `Ciudad: ${datos.get('ciudad')}`,
    `Dirección corta: ${datos.get('direccion')}`,
    '',
    detalles,
    '',
    `Total BCV: ${formatCurrency(totalBcv)}`,
    `20% de reserva BCV: ${formatCurrency(reservaBcv)}`,
    `Total USDT: ${formatUsdt(totalDivisa)}`,
    `20% de reserva USDT: ${formatUsdt(reservaUsdt)}`
  ].join('\n');

  const whatsappUrl = `https://wa.me/584128672906?text=${encodeURIComponent(mensaje)}`;
  datosPedidoResultado.textContent = 'Abriendo WhatsApp con el detalle de tu pedido...';
  window.location.href = whatsappUrl;
});

renderPedido();