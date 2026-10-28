// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA || (typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null);
  if (!data) {
    console.error('PORTFOLIO_DATA not loaded');
    return;
  }

  // 1. Initialize Lightbox
  const lightbox = new EditorialLightbox(data.dishes);

  // 2. Initialize Reel Player
  const reelPlayer = new ReelPlayer(data.reels);

  // 3. Initialize Brief Builder
  const briefBuilder = new BriefBuilder(data.packages, data.addOns, data.creator.email);

  // 4. Initialize Essay Drawer
  const essayDrawer = new EssayDrawer(data.essays);

  // 5. Hydrate Pre-rendered Gallery Items & Filtering
  const galleryGrid = document.getElementById('galleryGrid');
  const tabs = document.querySelectorAll('.gallery-tabs button');
  const galleryItems = galleryGrid ? galleryGrid.querySelectorAll('.gallery-item') : [];

  // Attach Lightbox click handlers to each pre-rendered item
  galleryItems.forEach(item => {
    const dishId = item.getAttribute('data-id');
    item.addEventListener('click', () => {
      lightbox.open(dishId);
    });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        lightbox.open(dishId);
      }
    });
  });

  function filterGallery(filter = 'all') {
    const matchingIndices = [];
    galleryItems.forEach((item, idx) => {
      const cat = item.getAttribute('data-category');
      const isMatch = (filter === 'all' || cat === filter);
      item.style.display = isMatch ? '' : 'none';
      if (isMatch) {
        matchingIndices.push(idx);
      }
    });
    lightbox.setFilteredIndices(matchingIndices);
  }

  // Update tab counts & wire filter clicks
  tabs.forEach(tab => {
    const f = tab.getAttribute('data-filter');
    const countSpan = tab.querySelector('.tab-count');
    if (countSpan) {
      if (f === 'all') {
        countSpan.textContent = data.dishes.length;
      } else {
        const count = data.dishes.filter(d => d.category === f).length;
        countSpan.textContent = count;
      }
    }

    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-pressed', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-pressed', 'true');
      filterGallery(f);
    });
  });

  // Initial filter setup
  filterGallery('all');

  // 6. Render Case Studies
  const caseStudiesGrid = document.getElementById('caseStudiesGrid');
  if (caseStudiesGrid && data.caseStudies) {
    caseStudiesGrid.innerHTML = data.caseStudies.map(cs => `
      <article class="case-study-card">
        <div class="case-study-client">${cs.client} · ${cs.location}</div>
        <div class="case-study-type">${cs.type}</div>
        <h3 class="case-study-title">${cs.headline}</h3>
        <p class="case-study-challenge">${cs.challenge}</p>
        
        <div class="case-study-strategy-title">Strategic UGC Execution</div>
        <ul class="case-study-strategy-list">
          ${cs.strategy.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <div class="case-study-results-grid">
          ${cs.results.map(r => `
            <div>
              <div class="case-study-result-val">${r.val}</div>
              <div class="case-study-result-label">${r.label}</div>
            </div>
          `).join('')}
        </div>

        <div class="case-study-deliverables">${cs.deliverables}</div>
      </article>
    `).join('');
  }

  // 7. Render Substack Essay Quotes
  const quotesGrid = document.getElementById('quotesGrid');
  if (quotesGrid && data.essays) {
    quotesGrid.innerHTML = data.essays.map(essay => `
      <figure class="quote-card">
        <blockquote>"${essay.quote}"</blockquote>
        <div class="quote-card-cta">
          <button type="button" class="quote-read-btn" data-essay="${essay.id}">Read essay excerpt ↗</button>
          <a href="${essay.url}" target="_blank" rel="noopener" style="font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted);">Substack ↗</a>
        </div>
      </figure>
    `).join('');

    quotesGrid.querySelectorAll('.quote-read-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const essayId = btn.getAttribute('data-essay');
        essayDrawer.open(essayId);
      });
    });
  }

  // 8. Copy Email Button
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailDisplay = document.getElementById('emailDisplay');
  const copyStatus = document.getElementById('copyEmailStatus');

  if (copyBtn && emailDisplay) {
    copyBtn.addEventListener('click', () => {
      const email = emailDisplay.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        if (copyStatus) copyStatus.textContent = 'Email copied to clipboard.';
        setTimeout(() => {
          if (copyStatus) copyStatus.textContent = '';
        }, 3000);
      }).catch(() => {
        if (copyStatus) copyStatus.textContent = 'Selected: ' + email;
      });
    });
  }

  // 9. Mobile Action Bar Active Highlight
  const mobileButtons = document.querySelectorAll('.mobile-action-btn');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    const sections = ['work', 'reels', 'cases', 'rates', 'contact'];
    
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          mobileButtons.forEach(btn => {
            const href = btn.getAttribute('href');
            btn.classList.toggle('active', href === '#' + id);
          });
          break;
        }
      }
    }
  }, { passive: true });
});
