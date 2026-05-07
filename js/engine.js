/**
 * engine.js — Moteur Universel SVT 2BAC
 * Un seul fichier JS pour gérer : Quiz, Flash Cards, Timer, localStorage, Shuffle.
 */

const SVT = {
  // --- État global ---
  currentTab: 'cours',
  quizMode: null,       // 'libre', 'examen', 'faibles'
  quizQuestions: [],
  quizIndex: 0,
  quizScore: 0,
  timerInterval: null,
  examTimeLeft: 0,
  flashIndex: 0,
  flashQuestions: [],
  unitKey: '',          // ex: 'u1'

  // --- Initialisation ---
  init(data) {
    this.data = data;
    this.unitKey = 'u' + data.unite;
    document.getElementById('page-title').textContent = data.titre;

    // Mise à jour dynamique du nombre de questions
    const subtitle = document.querySelector('header p');
    if (subtitle) {
      subtitle.textContent = `${data.questions.length} questions · Flash Cards · Bilan intelligent`;
    }
    const modeDesc = document.querySelector('.mode-desc');
    if (modeDesc) {
      modeDesc.textContent = `${data.questions.length} questions mélangées aléatoirement. Pas de chrono.`;
    }

    this.renderCours();
    this.renderBilan();
    this.bindTabs();
  },

  // ========================
  // TABS
  // ========================
  bindTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });
  },

  switchTab(tab) {
    this.currentTab = tab;
    // Cleanup
    clearInterval(this.timerInterval);

    // Toggle buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');

    // Toggle content
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');

    // Reset quiz/flash views when switching away
    if (tab === 'quiz') {
      this.showQuizMenu();
    } else if (tab === 'flash') {
      this.initFlash();
    } else if (tab === 'bilan') {
      this.renderBilan();
    }
  },

  // ========================
  // COURS TAB
  // ========================
  renderCours() {
    // Fiche condensée
    const condensedEl = document.getElementById('condensed-list');
    if (condensedEl) {
      condensedEl.innerHTML = '';
      this.data.ficheCondensee.forEach(item => {
        const div = document.createElement('div');
        div.className = 'bullet-item';
        div.innerHTML = item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        condensedEl.appendChild(div);
      });
    }

    // Zones de confusion
    const confEl = document.getElementById('confusion-list');
    if (confEl) {
      confEl.innerHTML = '';
      this.data.zonesConfusion.forEach(z => {
        const div = document.createElement('div');
        div.className = 'confusion-card';
        div.innerHTML = `<div class="confusion-title">⚠️ ${z.notions}</div><div class="confusion-text">${z.explication}</div>`;
        confEl.appendChild(div);
      });
    }

    // Concepts piliers
    const conceptsEl = document.getElementById('concepts-list');
    if (conceptsEl) {
      conceptsEl.innerHTML = '';
      this.data.conceptsPiliers.forEach(c => {
        const div = document.createElement('div');
        div.className = 'bullet-item';
        div.textContent = c;
        conceptsEl.appendChild(div);
      });
    }

    // Objectifs
    ['debutant','intermediaire','expert'].forEach(level => {
      const el = document.getElementById('obj-' + level);
      if (el && this.data.tableauObjectifs && this.data.tableauObjectifs[level]) {
        el.innerHTML = '';
        this.data.tableauObjectifs[level].forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          li.style.cssText = 'padding:0.4rem 0; border-bottom:1px solid rgba(255,255,255,0.04); font-size:0.9rem; color:#94a3b8;';
          el.appendChild(li);
        });
      }
    });
  },

  // ========================
  // QUIZ TAB
  // ========================
  showQuizMenu() {
    document.getElementById('quiz-menu').classList.remove('hidden');
    document.getElementById('quiz-play').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    clearInterval(this.timerInterval);

    // Update weak count
    const weakCount = this.getErrors().length;
    const weakEl = document.getElementById('weak-count');
    if (weakEl) weakEl.textContent = weakCount > 0 ? `(${weakCount} questions)` : '(aucune erreur)';
  },

  startQuiz(mode) {
    this.quizMode = mode;
    this.quizIndex = 0;
    this.quizScore = 0;
    clearInterval(this.timerInterval);

    let pool = [...this.data.questions];

    if (mode === 'faibles') {
      const errors = this.getErrors();
      pool = pool.filter(q => errors.includes(q.id));
      if (pool.length === 0) {
        alert('Aucune erreur enregistrée ! Lancez d\'abord un entraînement libre.');
        return;
      }
    }

    // Shuffle
    this.quizQuestions = this.shuffle(pool);

    if (mode === 'examen') {
      this.quizQuestions = this.quizQuestions.slice(0, 20);
      this.examTimeLeft = 15 * 60; // 15 min
    }

    document.getElementById('quiz-menu').classList.add('hidden');
    document.getElementById('quiz-play').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');

    // Mode labels
    const modeLabels = { libre: '🎯 Entraînement Libre', examen: '📝 Examen Blanc (15 min)', faibles: '🔁 Mes Points Faibles' };
    document.getElementById('quiz-mode-label').textContent = modeLabels[mode];

    // Timer visibility
    const timerEl = document.getElementById('exam-timer');
    if (mode === 'examen') {
      timerEl.classList.remove('hidden');
      this.startExamTimer();
    } else {
      timerEl.classList.add('hidden');
    }

    this.loadQuestion();
  },

  loadQuestion() {
    const q = this.quizQuestions[this.quizIndex];
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.classList.add('hidden');

    document.getElementById('quiz-question').textContent = q.enonce;
    document.getElementById('quiz-progress').textContent = `${this.quizIndex + 1} / ${this.quizQuestions.length}`;
    document.getElementById('quiz-score-display').textContent = this.quizScore;

    // Badge
    const badgeEl = document.getElementById('quiz-badge');
    const diffMap = { facile: 'badge-easy', piege: 'badge-trap', expert: 'badge-expert' };
    badgeEl.className = 'badge ' + (diffMap[q.difficulte] || 'badge-easy');
    badgeEl.textContent = (q.difficulte || 'standard').toUpperCase();

    // Progress bar
    const pct = ((this.quizIndex) / this.quizQuestions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = pct + '%';

    // Options
    const optionsEl = document.getElementById('quiz-options');
    optionsEl.innerHTML = '';
    for (const [key, value] of Object.entries(q.choix)) {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = `${key}. ${value}`;
      btn.addEventListener('click', () => this.handleAnswer(key, q, btn));
      optionsEl.appendChild(btn);
    }
  },

  handleAnswer(selectedKey, questionObj, selectedBtn) {
    clearInterval(this.timerInterval); // for chrono if any

    const allBtns = document.getElementById('quiz-options').querySelectorAll('button');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = (selectedKey === questionObj.reponseCorrecte);

    if (isCorrect) {
      selectedBtn.classList.add('correct');
      this.quizScore++;
      document.getElementById('quiz-score-display').textContent = this.quizScore;
      // Remove from errors if previously wrong
      this.removeError(questionObj.id);
    } else {
      selectedBtn.classList.add('wrong');
      this.saveError(questionObj.id);
    }

    // Highlight correct answer
    let i = 0;
    for (const key of Object.keys(questionObj.choix)) {
      if (key === questionObj.reponseCorrecte && allBtns[i]) {
        allBtns[i].classList.add('correct');
      }
      i++;
    }

    // Feedback
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.classList.remove('hidden', 'correct-fb', 'wrong-fb');
    feedbackEl.classList.add(isCorrect ? 'correct-fb' : 'wrong-fb');

    const titleEl = document.getElementById('quiz-fb-title');
    titleEl.className = 'feedback-title ' + (isCorrect ? 'correct-t' : 'wrong-t');
    titleEl.textContent = isCorrect ? '✅ Correct !' : `❌ Réponse : ${questionObj.reponseCorrecte}`;

    document.getElementById('quiz-fb-explain').textContent = questionObj.explication || '';
    document.getElementById('quiz-fb-explain').classList.toggle('hidden', !questionObj.explication);

    // Tip or Piège
    const tipBox = document.getElementById('quiz-fb-tip');
    if (questionObj.mnemotechnique) {
      tipBox.classList.remove('hidden');
      tipBox.className = 'tip-box';
      tipBox.querySelector('.tip-label').textContent = 'Astuce Mnémotechnique';
      tipBox.querySelector('.tip-text').textContent = questionObj.mnemotechnique;
    } else if (questionObj.piegeEvite) {
      tipBox.classList.remove('hidden');
      tipBox.className = 'danger-box';
      tipBox.querySelector('.tip-label').textContent = 'Piège à éviter';
      tipBox.querySelector('.tip-text').textContent = questionObj.piegeEvite;
    } else {
      tipBox.classList.add('hidden');
    }

    // Next button
    const nextBtn = document.getElementById('quiz-next');
    nextBtn.textContent = (this.quizIndex === this.quizQuestions.length - 1) ? 'Voir les résultats 🏆' : 'Suivant ➡️';
  },

  nextQuestion() {
    this.quizIndex++;
    if (this.quizIndex < this.quizQuestions.length) {
      this.loadQuestion();
      if (this.quizMode === 'examen') this.startExamTimer();
    } else {
      this.showQuizResult();
    }
  },

  showQuizResult() {
    clearInterval(this.timerInterval);
    document.getElementById('quiz-play').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    const pct = Math.round((this.quizScore / this.quizQuestions.length) * 100);
    document.getElementById('result-score').textContent = `${pct}%`;
    document.getElementById('result-detail').textContent = `${this.quizScore} / ${this.quizQuestions.length} réponses correctes`;

    // Save best score
    const prevBest = parseInt(localStorage.getItem(`svt_best_${this.unitKey}`) || '0');
    if (pct > prevBest) localStorage.setItem(`svt_best_${this.unitKey}`, pct);

    // Message
    const msgEl = document.getElementById('result-message');
    if (pct === 100) { msgEl.textContent = '🏆 Absolument parfait. Maîtrise totale.'; msgEl.style.color = '#34d399'; }
    else if (pct >= 80) { msgEl.textContent = '💪 Très solide ! Encore un petit effort.'; msgEl.style.color = '#60a5fa'; }
    else if (pct >= 50) { msgEl.textContent = '📖 Pas mal, mais relisez le cours et les zones de confusion.'; msgEl.style.color = '#fbbf24'; }
    else { msgEl.textContent = '🔁 Recommencez en mode "Points faibles" pour cibler vos lacunes.'; msgEl.style.color = '#f87171'; }
  },

  startExamTimer() {
    const timerEl = document.getElementById('exam-timer-text');
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.examTimeLeft--;
      const m = Math.floor(this.examTimeLeft / 60);
      const s = this.examTimeLeft % 60;
      timerEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
      if (this.examTimeLeft <= 60) timerEl.style.color = '#f87171';
      if (this.examTimeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.showQuizResult();
      }
    }, 1000);
  },

  // ========================
  // FLASH CARDS TAB
  // ========================
  initFlash() {
    this.flashQuestions = this.shuffle([...this.data.questions.filter(q => q.mnemotechnique)]);
    this.flashIndex = 0;
    if (this.flashQuestions.length === 0) {
      document.getElementById('flash-area').innerHTML = '<p class="text-center text-muted">Aucune flash card disponible.</p>';
      return;
    }
    this.renderFlashCard();
  },

  renderFlashCard() {
    if (this.flashIndex >= this.flashQuestions.length) {
      document.getElementById('flash-area').innerHTML = `
        <div class="card text-center p-lg">
          <div class="text-3xl font-bold mb-md">🎉 Toutes les cartes vues !</div>
          <p class="text-secondary mb-lg">Vous avez parcouru ${this.flashQuestions.length} flash cards.</p>
          <button class="btn btn-primary" onclick="SVT.initFlash()">Recommencer</button>
        </div>`;
      document.getElementById('flash-controls').classList.add('hidden');
      return;
    }

    const q = this.flashQuestions[this.flashIndex];
    document.getElementById('flash-progress').textContent = `${this.flashIndex + 1} / ${this.flashQuestions.length}`;
    document.getElementById('flash-controls').classList.remove('hidden');

    const area = document.getElementById('flash-area');
    area.innerHTML = `
      <div class="flash-card" id="flash-card-el" onclick="SVT.flipCard()">
        <div class="flash-card-inner">
          <div class="flash-card-front">
            <div class="text-xs uppercase tracking-wide text-muted mb-md font-bold">Cliquez pour retourner</div>
            <div class="text-xl font-bold" style="color:#93c5fd;">${q.enonce}</div>
          </div>
          <div class="flash-card-back">
            <div class="text-xs uppercase tracking-wide text-muted mb-sm font-bold">Réponse</div>
            <div class="text-lg font-bold text-green mb-md">${q.choix[q.reponseCorrecte]}</div>
            <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.2); border-radius:var(--radius-md); padding:0.75rem; width:100%;">
              <div class="text-xs font-bold text-orange uppercase tracking-wide">💡 Astuce</div>
              <div class="text-sm text-secondary" style="margin-top:4px;">${q.mnemotechnique}</div>
            </div>
          </div>
        </div>
      </div>`;
  },

  flipCard() {
    const el = document.getElementById('flash-card-el');
    if (el) el.classList.toggle('flipped');
  },

  flashNext() { this.flashIndex++; this.renderFlashCard(); },
  flashPrev() { if (this.flashIndex > 0) { this.flashIndex--; this.renderFlashCard(); } },

  // ========================
  // BILAN TAB
  // ========================
  renderBilan() {
    // Errors by theme
    const errors = this.getErrors();
    const themes = {};
    this.data.questions.forEach(q => {
      const t = q.theme || 'general';
      if (!themes[t]) themes[t] = { total: 0, errors: 0 };
      themes[t].total++;
      if (errors.includes(q.id)) themes[t].errors++;
    });

    const statsEl = document.getElementById('bilan-stats');
    if (statsEl) {
      statsEl.innerHTML = '';
      for (const [theme, counts] of Object.entries(themes)) {
        const pct = Math.round(((counts.total - counts.errors) / counts.total) * 100);
        const color = pct >= 80 ? 'var(--accent-green)' : pct >= 50 ? 'var(--accent-orange)' : 'var(--accent-red)';
        statsEl.innerHTML += `
          <div class="mb-md">
            <div class="flex justify-between mb-sm">
              <span class="text-sm font-bold" style="text-transform:capitalize;">${theme.replace(/_/g,' ')}</span>
              <span class="text-sm font-bold" style="color:${color};">${pct}%</span>
            </div>
            <div class="stat-bar-track"><div class="stat-bar-fill" style="width:${pct}%;background:${color};"></div></div>
          </div>`;
      }
      if (Object.keys(themes).length === 0) {
        statsEl.innerHTML = '<p class="text-muted text-sm">Lancez un quiz pour voir vos statistiques.</p>';
      }
    }

    // Erreurs fréquentes
    const erreursEl = document.getElementById('bilan-erreurs');
    if (erreursEl && this.data.erreursFrequentes) {
      erreursEl.innerHTML = '';
      this.data.erreursFrequentes.forEach(section => {
        const div = document.createElement('div');
        div.className = 'mb-lg';
        let html = `<div class="font-bold text-lg mb-sm" style="color:#f87171;">${section.nom}</div><div class="space-y">`;
        section.erreursFrequentes.forEach(err => {
          const formatted = err.replace(/(Faux\s*:)/i, '<strong style="color:#f87171;">$1</strong>');
          html += `<div class="erreur-item"><span class="erreur-icon">⚠️</span><span>${formatted}</span></div>`;
        });
        html += `</div>`;
        if (section.methodeFlash) {
          html += `<div class="tip-box mt-md"><span class="tip-icon">⚡</span><div><div class="tip-label">Méthode Flash</div><div class="tip-text">${section.methodeFlash}</div></div></div>`;
        }
        div.innerHTML = html;
        erreursEl.appendChild(div);
      });
    }

    // Parcours
    this.showParcours('5min');

    // Best score
    const best = localStorage.getItem(`svt_best_${this.unitKey}`) || '—';
    const bestEl = document.getElementById('bilan-best');
    if (bestEl) bestEl.textContent = best === '—' ? '—' : best + '%';

    // Total errors
    const errCountEl = document.getElementById('bilan-err-count');
    if (errCountEl) errCountEl.textContent = errors.length;
  },

  showParcours(timeStr) {
    document.querySelectorAll('.parcours-tab').forEach(b => b.classList.remove('active'));
    const activeTab = document.querySelector(`.parcours-tab[data-time="${timeStr}"]`);
    if (activeTab) activeTab.classList.add('active');

    const titles = { '5min': '⚡ Plan Express (5 min)', '15min': '📖 Parcours Standard (15 min)', '30min': '🏋️ Parcours Expert (30 min)' };
    document.getElementById('parcours-title').textContent = titles[timeStr] || '';

    const listEl = document.getElementById('parcours-list');
    if (listEl && this.data.parcours && this.data.parcours[timeStr]) {
      listEl.innerHTML = '';
      this.data.parcours[timeStr].forEach((item, i) => {
        const li = document.createElement('li');
        li.style.cssText = 'padding:0.6rem 0; border-bottom:1px solid rgba(255,255,255,0.04); font-size:0.9rem; color:#94a3b8; display:flex; gap:0.5rem;';
        li.innerHTML = `<span style="color:var(--accent-teal); font-weight:800;">${i + 1}.</span> ${item}`;
        listEl.appendChild(li);
      });
    }
  },

  // ========================
  // localStorage HELPERS
  // ========================
  getErrors() {
    return JSON.parse(localStorage.getItem(`svt_errors_${this.unitKey}`) || '[]');
  },
  saveError(qId) {
    const errors = this.getErrors();
    if (!errors.includes(qId)) { errors.push(qId); localStorage.setItem(`svt_errors_${this.unitKey}`, JSON.stringify(errors)); }
  },
  removeError(qId) {
    let errors = this.getErrors();
    errors = errors.filter(id => id !== qId);
    localStorage.setItem(`svt_errors_${this.unitKey}`, JSON.stringify(errors));
  },
  clearErrors() {
    localStorage.removeItem(`svt_errors_${this.unitKey}`);
    localStorage.removeItem(`svt_best_${this.unitKey}`);
    this.renderBilan();
    alert('Historique réinitialisé !');
  },

  // ========================
  // UTILS
  // ========================
  shuffle(array) {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
};
