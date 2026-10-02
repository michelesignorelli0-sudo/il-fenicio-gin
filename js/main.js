/* ── GOOGLE ANALYTICS (GA4) — caricamento subordinato al consenso cookie ── */
// GA4 NON parte finché l'utente non ha accettato i cookie (chiave localStorage
// `fenicio_cookie` === 'accepted'). Prima del consenso non viene scaricato
// gtag.js né impostato alcun cookie _ga, in conformità al GDPR / Garante Privacy.
const GA_MEASUREMENT_ID = 'G-PS4LVTMPPV';
function fenicioLoadAnalytics() {
  if (window.__fenicioGaLoaded) return;
  if (localStorage.getItem('fenicio_cookie') !== 'accepted') return;
  window.__fenicioGaLoaded = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}
// Esposta per il banner cookie (viene richiamata al click su "Accetta").
window.fenicioLoadAnalytics = fenicioLoadAnalytics;
// Se il consenso è già stato dato in una visita precedente, carica subito GA4.
fenicioLoadAnalytics();

/* ── COOKIE BANNER — consenso granulare (necessari vs analitici) ── */
// Unica categoria non essenziale: analitici (GA4). La scelta è salvata in
// localStorage `fenicio_cookie` con i valori 'accepted' (analitici attivi) o
// 'rejected' (solo necessari), così da restare compatibile con fenicioLoadAnalytics().
function fenicioInitCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  const panel     = document.getElementById('cookie-prefs');
  const toggle    = document.getElementById('cookie-analytics-toggle');
  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');
  const manageBtn = document.getElementById('cookie-manage');
  const saveBtn   = document.getElementById('cookie-save');

  function isAnalyticsOn() { return localStorage.getItem('fenicio_cookie') === 'accepted'; }
  function syncToggle() { if (toggle) toggle.checked = isAnalyticsOn(); }
  function hideBanner() { banner.style.display = 'none'; }
  function showBanner() { banner.style.display = 'flex'; }

  // Mostra il banner solo se l'utente non ha ancora effettuato una scelta.
  if (!localStorage.getItem('fenicio_cookie')) showBanner();

  // Applica la scelta: analitici ON -> 'accepted' e caricamento GA4;
  // analitici OFF -> 'rejected' e nessun caricamento di GA4.
  function applyChoice(analyticsOn) {
    if (analyticsOn) {
      localStorage.setItem('fenicio_cookie', 'accepted');
      if (window.fenicioLoadAnalytics) window.fenicioLoadAnalytics();
    } else {
      localStorage.setItem('fenicio_cookie', 'rejected');
    }
    hideBanner();
  }

  if (acceptBtn) acceptBtn.onclick = function () { applyChoice(true); };   // Accetta tutti
  if (rejectBtn) rejectBtn.onclick = function () { applyChoice(false); };  // Solo necessari
  if (manageBtn) manageBtn.onclick = function () {
    if (!panel) return;
    const open = panel.style.display === 'block';
    panel.style.display = open ? 'none' : 'block';
    if (!open) syncToggle();
  };
  if (saveBtn) saveBtn.onclick = function () { applyChoice(!!(toggle && toggle.checked)); };

  // Richiamabile da altre pagine (es. Cookie Policy) per riaprire le preferenze.
  window.fenicioOpenCookiePrefs = function () {
    syncToggle();
    if (panel) panel.style.display = 'block';
    showBanner();
  };
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', fenicioInitCookieBanner);
} else {
  fenicioInitCookieBanner();
}

/* ── AGE GATE ── */
// Presente su tutte le pagine: se la pagina non ha il markup, lo crea qui.
if (!document.getElementById('age-gate') && !localStorage.getItem('fenicio_age_ok')) {
  const gate = document.createElement('div');
  gate.id = 'age-gate';
  gate.innerHTML = `
    <div class="age-gate-logo">Il Fenicio <span>Gin Premium Italiano</span></div>
    <div class="age-gate-divider"></div>
    <p class="age-gate-title">Hai compiuto 18 anni?</p>
    <p class="age-gate-sub">Per accedere devi essere maggiorenne</p>
    <div class="age-gate-btns">
      <button id="age-gate-yes" class="btn btn-gold">Sì, ho 18 anni</button>
      <button id="age-gate-no"  class="btn">No, esci</button>
    </div>
    <p class="age-gate-legal">Entrando dichiari di avere almeno 18 anni e di accettare i termini di utilizzo. L'abuso di alcol è dannoso per la salute.</p>`;
  document.body.appendChild(gate);
}
const ageGate = document.getElementById('age-gate');
if (ageGate) {
  if (localStorage.getItem('fenicio_age_ok')) {
    ageGate.remove();
  } else {
    document.body.style.overflow = 'hidden';
    document.getElementById('age-gate-yes').addEventListener('click', () => {
      localStorage.setItem('fenicio_age_ok', '1');
      ageGate.classList.add('hidden');
      document.body.style.overflow = '';
      setTimeout(() => ageGate.remove(), 650);
    });
    document.getElementById('age-gate-no').addEventListener('click', () => {
      window.location.href = 'https://www.google.it';
    });
  }
}

/* ── NAVIGATION ── */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('open');
    nav.classList.remove('menu-open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

/* ── SCROLL REVEAL ── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── HERO SEQUENCE ── */
(function heroSequence() {
  const eyebrow = document.getElementById('eyebrow');
  if (!eyebrow) return;
  const seq = [
    [200,  '#eyebrow'],
    [500,  '#word-il'],
    [800,  '#word-fenicio'],
    [1500, '#hero-sub'],
    [1700, '#hero-cta'],
  ];
  seq.forEach(([delay, id]) => {
    const el = document.querySelector(id);
    if (el) setTimeout(() => el.classList.add('visible'), delay);
  });
  const bottle = document.querySelector('.bottle-wrap');
  if (bottle) setTimeout(() => bottle.classList.add('visible'), 1100);
})();

/* ── PARALLAX BOTTLE ── */
const bottleImg = document.querySelector('.hero-bottle');
if (bottleImg) {
  window.addEventListener('scroll', () => {
    bottleImg.style.transform = `translateY(${window.scrollY * 0.06}px)`;
  }, { passive: true });
}

/* ── CANVAS PARTICLES ── */
const canvas = document.getElementById('particles');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (canvas && !reduceMotion) {
  const MAX_PARTICLES = innerWidth < 768 ? 50 : 120;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(true); }
    reset(rand) {
      this.x = Math.random() * W;
      this.y = rand ? Math.random() * H : H + 10;
      this.size = Math.random() * 1.8 + 0.4;
      this.vy = -(Math.random() * 0.4 + 0.15);
      this.vx = (Math.random() - 0.5) * 0.2;
      this.life = 0;
      this.maxLife = Math.random() * 300 + 200;
      this.maxOpacity = Math.random() * 0.55 + 0.1;
      this.gold = Math.random() > 0.25;
    }
    update() {
      this.x += this.vx; this.y += this.vy; this.life++;
      const h = this.maxLife / 2;
      this.opacity = this.life < h
        ? (this.life / h) * this.maxOpacity
        : ((this.maxLife - this.life) / h) * this.maxOpacity;
      if (this.life >= this.maxLife) this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle   = this.gold ? 'rgb(232,168,0)' : 'rgb(140,100,255)';
      ctx.shadowColor = this.gold ? 'rgba(232,168,0,0.8)' : 'rgba(140,100,255,0.8)';
      ctx.shadowBlur  = this.size * 4;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  let spawned = 0;
  (function spawn() {
    if (spawned < MAX_PARTICLES) {
      for (let i = 0; i < 3; i++) particles.push(new Particle());
      spawned += 3;
      setTimeout(spawn, 60);
    }
  })();
  // Si ferma quando l'hero non è visibile, per risparmiare batteria
  let heroVisible = true;
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }).observe(canvas);
  (function loop() {
    if (heroVisible) { ctx.clearRect(0,0,W,H); particles.forEach(p=>{p.update();p.draw();}); }
    requestAnimationFrame(loop);
  })();
}

/* ── CUSTOM CURSOR ── */
(function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot'; ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mx = -200, my = -200, rx = -200, ry = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    dot.style.opacity = '1'; ring.style.opacity = '1';
  });

  (function loop() {
    rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button, .feature-card, .botanica-item, .value-item').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('hovered'); ring.classList.add('hovered'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('hovered'); ring.classList.remove('hovered'); });
  });
})();

/* ── MAGNETIC BUTTONS ── */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width  / 2) * 0.22;
    const y = (e.clientY - r.top  - r.height / 2) * 0.22;
    btn.style.transform  = `translate(${x}px, ${y}px)`;
    btn.style.transition = 'transform 0.1s ease';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform  = '';
    btn.style.transition = 'transform 0.7s cubic-bezier(0.16,1,0.3,1), background var(--ease), box-shadow var(--ease), border-color var(--ease)';
  });
});

/* ── CARD TILT ── */
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    card.style.transform  = `perspective(1000px) rotateX(${-y*6}deg) rotateY(${x*6}deg) translateY(-6px)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform  = '';
    card.style.transition = 'transform 0.8s cubic-bezier(0.16,1,0.3,1), background var(--ease)';
  });
});

/* ── TICKER ── */
const tickerInner = document.querySelector('.ticker-inner');
if (tickerInner) {
  const track = tickerInner.querySelector('.ticker-track');
  if (track) tickerInner.appendChild(track.cloneNode(true));
}

/* ── CONTACT FORM ── */
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Invio in corso...';
    btn.disabled = true; btn.style.opacity = '0.6';
    const data = new FormData(form);
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        btn.textContent = 'Messaggio inviato ◆';
      } else {
        btn.textContent = 'Errore, riprova';
        btn.disabled = false; btn.style.opacity = '1';
      }
    } catch {
      btn.textContent = 'Errore, riprova';
      btn.disabled = false; btn.style.opacity = '1';
    }
  });
}
