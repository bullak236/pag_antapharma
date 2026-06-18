// ============================================
//   ANTAPHARMA — Lógica de página de producto (producto-detalle.js)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('producto-nombre')) return;

  const params = new URLSearchParams(window.location.search);
  const cat    = params.get('cat');
  const id     = params.get('id');

  if (!cat || !id || !CATALOGO[cat]) {
    window.location.href = 'productos.html';
    return;
  }

  const prod = CATALOGO[cat].productos.find(p => p.id === id);
  if (!prod) {
    window.location.href = 'productos.html';
    return;
  }

  // Breadcrumb
  const bcCat = document.getElementById('breadcrumb-cat');
  bcCat.textContent = CAT_LABELS[cat];
  bcCat.href = `productos.html?cat=${cat}`;
  document.getElementById('breadcrumb-producto').textContent = prod.nombre;

  // Título de pestaña
  document.getElementById('meta-title').textContent = `${prod.nombre} | Antapharma`;

  // Imagen
  const img = document.getElementById('producto-img');
  img.src = prod.img;
  img.alt = prod.nombre;

  // Info
  document.getElementById('producto-cat-label').textContent = CAT_LABELS[cat];
  document.getElementById('producto-nombre').textContent     = prod.nombre;
  document.getElementById('producto-desc').textContent       = prod.desc;

  // Medidas
  const medidasSection = document.getElementById('medidas-section');
  const medidasGrid    = document.getElementById('medidas-grid');

  if (prod.medidas && prod.medidas.length > 0) {
    medidasGrid.innerHTML = prod.medidas.map(m => `
      <label class="medida-chip">
        <input type="radio" name="medida" value="${m}" />
        <span>${m}</span>
      </label>
    `).join('');
  } else {
    medidasSection.style.display = 'none';
  }

  // Botón PDF
  const btnPdf = document.getElementById('btn-pdf');
  if (!prod.pdf) {
    btnPdf.style.display = 'none';
  }

  // Guardar referencia global para usar en botones
  window._prodActual = { cat, prod };
});

// ---- Ver ficha técnica (abre modal con PDF) ----
function verFichaTecnica() {
  const { prod } = window._prodActual;
  if (!prod.pdf) return;

  document.getElementById('modal-titulo').textContent = `Ficha Técnica — ${prod.nombre}`;
  document.getElementById('modal-iframe').src = prod.pdf;
  document.getElementById('modal-pdf').style.display = 'flex';
}

function cerrarModal(event) {
  if (event.target === document.getElementById('modal-pdf')) {
    cerrarModalBtn();
  }
}

function cerrarModalBtn() {
  document.getElementById('modal-pdf').style.display = 'none';
  document.getElementById('modal-iframe').src = '';
}

// ---- Añadir al carrito ----
function agregarAlCarrito() {
  const { cat, prod } = window._prodActual;

  // Ver si hay medida seleccionada
  const medidaInput = document.querySelector('input[name="medida"]:checked');
  const medida      = medidaInput ? medidaInput.value : null;

  addToCart({ cat, id: prod.id, nombre: prod.nombre, medida });

  // Actualizar botón (animación de confirmación)
  const btn = document.getElementById('btn-carrito');
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    ¡Agregado!
  `;
  btn.style.background = 'var(--verde-claro)';
  setTimeout(() => {
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      Añadir al carrito
    `;
    btn.style.background = '';
  }, 2000);

  mostrarToast(`"${prod.nombre}" agregado a tu consulta`);
}

function mostrarToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('toast--visible');
  setTimeout(() => toast.classList.remove('toast--visible'), 3000);
}