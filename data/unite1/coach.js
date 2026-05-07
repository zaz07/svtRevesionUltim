const coachUnite1 = {
  unite: 1,
  titre: "Entraînement Neurocognitif",
  
  // Résumé en Bullet Points (Lecture en 2 min)
  ficheCondensee: [
    "🧠 **GLYCOLYSE** : Dans le hyaloplasme. Anaérobie (sans O2). 1 Glucose (C6) devient 2 Pyruvates (C3). Bilan : 2 ATP + 2 NADH,H+.",
    "🏭 **MITOCHONDRIE** : Usine énergétique (Respiration). Le Pyruvate entre dans la Matrice, devient Acétyl-CoA, puis tourne dans le **Cycle de Krebs** (libère CO2, ATP, NADH,H+, FADH2).",
    "⚡ **CHAÎNE RESPIRATOIRE** : Sur la membrane interne (crêtes). Les transporteurs se vident de leurs électrons. Les protons sont pompés, puis rentrent via l'**ATP Synthase**. L'Accepteur final est l'O2 (qui devient H2O). Bilan total = 38 ATP.",
    "🍺 **FERMENTATION** : Si pas d'O2. Reste dans le hyaloplasme. Lactique (muscle = acide lactique, fatigue) ou Alcoolique (levure = éthanol + CO2). Bilan très faible : 2 ATP.",
    "💪 **MUSCLE SQUELETTIQUE** : Fibre = cellule géante multinucléée. Myofibrille = Actine (fin/clair) + Myosine (épais/sombre).",
    "📏 **SARCOMÈRE** : Unité de base (entre deux stries Z). Se raccourcit lors de la contraction (les bandes claires et la zone H diminuent, la bande sombre A reste intacte).",
    "⚙️ **MÉCANISME** : Influx nerveux -> RS libère **Ca2+**. Le Ca2+ se fixe sur la troponine. La myosine s'accroche à l'actine. L'hydrolyse de l'**ATP** fait pivoter la tête. Un NOUVEL ATP détache la tête.",
    "🔥 **ÉNERGIE MUSCULAIRE** : Chaleur initiale (pendant la secousse, voies anaérobies rapides comme la phosphocréatine). Chaleur retardée (après la secousse, lente, voie aérobie / respiration)."
  ],

  // 10 Questions pour la mémoire vive (10 secondes par question)
  quizChrono: [
    {
      id: "c1_1",
      enonce: "Combien d'ATP rapporte la glycolyse ?",
      choix: { A: "38 ATP", B: "2 ATP", C: "0 ATP" },
      reponseCorrecte: "B"
    },
    {
      id: "c1_2",
      enonce: "Où se déroule le cycle de Krebs ?",
      choix: { A: "Hyaloplasme", B: "Membrane interne", C: "Matrice mitochondriale" },
      reponseCorrecte: "C"
    },
    {
      id: "c1_3",
      enonce: "Quel filament musculaire est qualifié de 'sombre' et 'épais' ?",
      choix: { A: "Actine", B: "Myosine", C: "Tropomyosine" },
      reponseCorrecte: "B"
    },
    {
      id: "c1_4",
      enonce: "Quel ion déclenche la contraction musculaire ?",
      choix: { A: "Sodium (Na+)", B: "Calcium (Ca2+)", C: "Potassium (K+)" },
      reponseCorrecte: "B"
    },
    {
      id: "c1_5",
      enonce: "Quelle fermentation dégage du CO2 ?",
      choix: { A: "Lactique", B: "Alcoolique", C: "Les deux" },
      reponseCorrecte: "B"
    },
    {
      id: "c1_6",
      enonce: "Qui est l'accepteur final d'électrons dans la respiration ?",
      choix: { A: "L'Oxygène (O2)", B: "L'ATP", C: "L'Eau (H2O)" },
      reponseCorrecte: "A"
    },
    {
      id: "c1_7",
      enonce: "La chaleur retardée provient de :",
      choix: { A: "La respiration cellulaire", B: "La phosphocréatine", C: "La glycolyse" },
      reponseCorrecte: "A"
    },
    {
      id: "c1_8",
      enonce: "Que permet la fixation d'un nouvel ATP sur la myosine ?",
      choix: { A: "Le pivotement", B: "Le détachement", C: "La contraction" },
      reponseCorrecte: "B"
    },
    {
      id: "c1_9",
      enonce: "Le sarcomère est délimité par deux :",
      choix: { A: "Lignes M", B: "Stries Z", C: "Bandes A" },
      reponseCorrecte: "B"
    },
    {
      id: "c1_10",
      enonce: "Voie métabolique d'urgence extrême (quelques secondes) :",
      choix: { A: "Respiration", B: "Fermentation", C: "Voie alactique (Créatine)" },
      reponseCorrecte: "C"
    }
  ],

  // 3 Questions très complexes regroupant plusieurs concepts
  bossDeFin: [
    {
      id: "b1_1",
      enonce: "Un athlète s'injecte une substance qui rend la membrane interne de ses mitochondries totalement perméable aux protons. Que se passera-t-il ?",
      choix: { 
        A: "Sa production d'ATP va exploser.", 
        B: "La chaîne respiratoire s'arrête, il meurt asphyxié.", 
        C: "Le gradient de protons ne peut plus se former, l'ATP synthase s'arrête, toute l'énergie se dissipe en chaleur mortelle."
      },
      reponseCorrecte: "C",
      explication: "C'est le mécanisme des agents découplants. Les protons rentrent sans passer par la turbine (ATP synthase). L'énergie est perdue en chaleur."
    },
    {
      id: "b1_2",
      enonce: "On bloque artificiellement les canaux à Calcium du réticulum sarcoplasmique d'une grenouille. On stimule le nerf. Résultat ?",
      choix: { 
        A: "Le muscle se contracte normalement.", 
        B: "Le muscle ne se contracte pas car l'actine reste masquée par la tropomyosine.", 
        C: "Le muscle reste contracté de façon permanente (tétanos)." 
      },
      reponseCorrecte: "B",
      explication: "Sans libération de Ca2+, la troponine ne bouge pas. La tropomyosine masque toujours les sites de fixation. La myosine ne peut pas s'accrocher."
    },
    {
      id: "b1_3",
      enonce: "Une levure est placée dans un milieu riche en glucose et sans oxygène. Au bout d'une heure, on injecte soudainement de l'O2. Que mesure-t-on ?",
      choix: { 
        A: "La production d'éthanol chute, la production d'ATP augmente massivement, et le cycle de Krebs démarre.", 
        B: "La levure meurt par choc oxydatif.", 
        C: "La glycolyse s'arrête immédiatement." 
      },
      reponseCorrecte: "A",
      explication: "C'est l'effet Pasteur. La levure passe de la fermentation (sans O2) à la respiration (avec O2). L'éthanol n'est plus produit, l'ATP grimpe à 38 au lieu de 2."
    }
  ]
};
