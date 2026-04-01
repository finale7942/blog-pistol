/* ================================================
   MAIN.JS - Illusionist Blog Core Logic
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initSparkles();
  initNavScroll();
  initMobileMenu();
  initScrollToTop();
  initScrollAnimations();
});

/* ---- Sparkle Particles ---- */
function initSparkles() {
  const container = document.querySelector('.bg-magic');
  if (!container) return;

  const SPARKLE_COUNT = 18;

  for (let i = 0; i < SPARKLE_COUNT; i++) {
    createSparkle(container, i);
  }
}

function createSparkle(container, index) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  const left = Math.random() * 100;
  const size = 1 + Math.random() * 2;
  const duration = 8 + Math.random() * 12;
  const delay = Math.random() * duration;
  const hue = Math.random() > 0.5 ? '45' : '270'; // gold or purple

  sparkle.style.cssText = `
    left: ${left}%;
    width: ${size}px;
    height: ${size}px;
    animation-duration: ${duration}s;
    animation-delay: -${delay}s;
    filter: hue-rotate(${hue}deg);
  `;

  container.appendChild(sparkle);
}

/* ---- Navigation Scroll Effect ---- */
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---- Mobile Menu Toggle ---- */
function initMobileMenu() {
  const btn = document.querySelector('.nav-menu-btn');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close menu when clicking a link
  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

/* ---- Scroll to Top ---- */
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---- Scroll Animations ---- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ---- Home Page: Render Posts ---- */
function renderPosts(category) {
  const grid = document.getElementById('posts-grid');
  if (!grid) return;

  const posts = getPostsByCategory(category);

  if (posts.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <div class="icon">🎩</div>
        <p>아직 이 카테고리에 글이 없습니다.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = posts.map((post, i) => `
    <article class="post-card animate-on-scroll" style="transition-delay: ${i * 100}ms" onclick="location.href='post.html?id=${post.id}'">
      <div class="post-card-image">
        <div style="width:100%;height:100%;background:linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(236,72,153,0.1) 100%);display:flex;align-items:center;justify-content:center;font-size:3rem;">
          ${post.category === '카드마술' ? '🃏' : post.category === '기초이론' ? '📖' : '🎭'}
        </div>
        <div class="overlay"></div>
      </div>
      <div class="post-card-body">
        <div class="post-card-meta">
          <span class="post-card-category">${post.category}</span>
          <span class="post-card-date">${formatDate(post.date)}</span>
        </div>
        <h3 class="post-card-title">${post.title}</h3>
        <p class="post-card-excerpt">${post.excerpt}</p>
      </div>
      <div class="post-card-footer">
        <span class="post-card-read">읽기 →</span>
        <span class="post-card-time">⏱ ${post.readTime}</span>
      </div>
    </article>
  `).join('');

  // Re-initialize scroll animations for new elements
  initScrollAnimations();
}

/* ---- Home Page: Category Filter ---- */
function initCategoryFilter() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;

  const categories = getCategories();

  bar.innerHTML = categories.map((cat, i) => `
    <button class="filter-btn ${i === 0 ? 'active' : ''}" data-category="${cat}">
      ${cat}
    </button>
  `).join('');

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderPosts(btn.dataset.category);
  });
}

/* ---- Post Detail Page ---- */
function renderPostDetail() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');

  if (!postId) {
    window.location.href = 'index.html';
    return;
  }

  const post = getPostById(postId);
  if (!post) {
    document.getElementById('post-container').innerHTML = `
      <div class="empty-state">
        <div class="icon">🔮</div>
        <p>글을 찾을 수 없습니다.</p>
        <a href="index.html" class="btn btn-ghost" style="margin-top:1rem;">홈으로 돌아가기</a>
      </div>
    `;
    return;
  }

  // Set page title
  document.title = `${post.title} — Illusionist`;

  // Render post
  const container = document.getElementById('post-container');
  const adjacent = getAdjacentPosts(postId);

  container.innerHTML = `
    <header class="post-header animate-on-scroll">
      <span class="post-card-category">${post.category}</span>
      <h1>${post.title}</h1>
      <div class="post-header-meta">
        <span>📅 ${formatDate(post.date)}</span>
        <span>⏱ ${post.readTime} 읽기</span>
      </div>
    </header>

    <div class="post-content animate-on-scroll" style="transition-delay: 200ms">
      ${post.content}
    </div>

    <nav class="post-nav animate-on-scroll" style="transition-delay: 300ms">
      ${adjacent.prev ? `
        <a href="post.html?id=${adjacent.prev.id}" class="prev">
          <span class="post-nav-label">← 이전 글</span>
          <span class="post-nav-title">${adjacent.prev.title}</span>
        </a>
      ` : '<div></div>'}
      ${adjacent.next ? `
        <a href="post.html?id=${adjacent.next.id}" class="next">
          <span class="post-nav-label">다음 글 →</span>
          <span class="post-nav-title">${adjacent.next.title}</span>
        </a>
      ` : '<div></div>'}
    </nav>
  `;

  initScrollAnimations();
}
