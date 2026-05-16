//  Products
const PRODUCTS = [
  {
    id: "p01",
    name: "Sony WH-1000XM5",
    cat: "electronics",
    price: 4999,
    oldPrice: 6999,
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    desc: "Industry-leading noise cancelling headphones with 30hr battery.",
  },
  {
    id: "p02",
    name: "Apple Watch Series 9",
    cat: "electronics",
    price: 7999,
    oldPrice: 9000,
    badge: "New",
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80",
    desc: "Smarter, brighter, mightier. Advanced health sensors.",
  },
  {
    id: "p03",
    name: "Nike Air Max 270",
    cat: "fashion",
    price: 8499,
    oldPrice: 11000,
    badge: "Sale",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    desc: "Iconic Air Max cushioning with a modern upper design.",
  },
  {
    id: "p04",
    name: "Leather Crossbody Bag",
    cat: "fashion",
    price: 3299,
    oldPrice: 4500,
    badge: null,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
    desc: "Genuine leather with adjustable strap and gold hardware.",
  },
  {
    id: "p05",
    name: "Bosch Coffee Maker",
    cat: "home",
    price: 6499,
    oldPrice: 8000,
    badge: null,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
    desc: "Brew the perfect cup with programmable timer and keep-warm.",
  },
  {
    id: "p06",
    name: "IKEA Fönster Table Lamp",
    cat: "home",
    price: 1899,
    oldPrice: 2400,
    badge: null,
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
    desc: "Minimalist design. Soft warm light ideal for reading nooks.",
  },
  {
    id: "p07",
    name: "Samsung Galaxy Tab S9",
    cat: "electronics",
    price: 54999,
    oldPrice: 65000,
    badge: "Hot",
    img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80",
    desc: "Vivid AMOLED display with S-Pen included for creativity.",
  },
  {
    id: "p08",
    name: "Levi's 512 Slim Jeans",
    cat: "fashion",
    price: 3799,
    oldPrice: 4999,
    badge: "Sale",
    img: "https://images.unsplash.com/photo-1542060748-10c28b62716f?w=400&q=80",
    desc: "Slim-tapered fit in authentic stretch denim for all-day comfort.",
  },
  {
    id: "p09",
    name: "Ceramic Planter Set",
    cat: "home",
    price: 1299,
    oldPrice: 1800,
    badge: null,
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80",
    desc: "Set of 3 hand-painted ceramic pots with drainage holes.",
  },
  {
    id: "p10",
    name: "Fitbit Charge 6",
    cat: "electronics",
    price: 16999,
    oldPrice: 20000,
    badge: null,
    img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80",
    desc: "GPS, heart rate & SpO2 monitoring. 7-day battery life.",
  },
  {
    id: "p11",
    name: "Woodland Trek Shoes",
    cat: "fashion",
    price: 4599,
    oldPrice: 5800,
    badge: "New",
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
    desc: "Waterproof leather upper with slip-resistant rubber sole.",
  },
  {
    id: "p12",
    name: "Bamboo Cutting Board",
    cat: "home",
    price: 899,
    oldPrice: 1200,
    badge: null,
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    desc: "Eco-friendly bamboo, self-healing surface, juice groove.",
  },
  {
    id: "p13",
    name: "Noise ColorFit Pro 4",
    cat: "electronics",
    price: 4999,
    oldPrice: 6500,
    badge: "Sale",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    desc: '1.85" display, SpO2, stress monitor & 100+ sports modes.',
  },
  {
    id: "p14",
    name: "Cotton Linen Kurta",
    cat: "fashion",
    price: 1499,
    oldPrice: 2000,
    badge: null,
    img: "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=400&q=80",
    desc: "Breathable summer kurta in hand-block printed fabric.",
  },
  {
    id: "p15",
    name: "Aeropress Coffee",
    cat: "home",
    price: 3499,
    oldPrice: 4200,
    badge: null,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
    desc: "Rich espresso-style coffee in under 60 seconds.",
  },
  {
    id: "p16",
    name: "JBL Flip 6 Speaker",
    cat: "electronics",
    price: 10999,
    oldPrice: 14000,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    desc: "IP67 waterproof, 12-hour playtime, powerful bass.",
  },
  {
    id: "p17",
    name: "JBL Flip 6 Speaker",
    cat: "electronics",
    price: 10999,
    oldPrice: 14000,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    desc: "IP67 waterproof, 12-hour playtime, powerful bass.",
  },
  {
    id: "p18",
    name: "iPhone 15 Pro",
    cat: "electronics",
    price: 89999,
    oldPrice: 99999,
    badge: "New",
    img: "https://images.unsplash.com/photo-1695906326196-7eb1d41db6ca?w=400&q=80",
    desc: "A17 Pro chip, 48MP camera, titanium design.",
  },
  {
    id: "p19",
    name: "Samsung Watch 7",
    cat: "wearables",
    price: 29999,
    oldPrice: 35999,
    badge: "Sale",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
    desc: "Health tracking, 40hr battery, AMOLED display.",
  },
  {
    id: "p20",
    name: "Sony WH-1000XM5",
    cat: "electronics",
    price: 24999,
    oldPrice: 29999,
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    desc: "ANC headphones, 30hr battery, premium sound.",
  },
  {
    id: "p21",
    name: "MacBook Air M3",
    cat: "laptops",
    price: 114999,
    oldPrice: 129999,
    badge: "Hot",
    img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80",
    desc: "M3 chip, 18hr battery, lightweight design.",
  },
  {
    id: "p22",
    name: "Nike Air Max 90",
    cat: "footwear",
    price: 8999,
    oldPrice: 11999,
    badge: "Limited",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    desc: "Classic design, premium cushioning, breathable.",
  },
  {
    id: "p23",
    name: "Adidas Ultraboost",
    cat: "footwear",
    price: 12999,
    oldPrice: 15999,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80",
    desc: "Boost technology, energy return, lightweight.",
  },
  {
    id: "p24",
    name: "Levi's 501 Jeans",
    cat: "clothing",
    price: 3999,
    oldPrice: 4999,
    badge: "Classic",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
    desc: "Original fit, premium denim, timeless style.",
  },
  {
    id: "p25",
    name: "Apple Watch Ultra",
    cat: "wearables",
    price: 79999,
    oldPrice: 89999,
    badge: "Premium",
    img: "https://images.unsplash.com/photo-1664879235595-79a6e6b2a3da?w=400&q=80",
    desc: "Dive ready, 36hr battery, rugged titanium.",
  },
  {
    id: "p26",
    name: "DJI Mini 4 Pro",
    cat: "electronics",
    price: 74999,
    oldPrice: 84999,
    badge: "New Arrival",
    img: "https://images.unsplash.com/photo-1579724553774-acd66e918ee7?w=400&q=80",
    desc: "4K video, 34min flight, obstacle sensing.",
  },
  {
    id: "p27",
    name: "Samsung Galaxy S25",
    cat: "electronics",
    price: 69999,
    oldPrice: 79999,
    badge: "Latest",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    desc: "S25 chip, 200MP camera, AI features.",
  },
  {
    id: "p28",
    name: "Ray-Ban Wayfarer",
    cat: "accessories",
    price: 8999,
    oldPrice: 10999,
    badge: "Iconic",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
    desc: "Classic style, UV protection, premium lenses.",
  },
  {
    id: "p29",
    name: "Dyson V15 Detect",
    cat: "home",
    price: 54999,
    oldPrice: 64999,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    desc: "Laser dust detection, powerful suction, HEPA filter.",
  },
  {
    id: "p30",
    name: "GoPro HERO12",
    cat: "electronics",
    price: 34999,
    oldPrice: 39999,
    badge: "Popular",
    img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&q=80",
    desc: "5.3K video, waterproof, image stabilization.",
  },
  {
    id: "p31",
    name: "Patagonia Jacket",
    cat: "clothing",
    price: 15999,
    oldPrice: 18999,
    badge: "Sustainable",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80",
    desc: "Recycled polyester, waterproof, ethical production.",
  },
  {
    id: "p32",
    name: "Bose QuietComfort",
    cat: "electronics",
    price: 29999,
    oldPrice: 34999,
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    desc: "World-class noise cancellation, premium comfort.",
  },
  {
    id: "p33",
    name: "Yeti Cooler 45qt",
    cat: "outdoor",
    price: 24999,
    oldPrice: 29999,
    badge: "Hot",
    img: "https://images.unsplash.com/photo-1622260613188-1d9e59e1e4a4?w=400&q=80",
    desc: "Extreme insulation, bear-proof, roto-molded.",
  },
  {
    id: "p34",
    name: "Peloton Bike+",
    cat: "fitness",
    price: 249999,
    oldPrice: 279999,
    badge: "Premium",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    desc: "Interactive fitness, live classes, HD touchscreen.",
  },
  {
    id: "p35",
    name: "Instant Pot Duo",
    cat: "kitchen",
    price: 7999,
    oldPrice: 9999,
    badge: "Essential",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    desc: "7-in-1 cooker, pressure cooker, slow cooker, rice cooker.",
  },
];

const flashProducts = [
  {
    id: 1,
    name: "AirPods Pro",
    brand: "Apple",
    price: 18999,
    was: 24999,
    emoji: "🎧",
    rating: 4.8,
    reviews: 2341,
    stock: 23,
  },
  {
    id: 2,
    name: "Smart Watch X2",
    brand: "Samsung",
    price: 8499,
    was: 12999,
    emoji: "⌚",
    rating: 4.5,
    reviews: 876,
    stock: 41,
  },
  {
    id: 3,
    name: "USB-C Hub 7-in-1",
    brand: "Anker",
    price: 2199,
    was: 3499,
    emoji: "🔌",
    rating: 4.7,
    reviews: 1203,
    stock: 68,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    brand: "Logitech",
    price: 6299,
    was: 8999,
    emoji: "⌨️",
    rating: 4.6,
    reviews: 543,
    stock: 15,
  },
  {
    id: 5,
    name: "Portable SSD 1TB",
    brand: "WD",
    price: 7999,
    was: 11999,
    emoji: "💾",
    rating: 4.9,
    reviews: 3120,
    stock: 34,
  },
  {
    id: 6,
    name: 'Ring Light 10"',
    brand: "Neewer",
    price: 1599,
    was: 2499,
    emoji: "💡",
    rating: 4.4,
    reviews: 987,
    stock: 55,
  },
];

const CATEGORIES = ["all", "electronics", "fashion", "home"];

const appState = {
  priceMax: 120000,
  rating: 0,
  stock: "all",
  brand: "all",
  sort: "default",
  searchTerm: "",
  notifications: [],
  currentModalProduct: null,
};

[...PRODUCTS].forEach((p, index) => {
  p.brand = p.brand || p.name.split(" ")[0] || "ShopFast";
  p.rating =
    p.rating ||
    [
      4.8, 4.5, 4.3, 4.6, 4.2, 4.1, 4.7, 4.4, 4.0, 4.6, 4.5, 4.3, 4.2, 4.4, 4.1,
      4.8, 4.8, 4.9, 4.5, 4.7, 4.9, 4.4, 4.3, 4.1, 4.8, 4.7, 4.9, 4.5,
    ][index] ||
    4.2;
  p.stock =
    p.stock || (p.cat === "electronics" ? 12 : p.cat === "fashion" ? 15 : 18);
  p.available = p.stock > 0;
  p.images = p.images || [
    p.img,
    p.img.includes("w=400") ? p.img.replace(/w=400/, "w=600") : p.img,
    p.img.includes("w=400") ? p.img.replace(/w=400/, "w=800") : p.img,
  ];
});

// In-memory store (replaces backend)
const store = {
  users: JSON.parse(localStorage.getItem("sf_users") || "[]"),
  currentUser: JSON.parse(localStorage.getItem("sf_user") || "null"),
  cart: JSON.parse(localStorage.getItem("sf_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("sf_wishlist") || "[]"),
  orders: JSON.parse(localStorage.getItem("sf_orders") || "[]"),

  save() {
    localStorage.setItem("sf_users", JSON.stringify(this.users));
    localStorage.setItem("sf_user", JSON.stringify(this.currentUser));
    localStorage.setItem("sf_cart", JSON.stringify(this.cart));
    localStorage.setItem("sf_wishlist", JSON.stringify(this.wishlist));
    localStorage.setItem("sf_orders", JSON.stringify(this.orders));
  },

  isLoggedIn() {
    return !!this.currentUser;
  },

  register(name, email, pwd, phone) {
    if (this.users.find((u) => u.email === email))
      throw new Error("Email already registered.");
    if (pwd.length < 8)
      throw new Error("Password must be at least 8 characters.");
    const user = {
      id: "u" + Date.now(),
      name,
      email,
      pwd,
      phone,
      address: "42, Anna Salai, T. Nagar",
      city: "Chennai, Tamil Nadu",
      pincode: "600017",
      since: new Date().toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      }),
    };
    this.users.push(user);
    this.save();
    return user;
  },

  login(email, pwd) {
    const user = this.users.find((u) => u.email === email && u.pwd === pwd);
    if (!user) throw new Error("Invalid email or password.");
    this.currentUser = user;
    this.save();
    return user;
  },

  logout() {
    this.currentUser = null;
    this.save();
  },

  addToCart(productId, qty = 1) {
    const normalizedId = String(productId);
    const p = findProductById(normalizedId);
    if (!p) throw new Error("Product not found");
    const existing = this.cart.find((c) => String(c.id) === normalizedId);
    if (existing) {
      existing.qty = Math.min(existing.qty + qty, 99);
    } else {
      this.cart.push({ id: normalizedId, qty });
    }
    this.save();
  },

  removeFromCart(productId) {
    const normalizedId = String(productId);
    this.cart = this.cart.filter((c) => String(c.id) !== normalizedId);
    this.save();
  },

  updateQty(productId, qty) {
    const normalizedId = String(productId);
    const item = this.cart.find((c) => String(c.id) === normalizedId);
    if (item) {
      item.qty = Math.max(1, Math.min(99, qty));
      this.save();
    }
  },

  cartTotal() {
    return this.cart.reduce((s, c) => {
      const p = findProductById(c.id);
      return s + (p ? p.price * c.qty : 0);
    }, 0);
  },

  cartCount() {
    return this.cart.reduce((s, c) => s + c.qty, 0);
  },

  addToWishlist(productId) {
    const normalizedId = String(productId);
    if (!this.wishlist.includes(normalizedId)) {
      this.wishlist.push(normalizedId);
      this.save();
    }
  },

  removeFromWishlist(productId) {
    const normalizedId = String(productId);
    this.wishlist = this.wishlist.filter((id) => String(id) !== normalizedId);
    this.save();
  },

  inWishlist(productId) {
    const normalizedId = String(productId);
    return this.wishlist.some((id) => String(id) === normalizedId);
  },
  inCart(productId) {
    const normalizedId = String(productId);
    return this.cart.some((c) => String(c.id) === normalizedId);
  },

  placeOrder() {
    if (!this.currentUser) throw new Error("Not logged in");
    if (this.cart.length === 0) throw new Error("Cart is empty");

    const orderItems = this.cart
      .map((item) => {
        const p = findProductById(item.id);
        return p
          ? {
              id: p.id,
              name: p.name,
              price: p.price,
              qty: item.qty,
              total: p.price * item.qty,
            }
          : null;
      })
      .filter(Boolean);

    const subtotal = orderItems.reduce((s, i) => s + i.total, 0);
    const shipping = subtotal > 999 ? 0 : 99;
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + shipping + tax;

    const deliveryDays = 3 + Math.floor(Math.random() * 3);
    const deliveryDate = new Date(
      Date.now() + deliveryDays * 24 * 60 * 60 * 1000,
    );
    const order = {
      id: "ord" + Date.now(),
      userId: this.currentUser.id,
      items: orderItems,
      subtotal,
      shipping,
      tax,
      total,
      status: "Confirmed",
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN"),
      deliveryDate: deliveryDate.toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
      }),
      timestamp: Date.now(),
    };

    this.orders.push(order);
    this.cart = [];
    this.save();
    return order;
  },

  getUserOrders() {
    if (!this.currentUser) return [];
    return this.orders
      .filter((o) => o.userId === this.currentUser.id)
      .sort((a, b) => b.timestamp - a.timestamp);
  },
};

// ============================================================
//  TOAST
// ============================================================
function showToast(msg, type = "info") {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = String(msg || "");
  t.className = `toast toast--${type} show`;
  clearTimeout(showToast._tid);
  showToast._tid = setTimeout(() => t.classList.remove("show"), 3200);
}

// ============================================================
//  NAVIGATION
// ============================================================
function switchTab(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav__tab")
    .forEach((b) => b.classList.remove("active"));
  const page = document.getElementById("page-" + id);
  if (page) page.classList.add("active");
  document
    .querySelectorAll('[data-tab="' + id + '"]')
    .forEach((b) => b.classList.add("active"));
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Close mobile menu if open
  const mobileMenu = document.getElementById("mobile-menu-toggle");
  if (mobileMenu && mobileMenu.checked) {
    mobileMenu.checked = false;
    document.body.classList.remove("menu-open");
  }

  if (id === "cart") renderCart();
  if (id === "wishlist") renderWishlist();
  if (id === "account") renderAccount();
  if (id === "orders") renderOrderHistory();
}

document.querySelectorAll("[data-tab]").forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  }
});

const mobileMenuCheckbox = document.getElementById("mobile-menu-toggle");
if (mobileMenuCheckbox) {
  mobileMenuCheckbox.addEventListener("change", () => {
    document.body.classList.toggle("menu-open", mobileMenuCheckbox.checked);
  });
}

// ============================================================
//  THEME TOGGLE
// ============================================================
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  const root = document.documentElement;
  const saved = localStorage.getItem("sf_theme") || "light";
  root.dataset.theme = saved;
  themeBtn.textContent = saved === "dark" ? "☀️ Light" : "🌙 Dark";

  themeBtn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("sf_theme", next);
    themeBtn.textContent = next === "dark" ? "☀️ Light" : "🌙 Dark";
  });
}

// ============================================================
//  BADGE UPDATE
// ============================================================
function updateBadges() {
  const cc = store.cartCount();
  const wc = store.wishlist.length;
  const cb = document.getElementById("cart-badge");
  const wb = document.getElementById("wishlist-badge");
  cb.textContent = cc;
  cb.style.display = cc > 0 ? "flex" : "none";
  wb.textContent = wc;
  wb.style.display = wc > 0 ? "flex" : "none";
}
/* ============================================
     COUNTDOWN TIMER
     — sets a target 6 hours from page load
  ============================================= */
const endTime = Date.now() + 6 * 60 * 60 * 1000; // 6 hours ahead

function updateTimer() {
  const diff = endTime - Date.now();
  if (diff <= 0) {
    document.getElementById("hours").innerHTML = "00<small>HRS</small>";
    document.getElementById("minutes").innerHTML = "00<small>MIN</small>";
    document.getElementById("seconds").innerHTML = "00<small>SEC</small>";
    return;
  }
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const pad = (n) => String(n).padStart(2, "0");
  document.getElementById("hours").innerHTML = `${pad(h)}<small>HRS</small>`;
  document.getElementById("minutes").innerHTML = `${pad(m)}<small>MIN</small>`;
  document.getElementById("seconds").innerHTML = `${pad(s)}<small>SEC</small>`;
}

setInterval(updateTimer, 1000);
updateTimer();

/* ============================================
     RENDER FLASH PRODUCTS
  ============================================= */
function discount(was, now) {
  return Math.round((1 - now / was) * 100);
}

function renderFlashProducts() {
  const grid = document.getElementById("flashProducts");
  grid.innerHTML = flashProducts
    .map(
      (p) => `
      <div class="flashproduct-card" onclick="openProductModal('${p.id}')">
        <div class="badge">-${discount(p.was, p.price)}%</div>
        <button class="wishlist-btn" onclick="event.stopPropagation(); handleWishlist('${p.id}', this)">${store.inWishlist(p.id) ? "♥" : "♡"}</button>
        <div class="product-img">${p.emoji}</div>
        <div class="product-info">
          <div class="product-name">${p.name}</div>
          <div class="product-brand">${p.brand}</div>
          <div class="price-row">
            <span class="price-now">₹${p.price.toLocaleString()}</span>
            <span class="price-was">₹${p.was.toLocaleString()}</span>
          </div>
          <div class="rating"><span>★</span> ${p.rating} (${p.reviews.toLocaleString()})</div>
          <div class="stock-bar">
            <div class="stock-text">Only ${p.stock} left!</div>
            <div class="stock-track">
              <div class="stock-fill" style="width:${100 - p.stock}%"></div>
            </div>
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); handleAddToCart('${p.id}')">ADD TO CART</button>
        </div>
      </div>
    `,
    )
    .join("");
}

function renderTrendingProducts() {
  const trendingGrid = document.getElementById("trending-grid");
  if (!trendingGrid) return;
  const trending = PRODUCTS.filter((p) =>
    [
      "Hot",
      "Popular",
      "Best Seller",
      "New",
      "Sale",
      "Latest",
      "Trending",
      "Sustainable",
      "Limited",
      "Premium",
      "Essential",
      "New Arrival",
      "Iconic",
      "Classic",
    ].includes(p.badge),
  ).slice(0, 12);
  trendingGrid.innerHTML = trending
    .map(
      (p) => `
      <div class="trending-card" onclick="openProductModal('${p.id}')">
        <div class="trending-thumb" style="background-image:url('${p.img}')"></div>
        <div class="trending-info">
          <div class="trending-name">${p.name}</div>
          <div class="trending-tag">${p.brand} · ₹${p.price.toLocaleString()}</div>
        </div>
      </div>
    `,
    )
    .join("");
}

function renderProductSlider() {
  const slider = document.getElementById("product-slider");
  if (!slider) return;
  const featured = PRODUCTS.slice(0, 12);
  slider.innerHTML = featured
    .map(
      (p) => `
      <div class="product-slider-card" onclick="openProductModal('${p.id}')">
        <div class="thumb" style="background-image:url('${p.img}')"></div>
        <div class="info">
          <h4>${p.name}</h4>
          <p>${p.brand}</p>
          <div class="price-row">
            <span>₹${p.price.toLocaleString()}</span>
            <span class="delivery">Est. 3-5 days</span>
          </div>
        </div>
      </div>
    `,
    )
    .join("");
}

function openProductModal(productId) {
  const product = findProductById(productId);
  if (!product) return;

  // Ensure lightweight products have modal-friendly fallback values
  product.available = product.available ?? product.stock > 0;
  product.images = product.images || [
    product.img ||
      `https://via.placeholder.com/600x420?text=${encodeURIComponent(product.name)}`,
  ];
  product.oldPrice = product.oldPrice || null;

  // Add to recently viewed
  addToRecentlyViewed(product.id);

  const overlay = document.getElementById("product-modal-overlay");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-description");
  const price = document.getElementById("modal-price");
  const oldPrice = document.getElementById("modal-old-price");
  const brand = document.getElementById("modal-brand");
  const rating = document.getElementById("modal-rating");
  const stock = document.getElementById("modal-stock");
  const badge = document.getElementById("modal-badge");
  const mainImage = document.getElementById("modal-main-image");
  const thumbList = document.getElementById("modal-thumb-list");
  const returns = document.getElementById("modal-returns");
  if (!overlay || !title) return;

  appState.currentModalProduct = product;
  title.textContent = product.name;
  desc.textContent =
    product.desc || "Discover more details about this product.";
  price.textContent = `₹${product.price.toLocaleString("en-IN")}`;
  oldPrice.textContent = product.oldPrice
    ? `₹${product.oldPrice.toLocaleString("en-IN")}`
    : "";
  brand.textContent = `Brand: ${product.brand}`;
  rating.textContent = `Rating: ${product.rating} ★`;
  stock.textContent = product.available
    ? `${product.stock} left in stock`
    : "Out of stock";
  const delivery = document.getElementById("modal-delivery");
  if (delivery) {
    const days = 3 + Math.floor(Math.random() * 3);
    delivery.textContent = `Delivers in ${days} days`;
  }
  if (returns) {
    returns.innerHTML = `
      <strong>Returns & Exchanges</strong>
      <p>30-day easy returns. Free exchanges within 7 days on eligible orders.</p>
      <p class="mini-note">No questions asked on damaged or wrong items.</p>
    `;
  }
  badge.textContent = product.badge || "";
  badge.style.display = product.badge ? "inline-block" : "none";

  const mainImgSrc = product.images[0] || product.img;
  mainImage.innerHTML = `<img src="${mainImgSrc}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/600x420/e8e4de/888?text=Product'" />`;
  thumbList.innerHTML = product.images
    .map(
      (img, index) => `
      <button class="${index === 0 ? "active" : ""}" style="background-image:url('${img}')" onclick="event.stopPropagation(); selectModalImage('${img}', this);"></button>
    `,
    )
    .join("");

  const modalAddCartBtn = document.getElementById("modal-add-cart");
  const modalWishlistBtn = document.getElementById("modal-wishlist");

  if (modalAddCartBtn) {
    modalAddCartBtn.onclick = () => {
      handleAddToCart(product.id);
      overlay.classList.remove("open");
    };
  }
  if (modalWishlistBtn) {
    modalWishlistBtn.onclick = () => {
      handleWishlist(product.id);
      overlay.classList.remove("open");
    };
  }
  overlay.classList.add("open");
}

function closeProductModal() {
  const overlay = document.getElementById("product-modal-overlay");
  if (overlay) overlay.classList.remove("open");
}

const modalOverlay = document.getElementById("product-modal-overlay");
if (modalOverlay) {
  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) closeProductModal();
  });
}
const modalCloseBtn = document.getElementById("product-modal-close");
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProductModal);

function selectModalImage(imgSrc, btn) {
  const mainImage = document.getElementById("modal-main-image");
  if (!mainImage) return;
  mainImage.innerHTML = `<img src="${imgSrc}" alt="Product image" onerror="this.src='https://via.placeholder.com/600x420/e8e4de/888?text=Product'" />`;
  document
    .querySelectorAll("#modal-thumb-list button")
    .forEach((button) => button.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

function addNotification(message) {
  const time = new Date().toLocaleTimeString("en-IN", { hour12: false });
  appState.notifications.unshift({ id: Date.now(), text: message, time });
  if (appState.notifications.length > 10) appState.notifications.pop();
  renderNotifications();
}

function removeNotification(id) {
  appState.notifications = appState.notifications.filter(
    (note) => note.id !== id,
  );
  renderNotifications();
}

function renderNotifications() {
  const list = document.getElementById("notification-list");
  const badge = document.getElementById("notify-badge");
  if (!list || !badge) return;
  list.innerHTML = appState.notifications
    .map(
      (note) => `
      <div class="notification-item">
        <div>
          <strong>${note.text}</strong>
          <small>${note.time}</small>
        </div>
        <button onclick="event.stopPropagation(); removeNotification(${note.id});">Done</button>
      </div>
    `,
    )
    .join("");
  badge.textContent = appState.notifications.length;
  badge.style.display = appState.notifications.length > 0 ? "flex" : "none";
}

function toggleNotificationPanel() {
  const panel = document.getElementById("notification-panel");
  if (!panel) return;
  panel.classList.toggle("open");
}

function cancelOrder(orderId) {
  const order = store.orders.find((o) => o.id === orderId);
  if (!order) return;
  if (order.status === "Cancelled") {
    showToast("This order is already cancelled.", "info");
    return;
  }
  const reason = prompt(
    "Why are you cancelling this order? (Delivery delay / Wrong item / Changed mind / Other)",
  );
  if (!reason) return;
  const note = prompt("Add a short message for us to improve service:");
  order.status = "Cancelled";
  order.cancelReason = `${reason}${note ? ` — ${note}` : ""}`;
  order.updatedAt = Date.now();
  store.save();
  renderOrderHistory();
  addNotification(`Order #${order.id.slice(3)} cancelled.`);
  showToast("Your cancellation is complete.", "success");
}

function deleteOrder(orderId) {
  if (!confirm("Remove this order record permanently?")) return;
  store.orders = store.orders.filter((o) => o.id !== orderId);
  store.save();
  renderOrderHistory();
  addNotification(`Order #${orderId.slice(3)} deleted.`);
}

function formatDeliveryDate(ts) {
  const date = new Date(ts);
  return date.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
}

function getDeliveryEstimate() {
  const days = 3 + Math.floor(Math.random() * 3);
  return formatDeliveryDate(Date.now() + days * 24 * 60 * 60 * 1000);
}

// ============================================================
//  PRODUCTS
// ============================================================
let activeFilter = "all";

function getUniqueBrands() {
  return [...new Set(PRODUCTS.map((p) => p.brand).filter(Boolean))].sort();
}

function updateFilterOptions() {
  const brandSelect = document.getElementById("brand-filter");
  if (!brandSelect) return;
  const brands = getUniqueBrands();
  brandSelect.innerHTML = `
    <option value="all">All brands</option>
    ${brands.map((brand) => `<option value="${brand}">${brand}</option>`).join("")}
  `;
}

function renderFilters() {
  const el = document.getElementById("filter-chips");
  el.innerHTML = CATEGORIES.map(
    (c) =>
      `<button class="chip ${c === activeFilter ? "active" : ""}" data-cat="${c}">${c === "all" ? "All Products" : c.charAt(0).toUpperCase() + c.slice(1)}</button>`,
  ).join("");
  el.querySelectorAll(".chip").forEach((b) => {
    b.addEventListener("click", () => {
      activeFilter = b.dataset.cat;
      renderFilters();
      renderProducts(appState.searchTerm);
    });
  });
}

function renderProductSkeletons() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = Array.from({ length: 8 })
    .map(
      () => `
      <div class="skeleton-card">
        <div class="skeleton-block image"></div>
        <div class="skeleton-block text"></div>
        <div class="skeleton-block text small"></div>
        <div class="skeleton-block button"></div>
      </div>
    `,
    )
    .join("");
}

function applyProductFilters(list, searchTerm = "") {
  return list
    .filter((p) => (activeFilter === "all" ? true : p.cat === activeFilter))
    .filter((p) =>
      searchTerm
        ? p.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true,
    )
    .filter((p) => p.price <= appState.priceMax)
    .filter((p) =>
      appState.brand === "all" ? true : p.brand === appState.brand,
    )
    .filter((p) => (appState.rating > 0 ? p.rating >= appState.rating : true))
    .filter((p) => (appState.stock === "in-stock" ? p.available : true));
}

function sortProductList(list) {
  return [...list].sort((a, b) => {
    if (appState.sort === "price-asc") return a.price - b.price;
    if (appState.sort === "price-desc") return b.price - a.price;
    if (appState.sort === "rating-desc") return b.rating - a.rating;
    return 0;
  });
}

function renderProducts(searchTerm = "") {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  appState.searchTerm = searchTerm;
  renderProductSkeletons();
  clearTimeout(renderProducts._timeout);
  renderProducts._timeout = setTimeout(() => {
    let list = applyProductFilters(PRODUCTS, searchTerm);
    list = sortProductList(list);

    if (list.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="icon">🔍</div><p>No products found.</p></div>`;
      return;
    }

    grid.innerHTML = list
      .map(
        (p) => `
      <div class="product-card" data-pid="${p.id}" onclick="openProductModal('${p.id}')">
        <div class="product-card__img">
          ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ""}
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x280/e8e4de/888?text=Product'"/>
        </div>
        <div class="product-card__body">
          <div class="product-card__cat">${p.cat}</div>
          <div class="product-card__name">${p.name}</div>
          <div class="product-card__price">
            <span class="now">₹${p.price.toLocaleString("en-IN")}</span>
            ${p.oldPrice ? `<span class="old">₹${p.oldPrice.toLocaleString("en-IN")}</span>` : ""}
          </div>
          <div class="product-card__meta">${p.brand} · ${p.rating} ★ · ${p.stock} left</div>
        </div>
        <div class="product-card__actions">
          <button class="btn btn--primary" onclick="event.stopPropagation(); handleAddToCart('${p.id}')">Add to Cart</button>
          <button class="btn btn--icon" title="${store.inWishlist(p.id) ? "Remove from wishlist" : "Add to wishlist"}"
            onclick="event.stopPropagation(); handleWishlist('${p.id}', this)">${store.inWishlist(p.id) ? "♥" : "♡"}</button>
        </div>
      </div>
    `,
      )
      .join("");
  }, 120);
}

function findProductById(productId) {
  const normalizedId = String(productId);
  return (
    PRODUCTS.find((p) => String(p.id) === normalizedId) ||
    flashProducts.find((p) => String(p.id) === normalizedId)
  );
}

// ============================================================
//  CART HANDLERS
// ============================================================
function handleAddToCart(productId) {
  if (!store.isLoggedIn()) {
    showToast("Please login to add items to cart", "warning");
    switchTab("account");
    return;
  }
  const p = findProductById(productId);
  if (!p) {
    showToast("Product not found", "error");
    return;
  }
  store.addToCart(productId);
  updateBadges();
  showToast(`"${p.name}" added to cart! 🛒`, "success");
  addNotification(`Added ${p.name} to cart.`);
}

// ============================================================
//  WISHLIST HANDLERS
// ============================================================
function handleWishlist(productId, btn) {
  if (!store.isLoggedIn()) {
    showToast("Please login to save items", "warning");
    switchTab("account");
    return;
  }
  if (store.inWishlist(productId)) {
    store.removeFromWishlist(productId);
    if (btn) btn.textContent = "♡";
    showToast("Removed from wishlist", "info");
    addNotification(
      `Removed ${findProductById(productId)?.name || "item"} from wishlist.`,
    );
  } else {
    store.addToWishlist(productId);
    if (btn) btn.textContent = "♥";
    showToast("Saved to wishlist! ♥", "success");
    addNotification(
      `Saved ${findProductById(productId)?.name || "item"} to wishlist.`,
    );
  }
  updateBadges();
}

// ============================================================
//  RENDER CART
// ============================================================
function renderCart() {
  const container = document.getElementById("cart-items");
  if (store.cart.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="icon">🛒</div><p>Your cart is empty.</p><button class="btn btn--primary" onclick="switchTab('shop')">Continue Shopping</button></div>`;
    updateSummary(0);
    return;
  }
  container.innerHTML = store.cart
    .map((item) => {
      const p = findProductById(item.id);
      if (!p) return "";
      const total = p.price * item.qty;
      return `
      <div class="cart-item" data-pid="${p.id}">
        <div class="cart-item__img"><img src="${p.img || "https://via.placeholder.com/80x80/e8e4de/888?text=P"}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/80x80/e8e4de/888?text=P'"/></div>
        <div>
          <div class="cart-item__name">${p.name}</div>
          <div class="cart-item__price">₹${p.price.toLocaleString("en-IN")} each</div>
          <div class="qty">
            <button class="qty__btn" onclick="changeQty('${p.id}',-1)">−</button>
            <input type="number" class="qty__input" min="1" max="99" value="${item.qty}" onchange="setQty('${p.id}',this.value)"/>
            <button class="qty__btn" onclick="changeQty('${p.id}',1)">+</button>
          </div>
        </div>
        <div style="text-align:right">
          <div class="cart-item__total">₹${total.toLocaleString("en-IN")}</div>
          <button class="btn btn--danger" style="margin-top:8px;font-size:.8rem;padding:6px 10px" onclick="removeFromCart('${p.id}')">Remove</button>
        </div>
      </div>`;
    })
    .join("");
  updateSummary(store.cartTotal());
}

function changeQty(productId, delta) {
  const item = store.cart.find((c) => c.id === productId);
  if (!item) return;
  store.updateQty(productId, item.qty + delta);
  renderCart();
  updateBadges();
}

function setQty(productId, val) {
  store.updateQty(productId, parseInt(val) || 1);
  renderCart();
  updateBadges();
}

function removeFromCart(productId) {
  const removedName = findProductById(productId)?.name || "Item";
  store.removeFromCart(productId);
  renderCart();
  updateBadges();
  showToast("Item removed from cart", "info");
  addNotification(`${removedName} removed from cart.`);
}

function updateSummary(subtotal) {
  const shipping = subtotal > 999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;
  const fmt = (n) => "₹" + n.toLocaleString("en-IN");
  document.getElementById("summary-sub").textContent = fmt(subtotal);
  document.getElementById("summary-ship").textContent =
    subtotal > 0 && shipping === 0 ? "FREE" : fmt(shipping);
  document.getElementById("summary-tax").textContent = fmt(tax);
  document.getElementById("summary-total").textContent = fmt(total);
}

document.getElementById("checkout-btn")?.addEventListener("click", () => {
  if (!store.isLoggedIn()) {
    showToast("Please login to checkout", "warning");
    switchTab("account");
    return;
  }
  if (store.cart.length === 0) {
    showToast("Your cart is empty", "warning");
    return;
  }
  try {
    const order = store.placeOrder();
    showToast(`Order #${order.id.slice(3)} placed successfully! 🎉`, "success");
    addNotification(`Order #${order.id.slice(3)} placed successfully.`);
    renderCart();
    updateBadges();
    renderAccount();
  } catch (e) {
    showToast(e.message, "error");
  }
});

// ============================================================
//  RENDER WISHLIST
// ============================================================
function renderWishlist() {
  const grid = document.getElementById("wishlist-grid");
  if (store.wishlist.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="icon">♡</div><p>No saved items yet.</p><button class="btn btn--primary" onclick="switchTab('shop')">Browse Products</button></div>`;
    return;
  }
  const items = store.wishlist.map((id) => findProductById(id)).filter(Boolean);
  grid.innerHTML = items
    .map(
      (p) => `
    <div class="product-card" data-pid="${p.id}">
      <div class="product-card__img">
        <img src="${p.img || "https://via.placeholder.com/400x280/e8e4de/888?text=Product"}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x280/e8e4de/888?text=Product'"/>
      </div>
      <div class="product-card__body">
        <div class="product-card__cat">${p.cat || p.brand || "Featured"}</div>
        <div class="product-card__name">${p.name}</div>
        <div class="product-card__price">
          <span class="now">₹${p.price.toLocaleString("en-IN")}</span>
          ${p.oldPrice ? `<span class="old">₹${p.oldPrice.toLocaleString("en-IN")}</span>` : ""}
        </div>
      </div>
      <div class="product-card__actions">
        <button class="btn btn--primary" onclick="handleAddToCart('${p.id}');renderWishlist()">Add to Cart</button>
        <button class="btn btn--icon" title="Remove from wishlist" onclick="handleWishlist('${p.id}');renderWishlist()">♥</button>
      </div>
    </div>
  `,
    )
    .join("");
}

// ============================================================
//  AUTH
// ============================================================
function renderAccount() {
  if (store.isLoggedIn()) {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("user-section").style.display = "block";
    const u = store.currentUser;
    const avatar = document.getElementById("user-avatar");
    avatar.textContent = (u.name || "U")[0].toUpperCase();
    if (u.photoData) {
      avatar.style.backgroundImage = `url('${u.photoData}')`;
      avatar.style.backgroundSize = "cover";
      avatar.style.backgroundPosition = "center";
      avatar.textContent = "";
    }
    document.getElementById("user-name").textContent = u.name || "";
    document.getElementById("user-email").textContent = u.email || "";
    document.getElementById("user-phone").textContent = u.phone || "—";
    document.getElementById("user-address").textContent = u.address || "—";
    document.getElementById("user-city").textContent = u.city || "—";
    document.getElementById("user-since").textContent = u.since || "—";
  } else {
    document.getElementById("auth-section").style.display = "block";
    document.getElementById("user-section").style.display = "none";
  }
}

// Switch between login / register
document.getElementById("switch-to-register")?.addEventListener("click", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const authTitle = document.getElementById("auth-title");
  const authSub = document.getElementById("auth-sub");
  if (loginForm) loginForm.style.display = "none";
  if (registerForm) registerForm.style.display = "block";
  if (authTitle) authTitle.textContent = "Create Account";
  if (authSub) authSub.textContent = "Join ShopFast today!";
});
document.getElementById("switch-to-login")?.addEventListener("click", () => {
  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");
  const authTitle = document.getElementById("auth-title");
  const authSub = document.getElementById("auth-sub");
  if (registerForm) registerForm.style.display = "none";
  if (loginForm) loginForm.style.display = "block";
  if (authTitle) authTitle.textContent = "Welcome Back";
  if (authSub) authSub.textContent = "Sign in to access your cart & wishlist";
});

document.getElementById("login-btn")?.addEventListener("click", () => {
  const emailEl = document.getElementById("login-email");
  const pwdEl = document.getElementById("login-pwd");
  if (!emailEl || !pwdEl) {
    showToast("Login form elements missing", "error");
    return;
  }
  const email = emailEl.value.trim();
  const pwd = pwdEl.value;
  if (!email || !pwd) {
    showToast("Please fill all fields", "warning");
    return;
  }
  try {
    store.login(email, pwd);
    showToast("Welcome back! 👋", "success");
    renderAccount();
    updateBadges();
  } catch (e) {
    showToast(e.message, "error");
  }
});

document.getElementById("register-btn")?.addEventListener("click", () => {
  const nameEl = document.getElementById("reg-name");
  const emailEl = document.getElementById("reg-email");
  const pwdEl = document.getElementById("reg-pwd");
  const phoneEl = document.getElementById("reg-phone");
  if (!nameEl || !emailEl || !pwdEl || !phoneEl) {
    showToast("Register form elements missing", "error");
    return;
  }
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const pwd = pwdEl.value;
  const phone = phoneEl.value.trim();
  if (!name || !email || !pwd || !phone) {
    showToast("Please fill all required fields", "warning");
    return;
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    showToast("Enter a valid email address", "error");
    return;
  }
  try {
    store.register(name, email, pwd, phone);
    showToast("Account created! Please sign in.", "success");
    // auto-switch to login
    document.getElementById("switch-to-login")?.click();
    const loginEmail = document.getElementById("login-email");
    if (loginEmail) loginEmail.value = email;
  } catch (e) {
    showToast(e.message, "error");
  }
});

document.getElementById("logout-btn")?.addEventListener("click", () => {
  store.logout();
  showToast("Signed out. See you soon!", "info");
  renderAccount();
  updateBadges();
});

// ===== PROFILE EDITING =====
const editProfileBtn = document.getElementById("edit-profile-btn");
const profileEditor = document.getElementById("profile-editor");
const profilePhotoInput = document.getElementById("profile-photo-input");
const profileSaveBtn = document.getElementById("profile-save-btn");
const profileCancelBtn = document.getElementById("profile-cancel-btn");

if (editProfileBtn) {
  editProfileBtn.addEventListener("click", () => {
    const u = store.currentUser;
    if (!u) return;
    const profileName = document.getElementById("profile-name");
    const profileEmail = document.getElementById("profile-email");
    const profilePhone = document.getElementById("profile-phone");
    const profileAddress = document.getElementById("profile-address");
    const profileCity = document.getElementById("profile-city");
    if (profileName) profileName.value = u.name || "";
    if (profileEmail) profileEmail.value = u.email || "";
    if (profilePhone) profilePhone.value = u.phone || "";
    if (profileAddress) profileAddress.value = u.address || "";
    if (profileCity) profileCity.value = u.city || "";
    if (profileEditor) profileEditor.style.display = "block";
    if (editProfileBtn) editProfileBtn.style.display = "none";
  });
}

if (profileCancelBtn) {
  profileCancelBtn.addEventListener("click", () => {
    if (profileEditor) profileEditor.style.display = "none";
    if (editProfileBtn) editProfileBtn.style.display = "block";
  });
}

if (profilePhotoInput) {
  profilePhotoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const preview = document.getElementById("profile-photo-preview");
        if (preview) {
          preview.style.backgroundImage = `url('${evt.target.result}')`;
          preview.style.backgroundSize = "cover";
          preview.style.backgroundPosition = "center";
          preview.textContent = "";
        }
      };
      reader.readAsDataURL(file);
    }
  });
}

if (profileSaveBtn) {
  profileSaveBtn.addEventListener("click", () => {
    if (!store.currentUser) return;
    const profileName = document.getElementById("profile-name");
    const profilePhone = document.getElementById("profile-phone");
    const profileAddress = document.getElementById("profile-address");
    const profileCity = document.getElementById("profile-city");
    if (profileName) store.currentUser.name = profileName.value;
    if (profilePhone) store.currentUser.phone = profilePhone.value;
    if (profileAddress) store.currentUser.address = profileAddress.value;
    if (profileCity) store.currentUser.city = profileCity.value;
    const preview = document.getElementById("profile-photo-preview");
    if (preview && preview.style.backgroundImage) {
      const bgUrl = preview.style.backgroundImage.slice(5, -2);
      store.currentUser.photoData = bgUrl;
    }
    store.save();
    showToast("Profile updated successfully!", "success");
    renderAccount();
    if (profileEditor) profileEditor.style.display = "none";
    if (editProfileBtn) editProfileBtn.style.display = "block";
  });
}

document.getElementById("view-orders-btn")?.addEventListener("click", () => {
  renderOrderHistory();
  switchTab("orders");
});

// ============================================================
//  ORDER HISTORY
// ============================================================
function getOrderTracking(order) {
  const steps = [
    "Confirmed",
    "Packed",
    "Shipped",
    "Out for delivery",
    "Delivered",
  ];
  const age = Date.now() - order.timestamp;
  const hours = age / 3600000;
  let active = 0;
  if (hours >= 12) active = 4;
  else if (hours >= 8) active = 3;
  else if (hours >= 4) active = 2;
  else if (hours >= 1) active = 1;
  return { steps, active };
}

function renderTrackingSteps(order) {
  const { steps, active } = getOrderTracking(order);
  return `
    <div class="order-progress">
      ${steps
        .map(
          (step, index) => `
        <div class="track-step ${index <= active ? "active" : ""}">
          <span class="step-dot"></span>
          <span>${step}</span>
        </div>`,
        )
        .join("")}
    </div>`;
}

function renderOrderHistory() {
  const container = document.getElementById("orders-list");
  if (!container) return;

  const orders = store.getUserOrders();
  if (orders.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="icon">📦</div><p>No orders yet.</p><button class="btn btn--primary" onclick="switchTab('shop')">Start Shopping</button></div>`;
    return;
  }

  container.innerHTML = orders
    .map(
      (order) => `
    <div class="order-card">
      <div class="order-header">
        <div>
          <div class="order-id">Order #${order.id.slice(3)}</div>
          <div class="order-date">${order.date} at ${order.time}</div>
          <div class="order-date">Estimated delivery by ${order.deliveryDate || getDeliveryEstimate()}</div>
        </div>
        <div class="order-status ${order.status === "Cancelled" ? "cancelled" : ""}">${order.status}</div>
      </div>
      ${renderTrackingSteps(order)}
      <div class="order-items">
        ${order.items
          .map(
            (item) => `
          <div class="order-item">
            <span class="order-item-name">${item.name} × ${item.qty}</span>
            <span class="order-item-price">₹${(item.price * item.qty).toLocaleString("en-IN")}</span>
          </div>
        `,
          )
          .join("")}
      </div>
      <div class="order-footer">
        <div class="order-totals">
          <div><span>Subtotal:</span> <span>₹${order.subtotal.toLocaleString("en-IN")}</span></div>
          <div><span>Shipping:</span> <span>${order.shipping === 0 ? "FREE" : "₹" + order.shipping}</span></div>
          <div><span>Tax:</span> <span>₹${order.tax.toLocaleString("en-IN")}</span></div>
          <div class="order-total-row">
            <span>Total:</span> <span>₹${order.total.toLocaleString("en-IN")}</span>
          </div>
          ${order.cancelReason ? `<div><small>Cancel note: ${order.cancelReason}</small></div>` : ""}
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;justify-content:flex-end;margin-top:12px;">
          ${order.status !== "Cancelled" ? `<button class="btn btn--outline" onclick="cancelOrder('${order.id}')">Cancel</button>` : ""}
          <button class="btn btn--danger" onclick="deleteOrder('${order.id}')">Delete</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  if (window.gsap && window.gsap.from) {
    window.gsap.from(container.querySelectorAll(".order-card"), {
      opacity: 0,
      y: 24,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
    });
  }
}

function initGsapAnimations() {
  if (!window.gsap || !window.gsap.from) return;
  window.gsap.from(".hero", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
  });
  window.gsap.from(".search-bar", {
    opacity: 0,
    y: 24,
    duration: 0.8,
    delay: 0.2,
  });
  window.gsap.from("#filter-chips button", {
    opacity: 0,
    y: 16,
    stagger: 0.06,
    duration: 0.6,
    delay: 0.4,
  });
  window.gsap.from(".product-card, .flashproduct-card", {
    opacity: 0,
    y: 30,
    stagger: 0.05,
    duration: 0.8,
    delay: 0.5,
    ease: "power3.out",
  });
  window.gsap.from(".chat-toggle", {
    opacity: 0,
    scale: 0.85,
    rotate: -8,
    duration: 0.8,
    delay: 0.7,
    ease: "elastic.out(1, 0.5)",
  });
}

// ============================================================
//  SEARCH
// ============================================================
document.getElementById("search-btn")?.addEventListener("click", () => {
  const input = document.getElementById("search-input");
  if (!input) return;
  const q = input.value.trim();
  renderProducts(q);
  renderSearchSuggestions();
  if (q) showToast(`Showing results for "${q}"`, "info");
});
document.getElementById("search-clear")?.addEventListener("click", () => {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.value = "";
  renderProducts();
  renderSearchSuggestions();
});
document.getElementById("search-input")?.addEventListener("input", () => {
  renderSearchSuggestions();
});
document.getElementById("search-input")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.getElementById("search-btn")?.click();
});

const notifyBtn = document.getElementById("notify-btn");
if (notifyBtn)
  notifyBtn.addEventListener("click", () => {
    toggleNotificationPanel();
    renderNotifications();
  });
const closeNotifications = document.getElementById("close-notifications");
if (closeNotifications)
  closeNotifications.addEventListener("click", () => toggleNotificationPanel());

const priceRange = document.getElementById("price-range");
const priceMinLabel = document.getElementById("price-min-label");
const priceMaxLabel = document.getElementById("price-max-label");
const brandFilter = document.getElementById("brand-filter");
const ratingFilter = document.getElementById("rating-filter");
const stockFilter = document.getElementById("stock-filter");
const sortOrder = document.getElementById("sort-order");

if (priceRange) {
  priceRange.addEventListener("input", () => {
    appState.priceMax = Number(priceRange.value);
    const maxLabel = document.getElementById("price-max-label");
    if (maxLabel)
      maxLabel.textContent = `₹${appState.priceMax.toLocaleString("en-IN")}`;
    renderProducts(appState.searchTerm);
  });
}
if (brandFilter) {
  brandFilter.addEventListener("change", () => {
    appState.brand = brandFilter.value;
    renderProducts(appState.searchTerm);
  });
}
if (ratingFilter) {
  ratingFilter.addEventListener("change", () => {
    appState.rating = Number(ratingFilter.value);
    renderProducts(appState.searchTerm);
  });
}
if (stockFilter) {
  stockFilter.addEventListener("change", () => {
    appState.stock = stockFilter.value;
    renderProducts(appState.searchTerm);
  });
}
if (sortOrder) {
  sortOrder.addEventListener("change", () => {
    appState.sort = sortOrder.value;
    renderProducts(appState.searchTerm);
  });
}

function renderSearchSuggestions() {
  const query = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();
  const container = document.getElementById("search-suggestions");
  if (!container) return;
  if (query.length < 2) {
    container.innerHTML = "";
    container.style.display = "none";
    return;
  }

  const matches = [...PRODUCTS, ...flashProducts]
    .filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        (p.cat && p.cat.toLowerCase().includes(query)),
    )
    .slice(0, 6);

  if (matches.length === 0) {
    container.innerHTML = `<div class="suggestion-empty">No suggestions found.</div>`;
    container.style.display = "block";
    return;
  }

  container.innerHTML = matches
    .map(
      (p) =>
        `<button class="suggestion-pill" onclick="selectSuggestion('${String(p.name).replace(/'/g, "&#39;")}')">${p.name}</button>`,
    )
    .join("");
  container.style.display = "grid";
}

function selectSuggestion(value) {
  const input = document.getElementById("search-input");
  input.value = value;
  renderProducts(value);
  renderSearchSuggestions();
}

function toggleChatbot() {
  const widget = document.getElementById("chat-widget");
  const panel = document.getElementById("chat-panel");
  widget.classList.toggle("open");
  panel.style.display = widget.classList.contains("open") ? "flex" : "none";
}

function appendChatMessage(text, sender = "bot") {
  const list = document.getElementById("chat-messages");
  if (!list) return;
  const msg = document.createElement("div");
  msg.className = `chat-message ${sender}`;
  msg.textContent = text;
  list.appendChild(msg);
  list.scrollTop = list.scrollHeight;
}

function getAiResponse(text) {
  const query = text.toLowerCase();
  if (query.includes("search") || query.includes("find"))
    return "Type any product name in the search bar and I'll suggest matching items instantly. Try: 'Sony headphones', 'Nike shoes', or 'coffee maker'.";
  if (query.includes("recommend") || query.includes("suggest"))
    return "I recommend checking the Popular Picks slider — those are our best-selling items! You can also browse by category or use filters for price/brand.";
  if (query.includes("order") || query.includes("track"))
    return "Your order history is available under the Orders tab once you sign in. I can help you review past purchases and delivery details.";
  if (
    query.includes("price") ||
    query.includes("cost") ||
    query.includes("expensive")
  )
    return "Use the filter button next to search to set your price range. We have products from ₹1,000 to ₹1,20,000!";
  if (
    query.includes("help") ||
    query.includes("assist") ||
    query.includes("support")
  )
    return "I'm here to help! Ask me about products, orders, shipping, or search tips. You can also contact support via the Contact page.";
  if (query.includes("shipping") || query.includes("delivery"))
    return "Free shipping on orders over ₹999! Standard delivery takes 3-5 days. Express delivery available for ₹199 extra.";
  if (query.includes("return") || query.includes("refund"))
    return "30-day return policy on all items. Visit the Contact page for return instructions or start a live chat.";
  if (
    query.includes("best") ||
    query.includes("deal") ||
    query.includes("sale")
  )
    return "Fresh deals in the Flash Sale section! Limited stock — check it out before they're gone. ⭐";
  if (query.includes("hello") || query.includes("hi") || query.includes("hey"))
    return "Hello! 👋 Welcome to ShopFast! I'm your AI shopping assistant. How can I help you find the perfect product today?";
  if (query.includes("bye") || query.includes("goodbye"))
    return "Goodbye! Happy shopping! 🛒 Come back anytime if you need help.";
  const suggested = [...PRODUCTS, ...flashProducts].find((p) =>
    p.name.toLowerCase().includes(query),
  );
  if (suggested)
    return `I found "${suggested.name}" in our catalog! Try searching for it to see details and add to cart.`;
  return "I'm your ShopFast assistant! Ask me about products, deals, orders, or search tips. I can help you find exactly what you're looking for! 🛍️";
}

function sendChatMessage() {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;
  appendChatMessage(text, "user");
  input.value = "";
  setTimeout(() => {
    appendChatMessage(getAiResponse(text), "bot");
  }, 250);
}

document
  .getElementById("chat-toggle")
  ?.addEventListener("click", toggleChatbot);
document
  .getElementById("chat-send")
  ?.addEventListener("click", sendChatMessage);
document.getElementById("chat-input")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendChatMessage();
});

// ============================================================
//  CONTACT FORM
// ============================================================
document.getElementById("contact-send")?.addEventListener("click", () => {
  const nameEl = document.getElementById("contact-name");
  const emailEl = document.getElementById("contact-email");
  const subjectEl = document.getElementById("contact-subject");
  const msgEl = document.getElementById("contact-msg");

  if (!nameEl || !emailEl || !msgEl) {
    showToast("Contact form elements missing", "error");
    return;
  }

  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const subject = subjectEl ? subjectEl.value.trim() : "";
  const msg = msgEl.value.trim();

  if (!name || !email || !msg) {
    showToast("Please fill all required fields", "warning");
    return;
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    showToast("Enter a valid email address", "error");
    return;
  }
  showToast("Message sent! We'll reply within 24hrs. ✉️", "success");
  [nameEl, emailEl, subjectEl, msgEl].forEach((el) => {
    if (el) el.value = "";
  });
});

// ============================================================
//  YEAR
// ============================================================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============================================================
//  INIT
// ============================================================
renderFilters();
updateFilterOptions();
renderTrendingProducts();
renderProductSlider();
renderProducts();
renderFlashProducts();
updateBadges();
renderAccount();
let recentlyViewed = JSON.parse(localStorage.getItem("rv") || "[]");
renderRecentlyViewed();
renderSearchSuggestions();
renderNotifications();
initGsapAnimations();

// ===== FILTER TOGGLE =====
const filterToggleBtn = document.getElementById("filter-toggle-btn");
const filterToolbar = document.getElementById("filter-toolbar");
if (filterToggleBtn && filterToolbar) {
  filterToggleBtn.addEventListener("click", () => {
    filterToolbar.classList.toggle("hidden");
    filterToggleBtn.textContent = filterToolbar.classList.contains("hidden")
      ? "Show Filters"
      : "Hide Filters";
  });
}

// ===== SLIDER NAVIGATION =====
const sliderNext = document.getElementById("slider-next");
const sliderPrev = document.getElementById("slider-prev");
const productSlider = document.getElementById("product-slider");
if (sliderNext && productSlider) {
  sliderNext.addEventListener("click", () => {
    productSlider.scrollBy({ left: 300, behavior: "smooth" });
  });
}
if (sliderPrev && productSlider) {
  sliderPrev.addEventListener("click", () => {
    productSlider.scrollBy({ left: -300, behavior: "smooth" });
  });
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("Service worker registered."))
      .catch((err) => console.warn("SW registration failed", err));
  });
}
console.log(
  "✓ ShopFast initialized. Products:",
  PRODUCTS.length,
  "| Users:",
  store.users.length,
);
/* ============================================
     RECENTLY VIEWED
  ============================================= */
function addToRecentlyViewed(id) {
  // Find product in both PRODUCTS and flashProducts
  let product = PRODUCTS.find((p) => p.id === id);
  if (!product) {
    product = flashProducts.find((p) => p.id == id);
  }
  if (!product) return;

  // Add emoji if not present
  if (!product.emoji) {
    product.emoji = "📦"; // Default emoji for regular products
  }

  // Remove if already exists, then add to front
  recentlyViewed = recentlyViewed.filter(
    (r) => r.id !== id && r.id !== parseInt(id),
  );
  recentlyViewed.unshift({ ...product, viewedAt: Date.now() });

  // Keep max 10
  if (recentlyViewed.length > 10) recentlyViewed.pop();

  localStorage.setItem("rv", JSON.stringify(recentlyViewed));
  renderRecentlyViewed();
}

function timeAgo(ts) {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return `${Math.floor(diff / 3600)}h ago`;
}

function renderRecentlyViewed() {
  const section = document.querySelector(".recently-viewed");
  const container = document.getElementById("recentlyViewed");
  if (!section || !container) return;
  if (recentlyViewed.length === 0) {
    section.style.display = "none";
    return;
  }
  section.style.display = "block";
  container.innerHTML = recentlyViewed
    .map(
      (p) => `
      <div class="rv-card" onclick="addToRecentlyViewed(${p.id})">
        <div class="rv-time">${timeAgo(p.viewedAt)}</div>
        <div class="rv-img">${p.emoji}</div>
        <div class="rv-info">
          <div class="rv-name">${p.name}</div>
          <div class="rv-price">₹${p.price.toLocaleString()}</div>
        </div>
      </div>
    `,
    )
    .join("");
}

function clearRecentlyViewed() {
  recentlyViewed = [];
  localStorage.removeItem("rv");
  renderRecentlyViewed();
  showToast("Recently viewed cleared", "#888");
}
