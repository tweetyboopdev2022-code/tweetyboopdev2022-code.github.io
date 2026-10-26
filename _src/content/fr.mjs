// Contenu français. Même structure que en.mjs, clé pour clé.
// Première personne sans accord de genre (« je conçois », pas « je suis développeuse/développeur »).
export default {
  htmlLang: 'fr',
  ogLocale: 'fr_CA',
  nav: { work: 'Projets', cases: 'Études de cas', skills: 'Compétences', resume: 'CV', switchTo: 'EN', switchLabel: 'Read in English' },
  contact: {
    title: 'Un projet que des gens utiliseront tous les jours?',
    body: 'Je présenterai volontiers n’importe lequel de ces projets plus en détail, y compris les projets privés.',
    email: 'M’écrire',
    github: 'Me joindre sur GitHub ↗',
    resume: 'CV',
  },
  footer: { privacy: 'Confidentialité', terms: 'Conditions' },
  labels: {
    stack: 'Technologies', role: 'Rôle', status: 'Statut', readCase: 'Lire l’étude de cas', caseStudy: 'Étude de cas',
    allCases: 'Toutes les études de cas', problem: 'Le problème', built: 'Ce que j’ai construit', how: 'Comment ça fonctionne',
    decisions: 'Décisions clés', where: 'Où en est le projet', diagram: 'Schéma du système', more: 'Autres études de cas',
    prev: 'Précédente', next: 'Suivante',
  },

  home: {
    title: 'tweetyboopdev · Développement mobile et full-stack',
    description: 'Applications mobiles hors ligne d’abord, logiciels familiaux auto-hébergés, outils pour livres numériques et modules pour écran intelligent. Des logiciels que de vraies familles utilisent tous les jours.',
    eyebrow: 'Développement mobile et full-stack',
    headline: 'Des logiciels que de vraies familles <em>utilisent tous les jours</em>.',
    lede: 'Je conçois des applications mobiles qui fonctionnent hors ligne, des services auto-hébergés et les petits appareils qui les entourent : un écran mural dans la cuisine, des modifications pour liseuse, une application de coordination des soins. Tout ce qui est ici sert chaque jour à de vraies personnes.',
    ctaWork: 'Voir les projets',
    ctaCases: 'Lire les études de cas',
    devices: {
      label: 'Notre vrai écran mural de cuisine, à côté d’illustrations d’une liseuse Kobo affichant un résumé et d’un téléphone recevant une alerte de soins',
      date: 'MARDI · JOUR 3 · −4 °C',
      homeTab: 'Accueil', planTab: 'Planif',
      tiles: [['Autobus', 'dans 23 min'], ['Coucher', 'Alex ce soir'], ['Aujourd’hui', 'Gym · Livres à rendre · Midi pizza', true], ['Tâches', '<span class="stars">★★★★☆</span>'], ['Souper', 'Chili'], ['Pointe Hydro', '6 h – 10 h : lave-vaisselle plus tard', true]],
      book: ['Le vent soufflait depuis trois jours, et le port était vide quand elle arriva enfin…', 'Personne au village ne se souvenait de la dernière fois où le traversier n’était pas venu.'],
      recapTitle: 'Résumé', recap: 'Dernière lecture il y a 9 jours. Chapitre 11 : Mara trouve le registre et apprend qui a vendu le bateau.',
      pingTitle: 'Besoin d’aide', ping: 'Soif · depuis la tablette, il y a 1 min', ack: 'J’arrive',
    },
    proof: [['123 287 → 1 342', 'erreurs EPUBCheck après la réparation par epubkit'], ['25', 'modules pour écran intelligent, un seul assistant de configuration'], ['3 écrans', 'téléphone, liseuse et écran mural de cuisine'], ['FR · EN', 'applications bilingues, conçues au Québec']],
    workEyebrow: 'Code source ouvert', workTitle: 'Projets choisis', workIntro: 'Du code public, de vrais utilisateurs. Chaque projet est né d’un problème dans notre propre maison.',
    viewCode: 'Voir le code ↗',
    terminal: `<span class="dim">$</span> epubkit run ~/Livres --recaps
<span class="dim">convert</span>   PDF · MOBI · AZW3 → EPUB
<span class="dim">metadata</span>  373 titres, auteurs, séries
<span class="dim">repair</span>    paquet EPUB 2 → EPUB 3
<span class="dim">validate</span>  <span class="hi">123 287</span> → <span class="ok">1 342</span> erreurs
<span class="ok">✓</span> 344 livres conformes · 0 page perdue`,
    projects: {
      epubkit: {
        body: 'On lui donne un dossier de livres téléchargés et on récupère une bibliothèque que la Kobo ouvre sans broncher : convertie, métadonnées complétées, noms de fichiers normalisés, structure réparée, validée avec EPUBCheck et, au besoin, avec des résumés sans divulgâcheurs intégrés à chaque livre.',
        metric: 'Éprouvé sur une vraie bibliothèque de 373 livres. Chaque règle de réparation est née d’un bris.',
        llm: 'LLM locaux',
      },
      recapmod: {
        artTitle: 'Personnages rencontrés', art: 'Mara, la fille du capitaine du traversier<br>Tobias, maître de port<br>Le vieux Fen, gardien du registre',
        body: 'Une modification pour Kobo qui ajoute un bouton Résumé : quand vous avez lu pour la dernière fois, ce qui s’est passé et qui vous avez rencontré. Jamais au-delà de la page courante, entièrement hors ligne.',
      },
      hs: {
        title: 'Modules Home Screens',
        art: [['Calendrier', '#f5c37e'], ['Étoiles de tâches', '#f472b6'], ['Épicerie', '#34d399'], ['Jour d’école', '#60a5fa'], ['Pointes Hydro', '#fbbf24'], ['Prochain match', '#a78bfa'], ['Animaux', '#fb923c']],
        body: 'Vingt-cinq modules pour un écran intelligent à code source ouvert, et un assistant qui les configure tous pour votre famille en une seule étape. Les versions sont produites par l’intégration continue.',
        wizard: 'Essayer l’assistant ↗',
      },
      grimmory: {
        title: 'Ajouts pour Grimmory',
        art: [['Le Hobbit', '#f472b6', 'demandé'], ['Les Royaumes de Feu 6', '#60a5fa', 'tome manquant'], ['Dune', '#34d399', 'ajouté']],
        body: 'Une liste de souhaits partagée et un bouton « Configurer ma Kobo » pour une bibliothèque auto-hébergée, ajoutés sans toucher au code ni à la base de données de l’application.',
      },
    },
    wall: {
      eyebrow: 'Utilisé tous les jours', title: 'Le mur de la cuisine',
      intro: 'De vrais écrans de notre affichage mural, avec les modules Home Screens. Les noms ont été remplacés.',
      shots: [
        ['home', 'Écran d’accueil de l’affichage mural avec l’heure, la météo, les collectes, les soupers, la semaine de la famille et un score de hockey', 'Accueil\u00a0: la journée d’un coup d’œil, des collectes aux soupers jusqu’à la semaine.'],
        ['planning', 'Écran de planification avec un calendrier mensuel des jours d’école, des minuteries, les repas congelés et le menu de la semaine', 'Planification\u00a0: jours du cycle scolaire, minuteries, congélateur et repas de la semaine.'],
        ['shopping', 'Écran d’épicerie avec les listes par magasin et des boutons d’ajout rapide', 'Épicerie\u00a0: des listes par magasin, alimentées du téléphone ou du mur.'],
      ],
    },
    casesEyebrow: 'Travail privé', casesTitle: 'Études de cas', casesIntro: 'Réalisés pour un client, un employeur ou ma propre famille. Présentation du code sur demande.',
    skillsEyebrow: 'Ce que j’apporte', skillsTitle: 'Compétences',
    skills: [
      ['Mobile', 'Des applications React Native et Expo pensées hors ligne d’abord : bases de données locales, synchronisation, notifications, publication sur iOS et Android.', ['React Native', 'Expo', 'WatermelonDB', 'Detox']],
      ['Full-stack et Web', 'Des API et des applications Web de bout en bout, du schéma de base de données et de l’authentification jusqu’à l’écran, testées à chaque couche.', ['TypeScript', 'React', 'Kotlin · Ktor', 'Rails', 'PostgreSQL', 'Firebase']],
      ['Systèmes et appareils', 'Ce que la plupart des devs évitent : micrologiciel embarqué, modifications de liseuse, auto-hébergement, Docker et pipelines d’intégration continue.', ['Python', 'C++ · Qt', 'ESP32', 'Docker', 'GitHub Actions']],
    ],
    principles: [['Hors ligne d’abord', 'Les applications fonctionnent sans réseau et se rattrapent ensuite.'], ['Bilingue d’office', 'Français et anglais dès le premier écran.'], ['Vie privée intégrée', 'Le minimum de données, chiffrées là où ça compte, conforme à l’esprit de la Loi 25.'], ['Les tests comme spécification', 'Le comportement est défini avant d’être codé.']],
  },

  cases: [
    {
      slug: 'robins-voice',
      name: "Robin's Voice",
      kind: 'Mobile + API · en bêta',
      stackShort: 'Expo · React Native · Rails 8 · PostgreSQL · ActionCable',
      role: 'Produit, architecture, API et application',
      statusShort: 'En bêta avec une équipe de soins familiale',
      summary: 'Une application de communication et de coordination des soins pour les adultes autistes non verbaux et les nombreuses personnes qui les accompagnent. La personne aidée touche des pictogrammes ou une carte du corps sur une tablette; parents, infirmières et éducateurs reçoivent l’information en temps réel sur leur téléphone.',
      highlights: [
        'Multilocataire par foyer : une même personne aidante peut faire partie de plusieurs équipes de soins, avec un rôle et des permissions propres à chacune.',
        'Signaux en temps réel par WebSocket, avec un cycle en attente, pris en charge puis résolu, en plus des médicaments, limites d’apport, signes vitaux et équipements.',
        'Bilingue français et anglais, conçue pour la Loi 25, avec les champs sensibles chiffrés au repos et de l’intégration continue sur les deux applications.',
      ],
      tagline: 'Une tablette qui parle pour quelqu’un qui ne le peut pas, et une application qui s’assure que quelqu’un répond.',
      problem: [
        'Les adultes autistes non verbaux dépendent souvent d’un cercle de personnes qui se relaient : parents, infirmières à domicile, éducateurs, intervenants en répit. Quand ils ont soif, mal ou de la peine, ils n’ont parfois aucun moyen fiable de le dire.',
        'L’entourage a le problème inverse : ce qu’une personne a remarqué le matin se rend rarement à celle qui prend le relais, et les médicaments, les limites d’hydratation et l’entretien des équipements vivent dans des cahiers et des conversations de groupe.',
      ],
      features: [
        ['Une voix sur la tablette', 'Un tableau de pictogrammes avec plus de 70 boutons bilingues prêts à l’emploi, des photos et de l’audio personnels, et une carte du corps pour montrer où ça fait mal. Un bouton peut ouvrir des sous-choix, comme quelle pizza.'],
        ['Des signaux qui obtiennent une réponse', 'Chaque toucher arrive en temps réel sur les téléphones de l’équipe et passe d’en attente à pris en charge, puis à résolu : deux personnes n’accourent pas en même temps, et personne ne suppose qu’un autre s’en occupe.'],
        ['Le dossier de soins', 'Horaires et registre des médicaments, limites d’hydratation avec alertes douces et fermes, signes vitaux, humeur, et un catalogue de plus de 50 équipements médicaux avec leur historique d’entretien.'],
        ['Des relèves qui tiennent', 'Des notes de quart qui doivent être lues et fermées avant d’en écrire une nouvelle, et l’horaire de la journée affiché sur la tablette pour que la personne sache ce qui s’en vient.'],
      ],
      howIntro: 'Une seule application Expo fonctionne en deux modes sur deux types d’appareils : le téléphone des personnes aidantes et une tablette réservée à la personne aidée. Les deux parlent à une API Rails qui limite chaque requête à un foyer.',
      diagram: [
        {
          title: 'Un besoin, du toucher à la réponse',
          stages: [
            { name: 'Tablette', tech: 'Expo · mode personne aidée', items: ['Pictogrammes et carte du corps', 'Jumelée avec un code de 10 minutes', 'Touchers mis en file hors ligne'] },
            { name: 'API Rails 8', tech: 'Devise JWT · Pundit · acts_as_tenant', items: ['Chaque requête limitée à un foyer', 'Machine à états des signaux', 'Historique des données cliniques'], hot: true },
            { name: 'PostgreSQL', tech: 'Colonnes chiffrées', items: ['Noms, diagnostics, allergies et médicaments chiffrés au repos'] },
          ],
          links: [{ label: 'HTTPS + jeton d’appareil' }, { label: 'lecture / écriture', both: true }],
        },
        {
          title: 'Joindre les bonnes personnes',
          stages: [
            { name: 'API Rails 8', tech: 'ActionCable', items: ['Canal du foyer', 'Notifications pour les téléphones en poche'], hot: true },
            { name: 'Téléphones des aidants', tech: 'Expo · mode aidant', items: ['Tableau de bord avec pastilles', 'Prendre en charge, puis résoudre', 'Registres, notes et réglages selon les permissions'] },
          ],
          links: [{ label: 'WebSocket + notifications' }],
        },
      ],
      decisions: [
        ['Le locataire, c’est le foyer, pas l’utilisateur', 'Une infirmière peut travailler avec trois familles. Chaque adhésion a son propre rôle et ses permissions par module, plus des accès temporaires qui expirent, comme l’accès aux réglages pendant une heure.'],
        ['La personne aidée n’a pas de compte', 'La tablette se connecte comme appareil jumelé, avec son propre jeton révocable. Aucun mot de passe à gérer pour elle, et une tablette perdue peut être coupée sans toucher aux autres.'],
        ['Une seule machine à états pour tous les signaux', 'Les besoins et la douleur suivent le même cycle en attente, pris en charge et résolu : le tableau de bord, les pastilles et les notifications se comportent tous de la même façon.'],
        ['La vie privée pensée pour la Loi 25', 'La loi québécoise a façonné le modèle de données dès le premier jour : les champs les plus sensibles sont chiffrés au repos et les changements au dossier clinique laissent une trace.'],
        ['Aucun toucher perdu', 'La tablette garde les signaux en file quand elle est hors ligne et les envoie au retour de la connexion : une coupure Wi-Fi n’avale jamais une demande d’aide.'],
      ],
      status: [
        ['Aujourd’hui', 'La bêta familiale et la phase élargie au cercle de soins sont terminées : l’application sert à une vraie équipe de soins. L’intégration continue exécute les tests de l’API et de l’application mobile à chaque envoi.'],
        ['Ensuite', 'La mise en marché : fiches sur l’App Store et Google Play, un parcours de consentement pour les autres familles et la reconnaissance par les programmes québécois pour les personnes handicapées.'],
      ],
      stack: ['Rails 8', 'PostgreSQL', 'ActionCable', 'Devise + JWT', 'Pundit', 'acts_as_tenant', 'PaperTrail', 'RSpec', 'Expo', 'React Native', 'TypeScript', 'Zustand', 'i18n FR/EN'],
    },
    {
      slug: 'generator-monitor',
      name: 'Suivi de génératrice de secours',
      kind: 'Projet client · mobile + IdO',
      stackShort: 'Expo · React Native · Firebase · micrologiciel ESP32 (PlatformIO)',
      role: 'Application, backend, micrologiciel et conception matérielle',
      statusShort: 'Application et micrologiciel terminés, installation sur place à venir',
      summary: 'Une application pour les clients d’un entrepreneur électricien, qui leur permet de surveiller leur génératrice résidentielle et de la démarrer ou l’arrêter de n’importe où, avec le micrologiciel du petit boîtier branché sur la génératrice.',
      highlights: [
        'Le micrologiciel ESP32 lit l’état de marche et les défauts sur le faisceau du contrôleur de la génératrice, et parle à Firestore en simple REST.',
        'Une commande n’est réussie que lorsque les capteurs confirment que le moteur tourne, pas quand un relais claque.',
        'Fonctionne avec le forfait gratuit de Firebase : un balayage planifié remplace les Cloud Functions pour les alertes, la détection hors ligne et les notifications. Les règles de sécurité sont couvertes par plus de 60 tests.',
      ],
      tagline: 'Démarrer une génératrice de secours depuis son téléphone, et savoir qu’elle a vraiment démarré.',
      problem: [
        'Un entrepreneur électricien installe des génératrices de secours pour maisons entières. Le Wi-Fi du fabricant ne fonctionne qu’en local : ni le propriétaire ni l’entrepreneur ne peuvent savoir à distance si l’appareil va bien, ni le démarrer avant une tempête.',
        'L’entrepreneur voulait une application bilingue à son image pour ses clients, une vue d’ensemble de toutes les génératrices qu’il entretient, et du matériel que son propre électricien pourrait installer.',
      ],
      features: [
        ['Application client', 'État en direct, heures de marche, tension de batterie et tuiles de défauts, graphiques et historique, alertes ouvertes, et demandes de service envoyées directement à l’entrepreneur.'],
        ['Application de l’équipe', 'Toutes les génératrices regroupées par propriétaire, démarrage et arrêt à distance, attribution aux clients, archivage et journal d’audit de qui a fait quoi.'],
        ['Micrologiciel du boîtier', 'Un micrologiciel ESP32 pour un petit boîtier branché sur le contrôleur : portail de configuration Wi-Fi, identité de connexion propre, détection de marche et entrées de défaut anti-rebond.'],
        ['Alertes et guide d’installation', 'Notifications en français et en anglais pour les défauts, la batterie faible et les appareils devenus silencieux, plus une liste de pièces et un guide d’installation étape par étape pour l’électricien.'],
      ],
      howIntro: 'Le boîtier et les applications ne se parlent jamais directement. Tout passe par Firestore, dont les règles de sécurité décident qui peut écrire quoi : l’équipe, les clients ou l’identité propre du boîtier.',
      diagram: [
        {
          title: 'État et démarrage / arrêt',
          stages: [
            { name: 'Contrôleur de la génératrice', tech: 'Faisceau documenté', items: ['Signal de marche à 2 fils', 'Défauts alarme, huile, température et fréquence', 'Tension de batterie'] },
            { name: 'Boîtier ESP32', tech: 'PlatformIO · Arduino', items: ['Relais de marche maintenu', 'Entrées de défaut anti-rebond', 'Interroge les commandes'], hot: true },
            { name: 'Firestore', tech: 'Règles de sécurité · 60+ tests', items: ['État et historique', 'Commandes', 'Alertes et journal d’audit'] },
            { name: 'Applications équipe et client', tech: 'Expo · React Native', items: ['État en direct', 'Démarrer / arrêter (équipe seulement)', 'Historique et alertes'] },
          ],
          links: [{ label: 'contacts secs + optocoupleur', both: true }, { label: 'REST, identité propre', both: true }, { label: 'écouteurs en direct', both: true }],
        },
        {
          title: 'Des alertes sans Cloud Functions',
          stages: [
            { name: 'Firestore', tech: 'État des boîtiers', items: ['Signaux de vie', 'Commandes en attente'] },
            { name: 'Balayage planifié', tech: 'Node · chaque minute', items: ['Boîtiers silencieux', 'Commandes expirées', 'Alertes de seuil, sans doublons'], hot: true },
            { name: 'Téléphone du client', tech: 'Notifications Expo', items: ['Message dans la langue du client'] },
          ],
          links: [{ label: 'Admin SDK' }, { label: 'API de notifications' }],
        },
      ],
      decisions: [
        ['Réussi veut dire que le moteur tourne', 'Une commande passe d’en attente à reçue puis à terminée seulement quand la détection de marche confirme le changement. Sinon, le balayage la déclare expirée et lève une alerte plutôt que d’afficher un faux succès.'],
        ['Lire le manuel du fabricant avant d’acheter des pièces', 'On y a trouvé une entrée de démarrage / arrêt à 2 fils documentée et des sorties de défaut distinctes sur le faisceau du contrôleur. Le micrologiciel a été repensé autour de ce signal de marche maintenu plutôt que de simuler des boutons.'],
        ['Le forfait gratuit, par choix', 'Pas de Cloud Functions : un petit script lancé chaque minute gère la détection hors ligne, l’expiration des commandes, les alertes de seuil et les notifications. Les identifiants d’alerte sont déterministes : le relancer n’envoie jamais de doublon.'],
        ['Un capteur absent est absent, pas à zéro', 'Toutes les lectures sauf l’état de marche sont facultatives. Une installation de base n’affiche que ce qu’elle mesure vraiment, et d’autres marques de génératrices entrent dans le même schéma sans changer le code.'],
        ['Tester les règles avec les vraies requêtes de l’application', 'Une règle qui passait tous les tests sur un seul document échouait pour la requête de liste d’un écran. Les tests couvrent maintenant exactement les requêtes et les lots que l’application envoie.'],
      ],
      status: [
        ['Aujourd’hui', 'L’application, le backend et le micrologiciel sont terminés, et le micrologiciel compile avec la vraie chaîne d’outils ESP32. La configuration Wi-Fi, la connexion, la détection de marche et la boucle de commandes peuvent toutes être testées sur l’établi avant de toucher à une génératrice.'],
        ['Ensuite', 'L’installation sur place avec l’électricien de l’entrepreneur : confirmer la polarité des signaux de défaut sur l’appareil réel et valider le cycle complet démarrer, détecter, arrêter, détecter.'],
      ],
      stack: ['Expo', 'React Native', 'TypeScript', 'Zustand', 'Firebase Auth', 'Firestore', 'Tests de règles', 'Notifications Expo', 'ESP32', 'PlatformIO', 'C++', 'i18n FR/EN'],
    },
    {
      slug: 'fieldbook',
      name: 'Fieldbook',
      kind: 'Travail professionnel · mobile',
      stackShort: 'React Native · TypeScript · WatermelonDB · Redux Toolkit',
      roleLabel: 'Note',
      role: 'Nom et image de marque modifiés',
      statusShort: 'En production sur iOS et Android',
      summary: 'Une application de terrain en production, pensée hors ligne d’abord. Les équipes remplissent formulaires et rapports sans réseau, et tout se synchronise au retour de la connexion.',
      highlights: [
        'Architecture propre par module, avec injection de dépendances et types d’identifiants distincts.',
        'Données locales dans WatermelonDB sur SQLite, avec un service de synchronisation qui rattrape le retard dès que l’appareil se reconnecte.',
        'Tests de bout en bout Detox, surveillance Sentry et Datadog, français et anglais.',
      ],
      tagline: 'Une application de chantier qui continue de fonctionner là où il n’y a pas de réseau.',
      problem: [
        'Sur un chantier, la connexion va et vient. Les équipes ont quand même besoin des derniers plans, des tâches et des formulaires, et prennent des photos et remplissent des rapports dans des sous-sols et sur des toits.',
        'Chaque changement doit finir par arriver au bureau, dans le bon ordre, sans se perdre ni s’appliquer deux fois.',
      ],
      builtTitle: 'Ce que fait l’application',
      features: [
        ['Tout fonctionne hors ligne', 'Plans annotés, tâches, formulaires avec lecture de codes QR, rapports journaliers, feuilles de temps, bons de travail et photos, tous utilisables sans connexion.'],
        ['Synchronisation par module', 'Chaque domaine de l’API se synchronise séparément et garde sa propre date de dernière récupération par projet, grâce à un assistant commun pour les lots, la journalisation et les permissions.'],
        ['Les changements en file', 'Chaque écriture hors ligne est enregistrée comme un événement et envoyée dans l’ordre. Un inspecteur intégré permet aux utilisateurs et au soutien de voir, relancer ou effacer ce qui bloque.'],
        ['Un code qui grandit bien', 'Des modules aux couches strictes, des générateurs qui créent un module, un cas d’utilisation, un composant ou un écran, et deux configurations Jest pour les tests sur appareil et sous Node.'],
      ],
      howIntro: 'Chaque module sépare les règles d’affaires du stockage et des écrans. Les lectures viennent toujours de la base locale; le réseau ne sert qu’à alimenter cette base ou à vider la file des changements locaux.',
      diagram: [
        {
          title: 'Dans un module',
          stages: [
            { name: 'Écrans et hooks', tech: 'présentation', items: ['Requêtes réactives avec RxJS', 'Résolution des dépendances'] },
            { name: 'Cas d’utilisation', tech: 'domaine', items: ['Règles d’affaires seulement', 'Aucune dépendance au framework'], hot: true },
            { name: 'Dépôts', tech: 'données · tsyringe', items: ['Implémentent les interfaces du domaine'] },
            { name: 'WatermelonDB', tech: 'SQLite', items: ['La source de vérité sur l’appareil'] },
          ],
          links: [{ label: 'appelle' }, { label: 'interface' }, { label: 'lecture / écriture', both: true }],
        },
        {
          title: 'Synchronisation',
          stages: [
            { name: 'File d’événements hors ligne', tech: 'écritures locales', items: ['Intentions ordonnées', 'Relance ou correction depuis l’inspecteur'] },
            { name: 'API', tech: 'REST', items: ['Applique les changements', 'Renvoie les identifiants actifs par module'], hot: true },
            { name: 'Récupération par module', tech: 'écriture par lots', items: ['Créations et mises à jour en un lot', 'Supprime ce que le serveur ne liste plus'] },
          ],
          links: [{ label: 'envoi aux 10 s en ligne' }, { label: 'récupération, Wi-Fi seulement si choisi' }],
        },
      ],
      decisions: [
        ['Des couches strictes, imposées par le linter', 'Chaque module a ses couches domaine, données et présentation, et ESLint bloque toute importation qui contourne son point d’entrée public. La règle tient même sous la pression des échéances.'],
        ['Le serveur liste ce qui existe; l’appareil supprime le reste', 'Chaque récupération renvoie tous les identifiants actifs, et le client retire les lignes locales absentes. Aucun journal de suppressions requis côté serveur.'],
        ['Les écritures sont des événements', 'Les changements hors ligne sont conservés comme des intentions ordonnées, pas comme des lignes modifiées à comparer plus tard. Ils sont donc visibles, relançables et faciles à comprendre.'],
        ['L’injection de dépendances pour des tests rapides', 'Les cas d’utilisation et les dépôts sont enregistrés avec tsyringe : les règles d’affaires s’exécutent dans de simples tests Node, sans appareil ni simulateur.'],
        ['Respecter le forfait de données', 'Un réglage « Wi-Fi seulement » est vérifié avant toute synchronisation de module, avec la connectivité et la validité de la session.'],
      ],
      status: [
        ['Aujourd’hui', 'En production sur l’App Store et Google Play, publiée après revue de code, préproduction et assurance qualité sur les versions déployées.'],
        ['À propos de cette étude de cas', 'Le nom du produit, l’entreprise, les identifiants et les adresses ont été changés. Un échantillon de code anonymisé est disponible sur demande.'],
      ],
      stack: ['React Native', 'TypeScript', 'WatermelonDB', 'SQLite', 'Redux Toolkit', 'RxJS', 'tsyringe', 'Jest', 'Detox', 'Maestro', 'Sentry', 'Datadog', 'i18n FR/EN'],
    },
    {
      slug: 'homebase',
      name: 'Homebase',
      kind: 'Full-stack · auto-hébergé',
      stackShort: 'Kotlin · Ktor · PostgreSQL · React · TypeScript · Tailwind',
      role: 'Produit, architecture et chaîne de développement assistée par IA',
      statusShort: 'Utilisé tous les jours à la maison',
      summary: 'Notre propre application de tâches à la Todoist : des listes partagées sur les téléphones, les portables et l’écran mural de la cuisine, hébergées sur un serveur à la maison.',
      highlights: [
        'API Kotlin et Ktor sur PostgreSQL, avec une application Web React et TypeScript.',
        'Alimente l’écran mural grâce à ses propres modules pour les tâches, le menu et les médicaments, chaque écran ayant sa propre clé.',
        'Construit en petites étapes pilotées par les tests : chaque étape arrive avec son test comme spécification, et un modèle d’IA local code l’écran pour le faire passer.',
      ],
      tagline: 'Notre propre Todoist, construit à partir des tests, avec un modèle d’IA local qui code les écrans.',
      problem: [
        'Notre famille fonctionnait avec une application de tâches commerciale. Elle ne pouvait pas alimenter l’écran mural de la cuisine, ne connaissait ni les repas ni les médicaments, et gardait nos listes sur le serveur de quelqu’un d’autre.',
        'Je voulais un seul endroit pour les tâches, l’épicerie, les corvées, le menu de la semaine et les médicaments, partagé par la famille et affiché au mur, et une façon de le construire vite sans sacrifier la qualité.',
      ],
      features: [
        ['Un vrai gestionnaire de tâches', 'Listes dans des dossiers, sections, étiquettes, filtres enregistrés, sous-tâches, répétitions, rappels, commentaires, Aujourd’hui, À venir, Boîte de réception, recherche et mises à jour en direct.'],
        ['Un remplaçant de Todoist', 'Une importation depuis Todoist et une API compatible Todoist : nos listes et nos habitudes ont suivi au lieu de repartir de zéro.'],
        ['Repas et médicaments', 'Une banque de recettes et un menu de la semaine, l’inventaire du congélateur, l’épicerie générée à partir du menu, et les doses de médicaments avec historique, renouvellements et alertes.'],
        ['Sur le mur de la cuisine', 'Des modules pour l’écran mural Home Screens affichent les tâches, les repas et les doses de médicaments, par une API murale distincte.'],
      ],
      howIntro: 'L’application elle-même est un système classique à trois niveaux. Ce qui sort de l’ordinaire, c’est la façon dont les écrans sont construits : chacun est une petite étape dont le test est écrit d’abord, et un modèle d’IA local écrit le code jusqu’à ce que ce test passe.',
      diagram: [
        {
          title: 'L’application',
          stages: [
            { name: 'Téléphones et portables', tech: 'React 19 · TypeScript · Tailwind', items: ['Interface de style Material', 'Mises à jour en direct'] },
            { name: 'API Ktor', tech: 'Kotlin · Exposed', items: ['Foyers, listes, tâches', 'Repas et médicaments', 'API compatible Todoist'], hot: true },
            { name: 'PostgreSQL', tech: 'Docker sur un serveur maison', items: ['Sauvegardes quotidiennes, gardées 14 jours'] },
          ],
          links: [{ label: 'HTTPS', both: true }, { label: 'SQL', both: true }],
        },
        {
          title: 'Comment chaque écran est construit',
          stages: [
            { name: 'Étape + test', tech: 'la spécification', items: ['Validé d’abord contre une implémentation jetable'] },
            { name: 'Modèle local', tech: 'Aider + qwen3-coder', items: ['Écrit l’écran', 'Ne peut pas modifier le test'], hot: true },
            { name: 'check.sh', tech: 'types + tous les tests', items: ['Réussi ou échoué, rien entre les deux'] },
            { name: 'Revue', tech: 'moi', items: ['Je regarde, je marque terminé'] },
          ],
          links: [{ label: 'step.sh' }, { label: 'lance' }, { label: 'réussit' }],
        },
      ],
      decisions: [
        ['Le test est la spécification', 'Chaque étape arrive avec son test, validé contre une implémentation fonctionnelle avant d’être confié au modèle. Le modèle ne peut jamais modifier le test : une étape réussie veut dire que l’écran fait vraiment ce qui était demandé.'],
        ['Chaque erreur devient une règle', 'Chaque nouveau type d’erreur du modèle devient une ligne dans le fichier de conventions, pour qu’il ne la refasse pas.'],
        ['Compatible dès le premier jour', 'Parler l’API de Todoist a permis de garder importations, scripts et habitudes, plutôt que de demander à la famille de tout recommencer.'],
        ['Chaque écran mural a sa clé', 'Chaque écran mural s’authentifie avec sa propre clé sur une API murale distincte, et non avec le compte d’un membre de la famille.'],
        ['Simple à exploiter', 'Un seul fichier Docker Compose sur un serveur maison, une vérification d’état et des sauvegardes quotidiennes gardées deux semaines, avec une procédure de restauration écrite.'],
      ],
      status: [
        ['Aujourd’hui', 'Utilisé tous les jours à la maison sur les téléphones, les portables et au mur. Le serveur compte 66 tests répartis dans 14 fichiers.'],
        ['Ensuite', 'D’autres modules muraux et les écrans restants, une étape testée à la fois.'],
      ],
      stack: ['Kotlin', 'Ktor 3', 'Exposed', 'PostgreSQL', 'React 19', 'TypeScript', 'Tailwind 4', 'Vite', 'Vitest', 'Docker', 'Aider', 'LLM local'],
    },
  ],
};
