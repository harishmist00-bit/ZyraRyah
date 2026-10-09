
(() => {
  'use strict';

  // ========================================
  // PRODUCT DATA
  // Replace placeholder affiliate URLs
  // with your actual affiliate links.
  // ========================================

  const image = (id) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

  const amazon = (query) =>
    `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;

  const myntra = (query) =>
    `https://www.myntra.com/${encodeURIComponent(query)}`;

  const PRODUCTS = [
    {
      id: 1,
      name: 'Floral Wrap Midi Dress',
      category: 'Dresses',
      brand: 'Bloom & Co',
      price: 1499,
      originalPrice: 2299,
      images: [
        image('photo-1572804013309-59a88b7e92f1'),
        image('photo-1595777457583-95e059d581b8')
      ],
      description: 'A flowy floral wrap dress with a flattering waist tie.',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Pink', 'Blue', 'Maroon'],
      highlights: ['Wrap neckline', 'Lightweight fabric', 'Midi length'],
      affiliateUrl: amazon('women floral wrap midi dress'),
      badge: 'BESTSELLER',
      featured: true,
      added: '2026-06-01'
    },
    {
      id: 2,
      name: 'Satin Slip Dress',
      category: 'Dresses',
      brand: 'Velour Lane',
      price: 1799,
      originalPrice: 2599,
      images: [image('photo-1595777457583-95e059d581b8')],
      description: 'A satin slip dress with adjustable straps.',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Black', 'Sage', 'Ivory'],
      highlights: ['Adjustable straps', 'Satin finish', 'Elegant fit'],
      affiliateUrl: myntra('women-slip-dress'),
      badge: 'NEW',
      added: '2026-09-18'
    },
    {
      id: 3,
      name: 'Ribbed Knit Crop Top',
      category: 'Tops',
      brand: 'Daily Muse',
      price: 549,
      originalPrice: 899,
      images: [image('photo-1485968579580-b6d095142e6e')],
      description: 'A stretchy ribbed top with a clean square neckline.',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['White', 'Black', 'Lilac'],
      highlights: ['Stretch rib knit', 'Square neckline', 'Cropped fit'],
      affiliateUrl: amazon('women ribbed crop top'),
      badge: 'TRENDING',
      featured: true,
      added: '2026-08-05'
    },
    {
      id: 4,
      name: 'Puff Sleeve Blouse',
      category: 'Tops',
      brand: 'Daily Muse',
      price: 799,
      originalPrice: 1199,
      images: [image('photo-1469334031218-e382a71b716b')],
      description: 'A romantic puff sleeve blouse for work or casual outings.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Cream', 'Pink'],
      highlights: ['Puff sleeves', 'Breathable fabric', 'Stylish design'],
      affiliateUrl: myntra('women-puff-sleeve-top'),
      badge: 'TRENDING',
      added: '2026-09-22'
    },
    {
      id: 5,
      name: 'Cotton Straight Kurta',
      category: 'Kurtas',
      brand: 'Anaya',
      price: 899,
      originalPrice: 1499,
      images: [image('photo-1583496661160-fb5886a0aaaa')],
      description: 'A comfortable cotton kurta with a subtle block print.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Mustard', 'Indigo', 'Maroon'],
      highlights: ['Cotton fabric', 'Block print', 'Three-quarter sleeves'],
      affiliateUrl: amazon('women cotton straight kurta'),
      badge: 'BESTSELLER',
      featured: true,
      added: '2026-05-12'
    },
    {
      id: 6,
      name: 'Embroidered Kurta Set',
      category: 'Kurtas',
      brand: 'Anaya',
      price: 1899,
      originalPrice: 2999,
      images: [image('photo-1434389677669-e08b4cac3105')],
      description: 'A festive kurta set with matching pants and dupatta.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Teal', 'Pink'],
      highlights: ['Three-piece set', 'Thread embroidery', 'Festive wear'],
      affiliateUrl: myntra('women-kurta-set'),
      badge: 'NEW',
      added: '2026-09-28'
    },
    {
      id: 7,
      name: 'High-Rise Wide-Leg Jeans',
      category: 'Bottoms',
      brand: 'Denim Lab',
      price: 1599,
      originalPrice: 2499,
      images: [image('photo-1541099649105-f69ad21f3246')],
      description: 'High-rise denim jeans with a modern wide-leg silhouette.',
      sizes: ['26', '28', '30', '32', '34'],
      colors: ['Light Blue', 'Indigo'],
      highlights: ['High rise', 'Wide leg', 'Five-pocket styling'],
      affiliateUrl: amazon('women high waist wide leg jeans'),
      badge: 'TRENDING',
      featured: true,
      added: '2026-07-02'
    },
    {
      id: 8,
      name: 'Pleated Palazzo Pants',
      category: 'Bottoms',
      brand: 'Velour Lane',
      price: 999,
      originalPrice: 1599,
      images: [image('photo-1551163943-3f6a855d1153')],
      description: 'Flowy pleated palazzo pants with an elastic waist.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Beige'],
      highlights: ['Elastic waist', 'Flowy fit', 'Everyday comfort'],
      affiliateUrl: amazon('women pleated palazzo pants'),
      added: '2026-04-20'
    },
    {
      id: 9,
      name: 'White Platform Sneakers',
      category: 'Footwear',
      brand: 'Stride & Co',
      price: 1999,
      originalPrice: 2999,
      images: [image('photo-1549062572-544a64fb0c56')],
      description: 'Chunky platform sneakers for everyday outfits.',
      sizes: ['4', '5', '6', '7', '8'],
      colors: ['White', 'Pink'],
      highlights: ['Platform sole', 'Cushioned insole', 'Lace-up design'],
      affiliateUrl: amazon('women white platform sneakers'),
      badge: 'BESTSELLER',
      featured: true,
      added: '2026-06-22'
    },
    {
      id: 10,
      name: 'Block Heel Sandals',
      category: 'Footwear',
      brand: 'Stride & Co',
      price: 1699,
      originalPrice: 2499,
      images: [image('photo-1543163521-1bf539c55dd2')],
      description: 'Block heel sandals with an adjustable ankle strap.',
      sizes: ['4', '5', '6', '7', '8'],
      colors: ['Nude', 'Black'],
      highlights: ['Block heel', 'Adjustable ankle strap', 'Padded footbed'],
      affiliateUrl: myntra('women-block-heels'),
      added: '2026-03-16'
    },
    {
      id: 11,
      name: 'Quilted Tote Bag',
      category: 'Accessories',
      brand: 'Bloom & Co',
      price: 1299,
      originalPrice: 1999,
      images: [
        image('photo-1584917865442-de89df76afd3'),
        image('photo-1590874103328-eac38a683ce7')
      ],
      description: 'A roomy quilted tote bag for everyday essentials.',
      sizes: [],
      colors: ['Black', 'Tan', 'Pink'],
      highlights: ['Roomy interior', 'Zip closure', 'Inner pocket'],
      affiliateUrl: amazon('women quilted tote bag'),
      badge: 'TRENDING',
      featured: true,
      added: '2026-08-26'
    },
    {
      id: 12,
      name: 'Pearl Drop Earrings',
      category: 'Accessories',
      brand: 'Gleam',
      price: 399,
      originalPrice: 699,
      images: [image('photo-1535632066927-ab7c9ab60908')],
      description: 'Lightweight pearl drop earrings for everyday styling.',
      sizes: [],
      colors: ['Gold', 'Silver'],
      highlights: ['Lightweight design', 'Elegant finish', 'Gift-friendly'],
      affiliateUrl: myntra('women-pearl-earrings'),
      added: '2026-02-06'
    }
  ];

  const CATEGORIES = [
    'All',
    ...new Set(PRODUCTS.map(product => product.category))
  ];

  const COLOR_MAP = {
    white: '#fff',
    black: '#111',
    blue: '#3b6ea5',
    pink: '#e8a0b4',
    maroon: '#6d1f2f',
    sage: '#9caf88',
    ivory: '#f6f1e3',
    lilac: '#bfa7d6',
    cream: '#f1e6d0',
    mustard: '#d4a017',
    indigo: '#2b3a67',
    teal: '#1f7a7a',
    beige: '#d8c8a8',
    'light blue': '#a9c4e0',
    nude: '#d9b8a0',
    tan: '#b88a5a',
    gold: '#d4af37',
    silver: '#c0c0c0'
  };

  const REQUIRE_SIZE = true;

  // ========================================
  // HELPERS
  // ========================================

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const money = value =>
    '₹' + Number(value).toLocaleString('en-IN');

  const escapeHTML = value =>
    String(value).replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[char]);

  const discount = product =>
    product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0;

  const validURL = value => {
    try {
      const url = new URL(value);
      return (
        ['https:', 'http:'].includes(url.protocol) &&
        !/YOUR_|yourname@/i.test(value)
      );
    } catch {
      return false;
    }
  };

  const state = {
    category: 'All',
    query: '',
    sort: 'featured'
  };

  const modalState = {
    product: null,
    size: null,
    color: null,
    trigger: null
  };

  const el = {};

  // ========================================
  // PRICE AND PRODUCT CARDS
  // ========================================

  function priceHTML(product) {
    const percentage = discount(product);

    return `
      <span>${money(product.price)}</span>
      ${
        percentage
          ? `<s>${money(product.originalPrice)}</s>
             <span class="off-t">${percentage}% off</span>`
          : ''
      }
    `;
  }

  function cardHTML(product) {
    const percentage = discount(product);

    return `
      <article class="card" data-id="${product.id}">
        <div class="media" data-label="${escapeHTML(product.name)}">
          <img
            loading="lazy"
            src="${escapeHTML(product.images[0])}"
            alt="${escapeHTML(product.name)} by ${escapeHTML(product.brand)}"
          >

          ${
            product.badge
              ? `<span class="badge">${escapeHTML(product.badge)}</span>`
              : ''
          }

          ${
            percentage
              ? `<span class="badge off">-${percentage}%</span>`
              : ''
          }
        </div>

        <div class="info">
          <p class="brand">${escapeHTML(product.brand)}</p>
          <h3>${escapeHTML(product.name)}</h3>
          <div class="price">${priceHTML(product)}</div>

          <button
            class="view"
            type="button"
            data-view="${product.id}"
            aria-label="View details for ${escapeHTML(product.name)}"
          >
            View Details <span aria-hidden="true">↗</span>
          </button>
        </div>
      </article>
    `;
  }

  function getVisibleProducts() {
    const query = state.query.trim().toLowerCase();

    let products = PRODUCTS.filter(product => {
      const matchesCategory =
        state.category === 'All' ||
        product.category === state.category;

      const matchesQuery =
        !query ||
        [product.name, product.brand, product.category]
          .some(value => value.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });

    const sorters = {
      low: (a, b) => a.price - b.price,
      high: (a, b) => b.price - a.price,
      az: (a, b) => a.name.localeCompare(b.name),
      new: (a, b) => new Date(b.added) - new Date(a.added),
      featured: (a, b) =>
        Number(Boolean(b.featured)) - Number(Boolean(a.featured))
    };

    if (sorters[state.sort]) {
      products = [...products].sort(sorters[state.sort]);
    }

    return products;
  }

  function renderPills() {
    el.pills.innerHTML = CATEGORIES.map(category => `
      <button
        type="button"
        class="pill"
        data-cat="${escapeHTML(category)}"
        aria-pressed="${category === state.category}"
      >
        ${escapeHTML(category)}
      </button>
    `).join('');
  }

  function renderCollection() {
    const products = getVisibleProducts();

    el.grid.innerHTML = products.map(cardHTML).join('');

    el.empty.hidden = products.length !== 0;
    el.grid.hidden = products.length === 0;

    el.count.textContent =
      `${products.length} ${products.length === 1 ? 'piece' : 'pieces'}` +
      (state.category !== 'All' ? ` in ${state.category}` : '');

    el.clear.hidden = !state.query;

    $$('.pill', el.pills).forEach(button => {
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.cat === state.category)
      );
    });
  }

  function setCategory(category, shouldScroll = false) {
    if (!CATEGORIES.includes(category)) return;

    state.category = category;
    renderCollection();

    if (shouldScroll) {
      $('#collection').scrollIntoView({ behavior: 'smooth' });
    }
  }

  function setSearch(query) {
    state.query = query;

    // Keep all three search inputs synchronized.
    el.search.value = query;
    el.desktopSearch.value = query;
    el.mobileSearch.value = query;

    renderCollection();
  }

  function handleSearchSubmit(event, input) {
    event.preventDefault();
    setSearch(input.value.trim());

    $('#collection').scrollIntoView({ behavior: 'smooth' });
  }

  // ========================================
  // PRODUCT DETAILS MODAL
  // ========================================

  function updateModal(product) {
    modalState.product = product;
    modalState.size = null;
    modalState.color = null;

    el.mImg.src = product.images[0];
    el.mImg.alt = `${product.name} by ${product.brand}`;
    el.mMain.dataset.label = product.name;

    el.mThumbs.innerHTML = product.images.length > 1
      ? product.images.map((src, index) => `
          <button
            type="button"
            class="thumb"
            data-image-index="${index}"
            aria-label="Show image ${index + 1}"
            aria-current="${index === 0}"
          >
            <img src="${escapeHTML(src)}" alt="">
          </button>
        `).join('')
      : '';

    el.mBrand.textContent = product.brand;
    el.mTitle.textContent = product.name;
    el.mPrice.innerHTML = priceHTML(product);
    el.mDesc.textContent = product.description;

    el.mHigh.innerHTML = product.highlights
      .map(item => `<li>${escapeHTML(item)}</li>`)
      .join('');

    el.mSizeWrap.hidden = product.sizes.length === 0;
    el.mColorWrap.hidden = product.colors.length === 0;

    el.mSizes.innerHTML = product.sizes.map(size => `
      <button
        type="button"
        class="chip"
        data-size="${escapeHTML(size)}"
        aria-pressed="false"
      >${escapeHTML(size)}</button>
    `).join('');

    el.mColors.innerHTML = product.colors.map(color => `
      <button
        type="button"
        class="chip swatch"
        data-color="${escapeHTML(color)}"
        aria-pressed="false"
        style="--c:${COLOR_MAP[color.toLowerCase()] || '#ccc'}"
      >
        <i></i>${escapeHTML(color)}
      </button>
    `).join('');

    el.mSizeVal.textContent = '';
    el.mColorVal.textContent = '';
    el.notice.textContent = '';
  }

  function openModal(id, trigger) {
    const product = PRODUCTS.find(item => item.id === Number(id));
    if (!product) return;

    modalState.trigger = trigger || document.activeElement;

    updateModal(product);

    el.modal.hidden = false;
    document.body.classList.add('lock');

    el.dialog.scrollTop = 0;
    el.dialog.focus();
  }

  function closeModal() {
    if (el.modal.hidden) return;

    el.modal.hidden = true;
    document.body.classList.remove('lock');

    if (
      modalState.trigger &&
      document.contains(modalState.trigger)
    ) {
      modalState.trigger.focus();
    }
  }

  function selectOption(button, type) {
    modalState[type] = button.dataset[type];

    $$(`[data-${type}]`, button.parentElement).forEach(item => {
      item.setAttribute('aria-pressed', String(item === button));
    });

    if (type === 'size') {
      el.mSizeVal.textContent = '— ' + modalState.size;
    } else {
      el.mColorVal.textContent = '— ' + modalState.color;
    }

    el.notice.textContent = '';
  }

  function showImage(src, alt) {
    el.mImg.src = src;
    el.mImg.alt = alt;
  }

  // ========================================
  // AFFILIATE SHOPPING
  // ========================================

  function openAffiliate() {
    const product = modalState.product;

    if (!product) return;

    if (
      REQUIRE_SIZE &&
      product.sizes.length > 0 &&
      !modalState.size
    ) {
      el.notice.textContent =
        'Please select a size before continuing.';
      return;
    }

    if (!validURL(product.affiliateUrl)) {
      el.notice.textContent =
        'This product link is not available yet.';
      return;
    }

    const opened = window.open(
      product.affiliateUrl,
      '_blank',
      'noopener,noreferrer'
    );

    if (!opened) {
      el.notice.textContent =
        'Your browser blocked the new tab. Please allow pop-ups and try again.';
    }
  }

  // ========================================
  // EVENT LISTENERS
  // ========================================

  function bindEvents() {
    // Product category and product-card clicks.
    el.pills.addEventListener('click', event => {
      const button = event.target.closest('[data-cat]');
      if (!button) return;

      setCategory(button.dataset.cat);
    });

    el.grid.addEventListener('click', event => {
      const button = event.target.closest('[data-view]');
      const card = event.target.closest('.card[data-id]');

      if (!card) return;

      openModal(
        card.dataset.id,
        button || card.querySelector('.view')
      );
    });

    // Collection search.
    el.search.addEventListener('input', () => {
      setSearch(el.search.value);
    });

    el.clear.addEventListener('click', () => {
      setSearch('');
      el.search.focus();
    });

    // Header search forms.
    el.desktopForm.addEventListener('submit', event => {
      handleSearchSubmit(event, el.desktopSearch);
    });

    el.mobileForm.addEventListener('submit', event => {
      handleSearchSubmit(event, el.mobileSearch);
    });

    el.desktopSearch.addEventListener('input', () => {
      setSearch(el.desktopSearch.value);
    });

    el.mobileSearch.addEventListener('input', () => {
      setSearch(el.mobileSearch.value);
    });

    // Sorting.
    el.sort.addEventListener('change', () => {
      state.sort = el.sort.value;
      renderCollection();
    });

    // Modal interactions.
    el.modal.addEventListener('click', event => {
      if (event.target.closest('[data-close]')) {
        closeModal();
        return;
      }

      const size = event.target.closest('[data-size]');
      if (size) {
        selectOption(size, 'size');
        return;
      }

      const color = event.target.closest('[data-color]');
      if (color) {
        selectOption(color, 'color');
        return;
      }

      const thumb = event.target.closest('[data-image-index]');

      if (thumb && modalState.product) {
        const index = Number(thumb.dataset.imageIndex);
        const product = modalState.product;

        if (!product.images[index]) return;

        $$('.thumb', el.mThumbs).forEach(item => {
          item.setAttribute('aria-current', String(item === thumb));
        });

        showImage(
          product.images[index],
          `${product.name} view ${index + 1}`
        );
      }
    });

    el.shop.addEventListener('click', openAffiliate);

    // Keyboard controls.
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !el.modal.hidden) {
        closeModal();
      }

      if (event.key === 'Tab' && !el.modal.hidden) {
        const focusable = $$(
          'button:not(:disabled), a[href], input, select, [tabindex="0"]',
          el.dialog
        ).filter(item =>
          !item.closest('[hidden]') &&
          item.offsetParent !== null
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          (document.activeElement === first ||
           document.activeElement === el.dialog)
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    // Mark images that fail to load.
    document.addEventListener('error', event => {
      if (event.target.tagName === 'IMG') {
        event.target.classList.add('broken');
      }
    }, true);

    document.addEventListener('load', event => {
      if (event.target.tagName === 'IMG') {
        event.target.classList.remove('broken');
      }
    }, true);
  }

  // ========================================
  // INITIALIZATION
  // ========================================

  function init() {
    Object.assign(el, {
      grid: $('#productGrid'),
      empty: $('#emptyState'),
      count: $('#resultCount'),
      pills: $('#pills'),
      search: $('#searchInput'),
      clear: $('#clearSearch'),
      sort: $('#sortSelect'),

      desktopForm: $('#desktopSearchForm'),
      desktopSearch: $('#desktopSearchInput'),
      mobileForm: $('#mobileSearchForm'),
      mobileSearch: $('#mobileSearchInput'),

      modal: $('#modal'),
      dialog: $('.dialog'),
      mMain: $('#mMain'),
      mImg: $('#mImg'),
      mThumbs: $('#mThumbs'),
      mBrand: $('#mBrand'),
      mTitle: $('#mTitle'),
      mPrice: $('#mPrice'),
      mDesc: $('#mDesc'),
      mHigh: $('#mHigh'),
      mSizeWrap: $('#mSizeWrap'),
      mColorWrap: $('#mColorWrap'),
      mSizes: $('#mSizes'),
      mColors: $('#mColors'),
      mSizeVal: $('#mSizeVal'),
      mColorVal: $('#mColorVal'),
      notice: $('#mNotice'),
      shop: $('#shopBtn')
    });

    // Check that required HTML elements exist.
    const requiredElements = [
      'grid', 'empty', 'count', 'pills',
      'search', 'clear', 'sort',
      'desktopForm', 'desktopSearch',
      'mobileForm', 'mobileSearch',
      'modal', 'dialog', 'mImg', 'shop'
    ];

    const missing = requiredElements.filter(key => !el[key]);

    if (missing.length) {
      console.error(
        'Zyra Fashion: Missing required HTML elements:',
        missing
      );
      return;
    }

    $('#year').textContent = new Date().getFullYear();

    renderPills();
    renderCollection();
    bindEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
