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

  // Map dish ID -> index in data.dishes for fast lookup
  const dishIndexMap = new Map();
  data.dishes.forEach((d, idx) => dishIndexMap.set(d.id, idx));

  let currentVisibleIndices = [];

  function filterGallery(filter = 'all') {
    currentVisibleIndices = [];
    galleryItems.forEach(item => {
      const cat = item.getAttribute('data-category') || '';
      const categories = cat.split(/\s+/);
      const isMatch = (filter === 'all' || categories.includes(filter));
      item.style.display = isMatch ? '' : 'none';
      if (isMatch) {
        const venueIdsStr = item.getAttribute('data-venue-ids');
        if (venueIdsStr) {
          const ids = venueIdsStr.split(',').map(s => s.trim());
          ids.forEach(id => {
            if (dishIndexMap.has(id)) {
              currentVisibleIndices.push(dishIndexMap.get(id));
            }
          });
        } else {
          const dishId = item.getAttribute('data-id');
          if (dishIndexMap.has(dishId)) {
            currentVisibleIndices.push(dishIndexMap.get(dishId));
          }
        }
      }
    });
    lightbox.setFilteredIndices(currentVisibleIndices);
  }

  // Handle opening lightbox from any gallery item or collage
  function activateGalleryItem(e, item) {
    const venueIdsStr = item.getAttribute('data-venue-ids');
    if (venueIdsStr) {
      const ids = venueIdsStr.split(',').map(s => s.trim());
      const venueIndices = ids.map(id => dishIndexMap.get(id)).filter(idx => idx !== undefined);
      lightbox.setFilteredIndices(venueIndices);

      const clickedImg = (e && e.target) ? e.target.closest('[data-venue-id]') : null;
      const targetId = (clickedImg && clickedImg.getAttribute('data-venue-id')) || ids[0];
      lightbox.open(targetId);
    } else {
      lightbox.setFilteredIndices(currentVisibleIndices);
      const dishId = item.getAttribute('data-id');
      lightbox.open(dishId);
    }
  }

  // Attach Lightbox click and keyboard handlers
  galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      activateGalleryItem(e, item);
    });
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateGalleryItem(e, item);
      }
    });
  });

  // Update tab counts & wire filter clicks
  tabs.forEach(tab => {
    const f = tab.getAttribute('data-filter');
    const countSpan = tab.querySelector('.tab-count');
    if (countSpan) {
      if (f === 'all') {
        countSpan.textContent = galleryItems.length;
      } else {
        let count = 0;
        galleryItems.forEach(item => {
          const cats = (item.getAttribute('data-category') || '').split(/\s+/);
          if (cats.includes(f)) count++;
        });
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

  // 6. Case Study Carousel Showcase
  const showcase = document.getElementById('caseStudyShowcase');
  if (showcase && data.caseStudies && data.caseStudies.length > 0) {
    window.selectCaseStudyCarousel = function(index) {
      const cs = data.caseStudies[index];
      if (!cs) return;

      // Update Tab Buttons
      const tabBtns = showcase.querySelectorAll('.case-study-tab-btn');
      tabBtns.forEach((btn, i) => {
        if (i === index) {
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        }
      });

      // Update Video & Pill
      const video = document.getElementById('csActiveVideo');
      const pill = document.getElementById('csVideoPillText');
      if (video && cs.video) {
        video.src = cs.video;
        if (cs.image) video.poster = cs.image;
        video.load();
        video.play().catch(() => {});
      }
      if (pill) {
        pill.innerText = `${cs.views || cs.results?.[0]?.val || ''} Views`;
      }

      // Update Details
      const client = document.getElementById('csClientText');
      const type = document.getElementById('csTypeText');
      const title = document.getElementById('csTitleText');
      const whatIDid = document.getElementById('csWhatIDidText');
      const viewsNum = document.getElementById('csViewsNum');
      const deliverables = document.getElementById('csDeliverablesText');
      const countLabel = document.getElementById('csSlideCountLabel');
      const slidesScroll = document.getElementById('csSlidesScroll');

      if (client) client.innerText = `✦ ${cs.location || ''} · ${cs.client || ''}`;
      if (type) type.innerText = cs.type || 'Instagram Carousel';
      if (title) title.innerText = cs.headline || cs.title || '';
      if (whatIDid) whatIDid.innerText = cs.whatIDid || '';
      if (viewsNum) viewsNum.innerText = cs.views || cs.results?.[0]?.val || '';
      if (deliverables) deliverables.innerText = cs.deliverables || '';

      // Update Slides Thumbnails
      if (slidesScroll && cs.slidePrefix && cs.slideCount) {
        if (countLabel) countLabel.innerText = `${cs.slideCount} slides`;
        let html = '';
        for (let s = 1; s <= cs.slideCount; s++) {
          const numStr = String(s).padStart(2, '0');
          html += `
            <div class="case-study-slide-thumb">
              <img src="${cs.slidePrefix}${numStr}.jpg" alt="Slide ${s}" loading="lazy">
              <span class="slide-num">#${s}</span>
            </div>
          `;
        }
        slidesScroll.innerHTML = html;
      }
    };
  }

  // 6b. Render Testimonials (Hidden until client supplies real quotes)
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (testimonialsGrid && data.testimonials && data.testimonials.length > 0) {
    testimonialsGrid.innerHTML = data.testimonials.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-mark">“</div>
        <blockquote class="testimonial-quote">${t.quote}</blockquote>
        <div class="testimonial-meta">
          <div class="testimonial-author">${t.author}</div>
          <div class="testimonial-property">${t.property}</div>
        </div>
      </div>
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
          <a href="${essay.url}" target="_blank" rel="noopener" style="font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted);">Personal essays ↗</a>
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
    const sections = ['cases', 'services', 'work', 'reels', 'contact'];
    
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
