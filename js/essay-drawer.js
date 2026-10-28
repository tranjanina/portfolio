// "Love, Janina" Substack Essay Drawer Component
class EssayDrawer {
  constructor(essays) {
    this.essays = essays;
    this.backdrop = document.getElementById('essayDrawerBackdrop');
    this.drawer = document.getElementById('essayDrawer');
    this.closeBtn = document.getElementById('drawerCloseBtn');
    this.titleEl = document.getElementById('drawerTitle');
    this.subtitleEl = document.getElementById('drawerSubtitle');
    this.bodyEl = document.getElementById('drawerBody');
    this.substackLink = document.getElementById('drawerSubstackLink');

    this.initEvents();
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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.backdrop && this.backdrop.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(essayId) {
    const essay = this.essays.find(e => e.id === essayId);
    if (!essay) return;

    this.titleEl.textContent = essay.title;
    this.subtitleEl.textContent = essay.subtitle;
    this.bodyEl.innerHTML = `<p>${essay.excerpt}</p>`;
    this.substackLink.href = essay.url;

    this.backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.backdrop) return;
    this.backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.EssayDrawer = EssayDrawer;
