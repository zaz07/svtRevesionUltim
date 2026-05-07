/**
 * Script de fusion des données des 5 agents en un fichier unifié par unité.
 * Exécuter avec: node build_data.js
 */
const fs = require('fs');
const vm = require('vm');

function guessTheme(text) {
  const t = text.toLowerCase();
  if (t.includes('glycolyse') || t.includes('glucose') || t.includes('pyruvate')) return 'glycolyse';
  if (t.includes('krebs') || t.includes('acétyl') || t.includes('matrice') || t.includes('décarboxylation')) return 'krebs';
  if (t.includes('chaîne') || t.includes('respiratoire') || t.includes('proton') || t.includes('atp synthase') || t.includes('complexe') || t.includes('électron')) return 'chaine_respiratoire';
  if (t.includes('fermentation') || t.includes('lactique') || t.includes('alcoolique') || t.includes('éthanol')) return 'fermentation';
  if (t.includes('muscle') || t.includes('sarcomère') || t.includes('myosine') || t.includes('actine') || t.includes('contraction') || t.includes('tétanos') || t.includes('rhéobase') || t.includes('myofibrille') || t.includes('secousse')) return 'muscle';
  if (t.includes('chaleur') || t.includes('thermique') || t.includes('phosphocréatine') || t.includes('atp') || t.includes('énergie')) return 'energie_atp';
  
  if (t.includes('adn') || t.includes('réplication') || t.includes('chromosome') || t.includes('mutation')) return 'genetique';
  if (t.includes('méiose') || t.includes('fécondation') || t.includes('brassage') || t.includes('gamète')) return 'meiose';
  if (t.includes('mendel') || t.includes('croisement') || t.includes('test') || t.includes('létal')) return 'statistiques';
  
  if (t.includes('déchet') || t.includes('ordure') || t.includes('compostage') || t.includes('méthanisation')) return 'dechets';
  if (t.includes('pollution') || t.includes('serre') || t.includes('ozone') || t.includes('eutrophisation')) return 'pollution';
  if (t.includes('radioactiv') || t.includes('demi-vie') || t.includes('nucléaire')) return 'radioactivite';
  
  if (t.includes('granite') || t.includes('anatexie') || t.includes('magma') || t.includes('roche')) return 'granitisation';
  if (t.includes('métamorphisme') || t.includes('schistosité') || t.includes('foliation') || t.includes('pression')) return 'metamorphisme';
  if (t.includes('subduction') || t.includes('obduction') || t.includes('collision') || t.includes('plaque')) return 'tectonique';

  return 'general';
}

function addMeta(questions, difficulte, themePrefix) {
  if (!questions) return [];
  return questions.map(q => {
    const theme = guessTheme(q.enonce + ' ' + (q.explication || ''));
    return { ...q, difficulte, theme: q.theme || theme }; // keep existing theme if present
  });
}

function buildUnite(uniteNumber) {
    const dir = `data/unite${uniteNumber}`;
    if (!fs.existsSync(dir)) return;

    const files = [
        `${dir}/architecte.js`,
        `${dir}/forgeron.js`,
        `${dir}/piegeur.js`,
        `${dir}/coach.js`,
        `${dir}/correcteur.js`
    ];

    const sandbox = {};
    vm.createContext(sandbox);

    // Lire et exécuter tous les fichiers sources dans le contexte
    files.forEach(f => {
        if (fs.existsSync(f)) {
            let code = fs.readFileSync(f, 'utf8');
            code = code.replace(/const /g, 'var ');
            vm.runInContext(code, sandbox);
        }
    });

    const architecte = sandbox[`architecteUnite${uniteNumber}`];
    const forgeron = sandbox[`forgeronUnite${uniteNumber}`];
    const piegeur = sandbox[`piegeurUnite${uniteNumber}`];
    const coach = sandbox[`coachUnite${uniteNumber}`];
    const correcteur = sandbox[`correcteurUnite${uniteNumber}`];

    if (!architecte) return;

    const allQuestions = [
        ...addMeta(forgeron ? forgeron.questions : [], 'facile', 'f'),
        ...addMeta(piegeur ? piegeur.questions : [], 'piege', 'p'),
        ...addMeta(coach ? coach.quizChrono : [], 'facile', 'c'),
        ...addMeta(coach ? coach.bossDeFin : [], 'expert', 'b'),
    ];

    const parcoursDefaut = {
        "5min": [
          "Lisez la Fiche Express (onglet Cours)."
        ],
        "15min": [
          "Lisez la Fiche Express + les Zones de Confusion.",
          "Lancez un Quiz de 10 questions en mode Entraînement Libre."
        ],
        "30min": [
          "Lancez un Examen Blanc complet (20 questions, 15 min).",
          "Consultez l'onglet Bilan pour voir vos points faibles."
        ]
    };

    const unified = {
        unite: uniteNumber,
        titre: architecte.titre,
        conceptsPiliers: architecte.conceptsPiliers,
        zonesConfusion: architecte.zonesConfusion,
        tableauObjectifs: architecte.tableauObjectifs,
        ficheCondensee: coach ? coach.ficheCondensee : [],
        questions: allQuestions,
        erreursFrequentes: correcteur ? correcteur.sections : [],
        parcours: architecte.parcours || parcoursDefaut
    };

    const output = `const UNITE_${uniteNumber} = ${JSON.stringify(unified, null, 2)};`;
    fs.writeFileSync(`data/unite${uniteNumber}.js`, output, 'utf8');
    console.log(`✅ Fichier unifié créé : data/unite${uniteNumber}.js (${allQuestions.length} questions)`);
}

[1, 2, 3, 4].forEach(buildUnite);
