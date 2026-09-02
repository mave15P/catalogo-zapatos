const catalogo = [
  {
    id: 'tacon-ambar',
    nombre: 'Tacon Ambar',
    precio: 37.0,
    precioDescuento: 32.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/taconAmbarRosa.jpg' },
      { nombre: 'Negro', hex: '#040404', imagen: 'img/taconAmbarNegro.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/taconAmbarAmarillo.jpg' }
    ],
    imagenes: ['img/taconAmbar.jpg', 'img/taconAmbarRosa.jpg', 'img/taconAmbarNegro.jpg', 'img/taconAmbarAmarillo.jpg'],
    detalle: 'Suela de alto rendimiento, amortiguación responsiva y diseño moderno para quienes buscan comodidad compatible con la actividad diaria.'
  },
  {
    id: 'clarks-desert-trek',
    nombre: 'Clarks Desert Trek',
    categoria: 'Casual',
    precio: 139.5,
    precioDescuento: 119.99,
    descripcion: 'Estilo clásico con suela resistente y gran confort.',
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Marrón', hex: '#8b5e3c', imagen: 'img/aura.jpg' },
      { nombre: 'Beige', hex: '#d6c3a5', imagen: 'img/auraBeich.jpg' },
      { nombre: 'Negro', hex: '#1f2937', imagen: 'img/auraNegro.jpg' }
    ],
    imagenes: ['img/aura.jpg', 'img/auraBeich.jpg', 'img/auraNegro.jpg'],
    detalle: 'Diseñado para acompañarte todo el día con un look casual, una mezcla perfecta de estilo, confort y durabilidad.'
  },
  {
    id: 'nike-air-max',
    nombre: 'Nike Air Max',
    categoria: 'Urban',
    precio: 214.0,
    precioDescuento: 179.99,
    descripcion: 'Energía y estilo con amortiguación visible.',
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Blanco', hex: '#f3f4f6', imagen: 'img/meridaBlanco.jpg' },
      { nombre: 'Rojo', hex: '#dc2626', imagen: 'img/meridaRojo.jpg' },
      { nombre: 'Negro', hex: '#111827', imagen: 'img/meridaNegro.jpg' }
    ],
    imagenes: ['img/flatsMerida.jpg', 'img/meridaBlanco.jpg', 'img/meridaRojo.jpg', 'img/meridaNegro.jpg'],
    detalle: 'Refuerzos ligeros, visión urbana y una suela de impacto que mantiene la comodidad durante todo el día.'
  },
  {
    id: 'puma-velocity',
    nombre: 'Puma Velocity',
    categoria: 'Deportivo',
    precio: 40.0,
    precioDescuento: 30.0,
    descripcion: 'Ligereza y tracción para alta performance.',
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#2563eb', imagen: 'img/coquetteNegro.jpg' },
      { nombre: 'Gris', hex: '#9ca3af', imagen: 'img/coquetteBlanco.jpg' },
      { nombre: 'Blanco', hex: '#f8fafc', imagen: 'img/coquetteRojo.jpg' }
    ],
    imagenes: ['img/coquetteBlanco.jpg', 'img/coquetteNegro.jpg', 'img/coquetteRojo.jpg'],
    detalle: 'Fórmula diseñada para ofrecer estabilidad, rapidez y total libertad de movimiento en cada paso.'
  },
  {
    id: 'skechers-go-walk',
    nombre: 'Skechers Go Walk',
    categoria: 'Comfort',
    precio: 129.99,
    precioDescuento: 99.99,
    descripcion: 'Máxima comodidad para caminar con descanso.',
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Blanco', hex: '#f3f4f6', imagen: 'img/charolBlanco.jpg' },
      { nombre: 'Gris', hex: '#6b7280', imagen: 'img/charolChocolate.jpg' },
      { nombre: 'Negro', hex: '#111827', imagen: 'img/charolNegro.jpg' }
    ],
    imagenes: ['img/charolBlanco.jpg', 'img/charolNegro.jpg', 'img/charolChocolate.jpg'],
    detalle: 'Una de las opciones más cómodas para caminar todo el día con ligereza y apoyo continuo.'
  },
  {
    id: 'timberland-premium',
    nombre: 'Timberland Premium',
    categoria: 'Outdoor',
    precio: 239.0,
    precioDescuento: 199.0,
    descripcion: 'Resistencia y estilo para actividades exteriores.',
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Marrón', hex: '#7c4a2a', imagen: 'img/marrakeMarron.jpg' },
      { nombre: 'Verde', hex: '#3f6212', imagen: 'img/marrake.jpg' },
      { nombre: 'Negro', hex: '#1f2937', imagen: 'img/marrakeNegro.jpg' }
    ],
    imagenes: ['img/marrake.jpg', 'img/marrakeMarron.jpg', 'img/marrakeNegro.jpg'],
    detalle: 'Materiales robustos, suela protectora y un diseño que combina resistencia con uso urbano.'
  },
  {
    id: 'vans-old-skool',
    nombre: 'Vans Old Skool',
    categoria: 'Street',
    precio: 99.9,
    precioDescuento: 79.9,
    descripcion: 'Ícono casual con un look auténtico y atemporal.',
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#111827', imagen: 'img/sofiaNegro.jpg' },
      { nombre: 'Blanco', hex: '#f8fafc', imagen: 'img/sofiaBlanco.jpg' },
      { nombre: 'Vino', hex: '#7f1d1d', imagen: 'img/sofiaVino.jpg' }
    ],
    imagenes: ['img/sofiaBlanco.jpg', 'img/sofiaNegro.jpg', 'img/sofiaVino.jpg'],
    detalle: 'Una opción que mantiene el estilo casual y urbano sin perder comodidad ni versatilidad.'
  },
  {
    id: 'zara-sport-flex',
    nombre: 'Zara Sport Flex',
    categoria: 'Fitness',
    precio: 149.0,
    precioDescuento: 119.0,
    descripcion: 'Diseño funcional para movimiento, intensidad y estilo.',
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Gris', hex: '#94a3b8', imagen: 'img/baletaEmmyBlanco.jpg' },
      { nombre: 'Blanco', hex: '#f8fafc', imagen: 'img/baletaEmmyNegro.jpg' },
      { nombre: 'Vino', hex: '#7f1d1d', imagen: 'img/baletaEmmyVino.jpg' }
    ],
    imagenes: ['img/baletaEmmyBlanco.jpg', 'img/baletaEmmyNegro.jpg', 'img/baletaEmmyVino.jpg'],
    detalle: 'Combina movilidad, soporte y estética para tus rutinas más activas y una vida diaria funcional.'
  }
];

window.catalogo = catalogo;
