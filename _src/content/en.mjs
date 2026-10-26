// English content. fr.mjs mirrors this file key for key.
export default {
  htmlLang: 'en',
  ogLocale: 'en_CA',
  nav: { work: 'Work', cases: 'Case studies', skills: 'Skills', resume: 'Résumé', switchTo: 'FR', switchLabel: 'Lire en français' },
  contact: {
    title: 'Have something people will use every day?',
    body: "I'm happy to walk through any of these projects, including the private ones, in more depth.",
    email: 'Email me',
    github: 'Get in touch on GitHub ↗',
    resume: 'Résumé',
  },
  footer: { privacy: 'Privacy', terms: 'Terms' },
  labels: {
    stack: 'Stack', role: 'Role', status: 'Status', readCase: 'Read the case study', caseStudy: 'Case study',
    allCases: 'All case studies', problem: 'The problem', built: 'What I built', how: 'How it works',
    decisions: 'Key decisions', where: 'Where it stands', diagram: 'System diagram', more: 'More case studies',
    prev: 'Previous', next: 'Next',
  },

  home: {
    title: 'tweetyboopdev · Mobile & full-stack developer',
    description: 'Offline-first mobile apps, self-hosted family software, e-book tooling and smart-display plugins. Software real households use every day.',
    eyebrow: 'Mobile &amp; full-stack developer',
    headline: 'Software that real households <em>use every day</em>.',
    lede: 'I build offline-first mobile apps, self-hosted services and the small devices around them: a kitchen wall display, e-reader mods, a care-coordination app. Everything here is in daily use by real people.',
    ctaWork: 'See the work',
    ctaCases: 'Read the case studies',
    devices: {
      label: 'Our real kitchen wall display, next to illustrations of a Kobo e-reader showing a recap and a phone receiving a care alert',
      date: 'TUESDAY · SCHOOL DAY 3 · −4°C',
      homeTab: 'Home', planTab: 'Planning',
      tiles: [['Leave for bus', 'in 23 min'], ['Bedtime', 'Alex tonight'], ['Today', 'Gym · Library books due · Pizza lunch', true], ['Chores', '<span class="stars">★★★★☆</span>'], ['Dinner', 'Chili'], ['Hydro peak', '6–10 am: run the dishwasher later', true]],
      book: ['The wind had not stopped for three days, and the harbour was empty when she finally…', 'Nobody in the village remembered the last time the ferry had failed to come.'],
      recapTitle: 'Recap', recap: 'Last read 9 days ago. Chapter 11: Mara finds the ledger and learns who sold the boat.',
      pingTitle: 'Needs help', ping: 'Thirsty · from the tablet, 1 min ago', ack: "I'm on it",
    },
    proof: [['123,287 → 1,342', "EPUBCheck errors after epubkit's repair"], ['25', 'smart-display plugins, one setup wizard'], ['3 screens', 'phone, e-reader and kitchen wall display'], ['EN · FR', 'bilingual apps, built in Quebec']],
    workEyebrow: 'Open source', workTitle: 'Selected projects', workIntro: 'Public code, real users. Each one started as a problem in our own house.',
    viewCode: 'View code ↗',
    terminal: `<span class="dim">$</span> epubkit run ~/Books --recaps
<span class="dim">convert</span>   PDF · MOBI · AZW3 → EPUB
<span class="dim">metadata</span>  373 titles, authors, series
<span class="dim">repair</span>    EPUB 2 package → EPUB 3
<span class="dim">validate</span>  <span class="hi">123,287</span> → <span class="ok">1,342</span> errors
<span class="ok">✓</span> 344 books clean · 0 pages lost`,
    projects: {
      epubkit: {
        body: 'Point it at a folder of downloaded books and get back a library a Kobo opens without complaint: converted, metadata filled in, filenames normalised, structurally repaired, validated with EPUBCheck, and optionally with spoiler-free recaps bound into each book.',
        metric: 'Proven on a real 373-book library. The repair rules were each learned by breaking something first.',
        llm: 'Local LLMs',
      },
      recapmod: {
        artTitle: "Who you've met", art: "Mara, the ferry pilot's daughter<br>Tobias, harbour master<br>Old Fen, who keeps the ledger",
        body: "A Kobo mod that adds a Recap button: when you last read, what happened, and who you've met so far. Never past your current page, fully offline.",
      },
      hs: {
        title: 'Home Screens plugins',
        art: [['Calendar', '#f5c37e'], ['Chore stars', '#f472b6'], ['Grocery list', '#34d399'], ['School day', '#60a5fa'], ['Hydro peaks', '#fbbf24'], ['Next game', '#a78bfa'], ['Pet care', '#fb923c']],
        body: 'Twenty-five plugins for an open-source smart display, plus a wizard that sets them all up for your family in one pass. Releases are built by CI.',
        wizard: 'Try the wizard ↗',
      },
      grimmory: {
        title: 'Grimmory add-ons',
        art: [['The Hobbit', '#f472b6', 'requested'], ['Wings of Fire #6', '#60a5fa', 'series gap'], ['Dune', '#34d399', 'now in library']],
        body: 'A shared Wishlist and a one-click "Set up my Kobo" for a self-hosted library, added without touching the app\'s code or database.',
      },
    },
    wall: {
      eyebrow: 'In daily use', title: 'The kitchen wall',
      intro: 'Real screens from our wall display, running the Home Screens plugins. Names are swapped for placeholders.',
      shots: [
        ['home', 'Wall display home screen with the time, weather, bin schedule, dinners, a week of family events and a hockey score', 'Home: the day at a glance, from bins and dinners to the week ahead.'],
        ['planning', 'Wall display planning screen with a month calendar showing school cycle days, kitchen timers, freezer meals and the weekly menu', 'Planning: school cycle days, timers, freezer stock and the week\'s meals.'],
        ['sam', 'Wall display screen for a child, with a bedtime card, the school day, a morning chore checklist with a star reward bar, and countdowns', 'Kid’s screen: bedtime, the school day and chores that earn stars.'],
      ],
    },
    casesEyebrow: 'Private work', casesTitle: 'Case studies', casesIntro: 'Built for a client, an employer or my own household. Code walkthroughs on request.',
    skillsEyebrow: 'What I bring', skillsTitle: 'Skills',
    skills: [
      ['Mobile', 'React Native and Expo apps that work offline first: local databases, sync, push notifications, store releases on iOS and Android.', ['React Native', 'Expo', 'WatermelonDB', 'Detox']],
      ['Full-stack &amp; web', 'APIs and web apps end to end, from the database schema and auth to the screen, with tests at every layer.', ['TypeScript', 'React', 'Kotlin · Ktor', 'Rails', 'PostgreSQL', 'Firebase']],
      ['Systems &amp; devices', 'The parts most developers skip: embedded firmware, e-reader mods, self-hosting, Docker and CI pipelines.', ['Python', 'C++ · Qt', 'ESP32', 'Docker', 'GitHub Actions']],
    ],
    principles: [['Offline first', 'Apps keep working with no signal and catch up later.'], ['Bilingual by default', 'French and English from the first screen.'], ['Privacy built in', 'Least data, encrypted where it matters, Loi 25 aware.'], ['Tests as the spec', "Behaviour is pinned down before it's built."]],
  },

  cases: [
    {
      slug: 'robins-voice',
      name: "Robin's Voice",
      kind: 'Mobile + API · in beta',
      stackShort: 'Expo · React Native · Rails 8 · PostgreSQL · ActionCable',
      role: 'Product, architecture, API and app',
      statusShort: 'In beta with a family care team',
      summary: 'A communication and care-coordination app for adults with severe non-verbal autism and the many caregivers around them. The person being cared for taps picture buttons or a body map on a tablet; parents, nurses and educators get it in real time on their phones.',
      highlights: [
        'Multi-tenant by household: one caregiver can belong to several care teams, each with its own role and permissions.',
        'Real-time signals over WebSockets with a pending, acknowledged and resolved flow, plus medications, intake limits, vitals and equipment logs.',
        "Bilingual French and English, designed for Quebec's privacy law (Loi 25), with sensitive fields encrypted at rest and CI on both apps.",
      ],
      tagline: "A tablet that speaks for someone who can't, and a phone app that makes sure someone answers.",
      problem: [
        'Adults with severe non-verbal autism often depend on a rotating circle of people: parents, home-care nurses, educators, respite workers. When they are thirsty, in pain or upset, they may have no reliable way to say so.',
        'The people around them have the opposite problem: what one caregiver noticed this morning rarely reaches whoever takes the next shift, and medications, fluid limits and equipment checks live in notebooks and group chats.',
      ],
      features: [
        ['A voice on the tablet', 'A picture-button board with 70+ bilingual presets, personal photos and audio, plus a body map to show where it hurts. Buttons can open sub-choices, like which pizza.'],
        ['Signals someone answers', "Every tap reaches the caregivers' phones in real time, and moves from pending to acknowledged to resolved, so two people don't both run and nobody assumes someone else did."],
        ['The care record', 'Medication schedules and dose logs, fluid intake limits with soft and hard alerts, vitals, mood, and a catalogue of 50+ pieces of medical equipment with service logs.'],
        ['Handoffs that stick', 'Shift notes that must be read and dismissed before the next one is written, and a daily schedule shown on the tablet so the person knows what is coming.'],
      ],
      howIntro: 'One Expo app runs in two modes on two kinds of device: a caregiver phone and a dedicated tablet for the person being cared for. Both talk to a Rails API that scopes every query to a household.',
      diagram: [
        {
          title: 'A need, from tap to answer',
          stages: [
            { name: 'Tablet', tech: 'Expo · cared-person mode', items: ['Picture buttons and body map', 'Paired with a 10-minute code', 'Taps queue offline'] },
            { name: 'Rails 8 API', tech: 'Devise JWT · Pundit · acts_as_tenant', items: ['Every query scoped to a household', 'Signal state machine', 'Audit trail on clinical data'], hot: true },
            { name: 'PostgreSQL', tech: 'Encrypted columns', items: ['Names, conditions, allergies and medication details encrypted at rest'] },
          ],
          links: [{ label: 'HTTPS + device token' }, { label: 'read / write', both: true }],
        },
        {
          title: 'Getting it to the right people',
          stages: [
            { name: 'Rails 8 API', tech: 'ActionCable', items: ['Household channel', 'Push for phones in pockets'], hot: true },
            { name: 'Caregiver phones', tech: 'Expo · caregiver mode', items: ['Dashboard with badges', 'Acknowledge, then resolve', 'Logs, notes and settings by permission'] },
          ],
          links: [{ label: 'WebSocket + push' }],
        },
      ],
      decisions: [
        ['The household is the tenant, not the user', 'A nurse can work with three families. Each membership carries its own role and per-module permissions, plus temporary grants that expire, such as settings access for an hour.'],
        ['The person being cared for is not a user account', 'The tablet signs in as a paired device with its own revocable token. There is no password for them to manage, and a lost tablet can be cut off without touching anyone else.'],
        ['One state machine for every signal', 'Needs and pain events share the same pending, acknowledged and resolved flow, so the dashboard, badges and notifications all behave the same way.'],
        ['Privacy designed in for Loi 25', "Quebec's privacy law shaped the data model from day one: the most sensitive fields are encrypted at rest and changes to clinical records keep an audit trail."],
        ['Taps never get lost', 'The tablet queues signals while offline and sends them when the connection returns, so a dropped Wi-Fi signal never swallows a request for help.'],
      ],
      status: [
        ['Today', 'The family beta and the wider care-circle phase are both complete: the app is in use by a real care team. CI runs the API and mobile test suites on every push.'],
        ['Next', 'Productization: store listings on iOS and Android, a consent flow for families beyond the first, and recognition under Quebec disability programs.'],
      ],
      stack: ['Rails 8', 'PostgreSQL', 'ActionCable', 'Devise + JWT', 'Pundit', 'acts_as_tenant', 'PaperTrail', 'RSpec', 'Expo', 'React Native', 'TypeScript', 'Zustand', 'i18n EN/FR'],
    },
    {
      slug: 'generator-monitor',
      name: 'Standby generator monitor',
      kind: 'Client project · mobile + IoT',
      stackShort: 'Expo · React Native · Firebase · ESP32 firmware (PlatformIO)',
      role: 'App, backend, firmware and hardware design',
      statusShort: 'App and firmware complete, on-site install next',
      summary: "An app for an electrical contractor's customers to watch their whole-house standby generator and start or stop it from anywhere, plus the firmware for the small device wired into the generator.",
      highlights: [
        "ESP32 firmware reads run state and fault signals from the generator controller's harness and talks to Firestore over plain REST.",
        'Commands only count as done when sensors confirm the engine is running, not when a relay clicks.',
        "Runs on Firebase's free tier by replacing cloud functions with a scheduled sweep for alerts, offline detection and push. Security rules are covered by 60+ tests.",
      ],
      tagline: 'Start a standby generator from your phone, and know that it actually started.',
      problem: [
        "An electrical contractor installs whole-house standby generators. The manufacturer's own Wi-Fi feature only works locally, so neither the homeowner nor the contractor can tell from away whether a unit is healthy, or start it ahead of a storm.",
        'The contractor wanted a branded, bilingual app for their customers, a staff view of every generator they look after, and hardware their own electrician could install.',
      ],
      features: [
        ['Customer app', 'Live status, run hours, battery voltage and fault tiles, charts and event history, open alerts, and service requests straight to the contractor.'],
        ['Staff app', 'Every generator grouped by owner, remote start and stop, assigning generators to customers, archiving and an audit log of who did what.'],
        ['Device firmware', 'ESP32 firmware for a small box wired into the generator controller: a Wi-Fi setup portal, its own sign-in identity, run detection and debounced fault inputs.'],
        ['Alerts and install guide', 'Push notifications in French and English for faults, low battery and devices that go silent, plus a parts list and step-by-step install guide for the electrician.'],
      ],
      howIntro: "The device and the apps never talk to each other directly. Everything goes through Firestore, and its security rules decide who may write what: staff, customers, or the device's own identity.",
      diagram: [
        {
          title: 'Status and start / stop',
          stages: [
            { name: 'Generator controller', tech: 'Documented wiring harness', items: ['2-wire run signal', 'Alarm, oil, temperature and frequency faults', 'Battery voltage'] },
            { name: 'ESP32 device', tech: 'PlatformIO · Arduino', items: ['Hold-based run relay', 'Debounced fault inputs', 'Polls for commands'], hot: true },
            { name: 'Firestore', tech: 'Security rules · 60+ tests', items: ['Device state and history', 'Commands', 'Alerts and audit log'] },
            { name: 'Staff &amp; customer apps', tech: 'Expo · React Native', items: ['Live status', 'Start / stop (staff only)', 'History and alerts'] },
          ],
          links: [{ label: 'dry contacts + optocoupler', both: true }, { label: 'REST, own identity', both: true }, { label: 'live listeners', both: true }],
        },
        {
          title: 'Alerts, with no cloud functions',
          stages: [
            { name: 'Firestore', tech: 'Device state', items: ['Heartbeats', 'Pending commands'] },
            { name: 'Background sweep', tech: 'Node · runs every minute', items: ['Silent devices', 'Command timeouts', 'Threshold alerts, de-duplicated'], hot: true },
            { name: "Customer's phone", tech: 'Expo push', items: ["Message in the customer's language"] },
          ],
          links: [{ label: 'Admin SDK' }, { label: 'push API' }],
        },
      ],
      decisions: [
        ['Done means the engine is running', 'A command moves from pending to acknowledged to completed only after run detection confirms the change. If it never does, the sweep times it out and raises an alert instead of showing a false success.'],
        ["Read the manufacturer's manual before buying parts", 'That turned up a documented 2-wire start/stop input and discrete fault outputs on the controller harness. The firmware was redesigned around that hold-based run signal instead of guessing at button presses.'],
        ['Free tier on purpose', 'No Cloud Functions: a small one-shot script run every minute handles offline detection, command timeouts, threshold alerts and push. Alert IDs are deterministic, so re-running it never sends a duplicate.'],
        ['A missing sensor is missing, not zero', 'Every reading except run state is optional. A basic install shows only what it can really measure, and other generator brands fit the same schema without code changes.'],
        ['Test the rules with the queries the app really runs', 'A rule that passed every single-document test failed for the list query a screen used. Rule tests now cover the exact query and batch shapes the app sends.'],
      ],
      status: [
        ['Today', 'App, backend and firmware are complete, and the firmware builds against the real ESP32 toolchain. Wi-Fi setup, sign-in, run detection and the command loop can all be bench-tested before any generator is touched.'],
        ['Next', "On-site install with the contractor's electrician: confirm the fault signals' polarity on the real unit and run the full start, detect, stop, detect loop."],
      ],
      stack: ['Expo', 'React Native', 'TypeScript', 'Zustand', 'Firebase Auth', 'Firestore', 'Security rules tests', 'Expo push', 'ESP32', 'PlatformIO', 'C++', 'i18n FR/EN'],
    },
    {
      slug: 'fieldbook',
      name: 'Fieldbook',
      kind: 'Professional work · mobile',
      stackShort: 'React Native · TypeScript · WatermelonDB · Redux Toolkit',
      roleLabel: 'Note',
      role: 'Name and branding changed',
      statusShort: 'In production on iOS and Android',
      summary: "A production offline-first field app. Crews fill in forms and records with no signal, and everything syncs once they're back online.",
      highlights: [
        'Clean Architecture per feature module, with dependency injection and branded ID types.',
        'Local-first data in WatermelonDB on SQLite, with a sync service that catches up when the device reconnects.',
        'Detox end-to-end tests, Sentry and Datadog monitoring, French and English.',
      ],
      tagline: "A field app for construction crews that keeps working where there's no signal.",
      problem: [
        "On a job site, connectivity comes and goes. Crews still need the latest plans, to-dos and forms, and still take photos and fill in reports in basements and on rooftops.",
        'Every change they make has to reach the office eventually, in the right order, without being lost or applied twice.',
      ],
      builtTitle: 'What the app does',
      features: [
        ['Everything works offline', 'Plans with annotations, to-dos, forms with QR scanning, daily reports, timesheets, work orders and photos, all usable with no connection.'],
        ['Sync per module', 'Each API domain pulls on its own and tracks its own last-pulled time per project, through one shared helper for batching, logging and permissions.'],
        ['Changes as a queue', 'Every offline write is stored as an event and pushed in order. A built-in inspector lets users and support see, retry or clear anything stuck.'],
        ['A codebase that scales', 'Feature modules with strict layers, generators that scaffold a feature, use case, component or screen, and two Jest setups for device and Node tests.'],
      ],
      howIntro: 'Each feature keeps business rules apart from storage and screens. Reads come from the local database, always; the network only ever feeds that database or drains the queue of local changes.',
      diagram: [
        {
          title: 'Inside a feature module',
          stages: [
            { name: 'Screens &amp; hooks', tech: 'presentation', items: ['Reactive queries via RxJS', 'Resolve dependencies'] },
            { name: 'Use cases', tech: 'domain', items: ['Business rules only', 'No framework imports'], hot: true },
            { name: 'Repositories', tech: 'data · tsyringe', items: ['Implement domain interfaces'] },
            { name: 'WatermelonDB', tech: 'SQLite', items: ['The source of truth on the device'] },
          ],
          links: [{ label: 'calls' }, { label: 'interface' }, { label: 'read / write', both: true }],
        },
        {
          title: 'Sync',
          stages: [
            { name: 'Offline event queue', tech: 'local writes', items: ['Ordered intents', 'Retry or heal from the inspector'] },
            { name: 'API', tech: 'REST', items: ['Applies changes', 'Returns active IDs per module'], hot: true },
            { name: 'Pull per module', tech: 'batch write', items: ['Create and update in one batch', 'Delete what the server no longer lists'] },
          ],
          links: [{ label: 'push every 10 s when online' }, { label: 'pull, Wi-Fi-only if set' }],
        },
      ],
      decisions: [
        ['Strict layers, enforced by the linter', 'Each feature has domain, data and presentation layers, and ESLint blocks any import past its public barrel. The rule holds even under deadline pressure.'],
        ['The server lists what exists; the device deletes the rest', 'Each pull returns every active ID, and the client removes local rows that are missing. No tombstones or deletion log needed on the server.'],
        ['Writes are events', 'Offline changes are stored as ordered intents, not as edited rows waiting to be diffed. That makes them visible, retryable and easy to reason about.'],
        ['Dependency injection for fast tests', 'Use cases and repositories are registered with tsyringe, so business rules run in plain Node tests without a device or simulator.'],
        ["Respect the user's data plan", 'A Wi-Fi-only setting is checked before any module syncs, along with connectivity and session guards.'],
      ],
      status: [
        ['Today', 'In production on the App Store and Google Play, released through code review, preprod and QA on deployed builds.'],
        ['About this case study', 'The product name, company, identifiers and endpoints have been changed. An anonymized code sample is available on request.'],
      ],
      stack: ['React Native', 'TypeScript', 'WatermelonDB', 'SQLite', 'Redux Toolkit', 'RxJS', 'tsyringe', 'Jest', 'Detox', 'Maestro', 'Sentry', 'Datadog', 'i18n FR/EN'],
    },
    {
      slug: 'homebase',
      name: 'Homebase',
      kind: 'Full-stack · self-hosted',
      stackShort: 'Kotlin · Ktor · PostgreSQL · React · TypeScript · Tailwind',
      role: 'Product, architecture and an AI-assisted build pipeline',
      statusShort: 'In daily use by our household',
      summary: "Our household's own Todoist-style task app: shared lists on phones, laptops and the kitchen wall display, running on a home server.",
      highlights: [
        'Kotlin and Ktor API over PostgreSQL, with a React and TypeScript web app.',
        'Feeds the wall display through its own plugins for tasks, the meal plan and medication doses, each wall authenticated with its own key.',
        'Built test-first in small steps: every step ships with its test as the spec, and a local AI model implements the screen against it.',
      ],
      tagline: "Our household's own Todoist, built test-first with a local AI model writing the screens.",
      problem: [
        "Our family ran on a commercial to-do app. It couldn't feed our kitchen wall display, didn't know about meals or medications, and kept our lists on someone else's server.",
        'I wanted one place for tasks, shopping, chores, the meal plan and medication doses, shared by the household and shown on the wall, and a way to build it quickly without giving up on quality.',
      ],
      features: [
        ['A full task manager', 'Lists in folders, sections, labels, saved filters, subtasks, repeats, reminders, comments, Today, Upcoming, Inbox, search and live updates.'],
        ['A drop-in for Todoist', 'A Todoist import and a Todoist-compatible API, so our existing lists and habits moved over instead of starting from scratch.'],
        ['Meals and medications', 'A meal library and weekly plan, freezer stock, groceries generated from the plan, and medication doses with history, refills and alerts.'],
        ['On the kitchen wall', 'Plugins for the Home Screens wall display show tasks, meals and medication doses, through a separate wall API.'],
      ],
      howIntro: 'The app itself is a straightforward three-tier system. What is unusual is how the screens get built: each one is a small step whose test is written first, and a local AI model writes the code until that test passes.',
      diagram: [
        {
          title: 'The app',
          stages: [
            { name: 'Phones &amp; laptops', tech: 'React 19 · TypeScript · Tailwind', items: ['Material-style shell', 'Live updates'] },
            { name: 'Ktor API', tech: 'Kotlin · Exposed', items: ['Households, lists, tasks', 'Meals and medications', 'Todoist-compatible API'], hot: true },
            { name: 'PostgreSQL', tech: 'Docker on a home server', items: ['Daily backups, kept 14 days'] },
          ],
          links: [{ label: 'HTTPS', both: true }, { label: 'SQL', both: true }],
        },
        {
          title: 'How each screen gets built',
          stages: [
            { name: 'Step + test', tech: 'the spec', items: ['Proven against a throwaway implementation first'] },
            { name: 'Local model', tech: 'Aider + qwen3-coder', items: ['Writes the screen', 'Cannot edit the test'], hot: true },
            { name: 'check.sh', tech: 'types + full test suite', items: ['Pass or fail, nothing in between'] },
            { name: 'Review', tech: 'me', items: ['Look at it, mark it done'] },
          ],
          links: [{ label: 'step.sh' }, { label: 'runs' }, { label: 'passes' }],
        },
      ],
      decisions: [
        ['The test is the spec', 'Every step ships with its test, proven against a working implementation before it is handed over. The model may never edit the test, so a passing step means the screen really does what was asked.'],
        ['Mistakes become rules', 'Each new kind of mistake the model makes becomes one line in the conventions file, so it does not make it again.'],
        ['Compatible on day one', 'Speaking the Todoist API meant imports, scripts and habits carried over, instead of asking the family to start from scratch.'],
        ['Walls get their own keys', 'Each wall display authenticates with its own key against a separate wall API, not with a family member\'s login.'],
        ['Boring to run', 'One Docker Compose file on a home server, a health check, and daily backups kept for two weeks, with restore steps written down.'],
      ],
      status: [
        ['Today', 'In daily use by our household on phones, laptops and the wall. The server has 66 tests across 14 files.'],
        ['Next', 'More wall plugins and the remaining screens, one tested step at a time.'],
      ],
      stack: ['Kotlin', 'Ktor 3', 'Exposed', 'PostgreSQL', 'React 19', 'TypeScript', 'Tailwind 4', 'Vite', 'Vitest', 'Docker', 'Aider', 'Local LLM'],
    },
  ],
};
