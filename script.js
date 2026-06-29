// Ami's Kitchen — menu + WhatsApp basket

const WHATSAPP_NUMBER = '16307887177';

const MENU = [
  { id: 'snacks',  title: 'Snacks', items: [
    { name: 'Vada Pav',              size: '4 pieces',          price: 14 },
    { name: 'Dabeli',                size: '4 pieces',          price: 14 },
    { name: 'Stuffed Mirchi Bhajiya',size: '5 pieces',          price: 10 },
    { name: 'Cabbage Bhajiya',       size: '10 pieces',         price: 6  },
    { name: 'Dahi Vada',             size: '5 pieces',          price: 7  },
    { name: 'Dal Vada',              size: '10 pieces',         price: 6  },
    { name: 'Cheese Corn Ball',      size: '10 pieces',         price: 8  },
    { name: 'Khichu',                size: '16 oz',             price: 5  },
    { name: 'Bread Pakoda',          size: '4 pieces',          price: 14 },
    { name: 'Pavva',                 size: '16 oz',             price: 5  },
    { name: 'Cutlet',                size: '6 pieces',          price: 9  },
  ]},
  { id: 'street',  title: 'Street & Mains', items: [
    { name: 'Burger',                size: '2 pieces',          price: 12 },
    { name: 'Misal Pav',             size: '2 pavs · 16 oz',    price: 11 },
    { name: 'Pav Bhaji',             size: '4 pav · 32 oz',     price: 22 },
    { name: 'Ragda Patties',         size: '4 patties · 16 oz', price: 11 },
    { name: 'Dal Bhatti',            size: '4 bhatti',          price: 12 },
    { name: 'Hakka Noodles',         size: '32 oz',             price: 20 },
    { name: 'Manchurian',            size: '32 oz',             price: 20 },
    { name: 'Coin Manchurian',       size: '32 oz',             price: 22 },
    { name: 'American Chopsy',       size: '32 oz',             price: 20 },
    { name: 'Cauliflower Manchurian',size: '32 oz',             price: 20 },
    { name: 'Fried Rice',            size: '32 oz',             price: 18 },
    { name: 'Thai Curry w/ Rice',    size: '16 oz',             price: 12 },
    { name: 'Tofu Stir Fry',         size: '16 oz',             price: 12 },
    { name: 'Dal Dhokli w/ Rice',    size: '32 oz',             price: 16 },
    { name: 'Falafel Platter',       size: '6 falafel · 1 pita',price: 15 },
  ]},
  { id: 'curries', title: 'Curries', items: [
    { name: 'Channa Masala',         size: '32 oz', price: 16 },
    { name: 'Kala Channa',           size: '32 oz', price: 16 },
    { name: 'Cauliflower Potato',    size: '32 oz', price: 16 },
    { name: 'Potato Sukhi Sabji',    size: '32 oz', price: 15 },
    { name: 'Cabbage Aloo',          size: '32 oz', price: 15 },
    { name: 'Beans Aloo',            size: '32 oz', price: 16 },
    { name: 'Ringan Batata',         size: '32 oz', price: 15 },
    { name: 'Sev Tamatar',           size: '32 oz', price: 15 },
    { name: 'Kacha Kela',            size: '32 oz', price: 15 },
    { name: 'Methi Papad',           size: '32 oz', price: 16 },
    { name: 'Rajma Masala',          size: '32 oz', price: 18 },
    { name: 'Stuffed Eggplant',      size: '32 oz', price: 16 },
    { name: 'Stuffed Karela',        size: '32 oz', price: 18 },
    { name: 'Kela Corn',             size: '32 oz', price: 16 },
    { name: 'Gatta Sabji',           size: '32 oz', price: 16 },
    { name: 'Paneer Butter Masala',  size: '32 oz', price: 20 },
    { name: 'Palak Paneer',          size: '32 oz', price: 20 },
    { name: 'Mutter Paneer',         size: '32 oz', price: 20 },
    { name: 'Malai Kofta',           size: '32 oz', price: 20 },
    { name: 'Dum Aloo',              size: '32 oz', price: 20 },
  ]},
  { id: 'dal',     title: 'Dal', items: [
    { name: 'Tadka Dal',             size: '32 oz', price: 18 },
    { name: 'Khatta Mug',            size: '32 oz', price: 18 },
    { name: 'Gujarati Dal',          size: '32 oz', price: 18 },
    { name: 'Gujarati Kadhi',        size: '32 oz', price: 18 },
    { name: 'Lauki Chana Dal',       size: '32 oz', price: 15 },
    { name: 'Black-Eyed Beans',      size: '32 oz', price: 20 },
    { name: 'Yellow Mung Dal',       size: '32 oz', price: 16 },
    { name: 'Pakoda Kadhi',          size: '32 oz', price: 18 },
  ]},
  { id: 'rice',    title: 'Rice', items: [
    { name: 'Masala Khichdi',              size: '16 oz', price: 7  },
    { name: 'Masala Khichdi w/ Kadhi',     size: '16 oz', price: 10 },
    { name: 'Plain Ghee Khichdi w/ Kadhi', size: '16 oz', price: 8  },
    { name: 'Veg Pulav',                   size: '16 oz', price: 10 },
    { name: 'White Rice',                  size: '16 oz', price: 5  },
  ]},
  { id: 'paratha', title: 'Paratha', items: [
    { name: 'Aloo Paratha',   size: '2 pieces', price: 6 },
    { name: 'Paneer Paratha', size: '2 pieces', price: 7 },
    { name: 'Onion Paratha',  size: '2 pieces', price: 6 },
  ]},
  { id: 'salad',   title: 'Salad', items: [
    { name: 'Channa Salad',      size: '16 oz', price: 8 },
    { name: 'Kala Channa Salad', size: '16 oz', price: 8 },
  ]},
  { id: 'pickle',  title: 'Fresh Pickle', items: [
    { name: 'Cut Green Chili',      size: '8 oz', price: 6 },
    { name: 'Raw Mango (seasonal)', size: '8 oz', price: 6 },
  ]},
];

MENU.forEach(s => s.items.forEach((it, i) => it.id = `${s.id}-${i}`));

const cart = new Map();

function getItem(id) {
  for (const s of MENU) {
    const it = s.items.find(i => i.id === id);
    if (it) return it;
  }
  return null;
}

function addToCart(id) {
  const it = getItem(id);
  if (!it) return;
  const e = cart.get(id);
  if (e) e.qty += 1; else cart.set(id, { item: it, qty: 1 });
  renderCart();
}

function decrementCart(id) {
  const e = cart.get(id);
  if (!e) return;
  e.qty -= 1;
  if (e.qty <= 0) cart.delete(id);
  renderCart();
}

function clearCart() { cart.clear(); renderCart(); }

function cartTotal() {
  let t = 0;
  for (const { item, qty } of cart.values()) t += item.price * qty;
  return t;
}

function renderMenu() {
  const tabsEl = document.getElementById('menu-tabs');
  const listEl = document.getElementById('menu-list');

  tabsEl.innerHTML = MENU.map(s =>
    `<button class="menu-tab" data-target="${s.id}">${s.title}</button>`
  ).join('');

  listEl.innerHTML = MENU.map(s => `
    <section class="menu-section" id="section-${s.id}">
      <h3>${s.title}</h3>
      <span class="section-rule"></span>
      <ul class="menu-rows">
        ${s.items.map(item => `
          <li class="menu-row" data-id="${item.id}" data-qty="0">
            <span class="menu-name">${item.name}</span>
            <span class="menu-leader"></span>
            <span class="menu-price">$${item.price}</span>
            <span class="menu-stepper" role="group" aria-label="Quantity">
              <button type="button" data-action="inc" class="step-inc" aria-label="Add one">+</button>
              <span class="qty-n" aria-live="polite">0</span>
              <button type="button" data-action="dec" class="step-dec" aria-label="Remove one">−</button>
            </span>
            <span class="menu-size">${item.size}</span>
          </li>
        `).join('')}
      </ul>
    </section>
  `).join('');

  tabsEl.querySelectorAll('.menu-tab').forEach(t => {
    t.addEventListener('click', () => {
      document.getElementById('section-' + t.dataset.target)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  listEl.querySelectorAll('.menu-row').forEach(r => {
    r.querySelectorAll('.menu-stepper button').forEach(b => {
      b.addEventListener('click', e => {
        e.stopPropagation();
        if (b.dataset.action === 'inc') addToCart(r.dataset.id);
        else                            decrementCart(r.dataset.id);
      });
    });
  });

  const sections = MENU.map(s => document.getElementById('section-' + s.id));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id.replace('section-', '');
        tabsEl.querySelectorAll('.menu-tab').forEach(t => {
          t.classList.toggle('active', t.dataset.target === id);
        });
      }
    });
  }, { rootMargin: '-25% 0px -60% 0px' });
  sections.forEach(s => s && obs.observe(s));
}

function renderCart() {
  const bar     = document.getElementById('cart-bar');
  const count   = bar.querySelector('.cart-count');
  const total   = bar.querySelector('.cart-total');
  const itemsEl = document.getElementById('cart-items');

  const totalQty = [...cart.values()].reduce((s, e) => s + e.qty, 0);
  const totalPx  = cartTotal();

  if (totalQty === 0) bar.classList.add('hidden');
  else                bar.classList.remove('hidden');

  count.textContent = totalQty;
  total.textContent = `$${totalPx.toFixed(2)}`;

  itemsEl.innerHTML = [...cart.values()].map(({ item, qty }) => `
    <li>
      <span class="ci-name">${item.name}<small>${item.size}</small></span>
      <span class="qty-ctrl">
        <button data-action="dec" data-id="${item.id}" aria-label="Remove one">−</button>
        <span class="qty">${qty}</span>
        <button data-action="inc" data-id="${item.id}" aria-label="Add one">+</button>
      </span>
      <span class="ci-price">$${(item.price * qty).toFixed(2)}</span>
    </li>
  `).join('');
  itemsEl.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', e => {
      e.stopPropagation();
      if (b.dataset.action === 'inc') addToCart(b.dataset.id);
      else                            decrementCart(b.dataset.id);
    });
  });

  // Reflect qty on each menu row
  document.querySelectorAll('.menu-row').forEach(r => {
    const e = cart.get(r.dataset.id);
    const qty = e ? e.qty : 0;
    r.dataset.qty = qty;
    const n = r.querySelector('.qty-n');
    if (n) n.textContent = qty;
  });

  const wa = buildWhatsAppUrl();
  document.getElementById('wa-button').href = wa;
  document.getElementById('cart-wa').href   = wa;
}

function buildWhatsAppUrl() {
  const lines = [`Hi Ami's Kitchen, I'd like to place an order:`, ''];
  if (cart.size === 0) {
    lines.push(`(I'll tell you what I'd like.)`);
  } else {
    for (const { item, qty } of cart.values()) {
      lines.push(`• ${qty} × ${item.name} (${item.size}) — $${(item.price * qty).toFixed(2)}`);
    }
    lines.push('', `Total: $${cartTotal().toFixed(2)}`);
  }
  lines.push('', 'Pickup day: ', 'Jain / Swaminarayan: ', 'Name: ');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}

function setupCart() {
  const toggle = document.getElementById('cart-toggle');
  const panel  = document.getElementById('cart-panel');
  toggle.addEventListener('click', () => {
    const open = !panel.hidden;
    panel.hidden = open;
    toggle.setAttribute('aria-expanded', String(!open));
  });
  document.getElementById('cart-clear').addEventListener('click', clearCart);
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderCart();
  setupCart();
});
