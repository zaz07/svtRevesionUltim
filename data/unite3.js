const UNITE_3 = {
  "unite": 3,
  "titre": "Utilisation des Matières Organiques et Inorganiques",
  "conceptsPiliers": [
    "Les déchets ménagers : compostage, méthanisation, incinération et enfouissement.",
    "L'impact environnemental des déchets : lixiviat (jus de décharge polluant) et dioxine (gaz toxique).",
    "La pollution de l'air : effet de serre (GES), destruction de la couche d'ozone (CFC), pluies acides (SO2, NO2).",
    "La pollution de l'eau : eutrophisation (excès de nitrates/phosphates causant la prolifération d'algues et l'asphyxie du milieu).",
    "Les indicateurs biologiques (IBQS, DBO5, lichens) pour évaluer la qualité d'un milieu.",
    "La radioactivité : désintégration de noyaux instables (alpha, bêta, gamma), demi-vie, et utilisation (datation au 14C, radiothérapie).",
    "La gestion des déchets radioactifs : classification selon l'Activité (Bq) et la période (Demi-vie), et méthodes de stockage (vitrification, enfouissement géologique)."
  ],
  "zonesConfusion": [
    {
      "notions": "Compostage vs Méthanisation",
      "explication": "Le compostage nécessite de l'Oxygène (aérobie) pour créer de l'engrais. La méthanisation se fait SANS oxygène (anaérobie) et produit du biogaz (CH4)."
    },
    {
      "notions": "Effet de Serre vs Couche d'Ozone",
      "explication": "L'effet de serre réchauffe la Terre à cause des GES (CO2, CH4). Le trou de la couche d'ozone laisse passer les rayons UV dangereux (causé par les CFC), mais ne réchauffe pas le climat."
    },
    {
      "notions": "DBO5 élevée",
      "explication": "Une DBO5 (Demande Biologique en Oxygène) élevée indique une eau très POLLUÉE par la matière organique (car les bactéries ont besoin de beaucoup d'oxygène pour la dégrader)."
    },
    {
      "notions": "Bioaccumulation",
      "explication": "Les polluants non biodégradables (métaux lourds, pesticides) se concentrent à mesure qu'on monte dans la chaîne alimentaire (le super-prédateur est le plus intoxiqué)."
    }
  ],
  "tableauObjectifs": {
    "debutant": [
      "Connaître les 4 méthodes de traitement des déchets (Tri, Compostage, Méthanisation, Incinération).",
      "Définir la radioactivité et la demi-vie."
    ],
    "intermediaire": [
      "Expliquer le mécanisme de l'eutrophisation d'un lac.",
      "Comprendre comment les pluies acides se forment (SO2 + NO2 + eau)."
    ],
    "expert": [
      "Analyser des graphiques de bioaccumulation dans un réseau trophique.",
      "Interpréter les indices DBO5 et IBQS pour diagnostiquer l'état d'un écosystème."
    ]
  },
  "ficheCondensee": [
    "🗑️ **DÉCHETS MÉNAGERS** : Tri sélectif essentiel. Compostage (aérobie ➔ engrais) et Méthanisation (anaérobie ➔ Biogaz CH4). Incinération (réduit le volume ➔ énergie thermique).",
    "⚠️ **DANGERS DÉCHETS** : Lixiviat (liquide toxique infiltrant les nappes) et Dioxine (fumée cancérigène des plastiques).",
    "💨 **POLLUTION AIR** : CO2/CH4 (Effet de serre ➔ Réchauffement). SO2/NO2 (Pluies acides ➔ destruction forêts). CFC (Destruction de l'ozone ➔ rayons UV ➔ cancers).",
    "💧 **POLLUTION EAU** : Eutrophisation = Excès d'engrais (Nitrates/Phosphates) ➔ Algues géantes en surface ➔ Mort des algues ➔ Bactéries anaérobies épuisent l'oxygène ➔ Mort des poissons.",
    "📊 **BIO-INDICATEURS** : Lichens (qualité de l'air). Larves de plécoptères/éphémères (eau pure). DBO5 élevée = Eau polluée.",
    "☢️ **RADIOACTIVITÉ** : Désintégration nucléaire émettant des rayons (alpha, bêta, gamma). 14C = datation absolue. Rayons gamma = Radiothérapie et stérilisation.",
    "🛢️ **DÉCHETS NUCLÉAIRES** : Classés par Activité et Demi-vie (T). Les HA-VL (Haute activité à vie longue) sont vitrifiés et enfouis très profondément dans des roches stables (granite, argile)."
  ],
  "questions": [
    {
      "id": "u3_q20",
      "difficulte": "facile",
      "theme": "radioactivite",
      "enonce": "La radioactivité est un phénomène au cours duquel :",
      "choix": {
        "A": "Deux atomes légers fusionnent.",
        "B": "Un noyau atomique instable se désintègre en émettant des rayonnements pour devenir stable.",
        "C": "Des électrons sont arrachés par des UV.",
        "D": "Les métaux lourds s'oxydent."
      },
      "reponseCorrecte": "B",
      "explication": "C'est l'émission naturelle de rayonnements (alpha, bêta, gamma) par un noyau instable.",
      "mnemotechnique": "Radioactivité = Le noyau instable est trop lourd, il explose (se désintègre) pour retrouver son calme !"
    },
    {
      "id": "u3_q21",
      "difficulte": "facile",
      "theme": "radioactivite",
      "enonce": "Dans la recherche, l'isotope Carbone 14 (14C) is utilisé principalement pour :",
      "choix": {
        "A": "Produire de l'électricité.",
        "B": "La datation absolue des restes organiques ou fossiles.",
        "C": "Stériliser le matériel.",
        "D": "Lutter contre le cancer."
      },
      "reponseCorrecte": "B",
      "explication": "On date la mort de l'organisme grâce à la désintégration constante du 14C.",
      "mnemotechnique": "C14 = Le détective du passé. Il calcule l'âge de la mort en comptant les restes de carbone !"
    },
    {
      "id": "u3_q22",
      "difficulte": "facile",
      "theme": "radioactivite",
      "enonce": "L'irradiation est dangereuse pour les êtres vivants car elle :",
      "choix": {
        "A": "Brûle la peau superficiellement.",
        "B": "Ionise les molécules et provoque de graves mutations sur l'ADN (cancers).",
        "C": "Baisse la température corporelle.",
        "D": "Détruit les os."
      },
      "reponseCorrecte": "B",
      "explication": "Les rayonnements ionisants (comme Gamma) pénètrent les cellules et cassent l'ADN.",
      "mnemotechnique": "Irradiation = Les rayons coupent les échelles de l'ADN comme des petits sabres lasers !"
    },
    {
      "id": "u3_q26",
      "difficulte": "facile",
      "theme": "radioactivite",
      "enonce": "Quelle méthode permet la stérilisation du matériel médical à froid ?",
      "choix": {
        "A": "L'irradiation par rayons Gamma.",
        "B": "Datation 14C.",
        "C": "L'incinération.",
        "D": "Les ultraviolets de faible intensité."
      },
      "reponseCorrecte": "A",
      "explication": "Les rayons Gamma détruisent l'ADN des bactéries sans chauffer le matériel.",
      "mnemotechnique": "Stérilisation Gamma = Nettoyage glacial ! On bombarde sans chauffer pour tuer 100% des microbes."
    },
    {
      "id": "u3_q27",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "Les 'marées noires' sont causées par :",
      "choix": {
        "A": "Le naufrage de pétroliers et l'exploitation pétrolière offshore.",
        "B": "La prolifération d'algues toxiques.",
        "C": "Les rejets de charbon.",
        "D": "Les déchets plastiques."
      },
      "reponseCorrecte": "A",
      "explication": "C'est une grave pollution marine aux hydrocarbures qui asphyxie la faune.",
      "mnemotechnique": "Marée noire = Le pétrole brut flotte et asphyxie la mer comme une grosse couverture noire."
    },
    {
      "id": "u3_q30",
      "difficulte": "facile",
      "theme": "radioactivite",
      "enonce": "La radiothérapie a pour but de :",
      "choix": {
        "A": "Détruire les cellules cancéreuses en ciblant les tumeurs avec des rayonnements.",
        "B": "Purifier l'eau.",
        "C": "Radiographier les os cassés.",
        "D": "Traiter les déchets ultimes."
      },
      "reponseCorrecte": "A",
      "explication": "On utilise l'effet destructeur de la radioactivité pour tuer précisément les cellules malades.",
      "mnemotechnique": "Radiothérapie = Le sniper radioactif ! On vise uniquement les cellules cancéreuses pour les éliminer."
    },
    {
      "id": "u3_q32",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "Lequel de ces déchets n'est pas biodégradable ?",
      "choix": {
        "A": "Une peau de banane.",
        "B": "Un morceau de bois.",
        "C": "Une bouteille en plastique PET.",
        "D": "Du papier journal."
      },
      "reponseCorrecte": "C",
      "explication": "Le plastique (issu du pétrole) n'est pas dégradé par les microorganismes à échelle humaine.",
      "mnemotechnique": "Biodégradabilité = La nature digère la banane, mais le plastique est éternel et indigeste !"
    },
    {
      "id": "u3_q38",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "Que permet de produire la cogénération dans un incinérateur ?",
      "choix": {
        "A": "Uniquement du plastique recyclé.",
        "B": "De l'électricité ET de la chaleur (eau chaude) simultanément.",
        "C": "Du compost pur.",
        "D": "Du lixiviat."
      },
      "reponseCorrecte": "B",
      "explication": "C'est l'optimisation énergétique de l'incinération.",
      "mnemotechnique": "Cogénération = Deux en un ! On brûle les déchets et on gagne du courant (Électricité) et du chauffage (Chaleur)."
    },
    {
      "id": "u3_nat_2016_r1",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2016 R] L’infiltration du lixiviat (jus de décharge) dans le sol provoque :",
      "choix": {
        "A": "la production de méthane.",
        "B": "l’effet de serre.",
        "C": "les pluies acides.",
        "D": "la pollution des nappes phréatiques."
      },
      "reponseCorrecte": "D",
      "explication": "Le lixiviat s'infiltre verticalement à travers le sol, entraînant les métaux lourds et polluants directement vers la nappe d'eau souterraine.",
      "mnemotechnique": "Lixiviat = Le jus toxique des poubelles qui empoisonne l'eau souterraine !",
      "source": "national_2016_R"
    },
    {
      "id": "u3_nat_2016_r2",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2016 R] L’augmentation de la concentration atmosphérique des gaz à effet de serre résulte de l’utilisation de l’énergie :",
      "choix": {
        "A": "éolienne.",
        "B": "fossile.",
        "C": "géothermique.",
        "D": "hydraulique."
      },
      "reponseCorrecte": "B",
      "explication": "Les énergies fossiles (pétrole, charbon, gaz naturel) libèrent du CO2 (principal GES anthropique) lors de leur combustion.",
      "mnemotechnique": "Fossile = Charbon et pétrole crachent du CO2 et réchauffent le climat.",
      "source": "national_2016_R"
    },
    {
      "id": "u3_nat_2016_r3",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2016 R] Le contrôle de la qualité des milieux aquatiques se base sur :",
      "choix": {
        "A": "l’indice biotique IBQS.",
        "B": "les indices DCO (Demande Chimique en Oxygène) et DBO5 (Demande Biochimique en Oxygène en 5 jours).",
        "C": "la concentration du méthane.",
        "D": "la densité de la macroflore."
      },
      "reponseCorrecte": "B",
      "explication": "DCO et DBO5 permettent de quantifier précisément la charge en matières organiques polluantes consommatrices d'oxygène dans l'eau.",
      "mnemotechnique": "Qualité de l'eau = DCO / DBO5, pour savoir à quel point l'eau a soif d'oxygène !",
      "source": "national_2016_R"
    },
    {
      "id": "u3_nat_2016_r4",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "[Bac 2016 R] Le tri des déchets est une opération qui se déroule selon un ordre logique :",
      "choix": {
        "A": "Tri maison → Collecte → Déchargement au centre de tri → Tri au centre → Transport recyclage.",
        "B": "Tri maison → Tri au centre → Déchargement au centre → Transport recyclage → Collecte.",
        "C": "Tri maison → Déchargement au centre → Transport recyclage → Collecte → Tri au centre.",
        "D": "Tri maison → Transport recyclage → Collecte → Tri au centre → Déchargement au centre."
      },
      "reponseCorrecte": "A",
      "explication": "Le tri commence chez le citoyen (maison), suivi de la collecte par camions, puis du déchargement au centre spécialisé pour un tri affiné avant d'être acheminé pour recyclage.",
      "mnemotechnique": "Tri intelligent = Du sac poubelle de la cuisine jusqu'à l'usine de recyclage en passant par le tri pro !",
      "source": "national_2016_R"
    },
    {
      "id": "u3_nat_2019_r1",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2019 R] L’effet de serre est le résultat de la pollution de l’air par :",
      "choix": {
        "A": "les rayonnements radioactifs.",
        "B": "le méthane (CH4).",
        "C": "l’azote (N2).",
        "D": "l’hydrogène (H2)."
      },
      "reponseCorrecte": "B",
      "explication": "Le méthane (CH4) est un puissant gaz à effet de serre (GES), ayant un potentiel de réchauffement global très supérieur à celui du CO2.",
      "mnemotechnique": "CH4 = Méthane = Gaz à effet de serre produit par les rizières et les décharges !",
      "source": "national_2019_R"
    },
    {
      "id": "u3_nat_2019_r2",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2019 R] L’eutrophisation des lacs résulte de :",
      "choix": {
        "A": "la prolifération excessive de ses êtres vivants complexes.",
        "B": "l’enrichissement de ses eaux par le calcium.",
        "C": "l’enrichissement de ses eaux par les nitrates et phosphates.",
        "D": "l’enrichissement de ses eaux par les pesticides chimiques."
      },
      "reponseCorrecte": "C",
      "explication": "L'eutrophisation est une pollution aquatique due à une accumulation de nutriments (nitrates et phosphates), provoquant une prolifération d'algues en surface qui bloquent la lumière et asphyxient le fond.",
      "mnemotechnique": "Eutrophisation = Explosion de nitrates/phosphates -> Algues vertes à gogo -> Asphyxie générale !",
      "source": "national_2019_R"
    },
    {
      "id": "u3_nat_2019_r3",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2019 R] La pollution des eaux par les nitrates résulte principalement de :",
      "choix": {
        "A": "l’utilisation excessive des engrais chimiques en agriculture.",
        "B": "le lixiviat urbain brut.",
        "C": "l’utilisation excessive des pesticides.",
        "D": "les polluants industriels lourds."
      },
      "reponseCorrecte": "A",
      "explication": "Le lessivage des engrais azotés agricoles chimiques s'infiltre dans le sol et contamine massivement les nappes d'eau souterraines en nitrates.",
      "mnemotechnique": "Nitrates = Engrais chimiques agricoles ! Le surplus part direct dans l'eau potable.",
      "source": "national_2019_R"
    },
    {
      "id": "u3_nat_2019_r4",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "[Bac 2019 R] Les déchets radioactifs du type B se caractérisent par une :",
      "choix": {
        "A": "forte activité radioactive et une courte durée de vie.",
        "B": "forte activité radioactive et une longue durée de vie.",
        "C": "faible activité radioactive et une courte durée de vie.",
        "D": "faible à moyenne activité radioactive et une longue durée de vie."
      },
      "reponseCorrecte": "D",
      "explication": "Dans la classification ANDRA (types A, B, C) : le type B désigne les déchets de Faible et Moyenne Activité à Vie Longue (FMA-VL).",
      "mnemotechnique": "Type B = Faible/Moyenne activité mais VIE LONGUE (longue durée de vie) !",
      "source": "national_2019_R"
    },
    {
      "id": "u3_nat_2020_q1",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "[Bac 2020 N] Au Maroc, les ordures ménagères se caractérisent principalement par :",
      "choix": {
        "A": "un taux élevé d’humidité.",
        "B": "un taux faible d’humidité.",
        "C": "une faible quantité en matière organique.",
        "D": "une faible quantité en matière recyclable."
      },
      "reponseCorrecte": "A",
      "explication": "Les ordures ménagères marocaines contiennent une très grande proportion de matières organiques compostables (épluchures de légumes, fruits, restes alimentaires), ce qui leur confère un taux d'humidité élevé (souvent supérieur à 65%).",
      "mnemotechnique": "Poubelles au Maroc = Beaucoup de restes de cuisine -> Taux d'humidité super élevé !",
      "source": "national_2020_N"
    },
    {
      "id": "u3_nat_2020_q2",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2020 N] Pour limiter la pollution de l’environnement résultant de l’activité agricole, il est possible de recourir à :",
      "choix": {
        "A": "la lutte chimique.",
        "B": "la lutte biologique.",
        "C": "l’utilisation intensive des engrais chimiques.",
        "D": "la culture sous serres chauffées."
      },
      "reponseCorrecte": "B",
      "explication": "La lutte biologique utilise des prédateurs ou parasites naturels (coccinelles, trichogrammes) pour contrôler les ravageurs des cultures, réduisant l'utilisation nocive de pesticides chimiques.",
      "mnemotechnique": "Agriculture verte = Lutte biologique ! On invite les coccinelles pour manger les pucerons.",
      "source": "national_2020_N"
    },
    {
      "id": "u3_nat_2020_q3",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2020 N] Quelle est la chronologie logique des événements expliquant le mécanisme de l’effet de serre ?",
      "choix": {
        "A": "Réception solaire -> Absorption terrestre -> Blocage par les GES -> Réflexion de surface -> Réchauffement.",
        "B": "Réception solaire -> Réflexion de surface -> Blocage par les GES -> Absorption terrestre -> Réchauffement.",
        "C": "Réception solaire -> Absorption terrestre -> Réflexion de surface -> Blocage par les GES -> Réchauffement.",
        "D": "Réception solaire -> Blocage par les GES -> Réflexion de surface -> Absorption terrestre -> Réchauffement."
      },
      "reponseCorrecte": "C",
      "explication": "Le rayonnement solaire est d'abord reçu puis absorbé par la surface, qui le réfléchit/réémet sous forme de rayons infrarouges thermiques. Ces infrarouges sont bloqués et absorbés par les gaz à effet de serre, provoquant la hausse de température.",
      "mnemotechnique": "Effet de Serre = Le soleil chauffe le sol (Absorption), le sol renvoie de la chaleur (Infrarouge), les GES la bloquent (Piège) !",
      "source": "national_2020_N"
    },
    {
      "id": "u3_nat_2020_q4",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2020 N] Le rejet des eaux usées non traitées dans les milieux aquatiques entraîne une :",
      "choix": {
        "A": "diminution de la matière organique et de la teneur en O2 dissous dans l’eau.",
        "B": "élévation de la matière organique et de la teneur en O2 dissous dans l’eau.",
        "C": "élévation de la matière organique et diminution de la teneur en O2 dissous dans l’eau.",
        "D": "diminution de la matière organique et élévation de la teneur en O2 dissous dans l'eau."
      },
      "reponseCorrecte": "C",
      "explication": "L'apport d'eaux usées augmente la quantité de matières organiques. Les bactéries s'en nourrissent en se multipliant et consomment tout l'oxygène dissous, créant une asphyxie du milieu.",
      "mnemotechnique": "Eaux usées = Trop de nourriture (Matière Organique) + Moins de souffle (O2 dissous en chute libre) !",
      "source": "national_2020_N"
    },
    {
      "id": "u3_nat_2023_q1",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2023 N] L’ozone troposphérique est un gaz qui :",
      "choix": {
        "A": "pollue l’air et amplifie l’effet de serre.",
        "B": "pollue l’air et minimise l’effet de serre.",
        "C": "protège les êtres vivants en absorbant les rayons infrarouges.",
        "D": "protège les êtres vivants en absorbant les rayons ultraviolets."
      },
      "reponseCorrecte": "A",
      "explication": "L'ozone troposphérique (présent dans la basse atmosphère) est un polluant secondaire nocif pour la santé et la végétation, et agit également comme un puissant gaz à effet de serre (GES). C'est l'ozone stratosphérique (haute altitude) qui protège des UV.",
      "mnemotechnique": "Ozone de surface (Troposphérique) = Polluant + Gaz à effet de serre ! Un double problème.",
      "source": "national_2023_N"
    },
    {
      "id": "u3_nat_2023_q2",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2023 N] La production de l’énergie géothermique se base sur :",
      "choix": {
        "A": "la combustion du charbon et du pétrole.",
        "B": "la combustion de la biomasse.",
        "C": "l’utilisation de la chaleur de l’effet de serre.",
        "D": "l’utilisation de la chaleur interne de la terre."
      },
      "reponseCorrecte": "D",
      "explication": "La géothermie est une énergie renouvelable propre qui exploite la chaleur naturelle stockée dans le sous-sol terrestre pour produire de l'électricité ou du chauffage.",
      "mnemotechnique": "Géothermie = Chaleur de la Terre ! Géo (Terre) + Thermie (Chaleur).",
      "source": "national_2023_N"
    },
    {
      "id": "u3_nat_2023_q3",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2023 N] La bioaccumulation correspond à l’augmentation de la concentration d’un polluant dans les :",
      "choix": {
        "A": "différents milieux naturels.",
        "B": "milieux naturels en fonction du temps.",
        "C": "tissus d’un organisme vivant.",
        "D": "tissus des êtres vivants d’une génération à l’autre."
      },
      "reponseCorrecte": "C",
      "explication": "La bioaccumulation est l'accumulation d'un polluant (métal lourd, pesticide, etc.) directement dans les tissus d'un être vivant à un rythme plus rapide que celui de son élimination ou de sa décomposition.",
      "mnemotechnique": "Bioaccumulation = Stockage de toxiques dans les graisses et tissus de l'organisme au fil du temps !",
      "source": "national_2023_N"
    },
    {
      "id": "u3_nat_2023_q4",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "[Bac 2023 N] La valorisation optimale des déchets métalliques consiste en leur :",
      "choix": {
        "A": "enfouissement.",
        "B": "incinération.",
        "C": "recyclage.",
        "D": "méthanisation."
      },
      "reponseCorrecte": "C",
      "explication": "Le métal (fer, aluminium, etc.) est entièrement recyclable. Le recyclage permet d'économiser de grandes quantités d'énergie et de matières premières par rapport à l'extraction de minerai brut.",
      "mnemotechnique": "Métaux = Recyclage à l'infini ! On fond et on recrée à volonté.",
      "source": "national_2023_N"
    },
    {
      "id": "u3_nat_2025_r1",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "[Bac 2025 R] La production du biogaz (méthanisation) se fait par des micro-organismes qui décomposent :",
      "choix": {
        "A": "la matière organique par fermentation en conditions anaérobies.",
        "B": "la matière inorganique par fermentation en conditions anaérobies.",
        "C": "la matière organique par respiration en conditions aérobies.",
        "D": "la matière inorganique par respiration en conditions aérobies."
      },
      "reponseCorrecte": "A",
      "explication": "La méthanisation est un processus biologique de fermentation anaérobie (sans oxygène) mené par des bactéries méthanogènes qui décomposent la matière organique biodégradable pour produire du biogaz riche en méthane (CH4).",
      "mnemotechnique": "Biogaz (Méthane) = Fermentation anaérobie de la matière organique !",
      "source": "national_2025_R"
    },
    {
      "id": "u3_nat_2025_r2",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "[Bac 2025 R] La technique de décharge contrôlée par enfouissement technique des déchets vise :",
      "choix": {
        "A": "la valorisation complète des déchets plastiques.",
        "B": "la valorisation des déchets organiques en produisant du compost.",
        "C": "le dépôt des déchets confinés dans des casiers étanches pour éviter la pollution de l’environnement.",
        "D": "la valorisation thermique et mécanique des déchets métalliques."
      },
      "reponseCorrecte": "C",
      "explication": "L'enfouissement technique (décharge contrôlée) consiste à stocker les déchets ultimes dans des casiers étanches équipés de barrières d'argile et de membranes pour capter et traiter séparément les lixiviats et le biogaz, évitant ainsi l'infiltration des polluants dans le sol et la nappe phréatique.",
      "mnemotechnique": "Enfouissement = Casiers hermétiques pour isoler les déchets de la nature !",
      "source": "national_2025_R"
    },
    {
      "id": "u3_nat_2025_r3",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2025 R] L'Indice Biotique de la qualité du Sol (IBQS) permet :",
      "choix": {
        "A": "de déterminer précisément la composition minéralogique et chimique du sol.",
        "B": "d’estimer la qualité globale du sol en se basant sur l’abondance et la diversité des macroinvertébrés.",
        "C": "d’évaluer quantitativement la teneur en métaux lourds dans le sol.",
        "D": "d’estimer la qualité physique et la structure du sol en se basant uniquement sur son pH."
      },
      "reponseCorrecte": "B",
      "explication": "L'IBQS est une mesure de qualité écologique qui repose sur l'inventaire des macroinvertébrés du sol (vers, insectes, araignées). Plus le sol est préseré, plus ces organismes sont diversifiés et abondants.",
      "mnemotechnique": "IBQS = Indice Biotique = On regarde la vie (macroinvertébrés) pour juger de la santé du sol !",
      "source": "national_2025_R"
    },
    {
      "id": "u3_nat_2025_r4",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "[Bac 2025 R] L’eutrophisation d’un milieu aquatique résulte de l’enchaînement chronologique d’évènements suivants :",
      "choix": {
        "A": "Apport excessif en nitrates et phosphates → Arrêt de la lumière → Prolifération des algues en surface → Mort des êtres vivants → Baisse de l’O2 dissous.",
        "B": "Apport excessif en nitrates et phosphates → Baisse de l’O2 dissous → Arrêt de la lumière → Prolifération des algues → Mort des êtres vivants.",
        "C": "Apport excessif en nitrates et phosphates → Prolifération des algues en surface → Arrêt de la lumière → Décomposition de la matière organique et baisse de l’O2 dissous → Mort des êtres vivants par asphyxie.",
        "D": "Apport excessif en nitrates et phosphates → Arrêt de la lumière → Baisse de l’O2 dissous → Mort des êtres vivants → Prolifération des algues en surface."
      },
      "reponseCorrecte": "C",
      "explication": "L'eutrophisation commence par l'apport d'engrais (nitrates/phosphates) qui fait proliférer les algues vertes en surface (bloquant la lumière et la photosynthèse profonde). Les algues mortes s'accumulent au fond, où des bactéries aérobies les décomposent en consommant tout l'O2 disponible, ce qui mène à l'asphyxie et à la mort de la faune aquatique.",
      "mnemotechnique": "Eutrophisation : Engrais -> Algues en surface -> Noir total -> Zéro Oxygène -> Mort générale !",
      "source": "national_2025_R"
    },
    {
      "id": "u3_nat_2024_r1",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "[Bac 2024 R] Les ordures ménagères au Maroc se caractérisent spécifiquement par :",
      "choix": {
        "A": "un taux d’humidité très faible et une faible teneur en matière organique.",
        "B": "un taux d’humidité élevé (supérieur à 65%) et une grande proportion de matière organique biodégradable (environ 70%).",
        "C": "une forte proportion de plastiques et papiers recyclables avec une très faible humidité.",
        "D": "l'absence totale de déchet de nature organique ou fermentescible."
      },
      "reponseCorrecte": "B",
      "explication": "Au Maroc, les habitudes de consommation axées sur les produits frais font que les ordures ménagères contiennent environ 70% de matière organique biodégradable et présentent un taux d'humidité élevé (dépassant souvent 65%), ce qui favorise la production de lixiviat et de biogaz.",
      "mnemotechnique": "Maroc = Cuisine riche en eau et légumes ! Donc ordures très humides et très organiques !",
      "source": "national_2024_R"
    },
    {
      "id": "u3_nat_2024_r2",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "[Bac 2024 R] L’incinération des ordures ménagères est une technique moderne de traitement qui permet :",
      "choix": {
        "A": "de valoriser biologiquement les déchets par production de compost organique.",
        "B": "la réduction massive du volume des déchets (environ 90%) avec récupération d’énergie sous forme électrique et thermique.",
        "C": "l'extraction directe de métaux lourds sans émissions de fumées toxiques ou de cendres.",
        "D": "l'enfouissement hermétique et sécurisé des déchets radioactifs de type C."
      },
      "reponseCorrecte": "B",
      "explication": "L'incinération consiste à brûler les déchets combustibles à haute température (dans des fours spécialisés). Elle permet de réduire d'environ 90% le volume des déchets et de récupérer de l'énergie thermique, convertie en électricité.",
      "mnemotechnique": "Incinérer = Brûler ! On réduit le volume en cendres et on récupère de l'électricité !",
      "source": "national_2024_R"
    },
    {
      "id": "u3_nat_2024_n1",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "[Bac 2024 N] Associez correctement chaque technique de traitement et de valorisation biologique des déchets organiques : (1) Compostage, (2) Méthanisation.",
      "choix": {
        "A": "1-Décomposition anaérobie produisant du biogaz ; 2-Décomposition aérobie produisant du compost.",
        "B": "1-Décomposition aérobie (en présence d'O2) produisant du compost ; 2-Décomposition anaérobie (en l'absence d'O2) produisant du biogaz riche en méthane (CH4).",
        "C": "1-Valorisation thermique produisant de l'électricité ; 2-Valorisation mécanique par tri.",
        "D": "1-Tri à la source ; 2-Enfouissement hermétique en casiers étanches."
      },
      "reponseCorrecte": "B",
      "explication": "Le compostage est une décomposition aérobie (en présence d'O2) de la matière organique par des micro-organismes, produisant un fertilisant naturel (le compost). La méthanisation est une fermentation anaérobie (en l'absence d'O2) produisant du biogaz riche en méthane (CH4) utilisable comme source d'énergie, ainsi qu'un digestat utilisable comme engrais.",
      "mnemotechnique": "COMpostage = CO2 + Air (Aérobie) -> Terreau. MÉTHAnisation = MÉTHAne + Sans air (Anaérobie) -> Gaz !",
      "source": "national_2024_N"
    },
    {
      "id": "u3_q3",
      "difficulte": "piege",
      "theme": "dechets",
      "enonce": "Quel est l'impact de la dioxine émise lors de la combustion non contrôlée des déchets ?",
      "choix": {
        "A": "Elle favorise la croissance des plantes agricoles.",
        "B": "Elle détruit exclusivement la couche d'ozone.",
        "C": "Elle provoque de graves problèmes de fécondité et des cancers.",
        "D": "Elle réduit l'acidité des pluies."
      },
      "reponseCorrecte": "C",
      "explication": "La dioxine est un composé chimique très toxique généré par la combustion des plastiques, reconnu comme cancérigène et perturbateur endocrinien."
    },
    {
      "id": "u3_q8",
      "difficulte": "piege",
      "theme": "dechets",
      "enonce": "Qu'appelle-t-on 'déchets ultimes' ?",
      "choix": {
        "A": "Les déchets qu'on ne peut plus ni recycler, ni valoriser dans les conditions techniques actuelles.",
        "B": "Les déchets radioactifs de haute activité.",
        "C": "Les déchets purement organiques destinés au compostage.",
        "D": "Le biogaz produit par méthanisation."
      },
      "reponseCorrecte": "A",
      "explication": "Les déchets ultimes sont stockés dans des Centres d'Enfouissement car ils n'ont plus aucune possibilité de valorisation."
    },
    {
      "id": "u3_q9",
      "difficulte": "piege",
      "theme": "pollution",
      "enonce": "Parmi les gaz suivants, lequel N'EST PAS considéré comme un gaz à effet de serre (GES) majeur ?",
      "choix": {
        "A": "Le dioxyde de carbone (CO2)",
        "B": "Le dioxygène (O2)",
        "C": "Le méthane (CH4)",
        "D": "Le protoxyde d'azote (N2O)"
      },
      "reponseCorrecte": "B",
      "explication": "Le dioxygène (O2) ne participe pas à l'effet de serre."
    },
    {
      "id": "u3_q16",
      "difficulte": "piege",
      "theme": "pollution",
      "enonce": "L'indice DBO5 (Demande Biologique en Oxygène sur 5 jours) mesure :",
      "choix": {
        "A": "L'oxygène produit par photosynthèse.",
        "B": "La quantité d'oxygène nécessaire aux bactéries pour dégrader la matière organique dans l'eau.",
        "C": "Le taux d'ozone.",
        "D": "L'acidité de l'eau."
      },
      "reponseCorrecte": "B",
      "explication": "Une DBO5 élevée signifie que l'eau contient beaucoup de matière organique (très polluée)."
    },
    {
      "id": "u3_q23",
      "difficulte": "piege",
      "theme": "radioactivite",
      "enonce": "Les déchets radioactifs sont classés selon deux critères :",
      "choix": {
        "A": "Masse et couleur.",
        "B": "Lieu de production.",
        "C": "Leur niveau de radioactivité (Activité) et leur durée de vie (Demi-vie).",
        "D": "Leur inflammabilité."
      },
      "reponseCorrecte": "C",
      "explication": "On parle par exemple de déchets FA-VC (Faible Activité, Vie Courte) ou HA-VL."
    },
    {
      "id": "u3_q31",
      "difficulte": "piege",
      "theme": "pollution",
      "enonce": "Une DCO (Demande Chimique en Oxygène) très supérieure à la DBO5 signifie que :",
      "choix": {
        "A": "La pollution est principalement organique et facilement biodégradable.",
        "B": "La pollution contient beaucoup de matières non biodégradables (toxiques industriels).",
        "C": "L'eau est parfaitement pure.",
        "D": "Il y a trop de poissons dans l'eau."
      },
      "reponseCorrecte": "B",
      "explication": "La DCO mesure tout l'oxygène pour dégrader CHIMIQUEMENT toutes les matières. Si DCO >> DBO5, il y a des pollutions résistantes aux bactéries (ex: produits chimiques)."
    },
    {
      "id": "u3_q36",
      "difficulte": "piege",
      "theme": "radioactivite",
      "enonce": "L'unité légale mesurant l'Activité (nombre de désintégrations par seconde) d'une source radioactive est le :",
      "choix": {
        "A": "Sievert (Sv)",
        "B": "Gray (Gy)",
        "C": "Becquerel (Bq)",
        "D": "Watt (W)"
      },
      "reponseCorrecte": "C",
      "explication": "Le Becquerel mesure la 'quantité de radioactivité' (1 Bq = 1 désintégration/sec). Le Sievert mesure l'effet biologique sur le corps humain."
    },
    {
      "id": "u3_q39",
      "difficulte": "piege",
      "theme": "pollution",
      "enonce": "Les énergies renouvelables (éolien, solaire) permettent de :",
      "choix": {
        "A": "Réduire les émissions de GES (CO2) car elles n'utilisent pas de combustibles fossiles.",
        "B": "Détruire les déchets radioactifs.",
        "C": "Éviter la bioaccumulation des métaux lourds.",
        "D": "Refroidir l'atmosphère directement."
      },
      "reponseCorrecte": "A",
      "explication": "Ce sont des énergies décarbonées."
    },
    {
      "id": "u3_q1",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "Laquelle de ces actions contribue à la surproduction des déchets ménagers ?",
      "choix": {
        "A": "Le compostage à domicile.",
        "B": "La croissance démographique et l'augmentation du niveau de vie.",
        "C": "L'utilisation d'énergies renouvelables.",
        "D": "Le tri sélectif strict."
      },
      "reponseCorrecte": "B",
      "explication": "L'augmentation de la population et du pouvoir d'achat entraînent inévitablement une plus grande consommation et donc plus de déchets."
    },
    {
      "id": "u3_q2",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "Les déchets dits 'fermentescibles' correspondent aux déchets :",
      "choix": {
        "A": "Inorganiques comme le verre et les métaux.",
        "B": "Organiques biodégradables (résidus alimentaires, déchets verts).",
        "C": "Plastiques et caoutchoucs.",
        "D": "Déchets radioactifs à faible activité."
      },
      "reponseCorrecte": "B",
      "explication": "Les déchets fermentescibles (ou organiques) sont ceux qui peuvent être dégradés naturellement par des microorganismes (ex: compostage, méthanisation)."
    },
    {
      "id": "u3_q4",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "Le compostage est une technique de traitement des déchets qui :",
      "choix": {
        "A": "Se déroule en milieu anaérobie et produit du méthane.",
        "B": "Se déroule en milieu aérobie et transforme la matière organique en engrais.",
        "C": "Consiste à incinérer les déchets à très haute température.",
        "D": "Est appliquée uniquement pour les déchets inorganiques."
      },
      "reponseCorrecte": "B",
      "explication": "Le compostage nécessite de l'oxygène (aérobie) pour que les microorganismes dégradent la matière organique en compost (amendement organique pour le sol)."
    },
    {
      "id": "u3_q5",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "La méthanisation :",
      "choix": {
        "A": "Produit un biogaz riche en méthane utilisable comme source d'énergie.",
        "B": "Nécessite la présence abondante de dioxygène (O2).",
        "C": "Est un processus de tri mécanique des ordures ménagères.",
        "D": "Traite principalement les métaux lourds."
      },
      "reponseCorrecte": "A",
      "explication": "C'est une fermentation anaérobie (sans O2) par des bactéries méthanogènes produisant du CH4 énergétique."
    },
    {
      "id": "u3_q6",
      "difficulte": "facile",
      "theme": "dechets",
      "enonce": "L'un des principaux avantages de l'incinération des déchets est :",
      "choix": {
        "A": "La production d'un engrais riche pour l'agriculture.",
        "B": "L'élimination totale des rejets atmosphériques.",
        "C": "La réduction massive du volume des déchets et la production d'énergie thermique.",
        "D": "L'absence totale de cendres."
      },
      "reponseCorrecte": "C",
      "explication": "L'incinération réduit fortement le volume des déchets et permet de récupérer de la chaleur ou de l'électricité."
    },
    {
      "id": "u3_q11",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "Les pluies acides résultent de l'interaction de la vapeur d'eau avec :",
      "choix": {
        "A": "Les oxydes de soufre (SO2) et d'azote (NOx).",
        "B": "Le CO2 et le CH4.",
        "C": "Les CFC.",
        "D": "Les métaux lourds."
      },
      "reponseCorrecte": "A",
      "explication": "SO2 et NO2 réagissent avec l'eau pour former de l'acide sulfurique et nitrique (pH < 7)."
    },
    {
      "id": "u3_q12",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "La conséquence biologique directe d'un amincissement de la couche d'ozone est :",
      "choix": {
        "A": "L'augmentation de l'oxygène.",
        "B": "L'eutrophisation des lacs.",
        "C": "L'infiltration d'UV provoquant des mutations de l'ADN (cancers de la peau).",
        "D": "La formation accélérée de pluies acides."
      },
      "reponseCorrecte": "C",
      "explication": "L'ozone nous protège des UV mortels du Soleil."
    },
    {
      "id": "u3_q13",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "L'eutrophisation se caractérise au départ par :",
      "choix": {
        "A": "La disparition des algues.",
        "B": "Un enrichissement excessif des eaux en nitrates et phosphates.",
        "C": "Une oxygénation excessive des eaux profondes.",
        "D": "La baisse du niveau d'eau."
      },
      "reponseCorrecte": "B",
      "explication": "Les engrais (nitrates, phosphates) provoquent une multiplication incontrôlable des algues."
    },
    {
      "id": "u3_q17",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "Lequel de ces organismes est utilisé comme 'bio-indicateur' de la qualité de l'AIR ?",
      "choix": {
        "A": "Les larves de moustiques.",
        "B": "Les lichens.",
        "C": "Les vers de terre.",
        "D": "Les larves d'éphémères."
      },
      "reponseCorrecte": "B",
      "explication": "Les lichens sont extrêmement sensibles à la pollution atmosphérique (notamment au SO2)."
    },
    {
      "id": "u3_q19",
      "difficulte": "facile",
      "theme": "pollution",
      "enonce": "La 'lutte biologique' en agriculture consiste à :",
      "choix": {
        "A": "Utiliser des produits chimiques ciblés.",
        "B": "Utiliser des prédateurs naturels pour éliminer les ravageurs, limitant les pesticides.",
        "C": "Stériliser les sols.",
        "D": "Enfouir les déchets."
      },
      "reponseCorrecte": "B",
      "explication": "Ex: utiliser des coccinelles pour manger les pucerons."
    },
    {
      "id": "u3_q7",
      "difficulte": "expert",
      "theme": "dechets",
      "enonce": "Le lixiviat (jus de décharge) se forme suite à :",
      "choix": {
        "A": "La condensation de la vapeur d'eau dans les incinérateurs.",
        "B": "La décomposition anaérobie produisant du méthane.",
        "C": "L'infiltration des eaux de pluie à travers les déchets stockés, se chargeant en polluants.",
        "D": "Le refroidissement des réacteurs nucléaires."
      },
      "reponseCorrecte": "C",
      "explication": "L'eau traverse les déchets, dissout les substances toxiques et les germes, créant un liquide extrêmement polluant pour les nappes phréatiques."
    },
    {
      "id": "u3_q10",
      "difficulte": "expert",
      "theme": "pollution",
      "enonce": "Le mécanisme de destruction de la couche d'ozone est amorcé par :",
      "choix": {
        "A": "La réaction du dioxyde de soufre (SO2) avec l'eau.",
        "B": "La libération d'atomes de chlore (Cl) à partir de la dégradation des CFC sous l'effet des UV.",
        "C": "L'augmentation globale de la température océanique.",
        "D": "La photosynthèse excessive."
      },
      "reponseCorrecte": "B",
      "explication": "Les UV cassent les molécules de CFC, libérant du chlore très réactif qui détruit l'ozone (O3)."
    },
    {
      "id": "u3_q14",
      "difficulte": "expert",
      "theme": "pollution",
      "enonce": "Quelle est la dernière étape mortelle de l'eutrophisation pour un lac ?",
      "choix": {
        "A": "Les poissons meurent de froid.",
        "B": "Le milieu devient totalement aérobie.",
        "C": "La décomposition des algues mortes par des bactéries épuise l'oxygène (anaérobiose) et libère des gaz toxiques (H2S).",
        "D": "L'eau devient extrêmement acide."
      },
      "reponseCorrecte": "C",
      "explication": "Les bactéries consomment tout l'oxygène pour dégrader les algues mortes, tuant toute forme de vie aquatique."
    },
    {
      "id": "u3_q15",
      "difficulte": "expert",
      "theme": "pollution",
      "enonce": "La bioaccumulation désigne le phénomène par lequel :",
      "choix": {
        "A": "Les déchets s'accumulent en décharge.",
        "B": "La concentration d'un polluant non dégradable augmente à chaque niveau supérieur de la chaîne alimentaire.",
        "C": "Les plantes absorbent trop de CO2.",
        "D": "Les bactéries se multiplient."
      },
      "reponseCorrecte": "B",
      "explication": "Les super-prédateurs (comme l'Homme) ingèrent les toxines (ex: Mercure) accumulées par toutes leurs proies."
    },
    {
      "id": "u3_q18",
      "difficulte": "expert",
      "theme": "pollution",
      "enonce": "Un IBQS (Indice Biologique de Qualité des Sols) très faible indique :",
      "choix": {
        "A": "Un sol très fertile.",
        "B": "Un sol fortement peuplé en invertébrés.",
        "C": "Un sol pollué ayant subi une forte réduction de sa faune (macro-invertébrés).",
        "D": "Un sol très acide."
      },
      "reponseCorrecte": "C",
      "explication": "L'IBQS se base sur le recensement des invertébrés du sol."
    },
    {
      "id": "u3_q24",
      "difficulte": "expert",
      "theme": "radioactivite",
      "enonce": "Qu'est-ce que la 'Demi-vie' d'un élément radioactif ?",
      "choix": {
        "A": "Le temps nécessaire pour que la moitié des noyaux radioactifs d'un échantillon se désintègre.",
        "B": "Le temps nécessaire pour perdre 100% de sa radioactivité.",
        "C": "La durée de stockage en centrale.",
        "D": "La durée de vie de l'atome."
      },
      "reponseCorrecte": "A",
      "explication": "Au bout d'une demi-vie, l'activité est divisée par 2."
    },
    {
      "id": "u3_q25",
      "difficulte": "expert",
      "theme": "radioactivite",
      "enonce": "Pour sécuriser à très long terme les déchets à Haute Activité et à Vie Longue (HA-VL), la méthode est :",
      "choix": {
        "A": "Immersion sous-marine.",
        "B": "Largage spatial.",
        "C": "Vitrification (emprisonnement dans du verre) puis enfouissement géologique profond dans des roches stables.",
        "D": "Méthanisation."
      },
      "reponseCorrecte": "C",
      "explication": "C'est la méthode de confinement ultime pour isoler ces déchets de la biosphère pour des millénaires."
    },
    {
      "id": "u3_q28",
      "difficulte": "expert",
      "theme": "pollution",
      "enonce": "L'un des effets majeurs de la pollution par métaux lourds (Mercure, Plomb) est :",
      "choix": {
        "A": "La diminution de la radioactivité.",
        "B": "La bioaccumulation toxique dans la chaîne alimentaire.",
        "C": "L'augmentation de la fertilité marine.",
        "D": "La transparence de l'eau."
      },
      "reponseCorrecte": "B",
      "explication": "Les métaux lourds ne sont pas dégradés et empoisonnent les prédateurs de bout de chaîne (ex: maladie de Minamata)."
    },
    {
      "id": "u3_q29",
      "difficulte": "expert",
      "theme": "pollution",
      "enonce": "La présence de larves de Plécoptères et d'Éphéméroptères dans une rivière indique :",
      "choix": {
        "A": "Une eau très polluée.",
        "B": "Une eau pure, riche en dioxygène dissous.",
        "C": "Une eau eutrophisée.",
        "D": "Une eau radioactive."
      },
      "reponseCorrecte": "B",
      "explication": "Ce sont des bio-indicateurs très sensibles. Ils disparaissent au moindre manque d'oxygène."
    },
    {
      "id": "u3_q33",
      "difficulte": "expert",
      "theme": "dechets",
      "enonce": "Dans une décharge contrôlée (Centre d'Enfouissement Technique), on utilise une bâche étanche (géomembrane) pour :",
      "choix": {
        "A": "Empêcher les déchets de s'envoler.",
        "B": "Éviter l'infiltration du lixiviat toxique dans la nappe phréatique.",
        "C": "Bloquer l'entrée des rayons UV.",
        "D": "Réchauffer les déchets."
      },
      "reponseCorrecte": "B",
      "explication": "La protection des eaux souterraines est la priorité absolue d'une décharge moderne."
    },
    {
      "id": "u3_q34",
      "difficulte": "expert",
      "theme": "radioactivite",
      "enonce": "L'irradiation des aliments (radappertisation) sert à :",
      "choix": {
        "A": "Donner un goût sucré aux fruits.",
        "B": "Détruire les insectes, bactéries et champignons pour allonger la durée de conservation.",
        "C": "Rendre l'aliment radioactif pour la santé.",
        "D": "Cuire l'aliment sans chaleur."
      },
      "reponseCorrecte": "B",
      "explication": "L'aliment irradié ne devient PAS radioactif. Les rayons le traversent et tuent les germes."
    },
    {
      "id": "u3_q35",
      "difficulte": "expert",
      "theme": "pollution",
      "enonce": "L'effet de serre est naturel, mais son aggravation actuelle est due :",
      "choix": {
        "A": "À la distance de la Terre au Soleil.",
        "B": "Aux émissions anthropiques massives de CO2 et de CH4 issues des énergies fossiles et de l'agriculture.",
        "C": "À l'amincissement de la couche d'ozone.",
        "D": "Au réchauffement du noyau terrestre."
      },
      "reponseCorrecte": "B",
      "explication": "Sans effet de serre, il ferait -18°C sur Terre. Mais l'excès de GES liés à l'Homme piège trop d'infrarouges."
    },
    {
      "id": "u3_q37",
      "difficulte": "expert",
      "theme": "pollution",
      "enonce": "La destruction de la couche d'ozone a pour conséquence sur les océans :",
      "choix": {
        "A": "De les réchauffer fortement.",
        "B": "De réduire la photosynthèse du phytoplancton à cause des UV mortels.",
        "C": "De provoquer l'eutrophisation.",
        "D": "De multiplier les marées noires."
      },
      "reponseCorrecte": "B",
      "explication": "Les UV tuent le plancton végétal, ce qui détruit la base de toute la chaîne alimentaire marine."
    },
    {
      "id": "u3_q40",
      "difficulte": "expert",
      "theme": "pollution",
      "enonce": "En cas d'eutrophisation, quelle est l'origine du gaz H2S (odeur d'œuf pourri) ?",
      "choix": {
        "A": "La respiration des poissons.",
        "B": "La fermentation anaérobie des matières organiques mortes par des bactéries au fond de l'eau.",
        "C": "La photosynthèse des algues.",
        "D": "L'évaporation de l'eau pure."
      },
      "reponseCorrecte": "B",
      "explication": "En l'absence d'oxygène, les bactéries anaérobies prennent le relais et libèrent des gaz toxiques sulfureux."
    }
  ],
  "erreursFrequentes": [
    {
      "nom": "Pollution",
      "erreursFrequentes": [
        "Confondre l'effet de serre et le trou de la couche d'ozone (Faux : Effet de Serre = Infrarouge/Chaleur piégée, Ozone = Bouclier UV percé).",
        "Penser qu'une eau avec beaucoup de DBO5 est propre (Faux : DBO5 = beaucoup de bactéries au travail = eau très polluée).",
        "Croire que les lichens poussent mieux dans la pollution (Faux : ils en meurent, ce sont des bio-indicateurs de pureté)."
      ],
      "methodeFlash": "Effet de Serre = CO2 = Chaud. Ozone = CFC = UV/Cancers."
    },
    {
      "nom": "Déchets et Radioactivité",
      "erreursFrequentes": [
        "Confondre méthanisation et compostage (Faux : Méthanisation = sans oxygène = gaz. Compostage = avec oxygène = engrais).",
        "Croire que l'irradiation médicale rend le patient ou l'objet radioactif (Faux : l'objet est traversé par les rayons qui tuent les microbes, il ne devient pas radioactif).",
        "Penser qu'on peut détruire un déchet radioactif (Faux : on ne peut qu'attendre que sa demi-vie s'écoule)."
      ],
      "methodeFlash": "Le nucléaire ne se détruit pas, il se cache (Enfouissement)."
    }
  ],
  "parcours": {
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
  }
};