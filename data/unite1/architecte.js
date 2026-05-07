const architecteUnite1 = {
  unite: 1,
  titre: "Consommation de la Matière Organique et Flux d'Énergie",
  conceptsPiliers: [
    "La Glycolyse : étape commune et universelle de dégradation du glucose.",
    "La Respiration cellulaire : dégradation totale en milieu aérobie (mitochondrie).",
    "La Fermentation : dégradation partielle en milieu anaérobie (hyaloplasme).",
    "Le Rôle de l'ATP : molécule énergétique universelle de la cellule.",
    "L'Ultrastructure musculaire : le sarcomère comme unité fonctionnelle (Actine/Myosine).",
    "Le Mécanisme de contraction : glissement des myofilaments déclenché par le Ca2+ et l'ATP.",
    "Les Voies de régénération de l'ATP : rapide (alactique), moyenne (lactique) et lente (aérobie)."
  ],
  detailsCritiques: [
    { type: "Bilan", contenu: "Glycolyse : 1 Glucose -> 2 Pyruvates + 2 ATP + 2 NADH,H+" },
    { type: "Bilan", contenu: "Respiration (rendement global) : 38 ATP (à partir d'un Glucose)" },
    { type: "Bilan", contenu: "Fermentation (rendement global) : 2 ATP" },
    { type: "Définition", contenu: "Rhéobase : Intensité minimale d'excitation provoquant une secousse musculaire." },
    { type: "Mécanisme", contenu: "Phosphorylation oxydative : L'ATP Synthase utilise le gradient de protons (H+) pour produire massivement de l'ATP." },
    { type: "Définition", contenu: "Tétanos parfait : Fusion complète des secousses (2ème stimulation pendant la phase de contraction)." }
  ],
  zonesConfusion: [
    {
      notions: "Hyaloplasme vs Cytoplasme",
      explication: "Le cytoplasme inclut TOUS les organites (dont la mitochondrie), alors que le hyaloplasme est le liquide pur (cytosol). La glycolyse a lieu strictement dans le hyaloplasme."
    },
    {
      notions: "Tétanos Parfait vs Imparfait",
      explication: "Parfait = 2ème stimulation pendant la phase de CONTRACTION. Imparfait = 2ème stimulation pendant la phase de RELÂCHEMENT."
    },
    {
      notions: "Chaleur Initiale vs Retardée",
      explication: "Initiale = dégagée pendant la secousse (liée aux voies anaérobies rapides). Retardée = dégagée bien après la secousse (liée à la respiration aérobie, plus lente)."
    },
    {
      notions: "Fermentation Lactique vs Alcoolique",
      explication: "Lactique (ex: muscle) produit de l'acide lactique causant la fatigue, SANS dégagement de CO2. Alcoolique (ex: levure) produit de l'éthanol AVEC dégagement de CO2."
    }
  ],
  tableauObjectifs: {
    debutant: [
      "Savoir définir la glycolyse, la respiration et la fermentation.",
      "Connaître l'anatomie générale d'un muscle squelettique (faisceaux, fibres, myofibrilles)."
    ],
    intermediaire: [
      "Pouvoir écrire les bilans énergétiques exacts (2 ATP vs 38 ATP).",
      "Savoir légender un sarcomère (Stries Z, Bande A, Bande I).",
      "Différencier la chaleur initiale de la chaleur retardée."
    ],
    expert: [
      "Expliquer le couplage chimio-mécanique précis de la contraction (rôle de la troponine, démasquage par le Ca2+, hydrolyse ATP).",
      "Détailler le fonctionnement de la chaîne respiratoire (oxydoréduction et pompage des protons).",
      "Analyser et interpréter des myogrammes expérimentaux complexes (sommation, tétanos, recrutement, fatigue)."
    ]
  }
};
