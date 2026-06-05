'use strict';

// ===== MENU DATA =====
const menuData = [
  // Breakfast
  { id: 1,  category: 'breakfast', name: 'Masala Dosa',       description: 'Crispy rice crepe filled with spiced potato masala, served with sambar and three chutneys.',        price: 120, isVeg: true,  image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=220&fit=crop&q=80' },
  { id: 2,  category: 'breakfast', name: 'Idli Sambar',        description: 'Soft steamed rice cakes with piping hot sambar and coconut chutney. A timeless classic.',            price: 80,  isVeg: true,  image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=220&fit=crop&q=80' },
  { id: 3,  category: 'breakfast', name: 'Ven Pongal',         description: 'Creamy rice and moong dal porridge tempered with ghee, black pepper, cumin, and golden cashews.',    price: 90,  isVeg: true,  image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&h=220&fit=crop&q=80' },
  { id: 4,  category: 'breakfast', name: 'Egg Dosa',           description: 'Crispy golden dosa topped with beaten egg, caramelised onions, and green chillies.',                 price: 140, isVeg: false, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=220&fit=crop&q=80' },
  { id: 5,  category: 'breakfast', name: 'Uttapam',            description: 'Thick fermented rice pancake topped with onion, tomato, green chilli, and fresh coriander.',         price: 100, isVeg: true,  image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=220&fit=crop&q=80' },
  // Lunch
  { id: 6,  category: 'lunch', name: 'Veg Meals',              description: 'Full South Indian thali — rice, sambar, rasam, three vegetables, curd, papad, pickle, and payasam.', price: 199, isVeg: true,  image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=220&fit=crop&q=80' },
  { id: 7,  category: 'lunch', name: 'Non-Veg Meals',          description: 'Full thali with chicken or mutton curry, rice, sambar, rasam, and all the accompaniments.',           price: 259, isVeg: false, image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=220&fit=crop&q=80' },
  { id: 8,  category: 'lunch', name: 'Curd Rice',              description: 'Cooling tempered curd rice with pomegranate, mustard seeds, curry leaves, and ginger.',               price: 110, isVeg: true,  image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=220&fit=crop&q=80' },
  { id: 9,  category: 'lunch', name: 'Mutton Kuzhambu',        description: 'Slow-cooked tender mutton in a rich, tangy tamarind and freshly ground spice gravy.',                price: 320, isVeg: false, image: 'https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&h=220&fit=crop&q=80' },
  // Dinner
  { id: 10, category: 'dinner', name: 'Appam & Stew',          description: 'Lacy fermented rice pancakes with a delicate, fragrant Kerala vegetable coconut stew.',               price: 160, isVeg: true,  image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=220&fit=crop&q=80' },
  { id: 11, category: 'dinner', name: 'Chicken Chettinad',     description: 'Bold, aromatic Chettinad spiced chicken curry. Best paired with parotta or steamed rice.',            price: 280, isVeg: false, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=220&fit=crop&q=80' },
  { id: 12, category: 'dinner', name: 'Kothu Parotta',         description: 'Shredded flaky parotta tossed with egg, onions, tomatoes, and spiced masala on a hot griddle.',      price: 200, isVeg: false, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=220&fit=crop&q=80' },
  { id: 13, category: 'dinner', name: 'Pesarattu',             description: 'Green moong dal crepe with ginger-green chilli chutney and upma stuffing.',                          price: 130, isVeg: true,  image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=220&fit=crop&q=80' },
  // Beverages
  { id: 14, category: 'beverages', name: 'Filter Coffee',      description: 'Traditional South Indian decoction coffee with frothy full-cream milk, served in a dabara tumbler.',  price: 60,  isVeg: true,  image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=220&fit=crop&q=80' },
  { id: 15, category: 'beverages', name: 'Tender Coconut',     description: 'Fresh locally sourced tender coconut — pure, hydrating, and naturally sweet.',                        price: 80,  isVeg: true,  image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=220&fit=crop&q=80&v=2' },
  { id: 16, category: 'beverages', name: 'Nannari Sherbet',    description: 'Chilled Indian sarsaparilla syrup with lemon, rose water, and basil seeds. A summer classic.',        price: 90,  isVeg: true,  image: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=400&h=220&fit=crop&q=80' },
  { id: 17, category: 'beverages', name: 'Spiced Buttermilk',  description: 'Salted buttermilk churned with curry leaf, ginger, green chilli, and asafoetida.',                   price: 50,  isVeg: true,  image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=220&fit=crop&q=80' },
  // Desserts
  { id: 18, category: 'desserts', name: 'Pal Payasam',         description: 'Rich slow-cooked rice kheer with aromatic cardamom, saffron strands, and roasted cashews.',           price: 120, isVeg: true,  image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=220&fit=crop&q=80' },
  { id: 19, category: 'desserts', name: 'Kesari',              description: 'Golden semolina halwa with ghee, plump raisins, cashews, and a hint of saffron.',                    price: 90,  isVeg: true,  image: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=400&h=220&fit=crop&q=80' },
  { id: 20, category: 'desserts', name: 'Adhirasam',           description: 'Traditional deep-fried rice flour and jaggery sweets, crispy outside, soft and chewy inside.',       price: 80,  isVeg: true,  image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=220&fit=crop&q=80' },
];

// FSSAI standard indicators
const vegSVG = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-label="Vegetarian"><rect x="1.5" y="1.5" width="13" height="13" rx="2" fill="none" stroke="#2E7D32" stroke-width="2"/><circle cx="8" cy="8" r="3.5" fill="#2E7D32"/></svg>`;
const nonVegSVG = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-label="Non-Vegetarian"><rect x="1.5" y="1.5" width="13" height="13" rx="2" fill="none" stroke="#C62828" stroke-width="2"/><circle cx="8" cy="8" r="3.5" fill="#C62828"/></svg>`;

// ===== CART STATE =====
const cart = {
  items: [],

  add(id) {
    const menuItem = menuData.find(m => m.id === id);
    if (!menuItem) return;
    const existing = this.items.find(i => i.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({ id, name: menuItem.name, price: menuItem.price, qty: 1 });
    }
    this.render();
    showToast(`${menuItem.name} added to cart`);
  },

  remove(id) {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) return;
    if (this.items[idx].qty > 1) {
      this.items[idx].qty -= 1;
    } else {
      this.items.splice(idx, 1);
    }
    this.render();
  },

  getSubtotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getTax() {
    return Math.round(this.getSubtotal() * 0.05);
  },

  getTotal() {
    return this.getSubtotal() + this.getTax();
  },

  clear() {
    this.items = [];
    this.render();
  },

  render() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    const cartCount = document.getElementById('cartCount');
    const orderConfirmation = document.getElementById('orderConfirmation');
    if (!cartItems) return;

    orderConfirmation.hidden = true;
    cartCount.textContent = this.items.reduce((s, i) => s + i.qty, 0) + ' items';

    if (this.items.length === 0) {
      cartItems.innerHTML = `<div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <span>Add items from the menu</span>
      </div>`;
      cartSummary.hidden = true;
      return;
    }

    cartItems.innerHTML = this.items.map(item => `
      <div class="cart-item">
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-action="remove" data-id="${item.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="add" data-id="${item.id}" aria-label="Increase quantity">+</button>
          <button class="qty-btn remove-btn" data-action="delete" data-id="${item.id}" aria-label="Remove item">✕</button>
        </div>
      </div>
    `).join('');

    document.getElementById('cartSubtotal').textContent = `₹${this.getSubtotal()}`;
    document.getElementById('cartTax').textContent = `₹${this.getTax()}`;
    document.getElementById('cartTotal').textContent = `₹${this.getTotal()}`;
    cartSummary.hidden = false;
  }
};

// ===== RENDER MENU =====
function renderMenu(category, targetGrid) {
  const filtered = category === 'all'
    ? menuData
    : menuData.filter(item => item.category === category);

  targetGrid.innerHTML = filtered.map(item => `
    <article class="menu-card reveal">
      ${item.image ? `<div class="menu-card-image"><img src="${item.image}" alt="${item.name}" loading="lazy" /></div>` : ''}
      <div class="menu-card-top">
        ${item.isVeg ? vegSVG : nonVegSVG}
        <span style="font-size:0.72rem;color:${item.isVeg ? '#2E7D32' : '#C62828'};font-weight:600;text-transform:uppercase;letter-spacing:1px;">${item.isVeg ? 'Veg' : 'Non-Veg'}</span>
      </div>
      <div class="menu-card-body">
        <h3 class="menu-card-name">${item.name}</h3>
        <p class="menu-card-desc">${item.description}</p>
        <div class="menu-card-footer">
          <span class="menu-card-price">₹${item.price}</span>
          <button class="btn-add-to-cart" data-id="${item.id}">+ Add</button>
        </div>
      </div>
    </article>
  `).join('');

  observeRevealElements();
}

// ===== MENU TABS =====
function attachMenuTabs() {
  const menuGrid = document.getElementById('menuGrid');
  const orderMenuGrid = document.getElementById('orderMenuGrid');

  // Menu section tabs
  document.querySelectorAll('.tab-btn:not(.order-tab)').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn:not(.order-tab)').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.category, menuGrid);
    });
  });

  // Order section tabs
  document.querySelectorAll('.tab-btn.order-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn.order-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.category, orderMenuGrid);
    });
  });
}

// ===== CART EVENT DELEGATION =====
function setupCartDelegation() {
  const orderMenuGrid = document.getElementById('orderMenuGrid');
  const menuGrid = document.getElementById('menuGrid');
  const cartItems = document.getElementById('cartItems');

  // Add to cart from order section
  orderMenuGrid.addEventListener('click', e => {
    const btn = e.target.closest('.btn-add-to-cart');
    if (!btn) return;
    cart.add(Number(btn.dataset.id));
    btn.textContent = '✓ Added';
    btn.style.background = 'var(--dark-green)';
    btn.style.borderColor = 'var(--dark-green)';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.textContent = '+ Add';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 1000);
  });

  // Add to cart from menu section (no cart update visible, just toast)
  menuGrid.addEventListener('click', e => {
    const btn = e.target.closest('.btn-add-to-cart');
    if (!btn) return;
    cart.add(Number(btn.dataset.id));
    btn.textContent = '✓ Added';
    btn.style.background = 'var(--dark-green)';
    btn.style.borderColor = 'var(--dark-green)';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.textContent = '+ Add';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 1000);
  });

  // Cart item controls
  cartItems.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.dataset.action === 'add') cart.add(id);
    if (btn.dataset.action === 'remove') cart.remove(id);
    if (btn.dataset.action === 'delete') {
      cart.items = cart.items.filter(i => i.id !== id);
      cart.render();
    }
  });

  // Place order
  document.getElementById('placeOrderBtn').addEventListener('click', () => {
    if (cart.items.length === 0) {
      showToast('Your cart is empty — add some items first!');
      return;
    }
    const confirmation = document.getElementById('orderConfirmation');
    const summary = document.getElementById('cartSummary');
    const cartItemsEl = document.getElementById('cartItems');
    cart.clear();
    cartItemsEl.innerHTML = '';
    summary.hidden = true;
    confirmation.hidden = false;
  });

  document.getElementById('newOrderBtn').addEventListener('click', () => {
    document.getElementById('orderConfirmation').hidden = true;
    cart.render();
  });
}

// ===== RESERVATION FORM =====
function setupReservationForm() {
  // Set min date to today
  const dateInput = document.getElementById('resDate');
  dateInput.min = new Date().toISOString().split('T')[0];

  const form = document.getElementById('reservationForm');
  const confirmation = document.getElementById('resConfirmation');

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateReservation()) return;

    const name = document.getElementById('resName').value.trim();
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const guests = document.getElementById('resGuests').value;

    document.getElementById('resConfirmationDetails').textContent =
      `${name}, your table for ${guests} guest${guests > 1 ? 's' : ''} on ${formatDate(date)} at ${time} is confirmed.`;

    form.style.display = 'none';
    confirmation.hidden = false;
    confirmation.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  document.getElementById('resNewBooking').addEventListener('click', () => {
    form.reset();
    form.style.display = '';
    confirmation.hidden = true;
  });
}

function validateReservation() {
  let valid = true;

  const fields = [
    { id: 'resName',  errId: 'resNameError',  test: v => v.trim().length >= 2,     msg: 'Please enter your full name.' },
    { id: 'resPhone', errId: 'resPhoneError', test: v => /^[6-9]\d{9}$/.test(v),   msg: 'Enter a valid 10-digit mobile number.' },
    { id: 'resDate',  errId: 'resDateError',  test: v => v !== '',                   msg: 'Please select a date.' },
    { id: 'resTime',  errId: 'resTimeError',  test: v => v !== '',                   msg: 'Please select a time slot.' },
  ];

  fields.forEach(({ id, errId, test, msg }) => {
    const input = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!test(input.value)) {
      err.textContent = msg;
      input.classList.add('error-field');
      valid = false;
    } else {
      err.textContent = '';
      input.classList.remove('error-field');
    }
  });

  return valid;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// ===== GALLERY FILTERS =====
function setupGalleryFilters() {
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('filtered-out');
        } else {
          item.classList.add('filtered-out');
        }
      });
    });
  });
}

// ===== NAVBAR =====
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== NAV ACTIVE STATES =====
function setupNavActiveStates() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => obs.observe(s));
}

// ===== SCROLL REVEAL =====
function observeRevealElements() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ===== AURORA ANIMATION =====
function initAurora() {
  const container = document.getElementById('aurora-canvas');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    },
    vertexShader: `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float iTime;
      uniform vec2 iResolution;

      #define NUM_OCTAVES 3

      float rand(vec2 n) {
        return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);
        float res = mix(
          mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
          mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
        return res * res;
      }

      float fbm(vec2 x) {
        float v = 0.0;
        float a = 0.3;
        vec2 shift = vec2(100);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < NUM_OCTAVES; ++i) {
          v += a * noise(x);
          x = rot * x * 2.0 + shift;
          a *= 0.4;
        }
        return v;
      }

      void main() {
        vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
        vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
        vec2 v;
        vec4 o = vec4(0.0);

        float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

        for (float i = 0.0; i < 35.0; i++) {
          v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
          float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0));
          vec4 auroraColors = vec4(
            0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
            0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
            0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
            1.0
          );
          vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
          float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6;
          o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
        }

        o = tanh(pow(o / 100.0, vec4(1.6)));
        gl_FragColor = o * 1.5;
      }
    `
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  let frameId;
  const animate = () => {
    material.uniforms.iTime.value += 0.016;
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  };
  animate();

  const handleResize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', handleResize);

  // Pause animation when hero is out of view (performance)
  const hero = document.getElementById('home');
  const visibilityObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!frameId) animate();
      } else {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    });
  }, { threshold: 0 });
  visibilityObserver.observe(hero);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  const menuGrid = document.getElementById('menuGrid');
  const orderMenuGrid = document.getElementById('orderMenuGrid');

  renderMenu('all', menuGrid);
  renderMenu('all', orderMenuGrid);
  attachMenuTabs();
  setupCartDelegation();
  setupGalleryFilters();
  setupReservationForm();
  setupNavbar();
  observeRevealElements();
  setupNavActiveStates();
  cart.render();
  initAurora();
});
