const catalogo = [
  {
    id: 'tacon-ambar',
    nombre: 'Tacón Ambar',
    precio: 37.0,
    precioDescuento: 32.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/taconAmbarRosa.jpg' },
      { nombre: 'Negro', hex: '#040404', imagen: 'img/taconAmbarNegro.jpg' },
      { nombre: 'Amarillo', hex: '#dff781', imagen: 'img/taconAmbarAmarillo.jpg' }
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
    nombre: 'Tacón Aura',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#111213', imagen: 'img/auraNegro.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/auraVino.jpg' },
      { nombre: 'Beich', hex: '#e1b05bdd', imagen: 'img/auraBeich.jpg' },
      { nombre: 'Blanco', hex: '#f6f6f7', imagen: 'img/auraBlanco.jpg' }
    ],
    imagenes: ['img/aura.jpg', 'img/auraNegro.jpg', 'img/auraVino.jpg', 'img/auraBeich.jpg', 'img/auraBlanco.jpg'],
    detalle: 'Elegante tacón estilizado con punta triangular y un lazo llamativo que acapara todas las miradas. Un diseño romántico y sofisticado disponible en tus tonos favoritos.'
  },
  {
    id: 'tacon-coquette',
    nombre: 'Tacón Coquette',
    precio: 39.0,
    precioDescuento: 34.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0b0c0c', imagen: 'img/coquetteNegro.jpg' },
      { nombre: 'Blanco', hex: '#eeeff1', imagen: 'img/coquetteBlanco.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/coquetteRojo.jpg' }
    ],
    imagenes: ['img/taconcoquette.jpg', 'img/coquetteBlanco.jpg', 'img/coquetteNegro.jpg', 'img/coquetteRojo.jpg'],
    detalle: 'Fórmula diseñada para ofrecer estabilidad, rapidez y total libertad de movimiento en cada paso.'
  },
  {
    id: 'tacon-charol',
    nombre: 'Tacón Charol',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Blanco', hex: '#f3f4f6', imagen: 'img/charolBlanco.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/charolChocolate.jpg' },
      { nombre: 'Negro', hex: '#111827', imagen: 'img/charolNegro.jpg' }, 
      { nombre: 'Amarillo', hex: '#dff781', imagen: 'img/charolAmarillo.jpg' }
    ],
    imagenes: ['img/charolBlanco.jpg', 'img/charolNegro.jpg', 'img/charolChocolate.jpg', 'img/charolAmarillo.jpg'],
    detalle: 'Tacón medio destalonado en acabado charol con un lazo estructurado en la punta. La opción perfecta para lucir elegante y ejecutiva sin perder la comodidad.'
  },
  {
    id: 'tacon-marrake',
    nombre: 'Tacón Marrake',
    precio: 39.0,
    precioDescuento: 34.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/marrakeMarron.jpg' },
      { nombre: 'Amarillo', hex: '#dff781', imagen: 'img/marrakeAmarillo.jpg' },
      { nombre: 'Negro', hex: '#1f2937', imagen: 'img/marrakeNegro.jpg' },
      { nombre: 'Blanco', hex: '#eff2f6', imagen: 'img/marrakBlanco.jpg' }
    ],
    imagenes: ['img/marrake.jpg', 'img/marrakeMarron.jpg', 'img/marrakeNegro.jpg','img/marrakeAmarillo.jpg', 'img/marrakeBlanco.jpg'],
    detalle: 'Sandalia de tacón ancho con tiras cruzadas y hebilla dorada. Un calzado versátil, cómodo y moderno, diseñado para destacar en cualquier ocasión con su diversidad de colores.'
  },
  {
    id: 'tacon-sofia',
    nombre: 'Tacón Sofia',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#111827', imagen: 'img/sofiaNegro.jpg' },
      { nombre: 'Blanco', hex: '#f8fafc', imagen: 'img/sofiaBlanco.jpg' },
      { nombre: 'Vino', hex: '#452204f5', imagen: 'img/sofiaVino.jpg' },
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/sofiaRojo.jpg' },
      { nombre: 'Rosa', hex: '#eabedbde', imagen: 'img/sofiaRosa.jpg' },
      { nombre: 'Oliva', hex: '#7ea766d1', imagen: 'img/sofiaOliva.jpg' }
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
      { nombre: 'Blanco', hex: '#fefefe', imagen: 'img/baletaEmmyBlanco.jpg' },
      { nombre: 'Negro', hex: '#101113', imagen: 'img/baletaEmmyNegro.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/baletaEmmyVino.jpg' },
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/baletaEmmyRojo.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/baletaEmmyBeich.jpg' },
      { nombre: 'Amarillo', hex: '#dff781', imagen: 'img/baletaEmmyAmarillo.jpg' }
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
      { nombre: 'Amarillo', hex: '#dff781', imagen: 'img/baletaNebulaAmarillo.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/baletaNebulaMarron.jpg' }
    ],
    imagenes: ['img/baletaNebulaAzul.jpg', 'img/baletaNebulaRosa.jpg', 'img/baletaNebulaAmarillo.jpg', 'img/baletaNebulaMarron.jpg'],
    detalle: 'Flats destalonados de punta fina con lazo delicado en acabado brillante. El calzado bajo perfecto para mantener la elegancia y frescura en tu rutina diaria.'
  },
  { 
  id: 'tacon-coral',
    nombre: 'Tacón Coral',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0a0a0bde', imagen: 'img/coralNegro.jpg' },
      { nombre: 'Blanco', hex: '#ece7eb', imagen: 'img/coralBlanco.jpg' },
      { nombre: 'Amarillo', hex: '#dff781', imagen: 'img/coralAmarillo.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/coralRojo.jpg' },
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
      { nombre: 'Bege', hex: '#e1b05bdd', imagen: 'img/meridaBeig.jpg' },
      { nombre: 'Negro', hex: '#121112', imagen: 'img/meridaNegro.jpg' },
      { nombre: 'Blanco', hex: '#f0f1ea', imagen: 'img/meridaBlanco.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/meridaRojo.jpg' }
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
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/flatsCoquetteMarron.jpg' }
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
      { nombre: 'Negro', hex: '#070707de', imagen: 'img/baletaDamaNegro.jpg' },
      { nombre: 'Blanco', hex: '#fffeff', imagen: 'img/baletaDamaBlanco.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/baletaDamaBeich.jpg' }
    ],
    imagenes: ['img/baletaDamaNegro.jpg', 'img/baletaDamaBlanco.jpg', 'img/baletaDamaBeich.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-maya',
    nombre: 'Tacón Maya',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/mayaBeich.jpg' },
      { nombre: 'Negro', hex: '#060606', imagen: 'img/mayaNegro.jpg' },
      { nombre: 'Blanco', hex: '#f9f9f6', imagen: 'img/mayaBlanco.jpg' }
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
      { nombre: 'Negro', hex: '#0f0f10de', imagen: 'img/atenasNegro.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/atenasVino.jpg' },
      { nombre: 'Amarillo', hex: '#dff781', imagen: 'img/atenasAmarillo.jpg' },
      { nombre: 'Blanco', hex: '#f0f1ea', imagen: 'img/atenasBlanco.jpg' }
    ],
    imagenes: ['img/baletaAtenas.jpg','img/atenasNegro.jpg', 'img/atenasVino.jpg', 'img/atenasAmarillo.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-stiletto',
    nombre: 'Tacón Stiletto',
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
      { nombre: 'Negro', hex: '#0e0e0ede', imagen: 'img/mocasinoNegro.jpg' },
      { nombre: 'Beige', hex: '#eac991f5', imagen: 'img/mocasinoBeige.jpg' },
      { nombre: 'Marron', hex: '#e1b05bdd', imagen: 'img/mocasinoMarron.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/mocasinoVino.jpg' }
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
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/puntillaVino.jpg' },
      { nombre: 'Negro', hex: '#0a090a', imagen: 'img/puntillaNegro.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/puntillaBeige.jpg' }
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
      { nombre: 'Rojo', hex: '#d80606', imagen: 'img/dianaRojo.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/dianaBeige.jpg' },
      { nombre: 'Negro', hex: '#040403', imagen: 'img/dianaNegro.jpg' },
      { nombre: 'Dorado', hex: '#a38c06', imagen: 'img/dianaDorado.jpg' }
    ],
    imagenes: ['img/dianaRojo.jpg', 'img/dianaBeige.jpg', 'img/dianaNegro.jpg', 'img/dianaDorado.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-olivia',
    nombre: 'Tacón Olivia',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#000000de', imagen: 'img/oliviaNegro.jpg' },
      { nombre: 'Oliva', hex: '#a1c98ad6', imagen: 'img/oliviaOliva.jpg' },
      { nombre: 'Crema', hex: '#ebe8d5', imagen: 'img/oliviaCrema.jpg' }
    ],
    imagenes: ['img/oliviaNegro.jpg', 'img/oliviaOliva.jpg', 'img/oliviaCrema.jpg'],
    Descripción: 'Sandalia de tacón moderna y sofisticada. De punta cuadrada y acabado en charol brillante, se distingue por un lazo de charol sobre el empeine y una fina correa al tobillo, tacón bloque alto y cuadrado, muy robusto con un aproximado de 8-9 cm.'
  },
  { 
  id: 'tacon-clasic',
    nombre: 'Tacón Clasic',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#0f1112de', imagen: 'img/clasicNegro.jpg' },
      { nombre: 'Blanco', hex: '#fbf7fa', imagen: 'img/clasicBlanco.jpg' },
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/clasicVino.jpg' }
    ],
    imagenes: ['img/clasicNegro.jpg', 'img/clasicBlanco.jpg', 'img/clasicVino.jpg'],
    detalle: 'Zapato de salón atemporal. De charol brillante y punta afilada, cuenta con una fina correa al tobillo para un look sofisticado y versátil, tacón bloque medio-alto y cuadrado, estable con aproximadamente 6-7 cm.'
  },
  { 
    id: 'modelo-luna',
    nombre: 'Modelo Luna',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#070707de', imagen: 'img/lunaNegro.jpg' },
      { nombre: 'Blanco', hex: '#fdf7fc', imagen: 'img/lunaBlanco.jpg' },
      { nombre: 'Marron', hex: '#aa620b', imagen: 'img/lunaMarron.jpg' }
    ],
    imagenes: ['img/modeloLuna.jpg','img/lunaNegro.jpg', 'img/lunaBlanco.jpg', 'img/lunaMarron.jpg'],
    detalle: ''
  },
  { 
  id: 'tacon-encaje',
    nombre: 'Tacón Encaje',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#09090ade', imagen: 'img/encageNegro.jpg' },
      { nombre: 'Blanco', hex: '#ffffff', imagen: 'img/encageBlanco.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/encageBeige.jpg' }
    ],
    imagenes: ['img/encageNegro.jpg', 'img/encageBlanco.jpg', 'img/encageBeige.jpg'],
    detalle: 'Mule refinado y romántico. Con cuerpo de delicado encaje floral sobre malla, presenta punta puntiaguda con un lazo de tela a juego, tacón alto y fino, tipo stiletto con aproximadamente de 8-9 cm.'
  },
  { 
  id: 'tacon-prisma',
    nombre: 'Tacón Prisma',
    precio: 40.0,
    precioDescuento: 35.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#080809de', imagen: 'img/prismaNegro.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/prismaBeige.jpg' },
      { nombre: 'Blanco', hex: '#fefffb', imagen: 'img/prismaBlanco.jpg' }
    ],
    imagenes: ['img/prismaNegro.jpg', 'img/prismaBeige.jpg', 'img/prismaBlanco.jpg'],
    detalle: 'Mule romántico y femenino. Confeccionado en delicado encaje floral sobre malla transparente, presenta una punta puntiaguda con un lazo de tela a juego, tacón alto y fino, tipo stiletto con un aproximado de 8-9 cm.'
  },
  { 
  id: 'tacon-philipina',
    nombre: 'Tacón Philipina',
    precio: 41.0,
    precioDescuento: 36.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/philipinaVino.jpg' },
      { nombre: 'Beige', hex: '#e1b05bdd', imagen: 'img/philipinaBeige.jpg' },
      { nombre: 'Blanco', hex: '#fafafa', imagen: 'img/philipinaBlanco.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/philipinaChocolate.jpg' }
    ],
    imagenes: ['img/philipinaVino.jpg', 'img/philipinaBeige.jpg', 'img/philipinaBlanco.jpg', 'img/philipinaChocolate.jpg'],
    detalle: 'Zapato de salón slingback clásico y coqueto. Acabado en charol brillante, con punta redonda adornada por un delicado lazo de charol y detalles dorados, tacón medio y cuadrado, muy estable con un aproximado de 4-5 cm.'
  },
  { 
  id: 'tacon-bordada',
    nombre: 'Tacón Bordada',
    precio: 42.0,
    precioDescuento: 37.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Vino', hex: '#590303ce', imagen: 'img/bordadaVino.jpg' },
      { nombre: 'Dorado', hex: '#c9b351', imagen: 'img/bordadaDorada.jpg' },
      { nombre: 'Negro', hex: '#000000', imagen: 'img/bordadaNegra.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/bordadaMarron.jpg' },
      { nombre: 'Rosa', hex: '#e399d3', imagen: 'img/bordadaRosa.jpg' },
    ],
    imagenes: ['img/taconBordada.jpg','img/bordadaVino.jpg', 'img/bordadaDorada.jpg', 'img/bordadaNegra.jpg', 'img/bordadaMarron.jpg', 'img/bordadaRosa.jpg'],
    detalle: 'Elegante zapato de tacón slingback con punta afilada. Destaca por su base de tela crema texturizada con sofisticados bordados florales y correas de charol a juego, tacón medio-alto, estilo carrete con un aproximado de 6-7 cm.'
  },
  { 
  id: 'baleta-maryjean',
    nombre: 'Baleta Mary Jean',
    precio: 30.0,
    precioDescuento: 25.0,
    horma: 'Normal',
    tallas: ['35', '36', '37', '38', '39', '40'],
    colores: [
      { nombre: 'Negro', hex: '#070808de', imagen: 'img/maryjeanNegro.jpg' },
      { nombre: 'Blanco', hex: '#fffeff', imagen: 'img/maryjeanBlanco.jpg' },
      { nombre: 'Chocolate', hex: '#452204f5', imagen: 'img/maryjeanMarron.jpg' }
    ],
    imagenes: ['img/maryjeanNegro.jpg', 'img/maryjeanBlanco.jpg', 'img/maryjeanMarron.jpg'],
    detalle: 'Flat cerrado de horma redonda y corte coquette. Confeccionado en acabado mate con detalle de lazo brillante en el empeine.Plano, súper cómodo para uso diario.'
  }
];

window.catalogo = catalogo;
