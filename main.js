const products = [
  {
    id: "sobrecamisa-nocturna",
    name: "Sobrecamisa Nocturna",
    category: "Abrigos",
    price: 128000,
    badge: "Nuevo",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1100&q=88",
    imageAlt: "Sobrecamisa masculina negra de corte recto",
    description:
      "Sobrecamisa de sarga pesada con calce relajado, broches metálicos y bolsillos amplios. Funciona como capa exterior o como camisa estructurada.",
    materials: "100% algodón de 390 g. Herrajes de metal pavonado. Lavado enzimático.",
    care: "Lavar del revés con agua fría. No usar secadora. Plancha suave.",
    colors: ["#171512", "#51483f"],
    colorName: "Carbón",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "remera-peso-pesado",
    name: "Remera Peso Pesado",
    category: "Remeras",
    price: 49000,
    badge: "Esencial",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Remera masculina negra de algodón pesado",
    description:
      "Remera de silueta amplia, cuello reforzado y hombro levemente caído. Un básico con estructura pensado para usar todo el año.",
    materials: "Jersey premium 100% algodón peinado de 280 g.",
    care: "Lavar con colores similares. Agua fría. Secar a la sombra.",
    colors: ["#111111", "#ddd3c5", "#583d2e"],
    colorName: "Negro",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "borcego-hierro",
    name: "Borcego Hierro",
    category: "Accesorios",
    price: 174000,
    badge: "Últimas unidades",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Borcego de cuero negro para hombre",
    description:
      "Borcego de cuero vacuno con cordones encerados, construcción robusta y suela de caucho cosida. Se adapta al pie con el uso.",
    materials: "Capellada y forrería de cuero vacuno. Suela de caucho de alta resistencia.",
    care: "Limpiar con paño seco. Nutrir el cuero periódicamente con pomada neutra.",
    colors: ["#161412", "#5b3725"],
    colorName: "Negro",
    sizes: ["40", "41", "42", "43"],
  },
  {
    id: "pantalon-distrito",
    name: "Pantalón Distrito",
    category: "Pantalones",
    price: 92000,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Pantalón masculino oscuro de corte recto",
    description:
      "Pantalón recto de tiro medio y construcción limpia. La gabardina compacta aporta presencia sin perder movilidad.",
    materials: "98% algodón, 2% elastano. Bolsillos reforzados.",
    care: "Lavar con agua fría. No blanquear. Plancha media.",
    colors: ["#242321", "#55483d"],
    colorName: "Humo",
    sizes: ["38", "40", "42", "44"],
  },
  {
    id: "morral-tactico",
    name: "Morral Táctico",
    category: "Accesorios",
    price: 76000,
    badge: "Edición limitada",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=88",
    imageAlt: "Morral oscuro de lona y cuero",
    description:
      "Morral compacto para uso diario con compartimento interior, correa regulable y acceso rápido. Capacidad justa, sin exceso.",
    materials: "Lona encerada de 18 oz, detalles en cuero y herrajes de zamak.",
    care: "Limpiar en seco con cepillo suave. No lavar a máquina.",
    colors: ["#211d18", "#67503e"],
    colorName: "Espresso",
    sizes: ["Único"],
  },
  {
    id: "campera-cuero-ruta",
    name: "Campera Cuero Ruta",
    category: "Abrigos",
    price: 286000,
    badge: "Pieza insignia",
    image:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1300&q=88",
    imageAlt: "Campera masculina de cuero marrón oscuro",
    description:
      "Campera de cuero de inspiración clásica, depurada para el presente. Calce firme, cierres metálicos y una pátina que mejora con cada uso.",
    materials: "Cuero vacuno plena flor. Forrería de algodón. Cierres YKK.",
    care: "No lavar. Limpieza profesional especializada en cuero.",
    colors: ["#4a2e20", "#171412"],
    colorName: "Tabaco oscuro",
    sizes: ["S", "M", "L", "XL"],
  },
];

const state = {
  category: "Todos",
  search: "",
  sort: "featured",
  currentProduct: null,
  selectedSize: null,
  cart: JSON.parse(localStorage.getItem("scorpions-cart") || "[]"),
};

const currency = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

const els = {
  header: document.querySelector("#site-header"),
  homeView: document.querySelector("#home-view"),
  productView: document.querySelector("#product-view"),
  checkoutView: document.querySelector("#checkout-view"),
  successView: document.querySelector("#success-view"),
  productGrid: document.querySelector("#product-grid"),
  resultsCount: document.querySelector("#results-count"),
  catalogEmpty: document.querySelector("#catalog-empty"),
  sortSelect: document.querySelector("#sort-select"),
  cartDrawer: document.querySelector("#cart-drawer"),
  drawerBackdrop: document.querySelector("#drawer-backdrop"),
  cartItems: document.querySelector("#cart-items"),
  cartEmpty: document.querySelector("#cart-empty"),
  drawerSummary: document.querySelector("#drawer-summary"),
  cartSubtotal: document.querySelector("#cart-subtotal"),
  cartCount: document.querySelector("#cart-count"),
  drawerCount: document.querySelector("#drawer-count"),
  shippingMessage: document.querySelector("#shipping-message"),
  shippingProgressBar: document.querySelector("#shipping-progress-bar"),
  searchPanel: document.querySelector("#search-panel"),
  searchInput: document.querySelector("#search-input"),
  mobileMenu: document.querySelector("#mobile-menu"),
  sizeGuideModal: document.querySelector("#size-guide-modal"),
  toast: document.querySelector("#toast"),
};

let revealObserver;
let toastTimer;

function formatPrice(value) {
  return currency.format(value).replace("ARS", "$");
}

function productCard(product) {
  return `
    <article class="product-card fade-in">
      <div class="product-image-wrap">
        <a class="product-card-link" href="#producto/${product.id}" aria-label="Ver ${product.name}">
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
          <img src="${product.image}" alt="${product.imageAlt}" loading="lazy" />
        </a>
        <button class="quick-add" type="button" data-quick-add="${product.id}" aria-label="Agregar ${product.name} al carrito">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <a class="product-card-link" href="#producto/${product.id}" aria-label="Ver ${product.name}">
        <div class="product-meta">
          <div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-category">${product.category}</p>
          </div>
          <p class="product-price">${formatPrice(product.price)}</p>
        </div>
        <div class="product-colors" aria-label="${product.colors.length} colores disponibles">
          ${product.colors.map((color) => `<span class="color-dot" style="background:${color}"></span>`).join("")}
        </div>
      </a>
    </article>
  `;
}

function renderProducts() {
  let filtered = products.filter((product) => {
    const categoryMatch = state.category === "Todos" || product.category === state.category;
    const normalizedSearch = state.search.toLowerCase().trim();
    const searchMatch =
      !normalizedSearch ||
      `${product.name} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(normalizedSearch);
    return categoryMatch && searchMatch;
  });

  if (state.sort === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  }

  if (state.sort === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  els.productGrid.innerHTML = filtered.map(productCard).join("");
  els.resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "producto" : "productos"}`;
  els.catalogEmpty.hidden = filtered.length !== 0;
  els.productGrid.hidden = filtered.length === 0;
  setupRevealObserver();
}

function setupRevealObserver() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -45px" },
  );

  document.querySelectorAll(".fade-in:not(.visible)").forEach((element) => {
    revealObserver.observe(element);
  });
}

function saveCart() {
  localStorage.setItem("scorpions-cart", JSON.stringify(state.cart));
}

function cartTotal() {
  return state.cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);
}

function cartQuantity() {
  return state.cart.reduce((total, item) => total + item.quantity, 0);
}

function showToast(message, icon = "fa-check") {
  window.clearTimeout(toastTimer);
  els.toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
  els.toast.classList.add("visible");
  toastTimer = window.setTimeout(() => els.toast.classList.remove("visible"), 2600);
}

function addToCart(productId, size, openAfter = true) {
  const product = products.find((entry) => entry.id === productId);
  if (!product) return;

  const chosenSize = size || product.sizes[0];
  const existing = state.cart.find((item) => item.id === productId && item.size === chosenSize);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id: productId, size: chosenSize, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${product.name} agregado`);
  if (openAfter) openCart();
}

function updateCartItem(productId, size, delta) {
  const item = state.cart.find((entry) => entry.id === productId && entry.size === size);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => !(entry.id === productId && entry.size === size));
  }

  saveCart();
  renderCart();
}

function removeCartItem(productId, size) {
  state.cart = state.cart.filter((entry) => !(entry.id === productId && entry.size === size));
  saveCart();
  renderCart();
  showToast("Producto eliminado", "fa-trash");
}

function renderCart() {
  const quantity = cartQuantity();
  const subtotal = cartTotal();
  const freeShippingThreshold = 120000;
  const remaining = Math.max(0, freeShippingThreshold - subtotal);

  els.cartCount.textContent = quantity;
  els.drawerCount.textContent = `(${quantity})`;
  els.cartCount.hidden = quantity === 0;
  els.cartEmpty.hidden = quantity > 0;
  els.drawerSummary.hidden = quantity === 0;
  els.cartSubtotal.textContent = formatPrice(subtotal);

  if (subtotal >= freeShippingThreshold) {
    els.shippingMessage.textContent = "Tu pedido tiene envío gratis.";
  } else {
    els.shippingMessage.textContent = `Te faltan ${formatPrice(remaining)} para el envío gratis.`;
  }
  els.shippingProgressBar.style.width = `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`;

  els.cartItems.innerHTML = state.cart
    .map((item) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return "";
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.imageAlt}" />
          <div>
            <h3>${product.name}</h3>
            <div class="cart-item-meta">${product.colorName} · Talle ${item.size}</div>
            <div class="quantity-control" aria-label="Cantidad">
              <button type="button" data-cart-action="decrease" data-id="${item.id}" data-size="${item.size}" aria-label="Restar uno">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-action="increase" data-id="${item.id}" data-size="${item.size}" aria-label="Sumar uno">+</button>
            </div>
          </div>
          <div class="cart-item-side">
            <strong>${formatPrice(product.price * item.quantity)}</strong>
            <button class="remove-item" type="button" data-cart-action="remove" data-id="${item.id}" data-size="${item.size}">Eliminar</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function openCart() {
  closeSearch();
  closeMenu();
  els.cartDrawer.classList.add("open");
  els.drawerBackdrop.classList.add("open");
  els.cartDrawer.inert = false;
  els.cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
}

function closeCart() {
  els.cartDrawer.classList.remove("open");
  els.drawerBackdrop.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  els.cartDrawer.inert = true;
  document.body.classList.remove("locked");
}

function openSearch() {
  closeCart();
  closeMenu();
  els.searchPanel.classList.add("open");
  els.searchPanel.inert = false;
  els.searchPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  window.setTimeout(() => els.searchInput.focus(), 220);
}

function closeSearch() {
  els.searchPanel.classList.remove("open");
  els.searchPanel.setAttribute("aria-hidden", "true");
  els.searchPanel.inert = true;
  document.body.classList.remove("locked");
}

function openMenu() {
  closeCart();
  closeSearch();
  els.mobileMenu.classList.add("open");
  els.mobileMenu.inert = false;
  els.mobileMenu.setAttribute("aria-hidden", "false");
  document.querySelector(".menu-trigger").setAttribute("aria-expanded", "true");
  document.body.classList.add("locked");
}

function closeMenu() {
  els.mobileMenu.classList.remove("open");
  els.mobileMenu.setAttribute("aria-hidden", "true");
  els.mobileMenu.inert = true;
  document.querySelector(".menu-trigger").setAttribute("aria-expanded", "false");
  document.body.classList.remove("locked");
}

function setCategory(category) {
  state.category = category;
  state.search = "";
  els.searchInput.value = "";
  document.querySelectorAll(".filter-pill").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });
  renderProducts();
}

function showOnlyView(view) {
  [els.homeView, els.productView, els.checkoutView, els.successView].forEach((element) => {
    element.hidden = element !== view;
  });

  const innerPage = view !== els.homeView;
  els.header.classList.toggle("inner-header", innerPage);
  window.scrollTo({ top: 0, behavior: "auto" });
  setupRevealObserver();
}

function renderProductDetail(productId) {
  const product = products.find((entry) => entry.id === productId) || products[0];
  state.currentProduct = product;
  state.selectedSize = null;

  const related = products.filter((entry) => entry.id !== product.id).slice(0, 3);
  els.productView.innerHTML = `
    <nav class="breadcrumbs" aria-label="Migas de pan">
      <a href="#inicio">Inicio</a> / <a href="#catalogo">${product.category}</a> / <span>${product.name}</span>
    </nav>
    <section class="product-detail fade-in">
      <div class="product-gallery">
        <img src="${product.image}" alt="${product.imageAlt}" />
        <img class="gallery-secondary" src="${product.image}&sat=-15" alt="Detalle de ${product.name}" />
      </div>
      <div class="product-info">
        <p class="eyebrow">${product.category} — COLECCIÓN 01</p>
        <h1>${product.name}</h1>
        <p class="detail-price">${formatPrice(product.price)}</p>
        <p class="installments">3 cuotas sin interés de ${formatPrice(product.price / 3)}</p>
        <p class="product-description">${product.description}</p>

        <div class="option-head">
          <span>Elegí tu talle</span>
          <button class="size-guide-trigger" type="button">Guía de talles</button>
        </div>
        <div class="size-options" role="group" aria-label="Seleccionar talle">
          ${product.sizes
            .map(
              (size) =>
                `<button class="size-option" type="button" data-size="${size}">${size}</button>`,
            )
            .join("")}
        </div>
        <div class="detail-actions">
          <button class="button button-primary add-detail-to-cart" type="button">
            Agregar al carrito <i class="fa-solid fa-bag-shopping"></i>
          </button>
          <button class="button button-secondary buy-now" type="button">Comprar ahora</button>
        </div>
        <div class="detail-features">
          <div><i class="fa-solid fa-truck-fast"></i><span>Envío gratis desde $120.000</span></div>
          <div><i class="fa-solid fa-rotate-left"></i><span>Cambios sin costo durante 30 días</span></div>
          <div><i class="fa-solid fa-lock"></i><span>Pago 100% protegido</span></div>
        </div>
        <div class="product-accordion">
          <div class="accordion-item">
            <button class="accordion-trigger" type="button"><span>Composición</span><i class="fa-solid fa-plus"></i></button>
            <div class="accordion-content">${product.materials}</div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" type="button"><span>Cuidados</span><i class="fa-solid fa-plus"></i></button>
            <div class="accordion-content">${product.care}</div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" type="button"><span>Envíos y cambios</span><i class="fa-solid fa-plus"></i></button>
            <div class="accordion-content">Despachamos dentro de las 48 horas hábiles. Podés solicitar un cambio dentro de los 30 días desde la recepción.</div>
          </div>
        </div>
      </div>
    </section>
    <section class="related-products fade-in">
      <p class="eyebrow">TAMBIÉN PODRÍA GUSTARTE</p>
      <h2>COMPLETÁ EL EQUIPO</h2>
      <div class="product-grid">${related.map(productCard).join("")}</div>
    </section>
  `;

  showOnlyView(els.productView);
}

function checkoutItemTemplate(item) {
  const product = products.find((entry) => entry.id === item.id);
  if (!product) return "";
  return `
    <article class="checkout-item">
      <img src="${product.image}" alt="${product.imageAlt}" />
      <div>
        <h3>${product.name}</h3>
        <p>Talle ${item.size} · Cantidad ${item.quantity}</p>
      </div>
      <strong>${formatPrice(product.price * item.quantity)}</strong>
    </article>
  `;
}

function renderCheckout() {
  if (!state.cart.length) {
    showToast("Agregá un producto antes de continuar", "fa-circle-info");
    window.location.hash = "catalogo";
    return;
  }

  const subtotal = cartTotal();
  const shipping = subtotal >= 120000 ? 0 : 8900;
  els.checkoutView.innerHTML = `
    <div class="checkout-top fade-in">
      <div>
        <p class="eyebrow">COMPRA SEGURA</p>
        <h1>CHECKOUT</h1>
      </div>
      <a href="#catalogo">Seguir comprando</a>
    </div>
    <div class="checkout-layout">
      <form class="checkout-form fade-in" id="checkout-form">
        <section class="checkout-step">
          <div class="step-heading"><span>1</span><h2>Contacto</h2></div>
          <div class="form-grid">
            <div class="field">
              <label for="checkout-email">Correo electrónico</label>
              <input id="checkout-email" type="email" placeholder="nombre@email.com" required />
            </div>
          </div>
        </section>
        <section class="checkout-step">
          <div class="step-heading"><span>2</span><h2>Entrega</h2></div>
          <div class="form-grid two-columns">
            <div class="field"><label for="first-name">Nombre</label><input id="first-name" required /></div>
            <div class="field"><label for="last-name">Apellido</label><input id="last-name" required /></div>
            <div class="field span-two"><label for="address">Dirección</label><input id="address" placeholder="Calle y número" required /></div>
            <div class="field"><label for="city">Ciudad</label><input id="city" required /></div>
            <div class="field"><label for="postal-code">Código postal</label><input id="postal-code" inputmode="numeric" required /></div>
            <div class="field span-two">
              <label for="province">Provincia</label>
              <select id="province" required>
                <option value="">Seleccionar</option>
                <option>Buenos Aires</option>
                <option>CABA</option>
                <option>Córdoba</option>
                <option>Santa Fe</option>
                <option>Mendoza</option>
                <option>Otra provincia</option>
              </select>
            </div>
          </div>
        </section>
        <section class="checkout-step">
          <div class="step-heading"><span>3</span><h2>Envío</h2></div>
          <label class="radio-card">
            <input type="radio" name="shipping" checked />
            <i class="fa-solid fa-truck"></i>
            <div><strong>Envío estándar</strong><br /><small>3 a 6 días hábiles</small></div>
            <span>${shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
          </label>
        </section>
        <section class="checkout-step">
          <div class="step-heading"><span>4</span><h2>Pago</h2></div>
          <div class="form-grid">
            <label class="radio-card">
              <input type="radio" name="payment" checked />
              <i class="fa-regular fa-credit-card"></i>
              Tarjeta de crédito o débito
              <span><i class="fa-brands fa-cc-visa"></i> <i class="fa-brands fa-cc-mastercard"></i></span>
            </label>
            <label class="radio-card">
              <input type="radio" name="payment" />
              <i class="fa-solid fa-money-bill-transfer"></i>
              Transferencia bancaria
              <span>10% OFF</span>
            </label>
            <div class="payment-note">
              <i class="fa-solid fa-lock"></i>
              <span>Este es un prototipo. No se solicitarán datos reales de tarjeta ni se procesará ningún pago.</span>
            </div>
          </div>
        </section>
        <button class="button button-primary checkout-submit" type="submit">
          Confirmar pedido <i class="fa-solid fa-arrow-right"></i>
        </button>
      </form>

      <aside class="order-summary fade-in">
        <h2>Tu pedido</h2>
        <div class="checkout-items">${state.cart.map(checkoutItemTemplate).join("")}</div>
        <form class="coupon-form" id="coupon-form">
          <label class="sr-only" for="coupon">Código de descuento</label>
          <input id="coupon" placeholder="Código de descuento" />
          <button type="submit">Aplicar</button>
        </form>
        <div class="summary-lines">
          <div><span>Subtotal</span><strong>${formatPrice(subtotal)}</strong></div>
          <div><span>Envío</span><strong>${shipping === 0 ? "Gratis" : formatPrice(shipping)}</strong></div>
          <div class="summary-total"><span>Total</span><strong>${formatPrice(subtotal + shipping)}</strong></div>
        </div>
      </aside>
    </div>
  `;

  showOnlyView(els.checkoutView);
}

function renderSuccess() {
  const orderNumber = `SC-${Math.floor(10000 + Math.random() * 89999)}`;
  els.successView.innerHTML = `
    <section class="success-card fade-in">
      <div class="success-icon"><i class="fa-solid fa-check"></i></div>
      <p class="eyebrow">PEDIDO CONFIRMADO</p>
      <h1>TODO LISTO.</h1>
      <p>Recibimos tu pedido. En una compra real, te enviaríamos la confirmación y el seguimiento por correo electrónico.</p>
      <span class="order-number">${orderNumber}</span><br />
      <a class="button button-primary" href="#catalogo">Volver a la tienda</a>
    </section>
  `;
  showOnlyView(els.successView);
}

function route() {
  closeCart();
  closeMenu();
  closeSearch();

  const hash = window.location.hash.replace("#", "") || "inicio";

  if (hash.startsWith("producto/")) {
    renderProductDetail(hash.split("/")[1]);
    return;
  }

  if (hash === "checkout") {
    renderCheckout();
    return;
  }

  if (hash === "pedido-confirmado") {
    renderSuccess();
    return;
  }

  showOnlyView(els.homeView);
  window.requestAnimationFrame(() => {
    const target = hash === "catalogo" ? document.querySelector("#catalogo") : document.querySelector("#inicio");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.addEventListener("click", (event) => {
  const quickAdd = event.target.closest("[data-quick-add]");
  if (quickAdd) {
    event.preventDefault();
    event.stopPropagation();
    const product = products.find((entry) => entry.id === quickAdd.dataset.quickAdd);
    addToCart(product.id, product.sizes[0], false);
    return;
  }

  const categoryLink = event.target.closest("[data-category-link]");
  if (categoryLink) {
    setCategory(categoryLink.dataset.categoryLink);
    closeMenu();
  }

  const filter = event.target.closest(".filter-pill");
  if (filter) setCategory(filter.dataset.category);

  if (event.target.closest(".cart-trigger")) openCart();
  if (event.target.closest(".cart-close, .cart-continue")) closeCart();
  if (event.target === els.drawerBackdrop) closeCart();
  if (event.target.closest(".search-trigger")) openSearch();
  if (event.target.closest(".search-close")) closeSearch();
  if (event.target.closest(".menu-trigger")) openMenu();
  if (event.target.closest(".menu-close")) closeMenu();

  const searchSuggestion = event.target.closest("[data-search-term]");
  if (searchSuggestion) {
    state.search = searchSuggestion.dataset.searchTerm;
    els.searchInput.value = state.search;
    setCategory("Todos");
    state.search = searchSuggestion.dataset.searchTerm;
    renderProducts();
    closeSearch();
    window.location.hash = "catalogo";
  }

  const cartAction = event.target.closest("[data-cart-action]");
  if (cartAction) {
    const { id, size } = cartAction.dataset;
    if (cartAction.dataset.cartAction === "increase") updateCartItem(id, size, 1);
    if (cartAction.dataset.cartAction === "decrease") updateCartItem(id, size, -1);
    if (cartAction.dataset.cartAction === "remove") removeCartItem(id, size);
  }

  if (event.target.closest(".checkout-trigger")) {
    closeCart();
    window.location.hash = "checkout";
  }

  const sizeOption = event.target.closest(".size-option");
  if (sizeOption) {
    state.selectedSize = sizeOption.dataset.size;
    document.querySelectorAll(".size-option").forEach((button) => {
      button.classList.toggle("selected", button === sizeOption);
    });
  }

  if (event.target.closest(".size-guide-trigger")) {
    els.sizeGuideModal.classList.add("open");
    els.sizeGuideModal.inert = false;
    els.sizeGuideModal.setAttribute("aria-hidden", "false");
  }

  if (
    event.target.closest(".size-guide-close") ||
    (event.target === els.sizeGuideModal && els.sizeGuideModal.classList.contains("open"))
  ) {
    els.sizeGuideModal.classList.remove("open");
    els.sizeGuideModal.setAttribute("aria-hidden", "true");
    els.sizeGuideModal.inert = true;
  }

  if (event.target.closest(".add-detail-to-cart, .buy-now")) {
    if (!state.selectedSize) {
      showToast("Elegí un talle para continuar", "fa-ruler");
      document.querySelector(".size-options")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const buyNow = Boolean(event.target.closest(".buy-now"));
    addToCart(state.currentProduct.id, state.selectedSize, !buyNow);
    if (buyNow) window.location.hash = "checkout";
  }

  const accordionTrigger = event.target.closest(".accordion-trigger");
  if (accordionTrigger) accordionTrigger.parentElement.classList.toggle("open");

  if (event.target.closest("#clear-search")) {
    state.search = "";
    state.category = "Todos";
    els.searchInput.value = "";
    document.querySelectorAll(".filter-pill").forEach((button) => {
      button.classList.toggle("active", button.dataset.category === "Todos");
    });
    renderProducts();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.matches("#newsletter-form")) {
    event.preventDefault();
    event.target.reset();
    showToast("Ya sos parte del círculo");
  }

  if (event.target.matches("#coupon-form")) {
    event.preventDefault();
    showToast("Código válido para la demo", "fa-tag");
  }

  if (event.target.matches("#checkout-form")) {
    event.preventDefault();
    state.cart = [];
    saveCart();
    renderCart();
    window.location.hash = "pedido-confirmado";
  }
});

els.searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  state.search = event.target.value;
  state.category = "Todos";
  document.querySelectorAll(".filter-pill").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === "Todos");
  });
  renderProducts();
  closeSearch();
  window.location.hash = "catalogo";
});

els.sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

window.addEventListener("hashchange", route);
window.addEventListener("scroll", () => {
  const onInnerPage = !els.homeView.hidden;
  els.header.classList.toggle("scrolled", window.scrollY > 70 || !onInnerPage);
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeCart();
  closeSearch();
  closeMenu();
  els.sizeGuideModal.classList.remove("open");
  els.sizeGuideModal.setAttribute("aria-hidden", "true");
  els.sizeGuideModal.inert = true;
});

renderProducts();
renderCart();
route();
