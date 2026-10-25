// Builds the portfolio pages (English at /, French at /fr/) from the content files.
// Run from the repo root: node _src/build.mjs. Jekyll skips _src/, so only the output is published.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import en from './content/en.mjs';
import fr from './content/fr.mjs';
import { site } from './content/site.mjs';

const ORIGIN = 'https://tweetyboopdev2022-code.github.io';
const LANGS = { en: { c: en, base: '/' }, fr: { c: fr, base: '/fr/' } };
const SLUGS = en.cases.map((k) => k.slug);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Content strings may carry light inline HTML (<em>, <b>, &nbsp;), so they are written as-is.
const html = (strings, ...vals) => strings.reduce((out, s, i) => out + s + (i < vals.length ? [].concat(vals[i] ?? '').join('') : ''), '');
const homeOf = (lang) => LANGS[lang].base;
const caseUrl = (lang, slug) => `${homeOf(lang)}work/${slug}/`;
const other = (lang) => (lang === 'en' ? 'fr' : 'en');

function head({ lang, title, description, path, altPath }) {
  const c = LANGS[lang].c;
  return html`<!doctype html>
<html lang="${c.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${ORIGIN}${path}">
<link rel="alternate" hreflang="${c.htmlLang}" href="${ORIGIN}${path}">
<link rel="alternate" hreflang="${LANGS[other(lang)].c.htmlLang}" href="${ORIGIN}${altPath}">
<link rel="alternate" hreflang="x-default" href="${ORIGIN}${lang === 'en' ? path : altPath}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="tweetyboopdev">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${ORIGIN}${path}">
<meta property="og:image" content="${ORIGIN}/assets/og-${lang}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${c.ogLocale}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#121a17">
<link rel="icon" href="/assets/icon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/icon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Source+Sans+3:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
`;
}

function nav(lang, altPath, onHome) {
  const c = LANGS[lang].c;
  const h = onHome ? '' : homeOf(lang);
  return html`
<header class="nav">
  <div class="wrap">
    <a class="brand" href="${onHome ? '#top' : homeOf(lang)}"><i aria-hidden="true"></i>tweetyboopdev</a>
    <ul>
      <li><a href="${h}#work">${c.nav.work}</a></li>
      <li><a href="${h}#cases">${c.nav.cases}</a></li>
      <li><a href="${h}#skills">${c.nav.skills}</a></li>
      ${site.resume ? html`<li><a href="${site.resume[lang] ?? site.resume.en}">${c.nav.resume}</a></li>` : ''}
      <li><a href="https://github.com/tweetyboopdev2022-code">GitHub ↗</a></li>
      <li><a class="lang" href="${altPath}" hreflang="${LANGS[other(lang)].c.htmlLang}" lang="${LANGS[other(lang)].c.htmlLang}" aria-label="${c.nav.switchLabel}">${c.nav.switchTo}</a></li>
    </ul>
  </div>
</header>
`;
}

function contactBand(lang) {
  const c = LANGS[lang].c;
  const mail = site.email ? html`<a class="btn primary" href="mailto:${site.email}">${c.contact.email}</a>` : '';
  const gh = html`<a class="btn ${site.email ? 'ghost' : 'primary'}" href="https://github.com/tweetyboopdev2022-code">${site.email ? 'GitHub ↗' : c.contact.github}</a>`;
  const cv = site.resume ? html`<a class="btn ghost" href="${site.resume[lang] ?? site.resume.en}">${c.contact.resume}</a>` : '';
  return html`
<section class="contact" aria-labelledby="contact-h">
  <div class="wrap">
    <div>
      <h2 id="contact-h">${c.contact.title}</h2>
      <p>${c.contact.body}</p>
    </div>
    <div class="actions">${mail}${gh}${cv}</div>
  </div>
</section>
<footer>
  <div class="wrap">
    <span>© 2026 tweetyboopdev</span>
    <span><a href="/wallhub/">WallHub</a> · <a href="/wallhub/privacy.html">${c.footer.privacy}</a> · <a href="/wallhub/terms.html">${c.footer.terms}</a></span>
  </div>
</footer>
</body>
</html>
`;
}

const tags = (list) => html`<div class="tags">${list.map((t) => html`<span>${t}</span>`)}</div>`;

function home(lang) {
  const c = LANGS[lang].c;
  const h = c.home;
  const path = homeOf(lang);
  const altPath = homeOf(other(lang));
  const avail = site.availability?.[lang];
  return head({ lang, title: h.title, description: h.description, path, altPath })
    + nav(lang, altPath, true)
    + html`
<main id="top">
  <section class="hero" aria-labelledby="hero-h">
    <div class="wrap">
      <div>
        <span class="eyebrow">${h.eyebrow}</span>
        <h1 id="hero-h">${h.headline}</h1>
        <p class="lede">${h.lede}</p>
        ${avail ? html`<p class="avail">${avail}</p>` : ''}
        <div class="cta">
          <a class="btn primary" href="#work">${h.ctaWork}</a>
          <a class="btn ghost" href="#cases">${h.ctaCases}</a>
        </div>
      </div>

      <div class="devices" aria-label="${esc(h.devices.label)}" role="img">
        <div class="dev wall">
          <div class="screen">
            <div class="time">7:42<small>${h.devices.date}</small></div>
            <div class="tabs"><b style="background:#f5c37e">${h.devices.homeTab}</b><b style="background:#fbbf24">Jordan</b><b style="background:#34d399">Alex</b><b style="background:#f472b6">Sam</b><b style="background:#60a5fa">${h.devices.planTab}</b></div>
            <div class="tiles">
              ${h.devices.tiles.map(([k, v, wide]) => html`<div class="tile${wide ? ' wide' : ''}"><b>${k}</b>${v}</div>`)}
            </div>
          </div>
        </div>
        <div class="dev kobo">
          <div class="screen">
            ${h.devices.book.map((p) => html`<p>${p}</p>`)}
            <div class="recap"><h4>${h.devices.recapTitle}</h4><span>${h.devices.recap}</span></div>
          </div>
        </div>
        <div class="dev phone">
          <div class="screen">
            <div class="ping"><b>${h.devices.pingTitle}</b>${h.devices.ping}</div>
            <span class="ack">${h.devices.ack}</span>
            <div class="row"></div><div class="row s"></div><div class="row"></div><div class="row s"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="proof">
    <div class="wrap">
      ${h.proof.map(([k, v]) => html`<div><strong>${k}</strong><span>${v}</span></div>`)}
    </div>
  </div>

  <section class="block wrap" id="work" aria-labelledby="work-h">
    <div class="head">
      <div><span class="eyebrow">${h.workEyebrow}</span><h2 id="work-h">${h.workTitle}</h2></div>
      <p>${h.workIntro}</p>
    </div>

    <div class="projects">
      <article class="proj feature">
        <div class="art epub" aria-hidden="true">
          <div class="term">
            <div class="bar"><i></i><i></i><i></i></div>
<pre>${h.terminal}</pre>
          </div>
        </div>
        <div class="body">
          <span class="eyebrow">Python · CLI</span>
          <h3>epubkit</h3>
          <p>${h.projects.epubkit.body}</p>
          <p class="metric">${h.projects.epubkit.metric}</p>
          ${tags(['Python', 'lxml', 'EPUBCheck', 'PyMuPDF', h.projects.epubkit.llm])}
          <div class="links"><a href="https://github.com/tweetyboopdev2022-code/epubkit">${h.viewCode}</a></div>
        </div>
      </article>

      <article class="proj">
        <div class="art recap" aria-hidden="true"><div class="page"><b>${h.projects.recapmod.artTitle}</b>${h.projects.recapmod.art}</div></div>
        <div class="body">
          <h3>RecapMod</h3>
          <p>${h.projects.recapmod.body}</p>
          ${tags(['C++', 'Qt', 'NickelHook'])}
          <div class="links"><a href="https://github.com/tweetyboopdev2022-code/RecapMod">${h.viewCode}</a></div>
        </div>
      </article>

      <article class="proj">
        <div class="art hs" aria-hidden="true">${h.projects.hs.art.map(([t, col]) => html`<b style="background:${col}">${t}</b>`)}</div>
        <div class="body">
          <h3>${h.projects.hs.title}</h3>
          <p>${h.projects.hs.body}</p>
          ${tags(['React', 'TypeScript', 'Vite', 'Vitest'])}
          <div class="links"><a href="https://github.com/tweetyboopdev2022-code/home-screens-plugins">${h.viewCode}</a><a href="https://tweetyboopdev2022-code.github.io/home-screens-plugins/">${h.projects.hs.wizard}</a></div>
        </div>
      </article>

      <article class="proj">
        <div class="art grim" aria-hidden="true">
          ${h.projects.grimmory.art.map(([t, col, s]) => html`<div class="book"><i style="background:${col}"></i>${t}<em>${s}</em></div>`)}
        </div>
        <div class="body">
          <h3>${h.projects.grimmory.title}</h3>
          <p>${h.projects.grimmory.body}</p>
          ${tags(['Python', 'SQLite', 'Web Push', 'nginx'])}
          <div class="links"><a href="https://github.com/tweetyboopdev2022-code/grimmory-addons">${h.viewCode}</a></div>
        </div>
      </article>
    </div>
  </section>

  <section class="block wrap" id="cases" aria-labelledby="cases-h">
    <div class="head">
      <div><span class="eyebrow">${h.casesEyebrow}</span><h2 id="cases-h">${h.casesTitle}</h2></div>
      <p class="private">${h.casesIntro}</p>
    </div>

    <div class="cases">
      ${c.cases.map((k) => html`
      <article class="case" id="${k.slug}">
        <aside>
          <span class="kind">${k.kind}</span>
          <h3>${k.name}</h3>
          <dl><div><dt>${c.labels.stack}</dt><dd>${k.stackShort}</dd></div><div><dt>${k.roleLabel ?? c.labels.role}</dt><dd>${k.role}</dd></div></dl>
        </aside>
        <div class="story">
          <p>${k.summary}</p>
          <ul>${k.highlights.map((x) => html`<li>${x}</li>`)}</ul>
          <a class="more" href="${caseUrl(lang, k.slug)}">${c.labels.readCase} →</a>
        </div>
      </article>`)}
    </div>
  </section>

  <section class="block wrap" id="skills" aria-labelledby="skills-h">
    <div class="head">
      <div><span class="eyebrow">${h.skillsEyebrow}</span><h2 id="skills-h">${h.skillsTitle}</h2></div>
    </div>
    <div class="skills">
      ${h.skills.map(([t, p, list]) => html`<div class="skill"><h3>${t}</h3><p>${p}</p>${tags(list)}</div>`)}
    </div>
    <div class="principles">
      ${h.principles.map(([t, p]) => html`<div><b>${t}</b><span>${p}</span></div>`)}
    </div>
  </section>
</main>
` + contactBand(lang);
}

function lane(row) {
  return html`
      <div class="flow">
        ${row.title ? html`<h3>${row.title}</h3>` : ''}
        <div class="lane">
          ${row.stages.map((s, i) => html`${i ? html`<div class="link${row.links[i - 1].both ? ' both' : ''}">${row.links[i - 1].label}</div>` : ''}<div class="stage${s.hot ? ' hot' : ''}"><b>${s.name}</b><small>${s.tech}</small><ul>${s.items.map((x) => html`<li>${x}</li>`)}</ul></div>`)}
        </div>
      </div>`;
}

function casePage(lang, k, i) {
  const c = LANGS[lang].c;
  const path = caseUrl(lang, k.slug);
  const altPath = caseUrl(other(lang), k.slug);
  const prev = c.cases[(i - 1 + c.cases.length) % c.cases.length];
  const next = c.cases[(i + 1) % c.cases.length];
  return head({ lang, title: `${k.name} · ${c.labels.caseStudy} · tweetyboopdev`, description: k.tagline, path, altPath })
    + nav(lang, altPath, false)
    + html`
<main>
  <section class="cs-hero" aria-labelledby="cs-h">
    <div class="wrap">
      <a class="crumb" href="${homeOf(lang)}#cases">← ${c.labels.allCases}</a>
      <div><span class="kind">${k.kind}</span></div>
      <h1 id="cs-h">${k.name}</h1>
      <p class="lede">${k.tagline}</p>
      <dl class="facts">
        <div><dt>${k.roleLabel ?? c.labels.role}</dt><dd>${k.role}</dd></div>
        <div><dt>${c.labels.stack}</dt><dd>${k.stackShort}</dd></div>
        <div><dt>${c.labels.status}</dt><dd>${k.statusShort}</dd></div>
      </dl>
    </div>
  </section>

  <div class="wrap">
    <section class="cs" aria-labelledby="p-h">
      <span class="eyebrow">01</span>
      <h2 id="p-h">${c.labels.problem}</h2>
      <div class="prose">${k.problem.map((p) => html`<p>${p}</p>`)}</div>
    </section>

    <section class="cs" aria-labelledby="b-h">
      <span class="eyebrow">02</span>
      <h2 id="b-h">${k.builtTitle ?? c.labels.built}</h2>
      <div class="features">${k.features.map(([t, d]) => html`<div><b>${t}</b><span>${d}</span></div>`)}</div>
    </section>

    <section class="cs" aria-labelledby="h-h">
      <span class="eyebrow">03</span>
      <h2 id="h-h">${c.labels.how}</h2>
      <div class="prose"><p>${k.howIntro}</p></div>
      <figure class="diagram" style="margin:0" aria-label="${esc(c.labels.diagram)}">${k.diagram.map(lane)}
      </figure>
    </section>

    <section class="cs" aria-labelledby="d-h">
      <span class="eyebrow">04</span>
      <h2 id="d-h">${c.labels.decisions}</h2>
      <ol class="decisions">${k.decisions.map(([t, d]) => html`<li><b>${t}</b><span>${d}</span></li>`)}</ol>
    </section>

    <section class="cs" aria-labelledby="s-h">
      <span class="eyebrow">05</span>
      <h2 id="s-h">${c.labels.where}</h2>
      <div class="status">${k.status.map(([t, d]) => html`<div><h3>${t}</h3><p>${d}</p></div>`)}</div>
      <div style="margin-top:22px">${tags(k.stack)}</div>
    </section>

    <nav class="pager" aria-label="${esc(c.labels.more)}">
      <a href="${caseUrl(lang, prev.slug)}"><span>← ${c.labels.prev}</span><b>${prev.name}</b></a>
      <a href="${caseUrl(lang, next.slug)}"><span>${c.labels.next} →</span><b>${next.name}</b></a>
    </nav>
  </div>
</main>
` + contactBand(lang);
}

function out(path, text) {
  const file = '.' + path + (path.endsWith('/') ? 'index.html' : '');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, text);
  console.log('wrote', file);
}

for (const lang of Object.keys(LANGS)) {
  const c = LANGS[lang].c;
  if (c.cases.map((k) => k.slug).join() !== SLUGS.join()) throw new Error(`${lang}: case studies must match English order`);
  out(homeOf(lang), home(lang));
  c.cases.forEach((k, i) => out(caseUrl(lang, k.slug), casePage(lang, k, i)));
}
