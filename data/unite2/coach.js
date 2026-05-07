const coachUnite2 = {
  "unite": 2,
  "titre": "Génétique et Lois Statistiques",
  "ficheCondensee": [
    "🧬 **ADN & EXPRESSION** : L'ADN se réplique (semi-conservatif). Pour s'exprimer, il est transcrit en ARNm (Uracile remplace Thymine), puis traduit en Protéine par les ribosomes et l'ARNt.",
    "⚠️ **MUTATIONS** : Substitution, Addition, Délétion. Une mutation modifie le codon, ce qui peut changer l'acide aminé et détruire la fonction de la protéine.",
    "➗ **MÉIOSE** : Crée 4 gamètes haploïdes (n) à partir d'une cellule mère (2n). Division 1 (Réductionnelle : sépare les homologues). Division 2 (Équationnelle : sépare les chromatides).",
    "🔀 **BRASSAGES** : Intra = Crossing-over (Prophase I). Inter = Hasard (Anaphase I). La fécondation (n+n=2n) multiplie encore la diversité.",
    "📊 **MENDEL (1 gène)** : Croisement 2 purs = F1 homogène (1ère Loi). F1xF1 = F2 (Dominance : 75/25. Codominance : 25/50/25). Gène lié au sexe : F1 hétérogène et mâle hérite de la mère.",
    "📈 **MENDEL (2 gènes)** : Test Cross (Hybride x Double Récessif). Si 4 phénotypes 25% = Gènes indépendants (sur 2 chr. diff.). Si Parentaux > Recombinés = Gènes liés (sur le même chr.)."
  ],
  "quizChrono": [
    {
      "id": "u2_q1",
      "difficulte": "facile",
      "theme": "adn",
      "enonce": "Le modèle de la réplication de l'ADN est dit :",
      "choix": {
        "A": "Conservatif.",
        "B": "Semi-conservatif.",
        "C": "Dispersif.",
        "D": "Aléatoire."
      },
      "reponseCorrecte": "B",
      "explication": "La réplication est semi-conservative car chaque nouvelle molécule d'ADN possède un brin ancien (parental) et un brin nouvellement synthétisé."
    },
    {
      "id": "u2_q2",
      "difficulte": "facile",
      "theme": "adn",
      "enonce": "Lors de la réplication, le rôle de l'enzyme Hélicase est de :",
      "choix": {
        "A": "Synthétiser le nouveau brin d'ADN.",
        "B": "Casser les liaisons hydrogènes entre les bases azotées pour séparer les deux brins.",
        "C": "Lier les acides aminés.",
        "D": "Transformer l'ADN en ARN."
      },
      "reponseCorrecte": "B",
      "explication": "L'hélicase sépare l'ADN double brin pour former l'œil de réplication."
    },
    {
      "id": "u2_q3",
      "difficulte": "facile",
      "theme": "adn",
      "enonce": "La chromatine est formée par l'enroulement de l'ADN autour de protéines spécifiques appelées :",
      "choix": {
        "A": "Des kératines.",
        "B": "Des histones.",
        "C": "Des polymérases.",
        "D": "Des ribosomes."
      },
      "reponseCorrecte": "B",
      "explication": "L'ADN s'enroule autour des histones pour former des nucléosomes, qui se condensent en chromatine."
    },
    {
      "id": "u2_q5",
      "difficulte": "facile",
      "theme": "expression",
      "enonce": "Quelle est la différence majeure entre l'ADN et l'ARNm ?",
      "choix": {
        "A": "L'ARNm possède de la Thymine.",
        "B": "L'ADN est simple brin.",
        "C": "L'ADN contient du désoxyribose, l'ARNm contient du ribose et de l'Uracile (U) à la place de la Thymine (T).",
        "D": "L'ADN sort du noyau."
      },
      "reponseCorrecte": "C",
      "explication": "De plus, l'ARNm est monocaténaire et sert de messager pour sortir du noyau."
    },
    {
      "id": "u2_q6",
      "difficulte": "facile",
      "theme": "expression",
      "enonce": "La transcription est la synthèse de :",
      "choix": {
        "A": "L'ADN à partir de l'ARNm.",
        "B": "Une protéine à partir de l'ARNm.",
        "C": "L'ARNm à partir d'un brin transcrit d'ADN grâce à l'ARN polymérase.",
        "D": "Lipides."
      },
      "reponseCorrecte": "C",
      "explication": "L'ARN polymérase lit l'ADN et crée l'ARNm correspondant par complémentarité."
    },
    {
      "id": "u2_q9",
      "difficulte": "facile",
      "theme": "expression",
      "enonce": "La molécule qui transfère les acides aminés vers le ribosome s'appelle :",
      "choix": {
        "A": "L'ARNm.",
        "B": "L'ARNt.",
        "C": "L'ARNr.",
        "D": "L'ADN polymérase."
      },
      "reponseCorrecte": "B",
      "explication": "L'ARN de transfert (ARNt) possède l'anticodon."
    },
    {
      "id": "u2_q10",
      "difficulte": "facile",
      "theme": "expression",
      "enonce": "Lequel de ces codons commande l'arrêt de la synthèse protéique (codon STOP) ?",
      "choix": {
        "A": "AUG",
        "B": "UAA (ou UAG, UGA)",
        "C": "AAA",
        "D": "CCC"
      },
      "reponseCorrecte": "B",
      "explication": "Ces codons ne correspondent à aucun ARNt, bloquant ainsi le ribosome."
    },
    {
      "id": "u2_q11",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "Quel est le rôle principal de la méiose ?",
      "choix": {
        "A": "Multiplier des cellules identiques.",
        "B": "Produire 2 cellules diploïdes.",
        "C": "Produire 4 cellules sexuelles haploïdes (gamètes, n) à partir d'une cellule mère diploïde (2n).",
        "D": "Cicatriser les tissus."
      },
      "reponseCorrecte": "C",
      "explication": "La méiose réduit de moitié le nombre de chromosomes."
    },
    {
      "id": "u2_q12",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "La première division de la méiose est dite :",
      "choix": {
        "A": "Équationnelle.",
        "B": "Réductionnelle.",
        "C": "Conservatrice.",
        "D": "Proliférative."
      },
      "reponseCorrecte": "B",
      "explication": "Elle réduit le nombre de chromosomes (2n -> n) en séparant les homologues."
    },
    {
      "id": "u2_q16",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "La fécondation permet :",
      "choix": {
        "A": "De diviser par deux le nombre de chromosomes.",
        "B": "De rétablir la diploïdie (2n) en fusionnant deux gamètes haploïdes (n).",
        "C": "De créer des clones.",
        "D": "D'empêcher tout brassage."
      },
      "reponseCorrecte": "B",
      "explication": "Elle réunit le lot paternel et maternel pour former un nouvel individu (zygote 2n)."
    }
  ],
  "bossDeFin": [
    {
      "id": "u2_q7",
      "difficulte": "expert",
      "theme": "expression",
      "enonce": "Le code génétique est dit 'redondant' (ou dégénéré) car :",
      "choix": {
        "A": "Il est le même pour tous.",
        "B": "Plusieurs codons différents peuvent coder pour le même acide aminé.",
        "C": "Un seul codon code pour plusieurs acides aminés.",
        "D": "Il a 3 codons stop."
      },
      "reponseCorrecte": "B",
      "explication": "Il y a 64 codons pour seulement 20 acides aminés."
    },
    {
      "id": "u2_q13",
      "difficulte": "expert",
      "theme": "meiose",
      "enonce": "Le brassage intrachromosomique (Crossing-over) a lieu durant :",
      "choix": {
        "A": "La Prophase II.",
        "B": "La Métaphase I.",
        "C": "L'Anaphase I.",
        "D": "La Prophase I."
      },
      "reponseCorrecte": "D",
      "explication": "Les chromosomes homologues s'apparient en tétrades et échangent des segments."
    },
    {
      "id": "u2_q15",
      "difficulte": "expert",
      "theme": "meiose",
      "enonce": "Le brassage interchromosomique est lié à :",
      "choix": {
        "A": "L'échange de fragments d'ADN.",
        "B": "La ségrégation aléatoire et indépendante des chromosomes homologues lors de l'Anaphase I.",
        "C": "L'intervention des mutations.",
        "D": "La division des centromères."
      },
      "reponseCorrecte": "B",
      "explication": "Les chromosomes maternels et paternels se répartissent au hasard vers les pôles."
    },
    {
      "id": "u2_q17",
      "difficulte": "expert",
      "theme": "meiose",
      "enonce": "Le caryotype humain d'un gamète (spermatozoïde ou ovule) s'écrit :",
      "choix": {
        "A": "2n = 44A + XY",
        "B": "n = 22A + XX",
        "C": "n = 22A + X ou n = 22A + Y",
        "D": "2n = 46A"
      },
      "reponseCorrecte": "C",
      "explication": "Haploïde (n) = 22 autosomes + 1 chromosome sexuel."
    },
    {
      "id": "u2_q19",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "En Monohybridisme, si la F1 est hétérogène alors que les parents sont purs :",
      "choix": {
        "A": "La première loi de Mendel est respectée.",
        "B": "C'est une codominance.",
        "C": "C'est une exception : le gène est lié au sexe.",
        "D": "C'est un gène létal."
      },
      "reponseCorrecte": "C",
      "explication": "La descendance dépend du sexe car les mâles (XY) n'héritent que du X de leur mère."
    },
    {
      "id": "u2_q24",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "En Dihybridisme, si le Test Cross donne 4 phénotypes à 25% chacun :",
      "choix": {
        "A": "Les gènes sont liés absolument.",
        "B": "C'est une codominance.",
        "C": "Les deux gènes sont indépendants (sur des chromosomes différents).",
        "D": "Le gène est mortel."
      },
      "reponseCorrecte": "C",
      "explication": "Le brassage interchromosomique a produit 4 gamètes équiprobables."
    },
    {
      "id": "u2_q25",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "Si un Test Cross en dihybridisme donne 80% de parentaux et 20% de recombinés :",
      "choix": {
        "A": "Les gènes sont indépendants.",
        "B": "Les gènes sont liés et un crossing-over s'est produit (liaison partielle).",
        "C": "Les gènes sont liés sans crossing-over.",
        "D": "Mutation simultanée."
      },
      "reponseCorrecte": "B",
      "explication": "Les recombinés existent mais sont rares, preuve du brassage intra."
    },
    {
      "id": "u2_q27",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "La distance entre deux gènes liés (en centiMorgans cMg) est égale à :",
      "choix": {
        "A": "Pourcentage des parentaux.",
        "B": "Pourcentage total des individus recombinés dans un test cross.",
        "C": "50.",
        "D": "0."
      },
      "reponseCorrecte": "B",
      "explication": "20% de recombinés = 20 cMg."
    },
    {
      "id": "u2_q33",
      "difficulte": "expert",
      "theme": "expression",
      "enonce": "L'enzyme responsable de l'association des acides aminés (liaison peptidique) dans le ribosome est :",
      "choix": {
        "A": "L'ARN polymérase.",
        "B": "L'ADN polymérase.",
        "C": "L'hélicase.",
        "D": "Aucune, c'est l'ARNr du ribosome qui a cette fonction catalytique."
      },
      "reponseCorrecte": "D",
      "explication": "Le ribosome est un 'ribozyme'. Son ARN ribosomal lie les acides aminés entre eux."
    },
    {
      "id": "u2_q35",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "Dans un arbre généalogique, si des parents sains ont un enfant malade, alors l'allèle responsable de la maladie est :",
      "choix": {
        "A": "Dominant.",
        "B": "Récessif.",
        "C": "Lié à Y.",
        "D": "Létal."
      },
      "reponseCorrecte": "B",
      "explication": "Les parents sont porteurs sains (hétérozygotes), la maladie (récessive) était cachée."
    },
    {
      "id": "u2_q37",
      "difficulte": "expert",
      "theme": "mutation",
      "enonce": "Une mutation silencieuse :",
      "choix": {
        "A": "Change la protéine sans affecter sa fonction.",
        "B": "Détruit l'organisme en silence.",
        "C": "Change un nucléotide de l'ADN, mais le codon muté code pour le MÊME acide aminé (grâce à la redondance).",
        "D": "Créé un codon STOP."
      },
      "reponseCorrecte": "C",
      "explication": "La séquence de la protéine n'est pas modifiée."
    },
    {
      "id": "u2_q38",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "Si l'hérédité est liée à X, un père atteint par un caractère DOMINANT transmettra ce caractère :",
      "choix": {
        "A": "À tous ses fils.",
        "B": "À toutes ses filles.",
        "C": "À 50% de ses enfants.",
        "D": "À personne."
      },
      "reponseCorrecte": "B",
      "explication": "Le père donne son chromosome Y à ses fils, et son unique chromosome X (portant le gène dominant) à toutes ses filles."
    },
    {
      "id": "u2_q40",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "Dans la drosophile (mouche), le crossing-over a lieu uniquement chez :",
      "choix": {
        "A": "Le mâle.",
        "B": "La femelle.",
        "C": "Les individus mutés.",
        "D": "Les homozygotes."
      },
      "reponseCorrecte": "B",
      "explication": "C'est une particularité très importante pour les exercices (Test Cross avec le mâle = liaison absolue)."
    }
  ]
};