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
    id: 'tacon-coquette',
    nombre: 'Tacon Coquette',
    precio: 39.0,
    precioDescuento: 34.0,
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
  id: 'baleta-atenas',
    nombre: 'Baleta Atenas',
    precio: 28.0,
    precioDescuento: 23.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#77aefcde', imagen: 'img/atenasNegro.jpg' },
      { nombre: 'Vino', hex: '#e399d3', imagen: 'img/atenasVino.jpg' },
      { nombre: 'Amarillo', hex: '#cee089', imagen: 'img/atenasAmarillo.jpg' },
      { nombre: 'Blanco', hex: '#f3f5ec', imagen: 'img/atenasBlanco.jpg' }
    ],
    imagenes: ['img/baletaAtenas.jpg','img/atenasNegro.jpg', 'img/atenasVino.jpg', 'img/atenasAmarillo.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-stiletto',
    nombre: 'Tacon Stiletto',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/stilettoRojo.jpg' },
      { nombre: 'Negro', hex: '#1c1b1c', imagen: 'img/stilettoNegro.jpg' },
      { nombre: 'Blanco', hex: '#f7f8f2', imagen: 'img/stilettoBlanco.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/stilettoBeich.jpg' }
    ],
    imagenes: ['img/stilettoRojo.jpg', 'img/stilettoNegro.jpg', 'img/stilettoBlanco.jpg', 'img/stilettoBeich.jpg'],
    detalle: ''
  },
  { 
  id: 'flats-lore',
    nombre: 'Flats Lore',
    precio: 30.0,
    precioDescuento: 25.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#101011de', imagen: 'img/flatsLoreNegro.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/flatsLoreBeich.jpg' },
      { nombre: 'Blanco', hex: '#f3f5ec', imagen: 'img/flatsLoreBlanco.jpg' }
    ],
    imagenes: ['img/flatsLoreNegro.jpg', 'img/flatsLoreBeich.jpg', 'img/flatsLoreBlanco.jpg'],
    detalle: ''
  },
  { 
  id: 'mocasino',
    nombre: 'Mocasino',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#77aefcde', imagen: 'img/mocasinoNegro.jpg' },
      { nombre: 'Beige', hex: '#e399d3', imagen: 'img/mocasinoBeige.jpg' },
      { nombre: 'Marron', hex: '#cee089', imagen: 'img/mocasinoMarron.jpg' },
      { nombre: 'Vino', hex: '#cee089', imagen: 'img/mocasinoVino.jpg' }
    ],
    imagenes: ['img/mocasinoNegro.jpg', 'img/mocasinoBeige.jpg', 'img/mocasinoMarron.jpg', 'img/mocasinoVino.jpg'],
    detalle: ''
  },
  { 
   id: 'puntilla-charol',
    nombre: 'Puntilla Charol',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Vino', hex: '#77aefcde', imagen: 'img/puntillaVino.jpg' },
      { nombre: 'Negro', hex: '#e399d3', imagen: 'img/puntillaNegro.jpg' },
      { nombre: 'Beige', hex: '#cee089', imagen: 'img/puntillaBeige.jpg' }
    ],
    imagenes: ['img/puntillaCharol.jpg','img/puntillaVino.jpg', 'img/puntillaNegro.jpg', 'img/puntillaBeige.jpg'],
    detalle: ''
  },
  { 
   id: 'baleta-diana',
    nombre: 'Baleta Diana',
    precio: 33.0,
    precioDescuento: 28.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Rojo', hex: '#77aefcde', imagen: 'img/dianaRojo.jpg' },
      { nombre: 'Beige', hex: '#e399d3', imagen: 'img/dianaBeige.jpg' },
      { nombre: 'Negro', hex: '#cee089', imagen: 'img/dianaNegro.jpg' },
      { nombre: 'Dorado', hex: '#cee089', imagen: 'img/dianaDorado.jpg' }
    ],
    imagenes: ['img/dianaRojo.jpg', 'img/dianaBeige.jpg', 'img/dianaNegro.jpg', 'img/dianaDorado.jpg'],
    detalle: ''
  },
  { 
   id: 'tacon-olivia',
    nombre: 'Tacon Olivia',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#77aefcde', imagen: 'img/oliviaNegro.jpg' },
      { nombre: 'Oliva', hex: '#e399d3', imagen: 'img/oliviaOliva.jpg' },
      { nombre: 'Crema', hex: '#cee089', imagen: 'img/oliviaCrema.jpg' }
    ],
    imagenes: ['img/oliviaNegro.jpg', 'img/oliviaOliva.jpg', 'img/oliviaCrema.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-clasic',
    nombre: 'Tacon Clasic',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#77aefcde', imagen: 'img/clasicNegro.jpg' },
      { nombre: 'Blanco', hex: '#e399d3', imagen: 'img/clasicBlanco.jpg' },
      { nombre: 'Vino', hex: '#cee089', imagen: 'img/clasicVino.jpg' }
    ],
    imagenes: ['img/clasicNegro.jpg', 'img/clasicBlanco.jpg', 'img/clasicVino.jpg'],
    detalle: ''
  },
  { 
    id: 'modelo-luna',
    nombre: 'Modelo Luna',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#77aefcde', imagen: 'img/lunaNegro.jpg' },
      { nombre: 'Blanco', hex: '#e399d3', imagen: 'img/lunaBlanco.jpg' },
      { nombre: 'Marron', hex: '#cee089', imagen: 'img/lunaMarron.jpg' }
    ],
    imagenes: ['img/modeloLuna.jpg','img/lunaNegro.jpg', 'img/lunaBlanco.jpg', 'img/lunaMarron.jpg'],
    detalle: ''
  },
  { 
   id: 'tacon-encaje',
    nombre: 'Tacon Encaje',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#77aefcde', imagen: 'img/encageNegro.jpg' },
      { nombre: 'Blanco', hex: '#e399d3', imagen: 'img/encageBlanco.jpg' },
      { nombre: 'Beige', hex: '#cee089', imagen: 'img/encageBeige.jpg' }
    ],
    imagenes: ['img/encageNegro.jpg', 'img/encageBlanco.jpg', 'img/encageBeige.jpg'],
    detalle: ''
  },
  { 
   id: 'tacon-prisma',
    nombre: 'Tacon Prisma',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#77aefcde', imagen: 'img/prismaNegro.jpg' },
      { nombre: 'Beige', hex: '#e399d3', imagen: 'img/prismaBeige.jpg' },
      { nombre: 'Blanco', hex: '#cee089', imagen: 'img/prismaBlanco.jpg' }
    ],
    imagenes: ['img/prismaNegro.jpg', 'img/prismaBeige.jpg', 'img/prismaBlanco.jpg'],
    detalle: ''
  },
  { 
   id: 'tacon-philipina',
    nombre: 'tacon Philipina',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Vino', hex: '#77aefcde', imagen: 'img/philipinaVino.jpg' },
      { nombre: 'Beige', hex: '#e399d3', imagen: 'img/philipinaBeige.jpg' },
      { nombre: 'Blanco', hex: '#cee089', imagen: 'img/philipinaBlanco.jpg' },
      { nombre: 'Chocolate', hex: '#cee089', imagen: 'img/philipinaChocolate.jpg' }
    ],
    imagenes: ['img/philipinaVino.jpg', 'img/philipinaBeige.jpg', 'img/philipinaBlanco.jpg', 'img/philipinaChocolate.jpg'],
    detalle: ''
  },
  { 
   id: 'tacon-bordada',
    nombre: 'Tacon Bordada',
    precio: 42.0,
    precioDescuento: 37.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Vino', hex: '#77aefcde', imagen: 'img/bordadaVino.jpg' },
      { nombre: 'Dorado', hex: '#e399d3', imagen: 'img/bordadaDorado.jpg' },
      { nombre: 'Negro', hex: '#cee089', imagen: 'img/bordadaNegro.jpg' },
      { nombre: 'Chocolate', hex: '#cee089', imagen: 'img/bordadaMarron.jpg' },
      { nombre: 'Rosa', hex: '#cee089', imagen: 'img/bordadaRosa.jpg' },
    ],
    imagenes: ['img/taconBordada.jpg','img/bordadaVino.jpg', 'img/bordadaDorado.jpg', 'img/bordadaNegro.jpg', 'img/bordadaMarron.jpg', 'img/bordadaRosa.jpg'],
    detalle: ''
  },
  { 
   id: 'baleta-maryjean',
    nombre: 'Baleta Mary Jean',
    precio: 30.0,
    precioDescuento: 25.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#77aefcde', imagen: 'img/maryjeanNegro.jpg' },
      { nombre: 'Blanco', hex: '#e399d3', imagen: 'img/maryjeanBlanco.jpg' },
      { nombre: 'Chocolate', hex: '#cee089', imagen: 'img/maryjeanMarron.jpg' }
    ],
    imagenes: ['img/maryjeanNegro.jpg', 'img/maryjeanBlanco.jpg', 'img/maryjeanMarron.jpg'],
    detalle: ''
  }
];

window.catalogo = catalogo;
