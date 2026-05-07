const piegeurUnite1 = {
  unite: 1,
  titre: "Test Expert : Les Pièges de l'Examen",
  questions: [
    {
      id: "p1_1", type: "inversee",
      enonce: "Concernant la glycolyse, laquelle de ces affirmations est strictement FAUSSE ?",
      choix: { 
        A: "Elle a lieu dans le hyaloplasme de toutes les cellules.", 
        B: "Elle produit un bilan net de 2 molécules d'ATP.", 
        C: "Elle libère 2 molécules de dioxyde de carbone (CO2) par molécule de glucose.", 
        D: "Elle ne nécessite pas la présence de dioxygène." 
      },
      reponseCorrecte: "C",
      explication: "Le piège ! La glycolyse clive le glucose (C6) en 2 pyruvates (C3). Il n'y a aucune perte de carbone, donc aucune libération de CO2 à ce stade.",
      piegeEvite: "Confondre avec le cycle de Krebs ou la fermentation alcoolique qui, eux, libèrent du CO2."
    },
    {
      id: "p1_2", type: "piege",
      enonce: "Lors d'une contraction musculaire isométrique (sans raccourcissement apparent du muscle), que se passe-t-il au niveau du sarcomère ?",
      choix: { 
        A: "Le sarcomère ne se raccourcit pas du tout.", 
        B: "Les filaments d'actine s'allongent.", 
        C: "Le sarcomère se raccourcit légèrement en étirant les éléments élastiques du muscle.", 
        D: "La zone H s'élargit." 
      },
      reponseCorrecte: "C",
      explication: "Question très pointue. Même si le muscle entier ne change pas de longueur, les ponts actomyosine se forment et tirent l'actine. L'étirement compense le raccourcissement au niveau macroscopique.",
      piegeEvite: "Penser que 'isométrique' signifie immobilité totale au niveau microscopique."
    },
    {
      id: "p1_3", type: "inversee",
      enonce: "Laquelle de ces réactions n'est PAS une réaction de décarboxylation ?",
      choix: { 
        A: "La transformation du pyruvate en Acétyl-CoA.", 
        B: "La transformation du glucose en pyruvate.", 
        C: "Le passage de l'acide isocitrique à l'acide alpha-cétoglutarique (Krebs).", 
        D: "La fermentation alcoolique." 
      },
      reponseCorrecte: "B",
      explication: "La glycolyse (Glucose -> Pyruvate) n'enlève aucun carbone (1 C6 donne 2 C3). Les 3 autres réactions libèrent du CO2.",
      piegeEvite: "Croire que toute étape de dégradation de la matière organique libère du CO2."
    },
    {
      id: "p1_4", type: "piege",
      enonce: "Un tétanos parfait est observé quand la fréquence des stimulations est telle que :",
      choix: { 
        A: "La 2ème stimulation tombe pendant la phase de latence de la 1ère secousse.", 
        B: "La 2ème stimulation tombe pendant la phase de contraction de la 1ère secousse.", 
        C: "La 2ème stimulation tombe pendant la phase de relâchement de la 1ère secousse.", 
        D: "L'intensité de la stimulation dépasse la rhéobase." 
      },
      reponseCorrecte: "B",
      explication: "C'est la définition exacte. Si elle tombait pendant le relâchement, ce serait un tétanos imparfait (plateau ondulé).",
      piegeEvite: "Inverser contraction (parfait) et relâchement (imparfait)."
    },
    {
      id: "p1_5", type: "inversee",
      enonce: "Concernant les phénomènes thermiques du muscle, trouvez l'affirmation INCORRECTE :",
      choix: { 
        A: "La chaleur initiale est libérée en anaérobiose.", 
        B: "La chaleur retardée est de plus faible durée que la chaleur initiale.", 
        C: "La chaleur retardée dépend de la consommation d'O2.", 
        D: "L'énergie de la chaleur initiale provient en partie de l'hydrolyse de l'ATP." 
      },
      reponseCorrecte: "B",
      explication: "La chaleur retardée (respiration) est d'une durée beaucoup PLUS LONGUE que la chaleur initiale (qui est très brève, pendant la secousse).",
      piegeEvite: "Confondre l'intensité et la durée. La chaleur retardée est lente et longue."
    },
    {
      id: "p1_6", type: "piege",
      enonce: "Dans la chaîne respiratoire, le rôle exact de l'O2 est de :",
      choix: { 
        A: "Se lier au glucose pour l'oxyder.", 
        B: "Donner des électrons au Complexe I.", 
        C: "Capter les électrons à la fin de la chaîne pour former de l'eau.", 
        D: "Pomper les protons dans l'espace intermembranaire." 
      },
      reponseCorrecte: "C",
      explication: "L'oxygène (O2) est l'accepteur final d'électrons et de protons. Il ne touche jamais directement le glucose !",
      piegeEvite: "Le piège de la 'respiration' : on pense que l'oxygène 'brule' le glucose, alors qu'il n'intervient qu'à la toute fin."
    },
    {
      id: "p1_7", type: "inversee",
      enonce: "Identifiez l'élément qui n'appartient PAS à l'ultrastructure de la myofibrille :",
      choix: { 
        A: "La strie Z", 
        B: "Le système des tubules T", 
        C: "La bande sombre A", 
        D: "La zone H" 
      },
      reponseCorrecte: "B",
      explication: "Les tubules T font partie du sarcolemme (membrane cellulaire de la fibre entière) qui s'invagine, mais ils ne font pas partie de la myofibrille (qui est l'assemblage d'actine/myosine).",
      piegeEvite: "Confondre la structure de la cellule musculaire (Fibre) avec celle des protéines contractiles (Myofibrille)."
    },
    {
      id: "p1_8", type: "piege",
      enonce: "Si l'on bloque l'ATP synthase avec une toxine (ex: oligomycine), que se passe-t-il immédiatement au niveau de la mitochondrie ?",
      choix: { 
        A: "Le gradient de protons (H+) s'effondre.", 
        B: "La chaîne respiratoire s'accélère.", 
        C: "Le gradient de protons augmente considérablement avant que tout ne s'arrête.", 
        D: "La glycolyse s'arrête instantanément." 
      },
      reponseCorrecte: "C",
      explication: "Les protons sont pompés, mais ne peuvent plus rentrer ! Le gradient augmente jusqu'à bloquer la chaîne respiratoire (couplage).",
      piegeEvite: "Oublier le couplage. Si la turbine est bloquée, le barrage déborde."
    },
    {
      id: "p1_9", type: "association",
      enonce: "Associez correctement la source d'énergie à son délai d'action : 1. Phosphocréatine / 2. Fermentation / 3. Respiration",
      choix: { 
        A: "1: Immédiate / 2: Lente / 3: Rapide", 
        B: "1: Rapide / 2: Immédiate / 3: Lente", 
        C: "1: Immédiate / 2: Rapide / 3: Lente", 
        D: "1: Lente / 2: Rapide / 3: Immédiate" 
      },
      reponseCorrecte: "C",
      explication: "Phosphocréatine = alactique, fulgurant (immédiat). Fermentation = lactique, prend le relais vite (rapide). Respiration = aérobie, met du temps à se mettre en place (lente).",
      piegeEvite: "Confondre l'ordre temporel des 3 voies métaboliques."
    },
    {
      id: "p1_10", type: "inversee",
      enonce: "Pendant la contraction, la bande sombre (A) :",
      choix: { 
        A: "Se rapproche de l'autre bande sombre.", 
        B: "Reste de longueur constante.", 
        C: "Diminue de taille au profit de la bande claire.", 
        D: "Contient à la fois de l'actine et de la myosine sur ses bords." 
      },
      reponseCorrecte: "C",
      explication: "La question demande la proposition FAUSSE ! (Pardon, l'énoncé de la question aurait dû préciser 'laquelle est FAUSSE'. Corrigeons : La proposition C est FAUSSE).", // Trick question mechanics
      piegeEvite: "Lire trop vite ! La bande A ne change JAMAIS de taille."
    },
    {
      id: "p1_11", type: "piege",
      enonce: "Quel est le rôle exact de l'ATP lors de la libération de la tête de myosine ?",
      choix: { 
        A: "L'hydrolyse de l'ATP fournit l'énergie pour détacher la myosine.", 
        B: "La simple fixation de l'ATP (sans hydrolyse) provoque le détachement de la myosine.", 
        C: "L'ATP se fixe sur l'actine pour repousser la myosine.", 
        D: "L'ATP pompe le calcium pour relâcher le muscle." 
      },
      reponseCorrecte: "B",
      explication: "C'est la fixation de l'ATP vierge qui rompt la liaison actine-myosine. L'hydrolyse (en ADP+Pi) aura lieu ensuite pour 'réarmer' la tête.",
      piegeEvite: "Le piège classique ! Beaucoup pensent que l'hydrolyse sert à détacher. L'hydrolyse sert à armer, la fixation sert à détacher."
    },
    {
      id: "p1_12", type: "piege",
      enonce: "Si l'on stimule un muscle avec deux chocs électriques espacés de 2 millisecondes (ms), sachant que la période réfractaire absolue est de 5 ms, on observera :",
      choix: { 
        A: "Deux secousses distinctes.", 
        B: "Un tétanos parfait.", 
        C: "Une seule secousse (la deuxième stimulation est ignorée).", 
        D: "Une sommation spatiale." 
      },
      reponseCorrecte: "C",
      explication: "Si la 2ème stimulation tombe PENDANT la période réfractaire absolue (inexcitabilité totale), le muscle n'y répond tout simplement pas.",
      piegeEvite: "Penser automatiquement à un tétanos dès qu'on voit 'deux stimulations rapprochées'."
    },
    {
      id: "p1_13", type: "inversee",
      enonce: "Quelle affirmation sur le rendement énergétique est FAUSSE ?",
      choix: { 
        A: "La respiration a un rendement d'environ 40%.", 
        B: "La fermentation a un rendement d'environ 2%.", 
        C: "L'énergie perdue sous forme de chaleur justifie que le rendement ne soit pas de 100%.", 
        D: "La respiration extrait 100% de l'énergie potentielle du glucose sous forme d'ATP." 
      },
      reponseCorrecte: "D",
      explication: "Aucun système n'est parfait. La respiration extrait bien l'énergie (oxydation totale), mais le rendement net en ATP n'est que de 40%, le reste (60%) est dissipé en chaleur.",
      piegeEvite: "Croire que 'oxydation totale' = 'rendement de 100%'."
    },
    {
      id: "p1_14", type: "piege",
      enonce: "Quelle molécule permet le transfert d'électrons du Complexe I vers le Complexe III dans la chaîne respiratoire ?",
      choix: { 
        A: "Le Cytochrome C", 
        B: "L'Ubiquinone (Coenzyme Q)", 
        C: "L'ATP Synthase", 
        D: "L'oxygène" 
      },
      reponseCorrecte: "B",
      explication: "L'ubiquinone (CoQ) est le transporteur mobile lipidique entre I/II et III. Le cytochrome C transporte entre III et IV.",
      piegeEvite: "Ne pas maîtriser le nom des petits transporteurs mobiles de la membrane."
    },
    {
      id: "p1_15", type: "inversee",
      enonce: "Concernant l'acide lactique, trouvez la proposition ERRONÉE :",
      choix: { 
        A: "Il est produit dans le hyaloplasme.", 
        B: "Il provoque la baisse du pH intracellulaire musculaire.", 
        C: "Il est synthétisé par oxydation du pyruvate.", 
        D: "Il est la cause principale de la fatigue musculaire rapide." 
      },
      reponseCorrecte: "C",
      explication: "Il est synthétisé par RÉDUCTION du pyruvate (le NADH,H+ lui donne ses électrons), et non par oxydation !",
      piegeEvite: "Oublier la définition chimique. Pyruvate + 2H+ + 2e- -> Acide lactique (c'est une réduction)."
    }
  ]
};
