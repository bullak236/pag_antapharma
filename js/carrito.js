// ============================================
//   ANTAPHARMA — Motor de Carrito Global (carrito.js)
//   Se carga en TODAS las páginas
// ============================================

// Estructura de cada ítem: { cat, id, nombre, medida, cantidad }
let carrito = JSON.parse(sessionStorage.getItem('carrito') || '[]');

// Guarda el carrito y actualiza el globito del navbar
function guardarCarrito() {
  sessionStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarBadgeCarrito();
}

// Actualiza el numerito del navbar (globito) en cualquier página
function actualizarBadgeCarrito() {
  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  });
}

// Agrega un producto al carrito (si ya existe con la misma medida, suma cantidad)
function addToCart({ cat, id, nombre, medida }) {
  const existente = carrito.find(p => p.cat === cat && p.id === id && p.medida === medida);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ cat, id, nombre, medida, cantidad: 1 });
  }
  guardarCarrito();
}

// Cambia la cantidad de un ítem (delta: +1 o -1). Si llega a 0, lo elimina.
function cambiarCantidad(index, delta) {
  if (!carrito[index]) return;
  carrito[index].cantidad += delta;
  if (carrito[index].cantidad <= 0) {
    carrito.splice(index, 1);
  }
  guardarCarrito();
  if (typeof renderCarrito === 'function') renderCarrito();
}

// Elimina un ítem del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  guardarCarrito();
  if (typeof renderCarrito === 'function') renderCarrito();
}

// Vacía todo el carrito
function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  if (typeof renderCarrito === 'function') renderCarrito();
}

document.addEventListener('DOMContentLoaded', actualizarBadgeCarrito);