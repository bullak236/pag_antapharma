// ============================================
//   ANTAPHARMA — Lógica de Mi Consulta (consulta.js)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('consulta-lista')) return;
  renderCarrito();
});

function obtenerProducto(cat, id) {
  return CATALOGO[cat] ? CATALOGO[cat].productos.find(p => p.id === id) : null;
}

function renderCarrito() {
  const lista     = document.getElementById('consulta-lista');
  const vacio     = document.getElementById('consulta-vacio');
  const contador  = document.getElementById('consulta-contador');
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  contador.textContent = `Productos (${totalItems})`;

  if (carrito.length === 0) {
    lista.style.display = 'none';
    vacio.style.display = 'flex';
    actualizarMensajes();
    return;
  }

  lista.style.display = 'flex';
  vacio.style.display = 'none';

  lista.innerHTML = carrito.map((item, index) => {
    const prod = obtenerProducto(item.cat, item.id);
    const img  = prod ? prod.img : '';
    const desc = prod ? prod.desc.substring(0, 110) + '…' : '';

    return `
      <div class="consulta-item">
        <div class="consulta-item__img-wrap">
          <img src="${img}" alt="${item.nombre}" onerror="this.style.display='none'; this.parentElement.classList.add('no-img');" />
          <div class="cat-card__placeholder-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
        </div>
        <div class="consulta-item__info">
          <h3>${item.nombre}</h3>
          ${item.medida ? `<span class="consulta-item__medida">${item.medida}</span>` : ''}
          <p>${desc}</p>
        </div>
        <div class="consulta-item__actions">
          <div class="qty-control">
            <button onclick="cambiarCantidad(${index}, -1)" aria-label="Restar cantidad">−</button>
            <span>${item.cantidad}</span>
            <button onclick="cambiarCantidad(${index}, 1)" aria-label="Sumar cantidad">+</button>
          </div>
          <button class="consulta-item__remove" onclick="eliminarDelCarrito(${index})" aria-label="Eliminar producto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M3 6h18M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  actualizarMensajes();
}

// Construye la lista de productos en texto plano para WhatsApp / Email
function construirListaTexto() {
  return carrito.map(item => {
    let linea = `- ${item.nombre}`;
    if (item.medida) linea += ` (${item.medida})`;
    linea += ` x${item.cantidad}`;
    return linea;
  }).join('\n');
}

// Actualiza los links de WhatsApp y Email con los productos actuales
function actualizarMensajes() {
  const lista = construirListaTexto();
  const phone = '5493851542090449'; // número sin + ni espacios

  const mensaje = carrito.length > 0
    ? `Hola! Me contacto desde la web de Antapharma.\n\nQuisiera consultar precio y disponibilidad de:\n${lista}\n\n¿Podrían asesorarme?`
    : `Hola! Me contacto desde la web de Antapharma. Quisiera más información sobre sus productos.`;

  // WhatsApp
  const btnWsp = document.getElementById('btn-whatsapp');
  if (btnWsp) {
    btnWsp.href = `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;
  }

  // Email
  const mensajeMail = carrito.length > 0
    ? `Hola equipo de Antapharma,\n\nQuisiera solicitar una cotización para los siguientes productos:\n${lista}\n\nQuedo a la espera, gracias.`
    : `Hola equipo de Antapharma,\n\nQuisiera más información sobre sus productos.\n\nGracias.`;

  const textarea = document.getElementById('mensaje-email');
  if (textarea) textarea.value = mensajeMail;

  const btnMail = document.getElementById('btn-email');
  if (btnMail) {
    btnMail.href = `https://mail.google.com/mail/?view=cm&to=antapharma@gmail.com&su=${encodeURIComponent('Consulta de productos - Antapharma')}&body=${encodeURIComponent(mensajeMail)}`;
    btnMail.target = '_blank';
  }
}