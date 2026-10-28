// Editorial Lightbox Component
class EditorialLightbox {
  constructor(dishes) {
    this.dishes = dishes;
    this.currentIndex = 0;
    this.filteredIndices = dishes.map((_, i) => i);
    
    this.backdrop = document.getElementById('lightboxBackdrop');
    this.container = document.getElementById('lightboxContainer');
    this.mediaImg = document.getElementById('lightboxImg');
    this.mediaBadge = document.getElementById('lightboxBadge');
    this.restaurantEl = document.getElementById('lightboxRestaurant');
    this.dishEl = document.getElementById('lightboxDish');
    this.hookEl = document.getElementById('lightboxHook');
    this.captionEl = document.getElementById('lightboxCaption');
    this.sensoryEl = document.getElementById('lightboxSensory');
    this.formatEl = document.getElementById('lightboxFormat');
    this.counterEl = document.getElementById('lightboxCounter');
    
    this.closeBtn = document.getElementById('lightboxClose');
    this.prevBtn = document.getElementById('lightboxPrev');
    this.nextBtn = document.getElementById('lightboxNext');
    
    this.initEvents();
  }

  setFilteredIndices(indices) {
    this.filteredIndices = indices;
  }

  initEvents() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    
    if (this.backdrop) {
      this.backdrop.addEventListener('click', (e) => {
        if (e.target === this.backdrop) this.close();
      });
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    document.addEventListener('keydown', (e) => {
      if (!this.backdrop || !this.backdrop.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  open(dishId) {
    const idx = this.dishes.findIndex(d => d.id === dishId);
    if (idx === -1) return;
    
    this.currentIndex = idx;
    this.render();
    this.backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.backdrop) return;
    this.backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  next() {
    const currentPos = this.filteredIndices.indexOf(this.currentIndex);
    if (currentPos === -1) return;
    const nextPos = (currentPos + 1) % this.filteredIndices.length;
    this.currentIndex = this.filteredIndices[nextPos];
    this.render();
  }

  prev() {
    const currentPos = this.filteredIndices.indexOf(this.currentIndex);
    if (currentPos === -1) return;
    const prevPos = (currentPos - 1 + this.filteredIndices.length) % this.filteredIndices.length;
    this.currentIndex = this.filteredIndices[prevPos];
    this.render();
  }

  render() {
    const dish = this.dishes[this.currentIndex];
    if (!dish) return;

    this.mediaImg.src = dish.image;
    this.mediaImg.alt = dish.title + ' at ' + dish.restaurant;
    if (dish.objectPosition) {
      this.mediaImg.style.objectPosition = dish.objectPosition;
    } else {
      this.mediaImg.style.objectPosition = 'center center';
    }

    this.mediaBadge.textContent = dish.cuisine || 'Fine Dining';
    this.restaurantEl.textContent = dish.restaurant;
    this.dishEl.textContent = dish.title + ' · ' + dish.location;
    this.hookEl.textContent = dish.hook;
    this.captionEl.textContent = dish.caption;
    this.sensoryEl.textContent = dish.sensoryNotes;
    this.formatEl.textContent = dish.format || '4:5 High-Res Still';

    const currentPos = this.filteredIndices.indexOf(this.currentIndex);
    this.counterEl.textContent = (currentPos + 1) + ' / ' + this.filteredIndices.length;
  }
}

window.EditorialLightbox = EditorialLightbox;
