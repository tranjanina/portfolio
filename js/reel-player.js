// Interactive Vertical Reel Showcase Component with Real Video Playback
class ReelPlayer {
  constructor(reels) {
    this.reels = reels;
    this.currentReelIndex = 0;
    this.isPlaying = true;

    // Phone elements
    this.phoneMedia = document.getElementById('phoneMedia');
    this.phoneVideo = document.getElementById('phoneVideo');
    this.phoneImg = document.getElementById('phoneImg');
    this.phoneEstablishment = document.getElementById('phoneEstablishment');
    this.phoneHookCaption = document.getElementById('phoneHookCaption');
    this.phoneAudioTrack = document.getElementById('phoneAudioTrack');
    this.phoneProgressBar = document.getElementById('phoneProgressBar');
    this.phonePlaybackBtn = document.getElementById('phonePlaybackBtn');
    this.phoneBeautyBadge = document.getElementById('phoneBeautyBadge');
    
    // Controls elements
    this.tabsContainer = document.getElementById('reelSelectorTabs');
    this.scriptPanel = document.getElementById('reelScriptPanel');

    this.init();
  }

  init() {
    this.renderTabs();
    this.initEvents();
    this.loadReel(0);
  }

  initEvents() {
    if (this.phonePlaybackBtn) {
      this.phonePlaybackBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlayback();
      });
    }

    if (this.phoneMedia) {
      this.phoneMedia.addEventListener('click', () => {
        this.togglePlayback();
      });
    }

    if (this.phoneVideo) {
      this.phoneVideo.addEventListener('timeupdate', () => {
        if (this.phoneVideo.duration) {
          const pct = (this.phoneVideo.currentTime / this.phoneVideo.duration) * 100;
          if (this.phoneProgressBar) {
            this.phoneProgressBar.style.width = pct + '%';
          }
        }
      });

      this.phoneVideo.addEventListener('ended', () => {
        const nextIdx = (this.currentReelIndex + 1) % this.reels.length;
        this.loadReel(nextIdx);
      });
    }
  }

  renderTabs() {
    if (!this.tabsContainer) return;
    this.tabsContainer.innerHTML = '';

    this.reels.forEach((reel, idx) => {
      const card = document.createElement('div');
      card.className = 'reel-tab-card' + (idx === 0 ? ' active' : '');
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.innerHTML = `
        <div class="reel-tab-left">
          <span class="reel-tab-meta">${reel.category} · ${reel.establishment}</span>
          <span class="reel-tab-title">${reel.title}</span>
        </div>
        <div class="reel-tab-metrics">
          <span class="reel-tab-views">${reel.stats.views}</span>
          <span class="reel-tab-saves">${reel.stats.saves} saves</span>
        </div>
      `;

      card.addEventListener('click', () => {
        this.loadReel(idx);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.loadReel(idx);
        }
      });

      this.tabsContainer.appendChild(card);
    });
  }

  loadReel(index) {
    this.currentReelIndex = index;
    const reel = this.reels[index];
    if (!reel) return;

    // Update tab styling
    const tabs = this.tabsContainer.querySelectorAll('.reel-tab-card');
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
    });

    // Update phone video or fallback image
    if (this.phoneVideo && reel.videoSrc) {
      this.phoneVideo.style.display = 'block';
      if (this.phoneImg) this.phoneImg.style.display = 'none';

      this.phoneVideo.src = reel.videoSrc;
      if (reel.videoThumb) {
        this.phoneVideo.poster = reel.videoThumb;
      }
      this.phoneVideo.load();
      if (this.isPlaying) {
        const playPromise = this.phoneVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.log('Autoplay deferred until user interaction:', err);
          });
        }
      }
    } else if (this.phoneImg) {
      if (this.phoneVideo) this.phoneVideo.style.display = 'none';
      this.phoneImg.style.display = 'block';
      this.phoneImg.src = reel.videoThumb;
    }

    if (this.phoneEstablishment) {
      this.phoneEstablishment.textContent = reel.establishment;
    }
    if (this.phoneHookCaption) {
      this.phoneHookCaption.textContent = reel.hookText;
    }
    if (this.phoneAudioTrack) {
      this.phoneAudioTrack.textContent = reel.audioTrack;
    }

    // Toggle Beauty Filter & Badge
    if (reel.beautyFilter) {
      if (this.phoneVideo) this.phoneVideo.classList.add('beauty-filter-active');
      if (this.phoneBeautyBadge) this.phoneBeautyBadge.style.display = 'inline-flex';
    } else {
      if (this.phoneVideo) this.phoneVideo.classList.remove('beauty-filter-active');
      if (this.phoneBeautyBadge) this.phoneBeautyBadge.style.display = 'none';
    }

    // Render script timeline
    if (this.scriptPanel) {
      this.scriptPanel.innerHTML = `
        <h4>The 20-Second Narrative Architecture</h4>
        <div class="reel-script-steps">
          ${reel.scriptTimeline.map(step => `
            <div class="reel-script-step">
              <span class="reel-step-time">${step.time}</span>
              <span class="reel-step-desc">${step.action}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    this.updatePlayBtnState();
  }

  togglePlayback() {
    if (!this.phoneVideo) return;
    if (this.phoneVideo.paused) {
      this.isPlaying = true;
      this.phoneVideo.play().catch(() => {});
    } else {
      this.isPlaying = false;
      this.phoneVideo.pause();
    }
    this.updatePlayBtnState();
  }

  updatePlayBtnState() {
    if (!this.phonePlaybackBtn) return;
    const isPaused = this.phoneVideo ? this.phoneVideo.paused : !this.isPlaying;
    if (isPaused) {
      this.phonePlaybackBtn.innerHTML = '▶';
      this.phonePlaybackBtn.setAttribute('aria-label', 'Play Reel');
      if (this.phoneMedia) this.phoneMedia.classList.remove('playing');
    } else {
      this.phonePlaybackBtn.innerHTML = '❚❚';
      this.phonePlaybackBtn.setAttribute('aria-label', 'Pause Reel');
      if (this.phoneMedia) this.phoneMedia.classList.add('playing');
    }
  }
}

window.ReelPlayer = ReelPlayer;
