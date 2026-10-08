(() => {
  'use strict';

  /* ========== DATA (edit here) ========== */
  const CATEGORIES = [
    { name: 'Dresses', desc: 'Midi, maxi and party dresses', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80' },
    { name: 'Tops', desc: 'Blouses, crops and everyday tops', image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80' },
    { name: 'Kurtas', desc: 'Kurtas and festive sets', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80' },
    { name: 'Bottoms', desc: 'Jeans, palazzos and trousers', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80' },
    { name: 'Footwear', desc: 'Sneakers, heels and flats', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80' },
    { name: 'Accessories', desc: 'Bags, jewellery and more', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80' }
  ];

  const U = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
  const AMZ = (q) => `https://www.amazon.in/s?k=${encodeURIComponent(q)}`; // placeholder: replace with your affiliate link
  const MYN = (q) => `https://www.myntra.com/${encodeURIComponent(q)}`;      // placeholder: replace with your affiliate link

  const PRODUCTS = [
    { id: 1, name: 'Floral Wrap Midi Dress', category: 'Dresses', brand: 'Bloom & Co', price: 1499, originalPrice: 2299, images: [U('photo-1572804013309-59a88b7e92f1'), U('photo-1595777457583-95e059d581b8')], description: 'A flowy wrap dress in a soft floral print with a flattering waist tie. Easy to dress up or down.', sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Pink', 'Blue', 'Maroon'], highlights: ['Wrap neckline with tie waist', 'Lightweight viscose', 'Midi length'], affiliateUrl: AMZ('women floral wrap midi dress'), badge: 'BESTSELLER', featured: true, added: '2026-06-01' },
    { id: 2, name: 'Satin Slip Dress', category: 'Dresses', brand: 'Velour Lane', price: 1799, originalPrice: 2599, images: [U('photo-1595777457583-95e059d581b8')], description: 'A smooth satin slip with adjustable straps and a fluid drape, made for dinners and celebrations.', sizes: ['XS', 'S', 'M', 'L'], colors: ['Black', 'Sage', 'Ivory'], highlights: ['Adjustable straps', 'Satin finish', 'Bias-cut skirt'], affiliateUrl: MYN('women-slip-dress'), badge: 'NEW', added: '2026-09-18' },
    { id: 3, name: 'Ribbed Knit Crop Top', category: 'Tops', brand: 'Daily Muse', price: 549, originalPrice: 899, images: [U('photo-1485968579580-b6d095142e6e')], description: 'A stretchy ribbed top with a clean square neck. Pair it with high-rise jeans or a skirt.', sizes: ['XS', 'S', 'M', 'L'], colors: ['White', 'Black', 'Lilac'], highlights: ['Stretch rib knit', 'Square neckline', 'Cropped fit'], affiliateUrl: AMZ('women ribbed crop top'), badge: 'TRENDING', featured: true, added: '2026-08-05' },
    { id: 4, name: 'Puff Sleeve Blouse', category: 'Tops', brand: 'Daily Muse', price: 799, originalPrice: 1199, images: [U('photo-1469334031218-e382a71b716b')], description: 'A romantic blouse with gathered puff sleeves and a relaxed shape. Great for work or brunch.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Cream', 'Pink'], highlights: ['Puff sleeves', 'Breathable crepe', 'Button-back detail'], affiliateUrl: MYN('women-puff-sleeve-top'), badge: 'TRENDING', added: '2026-09-22' },
    { id: 5, name: 'Cotton Straight Kurta', category: 'Kurtas', brand: 'Anaya', price: 899, originalPrice: 1499, images: [U('photo-1583496661160-fb5886a0aaaa')], description: 'A soft cotton kurta with a straight cut and subtle block print, comfortable for all-day wear.', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Mustard', 'Indigo', 'Maroon'], highlights: ['Pure cotton', 'Block print', 'Three-quarter sleeves'], affiliateUrl: AMZ('women cotton straight kurta'), badge: 'BESTSELLER', featured: true, added: '2026-05-12' },
    { id: 6, name: 'Embroidered Kurta Set', category: 'Kurtas', brand: 'Anaya', price: 1899, originalPrice: 2999, images: [U('photo-1434389677669-e08b4cac3105')], description: 'A three-piece set with an embroidered kurta, matching pants and a dupatta for festive occasions.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Teal', 'Pink'], highlights: ['Kurta, pants and dupatta', 'Thread embroidery', 'Festive wear'], affiliateUrl: MYN('women-kurta-set'), badge: 'NEW', added: '2026-09-28' },
    { id: 7, name: 'High-Rise Wide-Leg Jeans', category: 'Bottoms', brand: 'Denim Lab', price: 1599, originalPrice: 2499, images: [U('photo-1541099649105-f69ad21f3246')], description: 'Rigid-feel denim with a high rise and a wide leg that elongates the silhouette.', sizes: ['26', '28', '30', '32', '34'], colors: ['Light Blue', 'Indigo'], highlights: ['High rise', 'Wide leg', 'Five-pocket styling'], affiliateUrl: AMZ('women high waist wide leg jeans'), badge: 'TRENDING', featured: true, added: '2026-07-02' },
    { id: 8, name: 'Pleated Palazzo Pants', category: 'Bottoms', brand: 'Velour Lane', price: 999, originalPrice: 1599, images: [U('photo-1551163943-3f6a855d1153')], description: 'Fluid pleated palazzos with an elastic waist, easy to wear with a kurta or a fitted top.', sizes: ['S', 'M', 'L', 'XL'], colors: ['Black', 'Beige'], highlights: ['Elastic waist', 'Flowy fit', 'Side pockets'], affiliateUrl: 'YOUR_AFFILIATE_LINK', added: '2026-04-20' },
    { id: 9, name: 'White Platform Sneakers', category: 'Footwear', brand: 'Stride & Co', price: 1999, originalPrice: 2999, images: [U('photo-1549062572-544a64fb0c56')], description: 'Chunky-sole sneakers with a cushioned insole that go with dresses and denim alike.', sizes: ['4', '5', '6', '7', '8'], colors: ['White', 'Pink'], highlights: ['Platform sole', 'Cushioned insole', 'Lace-up'], affiliateUrl: AMZ('women white platform sneakers'), badge: 'BESTSELLER', featured: true, added: '2026-06-22' },
    { id: 10, name: 'Block Heel Sandals', category: 'Footwear', brand: 'Stride & Co', price: 1699, originalPrice: 2499, images: [U('photo-1543163521-1bf539c55dd2')], description: 'Comfortable block-heel sandals with an ankle strap, steady enough for long evenings.', sizes: ['4', '5', '6', '7', '8'], colors: ['Nude', 'Black'], highlights: ['2.5 inch block heel', 'Adjustable ankle strap', 'Padded footbed'], affiliateUrl: MYN('women-block-heels'), added: '2026-03-16' },
    { id: 11, name: 'Quilted Tote Bag', category: 'Accessories', brand: 'Bloom & Co', price: 1299, originalPrice: 1999, images: [U('photo-1584917865442-de89df76afd3'), U('photo-1590874103328-eac38a683ce7')], description: 'A roomy quilted tote with a zip closure and inner pocket, sized for a laptop and daily essentials.', sizes: [], colors: ['Black', 'Tan', 'Pink'], highlights: ['Fits a 13-inch laptop', 'Zip closure', 'Inner pocket'], affiliateUrl: AMZ('women quilted tote bag'), badge: 'TRENDING', featured: true, added: '2026-08-26' },
    { id: 12, name: 'Pearl Drop Earrings', category: 'Accessories', brand: 'Gleam', price: 399, originalPrice: 699, images: [U('photo-1535632066927-ab7c9ab60908')], description: 'Lightweight drop earrings with faux pearls, an easy finishing touch for any outfit.', sizes: [], colors: ['Gold', 'Silver'], highlights: ['Lightweight', 'Hypoallergenic posts', 'Gift-ready'], affiliateUrl: MYN('women-pearl-earrings'), added: '2026-02-06' }
  ];

  const COLOR_MAP = { white: '#fff', black: '#111', blue: '#3b6ea5', pink: '#e8a0b4', maroon: '#6d1f2f', sage: '#9caf88', ivory: '#f6f1e3', lilac: '#bfa7d6', cream: '#f1e6d0', mustard: '#d4a017', indigo: '#2b3a67', teal: '#1f7a7a', beige: '#d8c8a8', 'light blue': '#a9c4e0', nude: '#d9b8a0', tan: '#b88a5a', gold: '#d4af37', silver: '#c0c0c0' };
  const REQUIRE_SIZE = true; // set false to let visitors shop without choosing a size

  /* ========== HELPERS ========== */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const discount = (p) => (p.originalPrice > p.price ? Math.round((1 - p.price / p.originalPrice) * 100) : 0);
  const findProduct = (id) => PRODUCTS.find((p) => p.id === Number(id));
  const validUrl = (u) => {
    if (typeof u !== 'string' || /YOUR_/i.test(u)) return false;
    try { const x = new URL(u); return x.protocol === 'https:' || x.protocol === 'http:'; } catch { return false; }
  };

  const state = { category: 'All', query: '', sort: 'featured' };
  const modalState = { product: null, size: null, color: null, trigger: null };
  const el = {};

  /* ========== RENDERING ========== */
  function priceHTML(p) {
    const d = discount(p);
    return `<span>${inr(p.price)}</span>${d ? `<s>${inr(p.originalPrice)}</s><span class="off-t">${d}% off</span>` : ''}`;
  }

  function cardHTML(p) {
    const d = discount(p);
    return `<article class="card" data-id="${p.id}">
      <div class="media" data-label="${esc(p.name)}">
        <img loading="lazy" src="${esc(p.images[0])}" alt="${esc(p.name)} by ${esc(p.brand)}">
        ${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ''}
        ${d ? `<span class="badge off">-${d}%</span>` : ''}
      </div>
      <div class="info">
        <p class="brand">${esc(p.brand)}</p>
        <h3>${esc(p.name)}</h3>
        <div class="price">${priceHTML(p)}</div>
        <button class="view" type="button" aria-label="View details for ${esc(p.name)}">View Details <span aria-hidden="true">↗</span></button>
      </div>
    </article>`;
  }

  function renderGrid(container, list) {
    container.innerHTML = list.map(cardHTML).join('');
  }

  function getVisibleProducts() {
    const q = state.query.trim().toLowerCase();
    let list = PRODUCTS.filter((p) =>
      (state.category === 'All' || p.category === state.category) &&
      (!q || [p.name, p.brand, p.category].some((f) => f.toLowerCase().includes(q))));
    const sorters = {
      low: (a, b) => a.price - b.price,
      high: (a, b) => b.price - a.price,
      az: (a, b) => a.name.localeCompare(b.name),
      new: (a, b) => new Date(b.added) - new Date(a.added)
    };
    if (sorters[state.sort]) list = [...list].sort(sorters[state.sort]);
    return list;
  }

  function renderCollection() {
    const list = getVisibleProducts();
    renderGrid(el.grid, list);
    el.empty.hidden = list.length > 0;
    el.grid.hidden = list.length === 0;
    el.count.textContent = `${list.length} ${list.length === 1 ? 'piece' : 'pieces'}` + (state.category !== 'All' ? ` in ${state.category}` : '');
    el.clear.hidden = !state.query;
    $$('.pill', el.pills).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.cat === state.category)));
    $$('.nav [data-cat]').forEach((a) => a.classList.toggle('active', a.dataset.cat === state.category));
  }

  function setCategory(cat, scroll) {
    state.category = cat;
    renderCollection();
    if (scroll) $('#collection').scrollIntoView({ behavior: 'smooth' });
  }

  function renderStatic() {
    el.catGrid.innerHTML = CATEGORIES.map((c) => `<button type="button" class="cat media" data-cat="${esc(c.name)}" data-label="${esc(c.name)}">
      <img loading="lazy" src="${esc(c.image)}" alt=""><span class="cat-t"><strong>${esc(c.name)}</strong><span>${esc(c.desc)}</span></span></button>`).join('');
    el.pills.innerHTML = ['All', ...CATEGORIES.map((c) => c.name)]
      .map((n) => `<button type="button" class="pill" data-cat="${esc(n)}" aria-pressed="false">${n === 'All' ? 'All Products' : esc(n)}</button>`).join('');
    el.footCats.innerHTML = CATEGORIES.map((c) => `<li><a href="#collection" data-cat="${esc(c.name)}">${esc(c.name)}</a></li>`).join('');
    renderGrid(el.featured, PRODUCTS.filter((p) => p.featured).slice(0, 4));
    renderGrid(el.trending, PRODUCTS.filter((p) => p.badge === 'TRENDING').slice(0, 4));
  }

  /* ========== MODAL ========== */
  function showImage(src, alt) {
    el.mImg.classList.add('fade');
    setTimeout(() => { el.mImg.classList.remove('broken'); el.mImg.src = src; el.mImg.alt = alt; el.mImg.classList.remove('fade'); }, 150);
  }

  function updateModal(p) {
    modalState.product = p; modalState.size = null; modalState.color = null;
    el.mImg.classList.remove('broken', 'fade');
    el.mImg.src = p.images[0]; el.mImg.alt = `${p.name} by ${p.brand}`;
    el.mMain.dataset.label = p.name;
    el.mThumbs.innerHTML = p.images.length > 1 ? p.images.map((src, i) =>
      `<button type="button" class="thumb" data-i="${i}" aria-label="Show image ${i + 1}" aria-current="${i === 0}"><img src="${esc(src)}" alt=""></button>`).join('') : '';
    $('#mBrand').textContent = p.brand;
    $('#mTitle').textContent = p.name;
    $('#mPrice').innerHTML = priceHTML(p);
    $('#mDesc').textContent = p.description;
    $('#mHigh').innerHTML = (p.highlights || []).map((h) => `<li>${esc(h)}</li>`).join('');
    $('#mSizeWrap').hidden = !p.sizes.length;
    $('#mColorWrap').hidden = !p.colors.length;
    $('#mSizes').innerHTML = p.sizes.map((s) => `<button type="button" class="chip" data-size="${esc(s)}" aria-pressed="false">${esc(s)}</button>`).join('');
    $('#mColors').innerHTML = p.colors.map((c) => `<button type="button" class="chip swatch" data-color="${esc(c)}" aria-pressed="false" style="--c:${COLOR_MAP[c.toLowerCase()] || '#ccc'}"><i></i>${esc(c)}</button>`).join('');
    $('#mSizeVal').textContent = ''; $('#mColorVal').textContent = ''; el.notice.textContent = '';
  }

  function selectOption(btn, type) {
    modalState[type] = btn.dataset[type];
    $$(`[data-${type}]`, btn.parentElement).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    $(type === 'size' ? '#mSizeVal' : '#mColorVal').textContent = '— ' + modalState[type];
    el.notice.textContent = '';
  }

  function openModal(id, trigger) {
    const p = findProduct(id);
    if (!p) return;
    modalState.trigger = trigger || document.activeElement;
    updateModal(p);
    el.modal.hidden = false;
    document.body.classList.add('lock');
    el.dialog.scrollTop = 0;
    el.dialog.focus();
  }

  function closeModal() {
    if (el.modal.hidden) return;
    el.modal.hidden = true;
    document.body.classList.remove('lock');
    if (modalState.trigger && document.contains(modalState.trigger)) modalState.trigger.focus();
  }

  function trapFocus(e) {
    const f = $$('button:not([hidden]),[href],input,select', el.dialog).filter((n) => !n.closest('[hidden]') && n.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === el.dialog)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ========== AFFILIATE ========== */
  function openAffiliate() {
    const p = modalState.product;
    if (!p) return;
    if (REQUIRE_SIZE && p.sizes.length && !modalState.size) { el.notice.textContent = 'Please select a size before continuing.'; return; }
    if (!validUrl(p.affiliateUrl)) { el.notice.textContent = 'This product link isn’t available yet. Please check back soon.'; return; }
    const w = window.open(p.affiliateUrl, '_blank', 'noopener,noreferrer');
    if (!w) el.notice.textContent = 'Your browser blocked the new tab. Please allow pop-ups for this site and try again.';
  }

  /* ========== OTHER UI ========== */
  function setMenu(open) {
    el.nav.classList.toggle('open', open);
    el.menuBtn.setAttribute('aria-expanded', String(open));
    el.menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    el.menuBtn.textContent = open ? '✕' : '☰';
  }

  function validateNewsletter(e) {
    e.preventDefault();
    const v = el.newsEmail.value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    el.newsMsg.textContent = ok ? 'Looks good! This is a demo, so your email was not saved or sent anywhere.' : 'Please enter a valid email address, like name@example.com.';
    if (ok) el.newsForm.reset();
  }

  function resetFilters() {
    state.query = ''; state.sort = 'featured'; state.category = 'All';
    el.search.value = ''; el.sort.value = 'featured';
    renderCollection();
  }

  /* ========== EVENTS ========== */
  function bindEvents() {
    document.addEventListener('error', (e) => { if (e.target.tagName === 'IMG') e.target.classList.add('broken'); }, true);
    document.addEventListener('load', (e) => { if (e.target.tagName === 'IMG') e.target.classList.remove('broken'); }, true);

    document.addEventListener('click', (e) => {
      const catEl = e.target.closest('[data-cat]');
      if (catEl) { e.preventDefault(); setCategory(catEl.dataset.cat, true); setMenu(false); return; }
      const card = e.target.closest('.card[data-id]');
      if (card) { openModal(card.dataset.id, card.querySelector('.view')); return; }
      if (e.target.closest('[data-nav]')) setMenu(false);
    });

    el.menuBtn.addEventListener('click', () => setMenu(!el.nav.classList.contains('open')));
    $('#searchBtn').addEventListener('click', () => { setMenu(false); $('#collection').scrollIntoView({ behavior: 'smooth' }); setTimeout(() => el.search.focus({ preventScroll: true }), 400); });
    el.search.addEventListener('input', () => { state.query = el.search.value; renderCollection(); });
    el.clear.addEventListener('click', () => { el.search.value = ''; state.query = ''; renderCollection(); el.search.focus(); });
    el.sort.addEventListener('change', () => { state.sort = el.sort.value; renderCollection(); });
    $('#resetBtn').addEventListener('click', resetFilters);
    el.newsForm.addEventListener('submit', validateNewsletter);

    el.modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) return closeModal();
      const size = e.target.closest('[data-size]'); if (size) return selectOption(size, 'size');
      const color = e.target.closest('[data-color]'); if (color) return selectOption(color, 'color');
      const thumb = e.target.closest('.thumb');
      if (thumb && modalState.product) {
        const p = modalState.product;
        $$('.thumb', el.mThumbs).forEach((t) => t.setAttribute('aria-current', String(t === thumb)));
        showImage(p.images[Number(thumb.dataset.i)], `${p.name} view ${Number(thumb.dataset.i) + 1}`);
      }
    });
    el.shop.addEventListener('click', openAffiliate);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { if (!el.modal.hidden) closeModal(); else setMenu(false); }
      if (e.key === 'Tab' && !el.modal.hidden) trapFocus(e);
    });
  }

  /* ========== INIT ========== */
  function init() {
    Object.assign(el, {
      grid: $('#productGrid'), empty: $('#emptyState'), count: $('#resultCount'), pills: $('#pills'),
      search: $('#searchInput'), clear: $('#clearSearch'), sort: $('#sortSelect'),
      catGrid: $('#catGrid'), footCats: $('#footCats'), featured: $('#featuredGrid'), trending: $('#trendingGrid'),
      menuBtn: $('#menuBtn'), nav: $('#nav'), modal: $('#modal'), dialog: $('.dialog'),
      mMain: $('#mMain'), mImg: $('#mImg'), mThumbs: $('#mThumbs'), notice: $('#mNotice'), shop: $('#shopBtn'),
      newsForm: $('#newsForm'), newsEmail: $('#newsEmail'), newsMsg: $('#newsMsg')
    });
    $('#year').textContent = new Date().getFullYear();
    renderStatic();
    renderCollection();
    bindEvents();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
