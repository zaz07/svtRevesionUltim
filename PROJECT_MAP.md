# 🗺️ PROJECT_MAP.md — Mémoire Externe du Projet SVT Révision Ultime

> **Dernière mise à jour :** 2026-05-07  
> **Auteur :** PROF OTMANE-SVT  
> **Cible :** 2BAC — Mسلك العلوم الفيزيائية (option française)  
> **Objectif :** Plateforme de révision 100% offline-first pour préparer l'Examen National

---

## [TECH_STACK]

### Runtime & Build
| Outil | Rôle | Commande |
|-------|------|----------|
| `Node.js` | Compilation des données (BUILD uniquement, pas en runtime) | `node build_data.js` |
| `pdftotext` (poppler-utils) | Extraction de texte depuis les PDFs des annales | `pdftotext -layout *.pdf *.txt` |

### Frontend (100% Offline — protocole `file://`)
| Technologie | Usage |
|-------------|-------|
| **HTML5** sémantique | Structure de toutes les pages |
| **Vanilla CSS** (`css/style.css`) | Design système des pages unités/agents |
| **Tailwind CSS CDN** | Uniquement dans `index.html` (chargement CDN — ⚠️ nécessite internet) |
| **Vanilla JavaScript** | Moteur interactif (`js/engine.js`) + contrôleurs agents (`js/agent_*.js`) |
| **Google Fonts CDN** | Inter + Outfit dans `index.html` (⚠️ nécessite internet) |

### Contraintes techniques STRICTES
- ❌ Aucun framework JS (React, Vue, Angular)
- ❌ Aucune dépendance runtime externe (tout doit fonctionner en `file://`)
- ✅ JSON strict : clés entre guillemets doubles, zéro virgule traînante
- ✅ `localStorage` pour la persistance des scores/bilan entre sessions

---

## [SYSTEM_FLOW]

### Flux de compilation des données (BUILD)

```
data/uniteX/
  ├── architecte.js   →  conceptsPiliers, zonesConfusion, tableauObjectifs, parcours
  ├── forgeron.js     →  questions faciles (+ mnemotechnique = Flash Cards)
  ├── piegeur.js      →  questions pièges (difficulte: "piege")
  ├── coach.js        →  ficheCondensee, quizChrono, bossDeFin (difficulte: "expert")
  └── correcteur.js   →  erreursFrequentes (sections d'erreurs typiques)
           │
           ▼
    node build_data.js
    (via Node vm sandbox — exécute chaque fichier, agrège les tableaux)
           │
           ▼
    data/uniteX.js   →  const UNITE_X = { unite, titre, conceptsPiliers,
                          zonesConfusion, ficheCondensee, questions[],
                          erreursFrequentes, parcours }
```

### Flux de rendu côté navigateur (RUNTIME)

```
Utilisateur ouvre uniteX.html
        │
        ├── <script src="data/uniteX.js">   → injecte UNITE_X en global window
        ├── <script src="js/engine.js">     → définit l'objet SVT
        └── <script> SVT.init(UNITE_X) </script>
                │
                ├── renderCours()       → Bento Grid (concepts piliers + fiche condensée)
                ├── bindTabs()          → Gestion des onglets (Cours / Quiz / Flash / Bilan)
                ├── showQuizMenu()      → Choix du mode quiz
                ├── initFlash()         → Filtre questions avec "mnemotechnique" → Flash Cards
                └── renderBilan()       → Lecture localStorage → statistiques personnelles
```

### Flux des pages Agents (dynamique multi-unités)

```
agent_architecte.html?unite=2
        │
        ├── document.write injecte data/unite2/architecte.js dynamiquement
        └── js/agent_architecte.js lit URLSearchParams → window[`architecteUnite2`]
```

---

## [ARCHITECTURE]

### Arborescence complète du projet

```
svtRevesionUltim/
│
├── 📄 index.html                  ← Page d'accueil (Tailwind + Google Fonts CDN)
│
├── 📄 unite1.html                 ← Page révision Unité 1 (engine.js + UNITE_1)
├── 📄 unite2.html                 ← Page révision Unité 2 (engine.js + UNITE_2)
├── 📄 unite3.html                 ← Page révision Unité 3 (engine.js + UNITE_3)
├── 📄 unite4.html                 ← Page révision Unité 4 (engine.js + UNITE_4)
│
├── 📄 revision_unite1.html        ← Cours détaillés Unité 1 (statique)
├── 📄 revision_unite2.html        ← Cours détaillés Unité 2 (statique)
├── 📄 revision_unite3.html        ← Cours détaillés Unité 3 (statique)
├── 📄 revision_unite4.html        ← Cours détaillés Unité 4 (statique)
│
├── 📄 agent_architecte.html       ← Vue Agent Architecte (dynamique ?unite=X)
├── 📄 agent_coach.html            ← Vue Agent Coach (dynamique ?unite=X)
├── 📄 agent_forgeron.html         ← Vue Agent Forgeron / Flash Cards (dynamique ?unite=X)
├── 📄 agent_piegeur.html          ← Vue Agent Pièges (dynamique ?unite=X)
├── 📄 agent_correcteur.html       ← Vue Agent Correcteur (dynamique ?unite=X)
│
├── 📄 analyse_examens.html        ← Analyse SMART annales nationales 2016-2025 ✨ NOUVEAU
│
├── 🔧 build_data.js               ← Script Node.js de compilation (BUILD ONLY)
├── 🔧 refactor_agents.js          ← Script de refactoring des agents (ponctuel)
├── 🔧 refactor_agent_pages.js     ← Script de refactoring des pages HTML agents (ponctuel)
│
├── 📄 audit_conformite.md         ← Rapport d'audit de cohérence des données
├── 📄 deployment_guide.md         ← Guide de déploiement (GitHub Pages, Netlify, Google Sites)
├── 📄 prompt.md                   ← Prompts de génération initiale
│
├── css/
│   └── style.css                  ← Design system global (variables CSS, composants)
│
├── js/
│   ├── engine.js                  ← Moteur universel (Quiz, Flash, Timer, localStorage)
│   ├── agent_architecte.js        ← Contrôleur Vue Architecte (URLSearchParams)
│   ├── agent_coach.js             ← Contrôleur Vue Coach
│   ├── agent_forgeron.js          ← Contrôleur Vue Forgeron / Flash Cards
│   ├── agent_piegeur.js           ← Contrôleur Vue Pièges
│   └── agent_correcteur.js        ← Contrôleur Vue Correcteur
│
├── data/
│   ├── unite1.js                  ← UNITE_1 compilé (102 questions)
│   ├── unite2.js                  ← UNITE_2 compilé (49 questions)
│   ├── unite3.js                  ← UNITE_3 compilé (63 questions)
│   ├── unite4.js                  ← UNITE_4 compilé (73 questions)
│   │
│   ├── unite1/                    ← Sources Unité 1 (Métabolisme énergétique)
│   │   ├── architecte.js          → conceptsPiliers, zonesConfusion
│   │   ├── forgeron.js            → 14 questions faciles (⚠️ 0 mnemotechnique)
│   │   ├── piegeur.js             → questions pièges
│   │   ├── coach.js               → ficheCondensee + quizChrono + bossDeFin
│   │   └── correcteur.js          → erreursFrequentes
│   │
│   ├── unite2/                    ← Sources Unité 2 (Génétique & Lois statistiques)
│   │   ├── architecte.js
│   │   ├── forgeron.js            → 8 questions (✅ 8 mnemotechnique)
│   │   ├── piegeur.js
│   │   ├── coach.js
│   │   └── correcteur.js
│   │
│   ├── unite3/                    ← Sources Unité 3 (Matières organiques & env.)
│   │   ├── architecte.js
│   │   ├── forgeron.js            → 8 questions (✅ 8 mnemotechnique)
│   │   ├── piegeur.js
│   │   ├── coach.js
│   │   └── correcteur.js
│   │
│   └── unite4/                    ← Sources Unité 4 (Phénomènes géologiques)
│       ├── architecte.js
│       ├── forgeron.js            → 14 questions (✅ 14 mnemotechnique)
│       ├── piegeur.js
│       ├── coach.js
│       └── correcteur.js
│
├── examens /                      ← Annales nationales (source brute)
│   ├── Examens N. +corresction PC__compressed.pdf   ← PDF source (2016-2025)
│   └── examens_extracted.txt      ← Texte extrait via pdftotext (9534 lignes)
│
├── unite 1/                       ← PDFs cours originaux + texte extrait
│   ├── page-3.pdf → page-8.pdf
│   └── extracted_unite1.txt
├── unite 2/                       ← page-9.pdf → page-19.pdf + extracted_unite2.txt
├── unite 3/                       ← page-20.pdf → page-27.pdf + extracted_content.txt
└── unite 4/                       ← page-28.pdf → page-37.pdf + extracted_unite4.txt
```

### Schéma des 5 Agents pédagogiques

| Agent | Fichier source | Rôle pédagogique | Type de contenu |
|-------|---------------|------------------|-----------------|
| 🏗️ **Architecte** | `architecte.js` | Vue d'ensemble structurée | conceptsPiliers, zonesConfusion, tableauObjectifs |
| 🔨 **Forgeron** | `forgeron.js` | Questions de base (Flash Cards) | QCM facile + `mnemotechnique` |
| 🎯 **Pièges** | `piegeur.js` | Questions difficiles pièges | QCM avec leurres subtils |
| 🏃 **Coach** | `coach.js` | Fiches condensées + challenge | ficheCondensee + quizChrono + bossDeFin |
| ✅ **Correcteur** | `correcteur.js` | Erreurs fréquentes typiques | Sections d'erreurs catégorisées |

### Mécanique des Flash Cards (engine.js)

```javascript
// Dans engine.js → initFlash()
this.flashQuestions = this.shuffle([
  ...this.data.questions.filter(q => q.mnemotechnique)
]);
// → Seules les questions avec la clé "mnemotechnique" deviennent des Flash Cards
// → Recto : q.enonce  |  Verso : q.reponseCorrecte + q.mnemotechnique
```

### Mécanique du Bilan (localStorage)

```javascript
// Clé de stockage : "svt_bilan_u1" (par unité)
// Structure stockée : { correct: N, wrong: N, themes: { theme: [correct, total] } }
// Affiché dans l'onglet Bilan avec calcul du taux de réussite par thème
```

---

## [ORPHANS & PENDING]

### 🔴 Critique — Manquant / Cassé

| Item | Fichier concerné | Problème | Action requise |
|------|-----------------|----------|----------------|
| **index.html CDN-dépendant** | `index.html` | Tailwind CSS + Google Fonts chargés depuis CDN → page cassée en mode offline total | Télécharger Tailwind localement OU accepter la dépendance internet |

### 🟠 Important — Incomplet

| Item | Fichier concerné | Problème | Action requise |
|------|-----------------|----------|----------------|
| **Questions des annales intégrées** | `examens /examens_extracted.txt` | Résolu — Toutes les questions d'annales 2016-2025 sont intégrées dans les agents | ✅ Intégrées et unifiées dans les fichiers sources de type `forgeron.js` |
| **page-2.pdf orphelin** | `page-2.pdf` (racine) | PDF isolé à la racine, non associé à une unité, contenu inconnu | Conserver à la racine comme ressource annexe |

### 🟡 Amélioration — Pending

| Item | Priorité | Description |
|------|----------|-------------|
| **Mode "Examen Blanc Officiel"** | ⭐⭐⭐ | ✅ Réalisé — Intégration complète avec chronomètre par question et calcul des scores sur 20 |
| **Page "Annales par année"** | ⭐⭐⭐ | ✅ Réalisé — Page `annales.html` interactive avec sélection par année/session et correction mnémonique |
| **Guides de rédaction** | ⭐⭐ | ✅ Réalisé — Création du Guide de Rédaction d'Élite `guide_redaction.html` avec Challenge interactif |
| **Offline complet** | ⭐⭐ | ✅ Réalisé — Page d'accueil convertie en pur CSS d'élite local, libérée de Tailwind CDN |
| **Lien Agents depuis uniteX.html** | ⭐ | ✅ Réalisé — Bandeau de 5 boutons d'Agents d'Élite ajoutés sur chaque page unité |

### 📊 Tableau de couverture Flash Cards

| Unité | Questions forgeron | Questions avec mnemotechnique | Flash Cards disponibles |
|-------|--------------------|-------------------------------|------------------------|
| Unité 1 — Métabolisme | 50 | 50 ✅ | ✅ Fonctionnelles |
| Unité 2 — Génétique | 8 | 8 ✅ | ✅ Fonctionnelles |
| Unité 3 — Environnement | 8 | 8 ✅ | ✅ Fonctionnelles |
| Unité 4 — Géologie | 14 | 14 ✅ | ✅ Fonctionnelles |

### 📊 Tableau de couverture QCM

| Unité | Questions totales compilées | Difficile | Pièges | Expert |
|-------|----------------------------|-----------|--------|--------|
| Unité 1 | **102** | ✅ 14 | ✅ présents | ✅ présents |
| Unité 2 | **49** | ✅ 8 | ✅ présents | ✅ présents |
| Unité 3 | **63** | ✅ 8 | ✅ présents | ✅ présents |
| Unité 4 | **73** | ✅ 14 | ✅ présents | ✅ présents |

---

## Commandes utiles

```bash
# Recompiler toutes les données après modification d'un agent
node build_data.js

# Extraire le texte d'un PDF
pdftotext -layout "fichier.pdf" "sortie.txt"

# Vérifier la couverture des flash cards
grep -c '"mnemotechnique"' data/unite*/forgeron.js

# Compter les questions par unité compilée
node -e "require('./data/unite1.js'); console.log(UNITE_1.questions.length)"
```

---

*Ce fichier est la mémoire externe du projet. Il doit être mis à jour après chaque session de travail significative.*
