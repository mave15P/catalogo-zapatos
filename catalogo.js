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
    detalle: 'Zapatos destalonados con punta fina y un delicado lazo frontal. El equilibrio perfecto entre estilo sofisticado y comodidad para tu día a día, disponible en variada paleta de tonos.'
  },
  {
    id: 'baleta-mitchel',
    nombre: 'Baleta Mitchel',
    precio: 33.0,
    precioDescuento: 28.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0b0b0b', imagen: 'img/baletaMitchelNegro.jpg' },
      { nombre: 'Blanco', hex: '#d6c3a5', imagen: 'img/baletaMitchelBlanco.jpg' }
    ],
    imagenes: ['img/baletaMitchelNegro.jpg', 'img/auraBeich.jpg'],
    detalle: 'Un diseño clásico destalonado con elegante contraste bicolor en el borde y un detalle de lazo fino. Ideal para darle un toque chic y pulcro a cualquier outfit formal o casual.'
  },
  {
    id: 'tacon-aura',
    nombre: 'Tacon Aura',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#111213', imagen: 'img/auraNegro.jpg' },
      { nombre: 'Vino', hex: '#970a0ab6', imagen: 'img/auraVino.jpg' },
      { nombre: 'Beich', hex: '#e1b05bdd', imagen: 'img/auraBeich.jpg' },
      { nombre: 'Blanco', hex: '#f6f6f7', imagen: 'img/auraBlanco.jpg' }
    ],
    imagenes: ['img/aura.jpg', 'img/auraNegro.jpg', 'img/auraVino.jpg', 'img/auraBeich.jpg', 'img/auraBlanco.jpg'],
    detalle: 'Elegante tacón estilizado con punta triangular y un lazo llamativo que acapara todas las miradas. Un diseño romántico y sofisticado disponible en tus tonos favoritos.'
  },
  {
    id: 'baleta-nebula',
    nombre: 'Baleta Nebula',
    precio: 33.0,
    precioDescuento: 28.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0b0c0c', imagen: 'img/coquetteNegro.jpg' },
      { nombre: 'Blanco', hex: '#eeeff1', imagen: 'img/coquetteBlanco.jpg' },
      { nombre: 'Vino', hex: '#970a0ab6', imagen: 'img/coquetteRojo.jpg' }
    ],
    imagenes: ['img/taconcoquette.jpg', 'img/coquetteBlanco.jpg', 'img/coquetteNegro.jpg', 'img/coquetteRojo.jpg'],
    detalle: 'Fórmula diseñada para ofrecer estabilidad, rapidez y total libertad de movimiento en cada paso.'
  },
  {
    id: 'tacon-charol',
    nombre: 'Tacon Charol',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Blanco', hex: '#f3f4f6', imagen: 'img/charolBlanco.jpg' },
      { nombre: 'Chocolate', hex: '#6a3306', imagen: 'img/charolChocolate.jpg' },
      { nombre: 'Negro', hex: '#111827', imagen: 'img/charolNegro.jpg' }, 
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/charolAmarillo.jpg' }
    ],
    imagenes: ['img/charolBlanco.jpg', 'img/charolNegro.jpg', 'img/charolChocolate.jpg', 'img/charolAmarillo.jpg'],
    detalle: 'Tacón medio destalonado en acabado charol con un lazo estructurado en la punta. La opción perfecta para lucir elegante y ejecutiva sin perder la comodidad.'
  },
  {
    id: 'tacon-marrake',
    nombre: 'Tacon Marrake',
    precio: 39.0,
    precioDescuento: 34.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Chocolate', hex: '#6a3306', imagen: 'img/marrakeMarron.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/marrakeAmarillo.jpg' },
      { nombre: 'Negro', hex: '#1f2937', imagen: 'img/marrakeNegro.jpg' },
      { nombre: 'Blanco', hex: '#eff2f6', imagen: 'img/marrakBlanco.jpg' }
    ],
    imagenes: ['img/marrake.jpg', 'img/marrakeMarron.jpg', 'img/marrakeNegro.jpg','img/marrakeAmarillo.jpg', 'img/marrakeBlanco.jpg'],
    detalle: 'Sandalia de tacón ancho con tiras cruzadas y hebilla dorada. Un calzado versátil, cómodo y moderno, diseñado para destacar en cualquier ocasión con su diversidad de colores.'
  },
  {
    id: 'tacon-sofia',
    nombre: 'Tacon Sofia',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#111827', imagen: 'img/sofiaNegro.jpg' },
      { nombre: 'Blanco', hex: '#f8fafc', imagen: 'img/sofiaBlanco.jpg' },
      { nombre: 'Vino', hex: '#970a0ab6', imagen: 'img/sofiaVino.jpg' },
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/sofiaRojo.jpg' },
      { nombre: 'Rosa', hex: '#e9a0cf', imagen: 'img/sofiaRosa.jpg' },
      { nombre: 'Oliva', hex: '#aae986', imagen: 'img/sofiaOLiva.jpg' }
    ],
    imagenes: ['img/sofiaBlanco.jpg', 'img/sofiaNegro.jpg', 'img/sofiaVino.jpg','img/sofiaRojo.jpg', 'img/sofiaRosa.jpg', 'img/sofiaOliva.jpg'],
    detalle: ''
  },
  {
    id: 'baleta-emmy',
    nombre: 'Baleta Emmy',
    precio: 31.0,
    precioDescuento: 26.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Blanco', hex: '#94a3b8', imagen: 'img/baletaEmmyBlanco.jpg' },
      { nombre: 'Negro', hex: '#f8fafc', imagen: 'img/baletaEmmyNegro.jpg' },
      { nombre: 'Vino', hex: '#7f1d1d', imagen: 'img/baletaEmmyVino.jpg' },
      { nombre: 'Rojo', hex: '#7f1d1d', imagen: 'img/baletaEmmyRojo.jpg' },
      { nombre: 'Beich', hex: '#7f1d1d', imagen: 'img/baletaEmmyBeich.jpg' },
      { nombre: 'Amarillo', hex: '#7f1d1d', imagen: 'img/baletaEmmyAmarillo.jpg' }
    ],
    imagenes: ['img/baletaEmmyBlanco.jpg', 'img/baletaEmmyNegro.jpg', 'img/baletaEmmyVino.jpg', 'img/baletaEmmyRojo.jpg' , 'img/baletaEmmyBeich.jpg' , 'img/baletaEmmyAmarillo.jpg'],
    detalle: ''
  },
  { 
  id: 'baleta-nebula',
    nombre: 'Baleta Nebula',
    precio: 33.0,
    precioDescuento: 28.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/baletaNebulaAzul.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/baletaNebulaRosa.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/baletaNebulaAmarillo.jpg' },
      { nombre: 'Chocolate', hex: '#6a3306', imagen: 'img/baletaNebulaMarron.jpg' }
    ],
    imagenes: ['img/baletaNebulaAzul.jpg', 'img/baletaNebulaRosa.jpg', 'img/baletaNebulaAmarillo.jpg', 'img/baletaNebulaMarron.jpg'],
    detalle: 'Flats destalonados de punta fina con lazo delicado en acabado brillante. El calzado bajo perfecto para mantener la elegancia y frescura en tu rutina diaria.'
  },
  { 
  id: 'tacon-coral',
    nombre: 'Tacon Coral',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0a0a0bde', imagen: 'img/coralNegro.jpg' },
      { nombre: 'Blanco', hex: '#ece7eb', imagen: 'img/coralBlanco.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/coralAmarillo.jpg' },
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/coralRojo.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/coralRosa.jpg' }
    ],
    imagenes: ['img/taconCoral.jpg', 'img/coralNegro.jpg', 'img/coralBlanco.jpg', 'img/coralAmarillo.jpg','img/coralRojo.jpg', 'img/coralRosa.jpg'],
    detalle: ''
  },
  { 
 id: 'flats-merida',
    nombre: 'Flats Merida',
    precio: 30.0,
    precioDescuento: 25.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Beich', hex: '#e1b05bdd', imagen: 'img/meridaBeig.jpg' },
      { nombre: 'Negro', hex: '#121112', imagen: 'img/meridaNegro.jpg' },
      { nombre: 'Blanco', hex: '#f0f1ea', imagen: 'img/meridaBlanco.jpg' },
      { nombre: 'Vino', hex: '#640606', imagen: 'img/meridaRojo.jpg' }
    ],
    imagenes: ['img/flatsMerida.jpg', 'img/meridaBeich.jpg', 'img/meridaNegro.jpg', 'img/meridaBlanco.jpg', 'img/meridaRojo.jpg'],
    detalle: ''
  },
  { 
  id: 'flats-coquette',
    nombre: 'Flats Coquette',
    precio: 31.0,
    precioDescuento: 26.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0b0c0cde', imagen: 'img/flatsCoquetteNegro.jpg' },
      { nombre: 'Blanco', hex: '#ede7ec', imagen: 'img/flatsCoquetteBlanco.jpg' },
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/flatsCoquetteRojo.jpg' },
      { nombre: 'Chocolate', hex: '#6a3306', imagen: 'img/flatsCoquetteMarron.jpg' }
    ],
    imagenes: ['img/flatsCoquetteNegro.jpg', 'img/flatsCoquetteBlanco.jpg', 'img/flatsCoquetteRojo.jpg', 'img/flatsCoquetteMarron.jpg'],
    detalle: ''
  },
  { 
  id: 'baleta-dama',
    nombre: 'Baleta Dama',
    precio: 31.0,
    precioDescuento: 26.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/baletaDamaNegro.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/baletaDamaBlanco.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/baletaDamaBeich.jpg' }
    ],
    imagenes: ['img/baletaDamaNegro.jpg', 'img/baletaDamaBlanco.jpg', 'img/baletaDamaBeich.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-maya',
    nombre: 'Tacon Maya',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/mayaBeich.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/mayaNegro.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/mayaBlanco.jpg' }
    ],
    imagenes: ['img/mayaBeich.jpg', 'img/mayaNegro.jpg', 'img/mayaBlanco.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-maya',
    nombre: 'Tacon Maya',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/mayaBeich.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/mayaNegro.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/mayaBlanco.jpg' }
    ],
    imagenes: ['img/mayaBeich.jpg', 'img/mayaNegro.jpg', 'img/mayaBlanco.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-maya',
    nombre: 'Tacon Maya',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/mayaBeich.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/mayaNegro.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/mayaBlanco.jpg' }
    ],
    imagenes: ['img/mayaBeich.jpg', 'img/mayaNegro.jpg', 'img/mayaBlanco.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-maya',
    nombre: 'Tacon Maya',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/mayaBeich.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/mayaNegro.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/mayaBlanco.jpg' }
    ],
    imagenes: ['img/mayaBeich.jpg', 'img/mayaNegro.jpg', 'img/mayaBlanco.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-maya',
    nombre: 'Tacon Maya',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/mayaBeich.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/mayaNegro.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/mayaBlanco.jpg' }
    ],
    imagenes: ['img/mayaBeich.jpg', 'img/mayaNegro.jpg', 'img/mayaBlanco.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-maya',
    nombre: 'Tacon Maya',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/mayaBeich.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/mayaNegro.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/mayaBlanco.jpg' }
    ],
    imagenes: ['img/mayaBeich.jpg', 'img/mayaNegro.jpg', 'img/mayaBlanco.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-maya',
    nombre: 'Tacon Maya',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Azul', hex: '#77aefcde', imagen: 'img/mayaBeich.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/mayaNegro.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/mayaBlanco.jpg' }
    ],
    imagenes: ['img/mayaBeich.jpg', 'img/mayaNegro.jpg', 'img/mayaBlanco.jpg'],
    detalle: ''
  },
  
];

window.catalogo = catalogo;
