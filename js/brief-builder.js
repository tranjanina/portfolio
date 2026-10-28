// Interactive Brief & Inquiry Builder Component
class BriefBuilder {
  constructor(packages, addOns, creatorEmail) {
    this.packages = packages;
    this.addOns = addOns;
    this.creatorEmail = creatorEmail || 'tranjanina@gmail.com';

    this.selectedPackageId = packages[1]?.id || 'pkg-story'; // default to The Story
    this.selectedAddOns = new Set(['opt-paid-30']); // default 30-day paid rights
    this.selectedLocation = 'Singapore';

    this.pkgContainer = document.getElementById('builderPackages');
    this.addOnsContainer = document.getElementById('builderAddOns');
    this.locationsContainer = document.getElementById('builderLocations');
    this.summaryBox = document.getElementById('briefSummaryOutput');
    this.copyBtn = document.getElementById('copyBriefBtn');
    this.emailBtn = document.getElementById('emailBriefBtn');
    this.feedbackEl = document.getElementById('briefFeedback');

    this.init();
  }

  init() {
    this.renderPackages();
    this.renderAddOns();
    this.renderLocations();
    this.initActions();
    this.updateSummary();
  }

  renderPackages() {
    if (!this.pkgContainer) return;
    this.pkgContainer.innerHTML = '';

    this.packages.forEach(pkg => {
      const card = document.createElement('div');
      card.className = 'package-card-option' + (pkg.id === this.selectedPackageId ? ' selected' : '');
      card.setAttribute('role', 'radio');
      card.setAttribute('aria-checked', pkg.id === this.selectedPackageId ? 'true' : 'false');
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="pkg-opt-name">${pkg.name}</span>
            ${pkg.badge ? `<span class="pkg-opt-badge">${pkg.badge}</span>` : ''}
          </div>
          <p class="pkg-opt-desc">${pkg.subtitle} · ${pkg.deliverables[0]}</p>
        </div>
        <div style="font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted);">
          Select
        </div>
      `;

      card.addEventListener('click', () => {
        this.selectedPackageId = pkg.id;
        this.updatePackageSelection();
        this.updateSummary();
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.selectedPackageId = pkg.id;
          this.updatePackageSelection();
          this.updateSummary();
        }
      });

      this.pkgContainer.appendChild(card);
    });
  }

  updatePackageSelection() {
    const cards = this.pkgContainer.querySelectorAll('.package-card-option');
    cards.forEach((card, i) => {
      const isSelected = this.packages[i].id === this.selectedPackageId;
      card.classList.toggle('selected', isSelected);
      card.setAttribute('aria-checked', isSelected ? 'true' : 'false');
    });
  }

  renderAddOns() {
    if (!this.addOnsContainer) return;
    this.addOnsContainer.innerHTML = '';

    this.addOns.forEach(addon => {
      const row = document.createElement('div');
      const isChecked = this.selectedAddOns.has(addon.id);
      row.className = 'addon-row' + (isChecked ? ' active' : '');
      row.setAttribute('role', 'checkbox');
      row.setAttribute('aria-checked', isChecked ? 'true' : 'false');
      row.setAttribute('tabindex', '0');

      row.innerHTML = `
        <div class="addon-checkbox">${isChecked ? '✓' : ''}</div>
        <div class="addon-details">
          <div class="addon-name">${addon.name}</div>
          <div class="addon-desc">${addon.desc}</div>
        </div>
      `;

      const toggle = () => {
        if (this.selectedAddOns.has(addon.id)) {
          this.selectedAddOns.delete(addon.id);
          row.classList.remove('active');
          row.setAttribute('aria-checked', 'false');
          row.querySelector('.addon-checkbox').textContent = '';
        } else {
          this.selectedAddOns.add(addon.id);
          row.classList.add('active');
          row.setAttribute('aria-checked', 'true');
          row.querySelector('.addon-checkbox').textContent = '✓';
        }
        this.updateSummary();
      };

      row.addEventListener('click', toggle);
      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });

      this.addOnsContainer.appendChild(row);
    });
  }

  renderLocations() {
    if (!this.locationsContainer) return;
    const locations = ['Singapore', 'Bali', 'Hong Kong', 'Other / Regional'];
    this.locationsContainer.innerHTML = '';

    locations.forEach(loc => {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'location-pill' + (loc === this.selectedLocation ? ' active' : '');
      pill.textContent = loc;

      pill.addEventListener('click', () => {
        this.selectedLocation = loc;
        const allPills = this.locationsContainer.querySelectorAll('.location-pill');
        allPills.forEach(p => p.classList.toggle('active', p === pill));
        this.updateSummary();
      });

      this.locationsContainer.appendChild(pill);
    });
  }

  generateBriefText() {
    const pkg = this.packages.find(p => p.id === this.selectedPackageId) || this.packages[1];
    const addOnList = this.addOns.filter(a => this.selectedAddOns.has(a.id));

    let brief = `Dear Janina,

We would love to discuss a dining content collaboration with you.

1. Selected Package:
   - ${pkg.name} (${pkg.subtitle})
   - Deliverables: ${pkg.deliverables.join('; ')}

2. Additional Options & Usage:
   ${addOnList.length > 0 ? addOnList.map(a => `- ${a.name}`).join('\n   ') : '- Standard organic portfolio usage'}

3. Location:
   - ${this.selectedLocation}

4. Restaurant / Venue Details:
   - Restaurant Name: [Your Restaurant Name]
   - Target Timeline / Launch Date: [e.g. Next Month]
   - Focus Concept / Hero Dishes: [e.g. Wood-fire steaks / New cocktail menu]

Looking forward to hearing from you.
Best regards,
[Name / Title]`;

    return brief;
  }

  updateSummary() {
    if (!this.summaryBox) return;
    this.summaryBox.textContent = this.generateBriefText();
  }

  initActions() {
    if (this.copyBtn) {
      this.copyBtn.addEventListener('click', () => {
        const text = this.generateBriefText();
        navigator.clipboard.writeText(text).then(() => {
          this.feedbackEl.textContent = 'Brief copied to clipboard! Ready to paste into email.';
          setTimeout(() => {
            if (this.feedbackEl) this.feedbackEl.textContent = '';
          }, 4000);
        }).catch(() => {
          this.feedbackEl.textContent = 'Please select and copy the text directly from the box.';
        });
      });
    }

    if (this.emailBtn) {
      this.emailBtn.addEventListener('click', () => {
        const pkg = this.packages.find(p => p.id === this.selectedPackageId) || this.packages[1];
        const subject = encodeURIComponent(`Collaboration Inquiry: ${pkg.name} · ${this.selectedLocation}`);
        const body = encodeURIComponent(this.generateBriefText());
        window.location.href = `mailto:${this.creatorEmail}?subject=${subject}&body=${body}`;
      });
    }
  }
}

window.BriefBuilder = BriefBuilder;
