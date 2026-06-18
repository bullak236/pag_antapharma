// ============================================
//   ANTAPHARMA — Datos y lógica de productos (productos.js)
// ============================================


// ---- BASE DE DATOS DE PRODUCTOS ----
const CATALOGO = {
  envoltorios: {
    nombre: 'Envoltorios para Esterilización',
    productos: [
      {
        id: 'pouch-testigo',
        nombre: 'Pouch con Testigo para Óxido de Etileno y Vapor',
        desc: 'Bolsas con testigo químico interno para verificar el proceso de esterilización. Compatibles con óxido de etileno y vapor. Fabricadas con papel grado médico y film transparente, permiten visualizar el contenido y confirmar la efectividad del proceso.',
        img: 'img/prod-pouch-testigo.jpg',
        pdf: 'pdf/pouch-testigo.pdf',
        medidas: ['50mm x 200Mste','75mm x 200Mste','100mm x 200Mste','150mm x 200Mste','200mm x 200Mste','300mm x 200Mste','400mm x 200Mste','500mm x 200Mste','600mm x 200Mste'],
      },
      {
        id: 'rollos-polietileno',
        nombre: 'Rollos de Polietileno 50 y 70 Micrones',
        desc: 'Rollos de polietileno de alta calidad en 50 y 70 micrones de espesor. Ideales para el empaquetado y esterilización de instrumental quirúrgico. Disponibles en múltiples anchos y largos para adaptarse a cada necesidad.',
        img: 'img/prod-rollos-polietileno.jpg',
        pdf: 'pdf/rollos-polietileno.pdf',
        medidas: ['8cm x 50mic x 125mts','8cm x 70mic x 125mts','10cm x 50mic x 125mts','10cm x 70mic x 125mts','12cm x 50mic x 125mts','15cm x 50mic x 125mts','20cm x 50mic x 125mts','25cm x 50mic x 125mts','30cm x 50mic x 125mts','30cm x 30mic x 250mts','40cm x 70mic x 250mts','50cm x 70mic x 250mts','80cm x 100mts x 80mic'],
      },
      {
        id: 'papel-grado-medico',
        nombre: 'Papel Grado Médico',
        desc: 'Bobinas de papel grado médico certificadas para esterilización. Permiten el paso del agente esterilizante y actúan como barrera microbiana efectiva. Con y sin testigo impreso según el modelo.',
        img: 'img/prod-papel-medico.jpg',
        pdf: 'pdf/papel-grado-medico.pdf',
        medidas: ['20cm x 334mts x 4kg','30cm x 334mts x 5kg','40cm x 334mts x 6kg','60cm x 334mts x 12kg','80cm x 334mts x 16kg','80cm x 375mts','100cm x 100mts','120cm x 334mts x 24kg','60cm x 334mts c/testigo','60cm x 100mts c/testigo','80cm x 100mts c/testigo','80cm x 200mts c/testigo','80cm x 334mts c/testigo'],
      },
      {
        id: 'papel-crepe',
        nombre: 'Papel Crepe',
        desc: 'Papel crepe de 60gr para el empaquetado de instrumental quirúrgico. Proporciona una barrera efectiva contra la contaminación y permite el paso del agente esterilizante.',
        img: 'img/prod-papel-crepe.jpg',
        pdf: 'pdf/papel-crepe.pdf',
        medidas: ['60gr bobina 60x100','60gr bobina 80x100','60gr bobina 100x100','60gr bobina 120x100'],
      },
      {
        id: 'tela-no-tejida',
        nombre: 'Hojas de Tela No Tejida SMS',
        desc: 'Tela no tejida SMS para el empaquetado de instrumental. Ofrece excelente barrera microbiana, resistencia y transpirabilidad. Presentación en hojas de 100x100cm.',
        img: 'img/prod-tela-sms.jpg',
        pdf: 'pdf/tela-sms.pdf',
        medidas: ['100cm x 100cm x 100 hojas'],
      },
      {
        id: 'pouch-tyvek',
        nombre: 'Rollos de Pouch TYVEK para Peróxido de Hidrógeno',
        desc: 'Rollos de pouch fabricados con Tyvek® con testigo para proceso de peróxido de hidrógeno plasma (VH₂O₂). Alta resistencia y compatibilidad con esterilizadores de plasma.',
        img: 'img/prod-pouch-tyvek.jpg',
        pdf: 'pdf/pouch-tyvek.pdf',
        medidas: ['Pouch 5cm','Pouch 7,5cm','Pouch 10cm','Pouch 12,5cm','Pouch 15cm','Pouch 20cm','Pouch 25cm','Pouch 30cm','Pouch 35cm','Pouch 40cm','Pouch 50cm'],
      },
    ]
  },
  indicadores: {
    nombre: 'Indicadores de Esterilización',
    productos: [
      {
        id: 'indicadores-biologicos',
        nombre: 'Indicadores Biológicos',
        desc: 'Indicadores biológicos para control de procesos de esterilización. Contienen esporas de microorganismos altamente resistentes que permiten verificar la efectividad del ciclo de esterilización.',
        img: 'img/prod-ind-biologicos.jpg',
        pdf: 'pdf/indicadores-biologicos.pdf',
        medidas: ['BT10 Óxido de Etileno – Caja x 100 UN','BT110 Óxido de Etileno Rápido – Caja x 50 UN','BT20 Vapor – Caja x 100 UN','BT220 Vapor Rápido – Caja x 50 UN','BT95 Peróxido de Hidrógeno – Caja x 50 UN'],
      },
      {
        id: 'indicadores-quimicos',
        nombre: 'Indicadores Químicos Clase 4',
        desc: 'Tiras indicadoras químicas dobles Clase 4 para distintos procesos de esterilización. Cambian de color al ser expuestos al agente esterilizante, confirmando que el instrumental fue procesado.',
        img: 'img/prod-ind-quimicos.jpg',
        pdf: 'pdf/indicadores-quimicos.pdf',
        medidas: ['CD16 Óxido de Etileno – Caja x 250 tiras dobles','CD29 Vapor – Caja x 250 tiras dobles','IT31 Calor Seco – Caja x 250 tiras dobles'],
      },
      {
        id: 'integradores-quimicos',
        nombre: 'Integradores Químicos Clase 5',
        desc: 'Integradores químicos que responden a todos los parámetros críticos del ciclo de esterilización. Clase 5 según ISO 11140-1. Mayor precisión que los indicadores Clase 4.',
        img: 'img/prod-integradores.jpg',
        pdf: 'pdf/integradores-quimicos.pdf',
        medidas: ['IT12 Óxido de Etileno – Pack x 250 UN','IT26 1YS Vapor – Pack x 250 UN Clase 5'],
      },
      {
        id: 'cintas-indicadoras',
        nombre: 'Cintas Indicadoras',
        desc: 'Cintas indicadoras químicas Clase 1 para identificar el instrumental procesado. Cambian de color al contacto con el agente esterilizante. Disponibles para distintos procesos.',
        img: 'img/prod-cintas.jpg',
        pdf: 'pdf/cintas-indicadoras.pdf',
        medidas: ['CT10 Óxido de Etileno – 18mm x 50mts','CT20 Vapor – 19mm x 50mts','CT30 Calor Seco – 18mm x 50mts','CT40 Peróxido de Hidrógeno – 18mm x 50mts'],
      },
    ]
  },
  desinfectantes: {
    nombre: 'Desinfectantes y Detergentes',
    productos: [
      {
        id: 'detergentes-enzimaticos',
        nombre: 'Detergentes Enzimáticos',
        desc: 'Soluciones enzimáticas de pH neutro para la limpieza previa a la esterilización. Eliminan materia orgánica, sangre y proteínas. Disponibles en formulaciones mono, bi, tri y multi-enzimáticas según la complejidad de la limpieza requerida.',
        img: 'img/prod-detergentes.jpg',
        pdf: 'pdf/detergentes-enzimaticos.pdf',
        medidas: ['Monoenzimatico pH neutro – 5lts','Bienzimatico (Amilasa + Proteasa) – 5lts','Trienzimatico (Amilasa + Proteasa + Lipasa) – 5lts','Multienzimatico (4 enzimas) – 5lts'],
      },
      {
        id: 'glutaraldehido',
        nombre: 'Glutaraldehido Desinfectante',
        desc: 'Solución de glutaraldehido de alta eficacia para desinfección de alto nivel de instrumental médico. Disponible con y sin surfactante, con actividad de 14 o 28 días una vez preparado.',
        img: 'img/prod-glutaraldehido.jpg',
        pdf: 'pdf/glutaraldehido.pdf',
        medidas: ['S/surfactante 14 días – 5lts','C/surfactante 28 días – 5lts'],
      },
      {
        id: 'adoxopa',
        nombre: 'ADOXOPA – Desinfectante con OPA',
        desc: 'Desinfectante de alto nivel con orto-ftalaldehido (OPA) al 0,55%. Uno de los microbicidas más efectivos. Para limpieza de superficies e instrumental de áreas críticas.',
        img: 'img/prod-adoxopa.jpg',
        pdf: 'pdf/adoxopa.pdf',
        medidas: ['Presentación 1 litro'],
      },
      {
        id: 'petrovac',
        nombre: 'PetrovAC – Detergente Desinfectante',
        desc: 'Detergente con amonios cuaternarios de última generación para limpieza, sanitización y desinfección en un solo paso. Para pisos, suelos y paredes de áreas sanitarias.',
        img: 'img/prod-petrovac.jpg',
        pdf: 'pdf/petrovac.pdf',
        medidas: ['Presentación 1 litro'],
      },
    ]
  },
  equipamiento: {
    nombre: 'Equipamiento de Esterilización',
    productos: [
      {
        id: 'selladoras',
        nombre: 'Selladoras para Bolsas y Pouch',
        desc: 'Selladoras térmicas de acero inoxidable para sellado de bolsas de esterilización y pouch. Con pirómetro incorporado para control preciso de temperatura. Disponibles en versión continua, mesa manual y pedal.',
        img: 'img/prod-selladoras.jpg',
        pdf: 'pdf/selladoras.pdf',
        medidas: ['Continua p/pouch – Mod 2200 (acero inox + pirómetro)','Mesa manual – Mod 40cm','A pedal con portabobina – Mod 80cm (pouch)','A pedal con portabobina – Mod 80cm (polietileno)'],
      },
      {
        id: 'dispenser',
        nombre: 'Dispenser para Bobinas Mixtas',
        desc: 'Dispenser para bobinas de papel grado médico y film. Con sistema de corte rotativo de precisión. Medidas: 90cm de ancho x 34cm de profundidad, corte de 80cm.',
        img: 'img/prod-dispenser.jpg',
        pdf: 'pdf/dispenser.pdf',
        medidas: ['Modelo único – corte 80cm'],
      },
    ]
  },
  descartables: {
    nombre: 'Descartables y Protección Personal',
    productos: [
      {
        id: 'descartadores-rojos',
        nombre: 'Descartadores Cortopunzantes – Rojo',
        desc: 'Descartadores de material plástico virgen color rojo para residuos patogénicos cortopunzantes. Homologados. Con sistema de autoprotección y señalización de nivel de llenado.',
        img: 'img/prod-desc-rojos.jpg',
        pdf: 'pdf/descartadores-rojos.pdf',
        medidas: ['V1 – 1 litro','M2 – 2,2 litros','M4 – 4,8 litros','V8 – 8,0 litros'],
      },
      {
        id: 'descartadores-negros',
        nombre: 'Descartadores Cortopunzantes – Negro',
        desc: 'Descartadores color negro para residuos patogénicos. Resistentes a perforaciones y fugas. Aptos para uso en área de salud.',
        img: 'img/prod-desc-negros.jpg',
        pdf: 'pdf/descartadores-negros.pdf',
        medidas: ['MR1 – 1 litro','MR2 – 2,2 litros','MR4 – 4,8 litros','MR7 – 8,0 litros'],
      },
      {
        id: 'guantes-nitrilo',
        nombre: 'Guantes de Nitrilo Negro para Examen',
        desc: 'Guantes de nitrilo negro sin látex para examen médico. Alta resistencia a productos químicos y perforaciones. Sin polvo. Caja x 100 unidades.',
        img: 'img/prod-guantes-nitrilo.jpg',
        pdf: 'pdf/guantes-nitrilo.pdf',
        medidas: ['Talle S – Caja x 100','Talle M – Caja x 100','Talle L – Caja x 100'],
      },
      {
        id: 'camisolin',
        nombre: 'Camisolín Impermeable Descartable',
        desc: 'Bata camisolín impermeable de polietileno. Protección personal de un solo uso. 120cm de largo, 70cm de ancho de cuerpo, 180cm de mano a mano.',
        img: 'img/prod-camisolin.jpg',
        pdf: 'pdf/camisolin.pdf',
        medidas: ['Talle único – Polietileno'],
      },
      {
        id: 'bajalenguas',
        nombre: 'Bajalenguas',
        desc: 'Bajalenguas de madera pediátrico-adulto. Disponibles en cajas de 100 unidades para uso diario o cajas de 5000 unidades para instituciones.',
        img: 'img/prod-bajalenguas.jpg',
        pdf: null,
        medidas: ['Caja x 100 unidades','Caja x 5000 unidades'],
      },
      {
        id: 'gel-ecografia',
        nombre: 'Gel para Ecografía y Kinesiología',
        desc: 'Gel conductor para ecografía y kinesiología. Formulación PM 2193-10. Excelente conductividad, no mancha y de fácil limpieza.',
        img: 'img/prod-gel.jpg',
        pdf: null,
        medidas: ['5 Kg','0,500 Kg','1 Kg','3 Kg','4 Kg'],
      },
    ]
  },
  kits: {
    nombre: 'Kits y Cartuchos de Esterilización',
    productos: [
      {
        id: 'kits-esterilizacion',
        nombre: 'Kits de Esterilización Manual con Ampollas',
        desc: 'Kits completos para esterilización manual con ampollas de óxido de etileno. Incluyen bolsa de esterilización, ampollas del agente y precintos de seguridad. Ideales para instrumental de pequeño volumen.',
        img: 'img/prod-kits.jpg',
        pdf: 'pdf/kits-esterilizacion.pdf',
        medidas: ['EA-05 – 5cm³ / bolsa 31x60cm / 11lt / 60 ampollas + precintos','EA-20 – 20cm³ / bolsa 58x92cm / 34lt / 15 ampollas + precintos','EA-20MAX – 20cm³ / bolsa 58x92cm / 34lt / 15 ampollas + cartucho inteligente + precintos'],
      },
      {
        id: 'cartuchos-aluminio',
        nombre: 'Cartuchos de Aluminio para Óxido de Etileno',
        desc: 'Cartuchos de aluminio para esterilización por óxido de etileno. Distintas capacidades en gramos para diferentes tamaños de cámara. Presentación por caja.',
        img: 'img/prod-cartuchos.jpg',
        pdf: 'pdf/cartuchos-aluminio.pdf',
        medidas: ['EC-07 – 10gr – 25x caja','EC-25 – 30gr – 25x caja','EC-50 – 50gr – 12x caja','EC-67 – 67gr – 12x caja','EC-100 – 100gr – 12x caja','EC-127 – 127gr – 12x caja','EC-160 – 160gr – 8x caja','EC-180 – 180gr – 8x caja','EC-200 – 200gr – 8x caja','EC-220 – 220gr – 8x caja','EC-230 – 230gr – 8x caja'],
      },
    ]
  }
};

// Etiquetas para breadcrumb
const CAT_LABELS = {
  envoltorios: 'Envoltorios',
  indicadores: 'Indicadores',
  desinfectantes: 'Desinfectantes',
  equipamiento: 'Equipamiento',
  descartables: 'Descartables y Protección',
  kits: 'Kits y Cartuchos',
};

// ---- LÓGICA DE PRODUCTOS.HTML ----
document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('view-categorias')) return;

  const params = new URLSearchParams(window.location.search);
  const cat    = params.get('cat');

  if (cat && CATALOGO[cat]) {
    mostrarSubcategorias(cat);
  }
  // Si no hay parámetro, se muestra la vista de categorías por defecto
});

function mostrarSubcategorias(cat) {
  const data = CATALOGO[cat];

  // Actualizar títulos
  document.getElementById('page-title').textContent   = data.nombre;
  document.getElementById('page-subtitle').textContent = 'Seleccioná el producto que te interesa para ver detalles y medidas disponibles.';
  document.getElementById('breadcrumb-cat').textContent = CAT_LABELS[cat];

  // Ocultar vista de categorías, mostrar subcategorías
  document.getElementById('view-categorias').style.display  = 'none';
  document.getElementById('view-subcategorias').style.display = 'block';

  // Renderizar cards de productos
  const grid = document.getElementById('subcat-grid');
  grid.innerHTML = data.productos.map(prod => `
    <a href="producto.html?cat=${cat}&id=${prod.id}" class="subcat-card">
      <div class="subcat-card__img-wrap">
        <img src="${prod.img}" alt="${prod.nombre}"
             onerror="this.style.display='none'; this.parentElement.classList.add('no-img');" />
        <div class="cat-card__placeholder-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </div>
      </div>
      <div class="subcat-card__body">
        <h3>${prod.nombre}</h3>
        <p>${prod.desc.substring(0, 90)}…</p>
        <span class="cat-card__link">Ver detalle <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
      </div>
    </a>
  `).join('');
}


// Mostrar la barra de carrito al cargar la página, si ya hay productos guardados
document.addEventListener('DOMContentLoaded', actualizarCarritoUI);